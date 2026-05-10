/* ═══════════════════════════════════════════
   AZIZA VOYAGE — Core JS
   ═══════════════════════════════════════════ */

// ── SVG Icons (custom, no Lucide) ───────────────────
const ICONS = {
  plane:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
  mappin:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  moon:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  star:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  filechk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`,
  shield:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.17 12.17.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7"/><circle cx="12" cy="12" r="4"/></svg>`,
  globe:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  check:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowR:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowL:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  mail:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.09 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>`,
  loc:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  pdf:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/><polyline points="9 9 10 9"/></svg>`,
  user:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  menu:    `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x:       `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  wa:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.86 11.86 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z"/></svg>`,
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  users:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  grid:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  logout:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  bell:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  eye:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  edit:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
};

// ── LocalStorage DB ──────────────────────────────────
const DB = {
  get:(k)=>{try{return JSON.parse(localStorage.getItem(k))||[]}catch{return[]}},
  set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
  getObj:(k,d={})=>{try{return JSON.parse(localStorage.getItem(k))||d}catch{return d}},
};

// ── Offers data (prices in MAD) ──────────────────────
const OFFERS = [
  // Europe
  {id:'EUR001',type:'europe',name:'Paris–Rome 7 jours',price:8900,popular:false,img:'../assets/hero-paris.jpg',tag:'Europe',features:['Vol direct','Hôtels 4★ centre-ville','Petit-déjeuner inclus','Guide francophone'],duration:'7 jours',persons_default:1},
  {id:'EUR002',type:'europe',name:'Tour d\'Espagne 10 jours',price:11900,popular:true,img:'../assets/dest-europe.jpg',tag:'Europe',features:['Vol + bus climatisé','Hôtels 4★','Demi-pension','Visites guidées'],duration:'10 jours'},
  {id:'EUR003',type:'europe',name:'City-break Istanbul 5 jours',price:5900,popular:false,img:'../assets/hero-istanbul.jpg',tag:'Europe',features:['Vol direct','Hôtel centre-ville','Excursion Bosphore','Transferts inclus'],duration:'5 jours'},
  // Indonésie
  {id:'IDN001',type:'indonesia',name:'Bali Découverte 9 jours',price:14900,popular:true,img:'../assets/hero-bali.jpg',tag:'Indonésie',features:['Vol international','Hôtel 4★ Seminyak','Excursions incluses','Transferts privés'],duration:'9 jours'},
  {id:'IDN002',type:'indonesia',name:'Combiné Bali + Java 12 jours',price:19900,popular:false,img:'../assets/dest-indonesia.jpg',tag:'Indonésie',features:['Vol intérieur inclus','Volcan Bromo + Borobudur','Guide privé francophone','Pension complète'],duration:'12 jours'},
  // Omra
  {id:'OMR001',type:'omra',name:'Omra Économique 10 jours',price:14500,popular:false,img:'../assets/dest-omra.jpg',tag:'Omra',features:['Vol','Hôtel 3★ à 500m du Haram','Transferts inclus','Visa Omra'],duration:'10 jours'},
  {id:'OMR002',type:'omra',name:'Omra Standard 12 jours',price:21900,popular:true,img:'../assets/hero-kaaba.jpg',tag:'Omra',features:['Vol direct','Hôtel 4★ à 200m','Pension complète','Accompagnateur religieux'],duration:'12 jours'},
  {id:'OMR003',type:'omra',name:'Omra Premium 14 jours',price:34500,popular:false,img:'../assets/hero-mecca.jpg',tag:'Omra',features:['Vol direct','Hôtel 5★ vue Haram','Pension complète','Mutawif privé'],duration:'14 jours'},
  // Hajj
  {id:'HAJ001',type:'hajj',name:'Hajj Standard 2026',price:38000,popular:false,img:'../assets/hero-mecca.jpg',tag:'Hajj',features:['Vol direct','Tentes Mina climatisées','Hôtels 4★ Mecque & Médine','Guide religieux certifié'],duration:'21 jours'},
  {id:'HAJ002',type:'hajj',name:'Hajj VIP 2026',price:55000,popular:true,img:'../assets/hero-kaaba.jpg',tag:'Hajj',features:['Vol direct','Tentes VIP Mina','Hôtels 5★ vue Haram','Service personnalisé'],duration:'25 jours'},
  // Visa
  {id:'VIS001',type:'visa',name:'Visa Schengen',price:1800,popular:true,img:'../assets/hero-paris.jpg',tag:'Visa',features:['Constitution du dossier','Prise de rendez-vous consulaire','Suivi complet du dossier','Délai 10–15 jours ouvrés'],duration:'Service'},
  {id:'VIS002',type:'visa',name:'Visa USA / UK',price:2500,popular:false,img:'../assets/dest-europe.jpg',tag:'Visa',features:['Préparation de l\'entretien','Dossier complet','Suivi par expert','Traduction certifiée'],duration:'Service'},
  {id:'VIS003',type:'visa',name:'Visa Touristique Asie',price:1200,popular:false,img:'../assets/hero-bali.jpg',tag:'Visa',features:['Indonésie, Thaïlande, etc.','Dossier complet','Délai rapide','Support multilingue'],duration:'Service'},
];

