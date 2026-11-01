/* ====== EDIT ME: every [ ] is a placeholder ====== */
const W={
  /* sample values read from your screenshot: confirm or replace */
  groom:{km:"មៀន សុផាលីន",en:"Moeun Sophalin",short:"សុផាលីន"},
  bride:{km:"សុន សោភណ្ឌ៌",en:"Sonr Sophorn",short:"សោភណ្ឌ៌"},
  date:["អាទិត្យ","22","វិច្ឆិកា","២០២៦"],
  lunar:"ថ្ងៃអាទិត្យ ៦កើត ខែកត្តិក ឆ្នាំមមី អដ្ឋស័ក ព.ស. ២៥៧០",
  venue:{km:"គេហដ្ឋានខាងស្រី ភូមិគាងថាវង្សក្រោម ឃំុត្រពាំងសាលាខាងលិច ខេត្តកំពត",en:"[Venue in English]"},
  time:{km:"៤:០០ ល្ងាច",en:"4:00 pm"},
};
const T={
 km:{et:"សិរីសួស្តីអាពាហ៍ពិពាហ៍",tap:"ចុចលើត្រា ដើម្បីបើកធៀប",inv:"សូមគោរពអញ្ជើញ",d0:"ថ្ងៃ",d1:"ទី",d2:"ខែ",d3:"ឆ្នាំ",sc:"ទាញចុះ"},
 en:{et:"សិរីសួស្តីអាពាហ៍ពិពាហ៍",tap:"Tap the seal to open",inv:"Request the pleasure of your company",d0:"Day",d1:"Date",d2:"Month",d3:"Year",sc:"Scroll"}
};
Object.assign(T.km,{ih:"មានកិត្តិយសសូមគោរពអញ្ជើញ",
 ip:"ឯកឧត្តម អ្នកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-ស្រី របស់យើងខ្ញុំ",
 gl:"កូនប្រុសនាម",bl:"កូនស្រីនាម",gn:"សុន សោភណ្ឌ៌",bn:"មៀន សុផាលីន",
 idt:"ពិសាភោជនាហារប្រព្រឹត្តទៅ "+W.lunar+" ត្រូវនឹងថ្ងៃ ទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦ វេលាម៉ោង "+W.time.km+" ស្ថិតនៅ"+W.venue.km+" ដោយមេត្រីភាព។"});
Object.assign(T.en,{ih:"With great honour, we invite you",
 ip:"Distinguished guests and dear friends, please join us as honoured guests to share in the blessings of our children’s wedding.",
 gl:"The groom",bl:"The bride",gn:"Moeun Sophalin",bn:"Sonr Sophorn",
 idt:"The reception takes place on Sunday, 15 November 2026 at "+W.time.en+", at "+W.venue.en+"."});
Object.assign(T.km,{ch:"កូនកំលោះ និង កូនក្រមុំ",gl2:"កូនកំលោះ",bl2:"កូនក្រមុំ",gk:"សុន សោភណ្ឌ៌",bk:"មៀន សុផាលីន",ge:W.groom.en,be:W.bride.en});
Object.assign(T.en,{ch:"The Groom & The Bride",gl2:"The groom",bl2:"The bride",gk:"Sonr Sophorn",bk:"Moeurn Sophalin",ge:W.groom.en,be:W.bride.en});
Object.assign(T.km,{cdh:"រាប់ថយក្រោយ ឆ្ពោះទៅថ្ងៃមង្គល",u0:"ថ្ងៃ",u1:"ម៉ោង",u2:"នាទី",u3:"វិនាទី",mq:"សិរីសួស្តី ជ័យមង្គល ពរជ័យ សុខសន្តិភាព"});
Object.assign(T.en,{cdh:"Counting down to our wedding day",u0:"Days",u1:"Hours",u2:"Minutes",u3:"Seconds",mq:"សិរីសួស្តី ជ័យមង្គល ពរជ័យ សុខសន្តិភាព"});
Object.assign(T.km,{pgh:"កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍"});Object.assign(T.en,{pgh:"Wedding Programme"});
/* programme read from your screenshot: VERIFY every line. r = [time, ritual, icon] */
W.prog=[
 {d:"កម្មវិធីទី១ ថ្ងៃសៅរ៍ ទី22 ខែវិច្ឆិកា ឆ្នាំ២០២៦",r:[
  ["ម៉ោង ០៣:០០ រសៀល","ពិធីសែនក្រុងពាលី","flame","Traditional blessing ceremony"],
  ["ម៉ោង ០៤:០០ រសៀល","ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត","lotus","Monks' blessing"],
  ["ម៉ោង ០៥:០០ ល្ងាច","ពិធីជុំពេលា និងដាវខាន់ស្លា","knot","Wedding ritual and ceremonial offerings"],
  ["ម៉ោង ០៦:៣០ ល្ងាច","អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច","bowl","Dinner reception"]]},
 {d:"កម្មវិធីទី២ ថ្ងៃអាទិត្យ ទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦",r:[
  ["ម៉ោង ០៦:៣០ ព្រឹក","ជួបជុំភ្ញៀវកិត្តិយសដើម្បីរៀបចំហែជំនូន","sun","Guests gather for the gift procession"],
  ["ម៉ោង ០៧:០០ ព្រឹក","ពិធីហែជំនូនកំណត់ចូលរោងជ័យ","gift","Gift procession into the wedding hall"],
  ["ម៉ោង ០៧:៣០ ព្រឹក","ពិធីថៅមហានិយាយជើងការ សែនព្រេន រៀបរាប់ផ្លែឈើនិងពិសាភោជនាហារពេលព្រឹក","bowl","Matchmaker ceremony, offerings and breakfast"],
  ["ម៉ោង ០៨:០០ ព្រឹក","ពិធីបំពាក់ចិញ្ចៀន","ring","Ring ceremony"],
  ["ម៉ោង ០៩:០០ ព្រឹក","ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស-កូនស្រី","scissors","Hair-cutting ceremony for the couple"],
  ["ម៉ោង ១១:០០ ព្រឹក","ពិធីសំពះផ្ទឹមចងដៃ បង្វិលពពិល និងព្រះថោងតោងស្បៃ","knot","Sampeah Phtem, hand-tying and wedding rituals"],
  ["ម៉ោង ១២:០០ ថ្ងៃត្រង់","អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់ បញ្ចប់កិច្ចអាពាហ៍ពិពាហ៍","bowl","Lunch for guests"],
  ["ម៉ោង ០៤:០០ ល្ងាច","អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ នៅគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព ។ សូមអរគុណ !","bowl","Dinner reception at the bride's family home"]]}];
