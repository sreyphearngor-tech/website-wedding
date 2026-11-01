create table if not exists public.invitees (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null check (char_length(btrim(guest_name)) between 1 and 120),
  invite_code text not null unique
    check (invite_code ~ '^[A-Za-z0-9_-]{32,128}$'),
  created_at timestamptz not null default now()
);

create table if not exists public.rsvps (
  invitee_id uuid primary key references public.invitees(id) on delete cascade,
  attending boolean not null,
  party_size integer not null check (
    (attending and party_size between 1 and 20) or
    (not attending and party_size = 0)
  ),
  phone text check (phone is null or char_length(phone) <= 40),
  message text check (message is null or char_length(message) <= 500),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.invitees enable row level security;
alter table public.rsvps enable row level security;

revoke all on table public.invitees, public.rsvps from anon, authenticated;
grant all on table public.invitees, public.rsvps to service_role;

-- Run once per guest; copy the returned invite_code into their personal URL:
-- https://your-domain.example/?guest=<invite_code>
-- Replace the example name before running.
-- insert into public.invitees (guest_name, invite_code)
-- values ('Guest Name', replace(gen_random_uuid()::text, '-', ''))
-- returning guest_name, invite_code;