// ── Sample reservations ──────────────────────────────
function seedData(){
  if(localStorage.getItem('az_seeded2')) return;
  const firstN=['Fatima','Ahmed','Khadija','Mohammed','Youssef','Aïcha','Hamid','Nadia','Omar','Zineb','Hassan','Meryem','Rachid','Soukaina','Karim'];
  const lastN=['Benali','El Amrani','Tazi','Ouali','Chraibi','Mansouri','Benhaddou','Lahlou','Idrissi','Saidi','Berrada','Filali'];
  const cities=['Casablanca','Rabat','Marrakech','Fès','Tanger','Agadir','Meknès','Oujda'];
  const statuses=['pending','pending','pending','confirmed','confirmed','done','cancelled'];
  const types=['europe','indonesia','omra','hajj','visa'];
  const offerNames={europe:['Paris–Rome 7 jours','Tour d\'Espagne 10 jours','City-break Istanbul 5 jours'],indonesia:['Bali Découverte 9 jours','Combiné Bali + Java 12 jours'],omra:['Omra Économique 10 jours','Omra Standard 12 jours','Omra Premium 14 jours'],hajj:['Hajj Standard 2026','Hajj VIP 2026'],visa:['Visa Schengen','Visa USA / UK','Visa Touristique Asie']};
  const prices={europe:[8900,11900,5900],indonesia:[14900,19900],omra:[14500,21900,34500],hajj:[38000,55000],visa:[1800,2500,1200]};
  const res=[];
  for(let i=1;i<=42;i++){
    const fn=firstN[Math.floor(Math.random()*firstN.length)];
    const ln=lastN[Math.floor(Math.random()*lastN.length)];
    const type=types[Math.floor(Math.random()*types.length)];
    const ofIdx=Math.floor(Math.random()*offerNames[type].length);
    const d=new Date(2026,Math.floor(Math.random()*5)+1,Math.floor(Math.random()*27)+1);
    res.push({
      id:'RES'+String(1000+i),ref:'AZ-'+Math.random().toString(36).substr(2,6).toUpperCase(),
      clientName:fn+' '+ln,phone:'06'+Math.floor(Math.random()*89999999+10000000),
      email:fn.toLowerCase()+'.'+ln.toLowerCase().replace(/\s/g,'')+'@gmail.com',
      city:cities[Math.floor(Math.random()*cities.length)],
      type,offer:offerNames[type][ofIdx],
      price:prices[type][ofIdx],
      persons:Math.floor(Math.random()*4)+1,
      date:d.toLocaleDateString('fr-FR'),dateObj:d.toISOString(),
      status:statuses[Math.floor(Math.random()*statuses.length)],
      notes:'',createdAt:new Date(2026,Math.floor(Math.random()*3),Math.floor(Math.random()*27)+1).toLocaleDateString('fr-FR')
    });
  }
  DB.set('az_reservations',res);
  localStorage.setItem('az_seeded2','1');
}
seedData();