Object.assign(T.km,{mmk:"Photo Memory",mm1:"ពីពេលព្រឹក ដល់ពេលល្ងាច",mmh:"ដំណើររឿងនៃស្នេហ៍",mms:"រំកិលដើម្បីទស្សនា"});
Object.assign(T.en,{mmk:"Photo Memory",mm1:"From morning to evening",mmh:"Our love story",mms:"Scroll to explore"});
/* 10 slots. Add s:"assets/xx.jpg" and c:"caption" per photo; empty slots show a placeholder */
W.mem=[{s:"assets/couple1.jpg",c:"ប្រាសាទអង្គរវត្ត"},{s:"assets/couple1.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"},{s:"assets/couple.jpg"}];
let lang="km",idle,personalizedGuestName="";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

/* name logo (HTML text over SVG; Khmer is never inside SVG) */
const logo=()=>`<div class="lg"><div class="lgi">
 <span class="n n1 foil">${W.groom.short}</span>
 <svg viewBox="0 0 200 95"><path class="fl" d="M52 30C86 10 94 44 100 48C108 52 118 80 150 66" fill="none" stroke="url(#gf)" stroke-width="1.6" stroke-linecap="round"/>
 <g class="ht"><use href="#heart" x="90" y="38" width="20" height="20"/></g>
 <g class="bf"><use href="#bfly" x="150" y="14" width="26" height="21"/></g></svg>
 <span class="n n2 foil">${W.bride.short}</span></div></div>`;
$$("[data-logo]").forEach(e=>e.innerHTML=logo());

/* scalloped flap (front + lining) */
function flapPath(s=1,ox=0){
  const L=[],tip=[50,60],a=[100,7];let d=`M0 0H100V7`;
  const seg=(p,q,n)=>{for(let i=1;i<=n;i++){const x=p[0]+(q[0]-p[0])*i/n,y=p[1]+(q[1]-p[1])*i/n,px=p[0]+(q[0]-p[0])*(i-.5)/n,py=p[1]+(q[1]-p[1])*(i-.5)/n;
    const nx=(q[1]-p[1]),ny=-(q[0]-p[0]),l=Math.hypot(nx,ny),k=2.4/l;d+=`Q${(px+nx*k).toFixed(1)} ${(py+ny*k).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`}};
  seg(a,tip,7);seg(tip,[0,7],7);return d+"Z";
}
const fp=flapPath();
$("#ff").innerHTML=`<defs><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9cdae"/><stop offset="1" stop-color="#c3b590"/></linearGradient></defs>
 <path d="${fp}" fill="url(#fg)"/><path d="${fp}" filter="url(#nz)" opacity=".35"/>
 <path d="${fp}" fill="none" stroke="#c9a24a" stroke-width="1.4" vector-effect="non-scaling-stroke" transform="translate(5 1.6) scale(.9 .9)"/>`;
$("#fb").innerHTML=`<path d="${fp}" fill="#f1e9d4"/><path d="${fp}" filter="url(#nz)" opacity=".3"/>`;

/* language */
function setLang(l){lang=l;document.documentElement.lang=l;
  $$("[data-i]").forEach(e=>{const v=T[l][e.dataset.i];if(v!==undefined)e.textContent=v});
  W.date.forEach((v,i)=>$("#d"+i).textContent=v);
  $("#en").textContent=W.groom.en+" & "+W.bride.en;
  $("#lu").textContent=(l=="km"?"":"Lunar date: ")+W.lunar;
  $("#vn").textContent=W.venue[l];$("#lang").innerHTML=l=="km"?"<b>ខ្មែរ</b> / EN":"ខ្មែរ / <b>EN</b>";
   $("#closing-names").textContent=W.groom[l]+" & "+W.bride[l];
   const galleryAll=$("#gallery-all");
  if(galleryAll)galleryAll.textContent=(l=="km"?"មើលរូបភាពទាំងអស់":"View all photos")+` (${W.gal?.length||0})`;
  if(personalizedGuestName)$("#guest-greeting").textContent=l=="km"?`សូមគោរពអញ្ជើញ ${personalizedGuestName}`:`You are warmly invited, ${personalizedGuestName}`;}
