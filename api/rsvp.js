const JSON_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8"
};
const INVITATION_CODE_PATTERN = /^[A-Za-z0-9_-]{32,128}$/;

function respond(res, status, body) {
  res.writeHead(status, JSON_HEADERS);
  res.end(JSON.stringify(body));
}

function readBody(body) {
  if (typeof body === "string") return JSON.parse(body);
  return body;
}

function validOptionalText(value, maxLength) {
  return value === undefined || value === null ||
    (typeof value === "string" && value.length <= maxLength);
}

async function supabaseRequest(path, options = {}) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase environment variables are not configured.");

  return fetch(`${url.replace(/\/+$/, "")}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...options.headers
    }
  });
}

async function findInvitee(code) {
  const query = new URLSearchParams({
    select: "id,guest_name",
    invite_code: `eq.${code}`
  });
  const response = await supabaseRequest(`invitees?${query}`);
  if (!response.ok) throw new Error(`Supabase invitee lookup failed (${response.status}).`);
  const rows = await response.json();
  if (!Array.isArray(rows)) throw new Error("Supabase returned an invalid invitee response.");
  return rows[0] || null;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return respond(res, 405, { error: "Method not allowed." });
  }

  try {
    const requestUrl = new URL(req.url, "http://localhost");
    if (req.method === "GET") {
      const code = requestUrl.searchParams.get("code") || "";
      if (!INVITATION_CODE_PATTERN.test(code)) {
        return respond(res, 400, { error: "A valid invitation code is required." });
      }

      const invitee = await findInvitee(code);
      if (!invitee) return respond(res, 404, { error: "Invitation not found." });
      return respond(res, 200, { guestName: invitee.guest_name });
    }

    let body;
    try {
      body = readBody(req.body);
    } catch {
      return respond(res, 400, { error: "Request body must be valid JSON." });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return respond(res, 400, { error: "Request body must be a JSON object." });
    }
    const { code, attending, partySize, phone, message } = body;
    if (typeof code !== "string" || !INVITATION_CODE_PATTERN.test(code) ||
        typeof attending !== "boolean" ||
        !Number.isInteger(partySize) ||
        !validOptionalText(phone, 40) ||
        !validOptionalText(message, 500)) {
      return respond(res, 400, { error: "RSVP details are invalid." });
    }
    if ((attending && (partySize < 1 || partySize > 20)) ||
        (!attending && partySize !== 0)) {
      return respond(res, 400, { error: "Guest count is invalid." });
    }

    const invitee = await findInvitee(code);
    if (!invitee) return respond(res, 404, { error: "Invitation not found." });

    const query = new URLSearchParams({ on_conflict: "invitee_id" });
    const response = await supabaseRequest(`rsvps?${query}`, {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({
        invitee_id: invitee.id,
        attending,
        party_size: partySize,
        phone: typeof phone === "string" && phone.trim() ? phone.trim() : null,
        message: typeof message === "string" && message.trim() ? message.trim() : null,
        updated_at: new Date().toISOString()
      })
    });
    if (!response.ok) throw new Error(`Supabase RSVP save failed (${response.status}).`);
    return respond(res, 200, { saved: true });
  } catch (error) {
    console.error("RSVP API error:", error);
    return respond(res, 503, { error: "RSVP service is unavailable." });
  }
};