// ── Navbar scroll + burger ────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');
  if(nav){
    // No scroll class needed – nav is sticky with blur
    const burger=document.getElementById('burger');
    const mm=document.getElementById('mobileMenu');
    if(burger&&mm){
      burger.innerHTML=ICONS.menu;
      burger.addEventListener('click',()=>{
        mm.classList.toggle('open');
        burger.innerHTML=mm.classList.contains('open')?ICONS.x:ICONS.menu;
      });
    }
  }
  // Fade-in observer
  const els=document.querySelectorAll('.fade-in');
  if(els.length){
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach((e,i)=>{
        if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target);}
      });
    },{threshold:.1});
    els.forEach(el=>obs.observe(el));
  }
});

// ── Hero slideshow ────────────────────────────────────
function initHero(slides){
  let active=0;
  const dots=document.querySelectorAll('.hero-dot');
  function go(n){
    document.querySelectorAll('.hero-slide').forEach((s,i)=>s.classList.toggle('active',i===n));
    dots.forEach((d,i)=>d.classList.toggle('active',i===n));
    active=n;
  }
  go(0);
  dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));
  setInterval(()=>go((active+1)%slides),4500);
}

// ── PDF Generation ────────────────────────────────────
function generatePDF(data){
  const {ref,clientName,phone,email,city,offer,type,persons,date,price,notes,duration}=data;
  const typeLabels={europe:'Voyages Europe',indonesia:'Voyages Indonésie',omra:'Omra',hajj:'Hajj',visa:'Demande de Visa'};
  const total=price*persons;
  const today=new Date().toLocaleDateString('fr-FR',{year:'numeric',month:'long',day:'numeric'});

  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
  <title>Confirmation Réservation ${ref}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter',sans-serif;background:#fff;color:#1a2332;font-size:14px;line-height:1.5}
    .page{max-width:780px;margin:0 auto;padding:40px 36px}
    /* Header */
    .hdr{display:flex;align-items:center;justify-content:space-between;padding-bottom:20px;border-bottom:3px solid #2e5c6e;margin-bottom:28px}
    .brand{font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:800;color:#2e5c6e}
    .brand span{color:#c9a84c}
    .hdr-right{text-align:right}
    .hdr-right .lbl{font-size:.7rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af}
    .hdr-right .val{font-size:1rem;font-weight:700;color:#2e5c6e}
    /* Confirm badge */
    .badge-confirm{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#d4a84b,#b8893a);color:#fff;padding:10px 22px;border-radius:50px;font-weight:700;font-size:.95rem;margin-bottom:24px}
    /* Offer banner */
    .offer-banner{background:linear-gradient(135deg,#1a2332,#2e5c6e);border-radius:14px;padding:20px 24px;margin-bottom:24px;color:#fff}
    .offer-type{font-size:.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#c9a84c;margin-bottom:4px}
    .offer-name{font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:800;margin-bottom:8px}
    .offer-meta{display:flex;gap:20px;font-size:.82rem;opacity:.82}
    /* Grid */
    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px}
    .info-box{background:#f8f7f4;border-radius:10px;padding:14px 16px;border-left:3px solid #c9a84c}
    .info-lbl{font-size:.68rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-bottom:3px}
    .info-val{font-weight:600;font-size:.9rem;color:#1a2332}
    /* Price */
    .price-box{background:#2e5c6e;border-radius:12px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;color:#fff}
    .price-left .lbl{font-size:.72rem;opacity:.72;margin-bottom:3px}
    .price-left .amt{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:800;color:#c9a84c}
    .price-right{text-align:right;font-size:.8rem;opacity:.82}
    /* Notes */
    .notes-box{background:#f8f7f4;border-radius:10px;padding:14px 16px;margin-bottom:24px}
    .notes-box .lbl{font-size:.68rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-bottom:6px}
    /* Footer */
    .ftr{border-top:2px solid #e8e4dc;padding-top:18px;display:flex;justify-content:space-between;align-items:flex-end}
    .ftr-left{font-size:.78rem;color:#9ca3af;line-height:1.6}
    .ftr-right{text-align:right;font-size:.78rem;color:#9ca3af}
    .stamp{border:2px solid #2e5c6e;border-radius:8px;padding:8px 14px;color:#2e5c6e;font-weight:700;font-size:.75rem;text-align:center;margin-top:8px}
    @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style></head><body>
  <div class="page">
    <div class="hdr">
      <div class="brand">✈ <span>Aziza</span> Voyage</div>
      <div class="hdr-right">
        <div class="lbl">N° Réservation</div>
        <div class="val">${ref}</div>
      </div>
    </div>
    <div class="badge-confirm">✓ Demande de réservation confirmée</div>
    <div class="offer-banner">
      <div class="offer-type">${typeLabels[type]||type}</div>
      <div class="offer-name">${offer}</div>
      <div class="offer-meta">
        <span>📅 Durée : ${duration||'—'}</span>
        <span>👥 ${persons} personne${persons>1?'s':''}</span>
        <span>🗓 Date souhaitée : ${date}</span>
      </div>
    </div>
    <div class="grid2">
      <div class="info-box"><div class="info-lbl">Client</div><div class="info-val">${clientName}</div></div>
      <div class="info-box"><div class="info-lbl">Téléphone</div><div class="info-val">${phone}</div></div>
      <div class="info-box"><div class="info-lbl">Email</div><div class="info-val">${email||'—'}</div></div>
      <div class="info-box"><div class="info-lbl">Ville</div><div class="info-val">${city||'—'}</div></div>
    </div>
    <div class="price-box">
      <div class="price-left"><div class="lbl">Montant total estimé</div><div class="amt">${(total).toLocaleString('fr-MA')} MAD</div></div>
      <div class="price-right"><div>${price.toLocaleString('fr-MA')} MAD / pers.</div><div style="font-size:.7rem;margin-top:4px;opacity:.65">Tarif indicatif — confirmation par l'agence</div></div>
    </div>
    ${notes?`<div class="notes-box"><div class="lbl">Remarques</div><div>${notes}</div></div>`:''}
    <div class="ftr">
      <div class="ftr-left">
        <strong style="color:#1a2332;display:block;margin-bottom:4px">Aziza Voyage</strong>
        Casablanca, Maroc<br>+212 6 72 94 59 59<br>contact@azizavoyage.ma<br>
        <span style="font-size:.7rem;color:#c9a84c">Agrément Ministère du Tourisme — Maroc</span>
      </div>
      <div class="ftr-right">
        <div style="font-size:.7rem">Émis le ${today}</div>
        <div class="stamp">Document de réservation provisoire<br>Valable 48h — À confirmer par l'agence</div>
      </div>
    </div>
  </div>
  <script>window.onload=()=>{window.print();}<\/script>
  </body></html>`);
  win.document.close();
}

// ── Ref generator ─────────────────────────────────────
function genRef(){return 'AZ-'+Date.now().toString(36).toUpperCase().slice(-4)+'-'+Math.random().toString(36).substr(2,4).toUpperCase();}

// ── Status badge ──────────────────────────────────────
function statusBadge(s){
  const m={pending:['b-pending','En attente'],confirmed:['b-confirmed','Confirmée'],cancelled:['b-cancelled','Annulée'],done:['b-done','Terminée']};
  const [cls,lbl]=m[s]||['b-pending',s];
  return `<span class="badge ${cls}">${lbl}</span>`;
}
function typeLabel(t){return{europe:'Europe',indonesia:'Indonésie',omra:'Omra',hajj:'Hajj',visa:'Visa'}[t]||t;}