setLang("km");
$("#lang").onclick=()=>setLang(lang=="km"?"en":"km");
const musicButton=$("#mu"),musicPanel=$("#music-panel"),musicFrame=$("#music-frame");
musicButton.onclick=()=>{
  const opening=musicPanel.hidden;
  musicPanel.hidden=!opening;
  musicButton.setAttribute("aria-expanded",String(opening));
  musicButton.setAttribute("aria-label",opening?"Close music player":"Open music player");
  musicFrame.src=opening?"https://www.youtube-nocookie.com/embed/7txNLY2XLAs?autoplay=1&playsinline=1&rel=0":"about:blank";
};

/* idle float + tilt */
function startIdle(){idle=gsap.to("#wrap",{y:-7,duration:2.4,repeat:-1,yoyo:true,ease:"sine.inOut"});}
startIdle();
addEventListener("pointermove",e=>{if(opened)return;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  gsap.to("#wrap",{rotationY:x*8,rotationX:-y*6,duration:.8,ease:"power2.out",overwrite:"auto"})});

/* cover intro */
function revealNames(box,delay=0){
  const n=box.querySelectorAll(".n"),fl=box.querySelector(".fl"),len=fl.getTotalLength();
  gsap.set(fl,{strokeDasharray:len,strokeDashoffset:len});
  gsap.set(box.querySelector(".ht"),{scale:0});gsap.set(box.querySelector(".bf"),{x:-60,y:30,opacity:0,rotation:-25});
  const t=gsap.timeline({delay});
  n.forEach((el,i)=>t.fromTo(el,{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:"inset(-40% -10% -40% -10%)",duration:1.1,ease:"power3.out",onComplete:()=>el.style.clipPath="none"},i*.5));
  t.to(fl,{strokeDashoffset:0,duration:1.2,ease:"power2.inOut"},.3)
   .to(box.querySelector(".ht"),{scale:1,duration:.6,ease:"back.out(3)"},1.1)
   .to(box.querySelector(".bf"),{x:0,y:0,opacity:1,rotation:0,duration:1.1,ease:"power2.out"},1.2);
  return t;
}
function coverIn(){
  $("#cover").style.visibility="visible";$("#scroll").style.visibility="visible";$("#bar").style.display="flex";
  gsap.set(".cv .a",{opacity:0,y:14});gsap.set(".cn",{opacity:0,scale:.9});
  const t=gsap.timeline();
  t.to(".cn",{opacity:.9,scale:1,duration:1.4,stagger:.12,ease:"power2.out"})
   .to(".cv .cr",{opacity:1,y:0,duration:.8},.2)
   .to(".cv h2",{opacity:1,y:0,duration:.3},.5)
   .fromTo(".cv h2",{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:"inset(-40% -10% -40% -10%)",duration:1.5,ease:"power3.out",onComplete:()=>{$(".cv h2").style.clipPath="none"}},.5)
   .to(".cv .sub",{opacity:1,y:0,letterSpacing:".05em",duration:1.4,ease:"power2.out"},1.3);
  revealNames($(".lgb"),.7);
  t.to(".cv .en,.cv .inv,.cv .dt,.cv .lu,.cv .vn,.cv .sc",{opacity:1,y:0,duration:.9,stagger:.18,ease:"power2.out"},1.8)
   .from(".dt div",{opacity:0,y:18,duration:.7,stagger:.14,ease:"back.out(1.6)"},2.5);
  gsap.fromTo("#ph",{scale:1.15},{scale:1,duration:9,ease:"power2.out"});
  startEmbers();
}

/* floating embers: light, sized by ResizeObserver, paused when hidden */
function startEmbers(){
  if(startEmbers.on)return;
  if(matchMedia("(prefers-reduced-motion:reduce)").matches||(navigator.hardwareConcurrency||4)<4)return;
  startEmbers.on=1;
  const c=$("#em"),x=c.getContext("2d"),P=[];let w=0,h=0;
  new ResizeObserver(()=>{const r=c.parentNode.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);w=r.width;h=r.height;c.width=w*d;c.height=h*d;x.setTransform(d,0,0,d,0,0)}).observe(c.parentNode);
  for(let i=0;i<28;i++)P.push({x:Math.random(),y:Math.random(),r:1+Math.random()*2.5,s:.02+Math.random()*.05,p:Math.random()*6,k:.3+Math.random()*.5});
  (function tick(t){requestAnimationFrame(tick);if(document.hidden||!w)return;
    x.clearRect(0,0,w,h);
    for(const q of P){q.y-=q.s/60;q.x+=Math.sin(t/2000+q.p)*.0002;if(q.y<-.05){q.y=1.05;q.x=Math.random()}
      const a=q.k*(.6+.4*Math.sin(t/300+q.p)),px=q.x*w,py=q.y*h,g=x.createRadialGradient(px,py,0,px,py,q.r*5);
      g.addColorStop(0,`rgba(255,226,150,${a})`);g.addColorStop(1,"rgba(255,200,90,0)");
      x.fillStyle=g;x.beginPath();x.arc(px,py,q.r*5,0,7);x.fill();}
  })(0);
}
/* opening sequence (~5.5 s) */
let opened=false;
function open(){
  if(opened)return;opened=true;idle.kill();
  if(matchMedia("(prefers-reduced-motion:reduce)").matches){gsap.set("#env",{display:"none"});coverIn();return;}
  const flap=$("#flap"),f={a:0},parts=".back,.pocket,.flap,.fsh,.seal";
  gsap.to("#wrap",{rotationX:0,rotationY:0,y:0,duration:.6});
  gsap.to(".hint",{opacity:0,duration:.4});
  const tl=gsap.timeline({onComplete:()=>{gsap.set("#env",{display:"none"});gsap.set("#dark",{opacity:0});coverIn();}});
  /* 1 seal pressed, lifted, set aside */
  tl.to("#seal",{scale:.92,duration:.3,ease:"power2.in"})
    .to("#seal",{scale:1.3,y:-24,rotation:-14,filter:"drop-shadow(0 22px 14px #000a)",duration:.7,ease:"power2.out"})
    .to("#seal",{x:"90vw",y:-60,rotation:40,opacity:0,duration:.8,ease:"power2.in"},">-.05")
  /* 2 flap folds back 180° and its shadow lifts */
    .to(f,{a:180,duration:1.3,ease:"power2.inOut",onUpdate(){
        flap.style.transform=`perspective(900px) rotateX(${-f.a}deg)`;
        flap.style.zIndex=f.a>90?2:6;}},1.5)
    .to("#fsh",{opacity:0,duration:1.1},1.6)
  /* 3 card drawn out at a slight angle while envelope sinks */
    .to(".card",{yPercent:-58,rotation:2.5,duration:1.2,ease:"power2.inOut"},2.9)
    .to(parts,{y:"4%",duration:1.2,ease:"power2.inOut"},2.9)
  /* 4 envelope dropped out of frame, card to camera */
    .to(parts,{y:"130vh",rotation:-3,duration:.9,ease:"power2.in"},4.1)
    .to(".card",{yPercent:0,rotation:0,scale:1.1,duration:1,ease:"power3.inOut"},4.2)
  /* 5 fade through dark */
    .to("#dark",{opacity:1,duration:.6,ease:"power1.in"},5.0)
    .add(()=>{},5.6);
}
$("#seal").onclick=open;$("#wrap").addEventListener("click",open);
/* replay without reloading, so a chosen photo is kept */
function replay(){gsap.killTweensOf("*");musicFrame.src="about:blank";musicPanel.hidden=true;musicButton.setAttribute("aria-expanded","false");musicButton.setAttribute("aria-label","Open music player");gsap.set("#env",{display:"flex"});gsap.set("#cover,#scroll",{visibility:"hidden"});$("#scroll").scrollTop=0;
  gsap.set("#wrap,.back,.pocket,.flap,.fsh,.seal,.card,.hint",{clearProps:"all"});
  const f=$("#flap");f.style.transform="";f.style.zIndex="";$("#bar").style.display="none";opened=false;startIdle();}
$("#rp").onclick=replay;
/* photo memory: sticky stage, translateX driven by scroll progress, sky morning to dusk */
const mm={dist:0};
const SK=[[107,111,59,63,69,34],[96,92,48,58,58,28],[112,62,44,29,22,32]],SUN=[[255,232,170],[255,140,80]];
const lerp=(a,b,t)=>a+(b-a)*t,mix=(A,B,t)=>A.map((v,i)=>Math.round(lerp(v,B[i],t)));
function mp(){const sc=$("#scroll"),r=$("#mm").getBoundingClientRect(),s=sc.getBoundingClientRect(),
  p=Math.min(1,Math.max(0,(s.top-r.top)/(mm.dist||1)));
  $("#mtrack").style.transform=`translate3d(${-p*mm.dist}px,0,0)`;
  const t=p*2,i=Math.min(1,Math.floor(t)),c=mix(SK[i],SK[i+1],t-i),u=mix(SUN[0],SUN[1],p);
  $("#mpin").style.background=`linear-gradient(rgb(${c[0]},${c[1]},${c[2]}),rgb(${c[3]},${c[4]},${c[5]}))`;
  $("#sun").style.background=`radial-gradient(circle,rgba(${u},.45),rgba(${u},0) 65%)`;
  $("#sun").style.transform=`translate(${p*sc.clientWidth}px,${p*p*55}svh)`}
function measure(){const sc=$("#scroll");mm.dist=Math.max(0,$("#mtrack").offsetWidth-sc.clientWidth);$("#mm").style.height=(mm.dist+sc.clientHeight)+"px";mp()}
const mio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");mio.unobserve(e.target)}}),{root:$("#scroll"),threshold:.15});
const KN=n=>{const s=String(n).padStart(2,"0");return lang=="km"?s.replace(/\d/g,c=>"០១២៣៤៥៦៧៨៩"[c]):s};
function renderMem(){$$("#mtrack .mc").forEach(e=>e.remove());
 $("#mtrack").insertAdjacentHTML("beforeend",W.mem.map((m,i)=>`<figure class="mc"><div class="mw${m.s?"":" e"}">${m.s?`<img src="${m.s}" alt="">`:`<span>Photo ${KN(i+1)}</span>`}</div><figcaption><b>${KN(i+1)}</b>${m.c||(m.s?"":"[ចំណងជើង]")}</figcaption></figure>`).join(""));
 $$("#mtrack img").forEach(x=>x.addEventListener("load",measure));$$("#mtrack .mc").forEach(e=>mio.observe(e));measure()}
renderMem();
let mq=0;$("#scroll").addEventListener("scroll",()=>{if(!mq)mq=requestAnimationFrame(()=>{mq=0;mp()})},{passive:true});addEventListener("resize",measure);
const mf=document.createElement("input");mf.type="file";mf.accept="image/*";mf.multiple=true;
$("#pk3").onclick=()=>mf.click();
mf.onchange=()=>{[...mf.files].slice(0,10).forEach((f,i)=>W.mem[i]={s:URL.createObjectURL(f)});renderMem();$("#pk3").textContent="Photos applied ✓"};
/* programme render + scroll-driven thread */
const ICON={flame:"M16 4C20 9 22 12 22 16C22 20 19 23 16 23C13 23 10 20 10 16C10 13 12 11 13 9C14 11 15 11 16 4Z M16 23V28 M12 28H20",
 lotus:"M16 6C19 10 19 15 16 20C13 15 13 10 16 6Z M16 20C12 19 8 16 7 11C11 11 14 14 16 20Z M16 20C20 19 24 16 25 11C21 11 18 14 16 20Z M6 25H26",
 knot:"M6 16A6 6 0 1 1 18 16A6 6 0 1 1 6 16Z M14 16A6 6 0 1 1 26 16A6 6 0 1 1 14 16Z",
 bowl:"M5 15H27C27 22 22 26 16 26C10 26 5 22 5 15Z M12 26V28H20V26 M11 11C11 9 13 9 13 7 M16 11C16 9 18 9 18 7 M21 11C21 9 23 9 23 7",
 sun:"M16 11A5 5 0 1 1 16 21A5 5 0 1 1 16 11Z M16 3V6 M16 26V29 M3 16H6 M26 16H29 M7 7L9 9 M23 23L25 25 M25 7L23 9 M9 23L7 25",
 gift:"M5 12H27V27H5Z M3 8H29V12H3Z M16 8V27 M16 8C13 3 8 4 10 8 M16 8C19 3 24 4 22 8",
 ring:"M16 12A8 8 0 1 1 16 28A8 8 0 1 1 16 12Z M12 9L16 4L20 9L16 12Z",
 scissors:"M7 6A3.5 3.5 0 1 1 7 13A3.5 3.5 0 1 1 7 6Z M7 19A3.5 3.5 0 1 1 7 26A3.5 3.5 0 1 1 7 19Z M10 12L27 24 M10 20L27 8"};
(function(){const tl=$(".tl"),still=matchMedia("(prefers-reduced-motion:reduce)").matches;
 tl.insertAdjacentHTML("beforeend",W.prog.map((d,i)=>`<div class="dh${i?"":" f"}">${d.d}</div>`+d.r.map(r=>`<div class="it"><div class="ic"><svg viewBox="0 0 32 32">${ICON[r[2]].split(" M").map((s,j)=>`<path d="${j?"M":""}${s}"/>`).join("")}</svg></div><b>${r[0]}</b><span>${r[1]}${r[3]?`<em>${r[3]}</em>`:""}</span></div>`).join("")).join(""));
 $$(".tl .ic path").forEach(p=>{const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L});
 const lit=e=>{e.classList.add("on");e.querySelectorAll("path").forEach(p=>p.style.strokeDashoffset=0)};
 function prog(){const sc=$("#scroll").getBoundingClientRect(),line=sc.top+sc.height*.6,r=tl.getBoundingClientRect();
  $(".tl .tf").style.transform=`scaleY(${still?1:Math.min(1,Math.max(0,(line-r.top)/r.height))})`;
  $$(".tl .it").forEach(e=>{if(!e.classList.contains("on")&&(still||e.getBoundingClientRect().top+22<line))lit(e)})}
 let q=0;$("#scroll").addEventListener("scroll",()=>{if(!q)q=requestAnimationFrame(()=>{q=0;prog()})},{passive:true});addEventListener("resize",prog);prog();
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
  gsap.fromTo(e.target,{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:"inset(-40% -10% -40% -10%)",duration:1.3,ease:"power3.out",onComplete:()=>e.target.style.clipPath="none"})}),{root:$("#scroll"),threshold:.4});
 $$(".pgt,.dh").forEach(e=>io.observe(e));})();
/* countdown: target = 15 Nov 2026, 16:00 Phnom Penh time (UTC+7). Edit TARGET if the time changes */
const TARGET=new Date("2026-11-15T16:00:00+07:00"),cdk={k:0};
const kh=s=>s.replace(/\d/g,c=>"០១២៣៤៥៦៧៨៩"[c]);
const fmt=n=>{const s=String(n).padStart(2,"0");return lang=="km"?kh(s):s};
function tick(){const s=Math.floor(Math.max(0,TARGET-Date.now())/1000),p=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
  $$("#cd [data-u]").forEach((e,i)=>{const t=fmt(Math.round(p[i]*cdk.k));if(e.textContent!==t){e.textContent=t;
    if(i==3&&cdk.k==1)gsap.fromTo(e,{yPercent:25,opacity:.25},{yPercent:0,opacity:1,duration:.55,ease:"power3.out"})}})}
setInterval(tick,1000);tick();
$("#lang").addEventListener("click",tick);
(function(){let done=0;
 new IntersectionObserver(e=>{const on=e[0].isIntersecting;$(".mt").style.animationPlayState=on?"running":"paused";
  if(!on||done)return;done=1;
  gsap.timeline()
   .fromTo(".cdh",{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:"inset(-40% -10% -40% -10%)",duration:1.4,ease:"power3.out",onComplete:()=>$(".cdh").style.clipPath="none"},0)
   .from(".cdg .u",{y:50,opacity:0,stagger:.15,duration:1.1,ease:"power3.out"},.4)
   .to(cdk,{k:1,duration:2.4,ease:"power2.out",onUpdate:tick},.5)
   .from(".mq",{opacity:0,duration:2},.6);
 },{root:$("#scroll"),threshold:.2}).observe($("#cd"));})();
/* couple section: scalloped frame draws, photo opens like an iris, names wipe in from opposite sides */
function scallop(W,H,nx,ny,e=1.8){const a=W/nx,b=H/ny;let d="M0 0";
  for(let i=1;i<=nx;i++)d+=`A${a/2} ${e} 0 0 1 ${i*a} 0`;
  for(let i=1;i<=ny;i++)d+=`A${e} ${b/2} 0 0 1 ${W} ${i*b}`;
  for(let i=nx-1;i>=0;i--)d+=`A${a/2} ${e} 0 0 1 ${i*a} ${H}`;
  for(let i=ny-1;i>=0;i--)d+=`A${e} ${b/2} 0 0 1 0 ${i*b}`;return d+"Z"}
(function(){const p=$("#sc path");p.setAttribute("d",scallop(100,111,15,17));const L=p.getTotalLength();gsap.set(p,{strokeDasharray:L,strokeDashoffset:L});let done=0;
 const IN="inset(-40% -10% -40% -10%)";
 new IntersectionObserver((e,o)=>{if(!e[0].isIntersecting||done)return;done=1;o.disconnect();
  gsap.timeline()
   .fromTo(".ch",{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:IN,duration:1.2,ease:"power3.out"},0)
   .fromTo(".dvd .dl",{scaleX:0},{scaleX:1,duration:1.3,ease:"power2.out"},.3)
   .from(".dvd .dc",{opacity:0,duration:.8},.9)
   .from(".dvd .dm",{scale:0,rotation:120,duration:.9,ease:"back.out(2)"},.8)
   .to(p,{strokeDashoffset:0,duration:2.6,ease:"power2.inOut"},.6)
   .fromTo(".pf .im",{clipPath:"circle(0% at 50% 50%)"},{clipPath:"circle(80% at 50% 50%)",duration:2.2,ease:"power2.inOut"},1)
   .fromTo(".pf img",{scale:1.3},{scale:1,duration:2.8,ease:"power2.out"},1)
   .from(".lb",{opacity:0,y:10,duration:.8,stagger:.15},1.3)
   .fromTo(".gm .nmk",{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:IN,duration:1.3,ease:"power3.out"},1.5)
   .fromTo(".br .nmk",{clipPath:"inset(-40% -10% -40% 110%)"},{clipPath:IN,duration:1.3,ease:"power3.out"},1.7)
   .fromTo(".nme",{clipPath:"inset(-30% 100% -30% -10%)"},{clipPath:"inset(-30% -10% -30% -10%)",duration:1.6,ease:"power2.inOut",stagger:.25},2.1)
   .add(()=>document.querySelectorAll("#cp *").forEach(x=>{if(x.style.clipPath)x.style.clipPath="none"}));
 },{root:$("#scroll"),threshold:.2}).observe($("#cp"));})();
/* invitation section: one signature moment (arch wipes up, outline draws, medallion unfolds) */
(function(){let done=0;new IntersectionObserver((e,o)=>{if(!e[0].isIntersecting||done)return;done=1;o.disconnect();
 gsap.timeline()
  .fromTo(".ar",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:1.8,ease:"power3.inOut"})
  .fromTo(".ar img",{scale:1.25},{scale:1,duration:2.4,ease:"power2.out"},0)
  .fromTo(".aro",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:2,ease:"power2.inOut"},.2)
  .fromTo(".ih",{clipPath:"inset(-40% 110% -40% -10%)"},{clipPath:"inset(-40% -10% -40% -10%)",duration:1.3,ease:"power3.out",onComplete:()=>$(".ih").style.clipPath="none"},.9)
  .from(".ip",{opacity:0,duration:1.2},1.3)
  .from(".md",{rotation:-120,scale:.2,opacity:0,duration:1.4,ease:"back.out(1.4)"},1.6)
  .from(".nm",{opacity:0,y:20,stagger:.2,duration:.9},1.8)
  .from(".idt,.dv",{opacity:0,duration:1},2.2);
},{root:$("#scroll"),threshold:.25}).observe($("#inv"));})();
/* local-only preview of a photo from your device (nothing is uploaded) */
const pf=document.createElement("input");pf.type="file";pf.accept="image/*";
$("#pk").onclick=()=>pf.click();
pf.onchange=()=>{const f=pf.files[0];if(!f)return;const u=URL.createObjectURL(f);
  document.documentElement.style.setProperty("--photo",`url("${u}") center/cover no-repeat`);$("#pk").textContent="Photo applied ✓";};
  /* In javascript.js: paste this at the VERY END of the file. */

/* ---- Name fix (assumes the Khmer invitation text is right: groom = សុន សោភណ្ឌ៌) ----
   Also swap the W.groom / W.bride objects at the top of the file (see notes). */
Object.assign(T.km,{gn:W.groom.km,bn:W.bride.km,gk:W.groom.km,bk:W.bride.km,ge:W.groom.en,be:W.bride.en});
Object.assign(T.en,{gn:W.groom.en,bn:W.bride.en,gk:W.groom.en,bk:W.bride.en,ge:W.groom.en,be:W.bride.en});

/* ---- Texts ---- */
Object.assign(T.km,{qh:"ចំណងដៃ",qs:"វត្តមានរបស់ប្រិយមិត្តជាកិត្តិយសដ៏ធំបំផុតសម្រាប់យើងខ្ញុំ។ ប្រសិនបើមានបំណងផ្តល់ចំណងដៃ សូមស្កេន QR ខាងក្រោម។",qsave:"រក្សាទុករូប QR",
 lh:"ទីតាំងកម្មវិធី",lv:W.venue.km,lb:"ទីតាំង",gh:"រូបភាពអនុស្សាវរីយ៍",mapLink:"ចុចមើលទីតាំងក្នុង Google Maps",
 closingTitle:"សូមអរគុណ",
 closingMessage:"សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការចូលរួម និងពាក្យជូនពរដ៏មានន័យរបស់លោកអ្នក។ វត្តមានរបស់លោកអ្នក គឺជាកិត្តិយស និងជាសេចក្តីរីករាយដ៏ធំធេងសម្រាប់គ្រួសារយើងខ្ញុំ។",
 contactIntro:"សូមទាក់ទងមកយើងខ្ញុំ ប្រសិនបើលោកអ្នកមានចម្ងល់។",
 rsvpTitle:"សូមបញ្ជាក់ការអញ្ជើញ",rsvpIntro:"សូមបញ្ជាក់ការចូលរួមរបស់អ្នក។",rsvpFor:"លិខិតអញ្ជើញសម្រាប់",
 rsvpAttendLabel:"តើលោកអ្នកអាចចូលរួមបានទេ?",rsvpYes:"ចូលរួម",rsvpNo:"មិនអាចចូលរួម",
 rsvpCountLabel:"ចំនួនអ្នកមក",rsvpPhoneLabel:"លេខទូរស័ព្ទ (ជាជម្រើស)",rsvpMessageLabel:"សារជូនពរ (ជាជម្រើស)",
 rsvpSubmit:"បញ្ជូនចម្លើយ"});
Object.assign(T.en,{qh:"Wedding Gift",qs:"Your presence is our greatest gift. Should you wish to give, you may scan a code below.",qsave:"Save QR",
 lh:"Location",lv:W.venue.en,lb:"Location",gh:"Our Moments",mapLink:"Open location in Google Maps",
 closingTitle:"Thank You",
 closingMessage:"With heartfelt gratitude, thank you for joining us and for your kind wishes. Your presence is an honor and a joy to our families.",
 contactIntro:"Please contact us if you have any questions.",
 rsvpTitle:"Please RSVP",rsvpIntro:"Please let us know if you can join us.",rsvpFor:"Invitation for",
 rsvpAttendLabel:"Will you attend?",rsvpYes:"Yes, I will attend",rsvpNo:"Sorry, I cannot attend",
 rsvpCountLabel:"Number of guests",rsvpPhoneLabel:"Phone number (optional)",rsvpMessageLabel:"Message (optional)",
 rsvpSubmit:"Send RSVP"});

/* ---- EDIT ME: QR images, map links, phones, 6 gallery photos ---- */
W.qr=[
 {k:"KHQR",s:"assets/khqr.png",n:W.bride.km},
 {k:"ABA PAY",s:"assets/abc.png",n:W.bride.km}
];
W.map={
 embed:"https://maps.google.com/maps?q=10.7266983,104.5905415&z=17&output=embed",
 link:"https://maps.app.goo.gl/HH5bvU1fffxZ43RG6",
 phones:["096 7 717 278","070 895 623"]    /* verify every digit */
};
W.gal=[
 "assets/pic2.png","assets/pic3.png","assets/pic4.png","assets/couple1.png","assets/couple.jpg",
 "assets/gallergy1.png","assets/gallergy2.png","assets/gallergy3.png","assets/gallergy4.png","assets/gallergy5.png"
];

/* ---- QR cards ---- */
(function(){
 $("#qg").innerHTML=W.qr.map(q=>`<div class="qc"><div class="qk">${q.k}</div>
  <div class="qi"><img src="${q.s}" alt="${q.k} QR" onerror="this.parentNode.classList.add('e');this.replaceWith(document.createTextNode('${q.k} QR'))"></div>
  <div class="qn">${q.n}</div>
  <a class="qb" href="${q.s}" download="${q.k.replace(/\s/g,"-")}-QR" data-i="qsave"></a></div>`).join("");
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{root:$("#scroll"),rootMargin:"0px 0px -8% 0px",threshold:.05});
 $$("#qg .qc").forEach((c,i)=>{c.style.transitionDelay=i*.2+"s";io.observe(c)});
})();

/* ---- Map, phones, fixed Location button ---- */
(function(){
 const ok=u=>/^https:\/\//.test(u);
 if(ok(W.map.embed))$("#lm").src=W.map.embed;else $(".lmap").style.display="none";
 if(ok(W.map.link))$("#map-link").href=W.map.link;else $("#map-link").hidden=true;
 $("#lph").innerHTML=W.map.phones.map(p=>`<a href="tel:${p.replace(/\s/g,"")}">&#9742; ${p}</a>`).join("");
 const b=$("#lbtn");
 b.onclick=()=>$("#loc").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"});
 new MutationObserver(()=>{
  const visible=$("#bar").style.display=="flex";
  b.style.display=visible?"block":"none";
  $("#bottom-nav").classList.toggle("visible",visible);
 }).observe($("#bar"),{attributes:true,attributeFilter:["style"]});
})();

/* ---- Fixed section navigation ---- */
(function(){
 const nav=$("#bottom-nav"),links=[...nav.querySelectorAll("[data-target]")];
 links.forEach(link=>link.addEventListener("click",event=>{
  event.preventDefault();
  $(link.dataset.target).scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth",block:"start"});
 }));
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
   links.forEach(link=>link.classList.toggle("active",link.dataset.target===`#${entry.target.id}`));
  }
 }),{root:$("#scroll"),threshold:.25});
 links.forEach(link=>io.observe($(link.dataset.target)));
})();

/* ---- Wedding photo gallery ---- */
(function(){
 $("#gt").innerHTML=W.gal.map((s,i)=>`<figure class="gi"><img src="${s}" alt="Wedding photo ${i+1}" loading="lazy" decoding="async"></figure>`).join("");
 $$("#gt .gi img").forEach(image=>{
  const setOrientation=()=>{
   if(!image.naturalWidth||!image.naturalHeight)return;
   image.closest(".gi").classList.add(image.naturalWidth>image.naturalHeight?"landscape":"portrait");
  };
  image.addEventListener("load",setOrientation,{once:true});
  if(image.complete)setOrientation();
 });
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("in");io.unobserve(entry.target)}
 }),{root:$("#scroll"),rootMargin:"0px 0px -6% 0px",threshold:.08});
 $$("#gt .gi").forEach((photo,i)=>{photo.style.transitionDelay=`${(i%5)*.1}s`;io.observe(photo)});
 $("#gallery-all").addEventListener("click",()=>$("#gal").scrollIntoView({
  behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth",
  block:"start"
 }));
})();

/* ---- Personalized invitation and RSVP ---- */
(function(){
 const code=new URLSearchParams(location.search).get("guest");
 if(!code)return;
 const card=$("#rsvp-card"),form=$("#rsvp-form"),status=$("#rsvp-status"),
  guest=$("#rsvp-guest"),guestName=$("#rsvp-guest-name"),
  attending=$("#rsvp-attending"),partyField=$("#rsvp-party-field"),
  partySize=$("#rsvp-party-size"),submit=form.querySelector("button[type=submit]");
 const text=(km,en)=>lang==="km"?km:en;
 card.hidden=false;
 status.textContent=text("កំពុងផ្ទៀងផ្ទាត់លិខិតអញ្ជើញ...","Checking your invitation...");
 fetch(`/api/rsvp?code=${encodeURIComponent(code)}`)
  .then(async response=>{
   if(response.status===404)throw new Error("invalid-invitation");
   if(!response.ok)throw new Error("service-unavailable");
   const data=await response.json();
   if(typeof data.guestName!=="string"||!data.guestName.trim())throw new Error("invalid-response");
   personalizedGuestName=data.guestName.trim();
   $("#guest-greeting").hidden=false;
   $("#rsvp-guest-name").textContent=personalizedGuestName;
   guest.hidden=false;
   setLang(lang);
   form.hidden=false;
   status.textContent="";
  })
  .catch(error=>{
   console.error("Could not load personalized invitation:",error);
   status.textContent=error.message==="invalid-invitation"
    ?text("រកមិនឃើញលិខិតអញ្ជើញនេះទេ។ សូមពិនិត្យ link របស់អ្នក។","This invitation link is not valid. Please check your link.")
    :text("មិនអាចភ្ជាប់ប្រព័ន្ធ RSVP បានទេ។ សូមសាកល្បងម្ដងទៀត។","RSVP is temporarily unavailable. Please try again.");
  });
 attending.addEventListener("change",()=>{
  const isAttending=attending.value==="yes";
  partyField.hidden=!isAttending;
  partySize.disabled=!isAttending;
  partySize.required=isAttending;
  if(!isAttending)partySize.value="0";
  else if(Number(partySize.value)<1)partySize.value="1";
 });
 form.addEventListener("submit",async event=>{
  event.preventDefault();
  submit.disabled=true;
  status.textContent=text("កំពុងរក្សាទុកចម្លើយ...","Saving your RSVP...");
  const isAttending=attending.value==="yes";
  try{
   const response=await fetch("/api/rsvp",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
     code,attending:isAttending,
     partySize:isAttending?Number(partySize.value):0,
     phone:$("#rsvp-phone").value.trim(),
     message:$("#rsvp-message").value.trim()
    })
   });
   if(!response.ok)throw new Error(`RSVP request failed with status ${response.status}`);
   status.textContent=text("បានរក្សាទុកចម្លើយ RSVP របស់អ្នករួចហើយ។ អរគុណ!","Your RSVP has been saved. Thank you!");
  }catch(error){
   console.error("Could not save RSVP:",error);
   status.textContent=text("រក្សាទុកមិនបានទេ។ សូមពិនិត្យអ៊ីនធឺណិត ហើយសាកល្បងម្ដងទៀត។","Your RSVP could not be saved. Check your connection and try again.");
  }finally{
   submit.disabled=false;
  }
 });
})();

setLang(lang); /* fills all new data-i texts */