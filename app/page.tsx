"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const WA = "918780692285";

const services = [
  { no:"01", title:"WEB DEVELOPMENT", price:"From INR 8,000", text:"Premium websites, studio sites and brand platforms built with considered structure and responsive execution.", message:"Hello DN Studios,\n\nI would like to enquire about a website project. I can share the business details, required pages and target timeline. Please let me know the recommended approach and an initial estimate.\n\nRegards," },
  { no:"02", title:"MOBILE APPLICATIONS", price:"From INR 12,000", text:"Mobile products built around real user journeys, polished interfaces and practical functionality.", message:"Hello DN Studios,\n\nI would like to discuss a mobile application project. I can share the product idea, features and target platform. Please let me know the next steps and an initial estimate.\n\nRegards," },
  { no:"03", title:"WEB APPLICATIONS", price:"From INR 15,000", text:"Dashboards, portals, SaaS products and workflow systems designed for actual operational use.", message:"Hello DN Studios,\n\nI would like to discuss a web application project. I can share the workflow, required modules and expected timeline. Please let me know the recommended approach and an initial estimate.\n\nRegards," },
  { no:"04", title:"E-COMMERCE", price:"From INR 12,000", text:"Commerce experiences with refined product presentation, practical browsing and clean checkout flows.", message:"Hello DN Studios,\n\nI would like to discuss an e-commerce project. I can share the catalogue, preferred features and expected launch timeline. Please let me know the next steps and an initial estimate.\n\nRegards," },
  { no:"05", title:"PWA / SYSTEMS", price:"From INR 15,000", text:"Fast installable web experiences and lightweight systems for cross-device business use.", message:"Hello DN Studios,\n\nI would like to enquire about a PWA or business system. I can share the workflow, required functionality and target users. Please advise on the suitable approach and estimated investment.\n\nRegards," },
  { no:"06", title:"CUSTOM SOFTWARE", price:"From INR 25,000", text:"Purpose-built software for specialised workflows, operations and product requirements.", message:"Hello DN Studios,\n\nI would like to discuss a custom software project. I can share the operational requirements, desired features and timeline. Please let me know how we can proceed with the initial discussion and estimate.\n\nRegards," }
];

const projects = [
  ["01","NOURISH","HEALTH / WELLNESS","Web","/projects/01-nourish.svg","From INR 8,000","A calm digital experience for a modern wellness brand.","Editorial hierarchy, trust-building content and a frictionless mobile reading experience.","Responsive website, visual system, content structure, performance pass"],
  ["02","FORM","FITNESS PLATFORM","Web","/projects/02-form.svg","From INR 10,000","A focused fitness platform built around a confident visual system.","Structured information, strong typography and conversion-led calls to action without visual noise.","UI direction, responsive implementation, interaction design, deployment"],
  ["03","AERIS","TRAVEL / LIFESTYLE","Web","/projects/03-aeris.svg","From INR 12,000","An atmospheric travel interface with a refined editorial rhythm.","Large imagery, restrained typography and intentional spacing designed to make exploration effortless.","Experience design, responsive frontend, visual motion, optimisation"],
  ["04","ATELIER","CREATIVE STUDIO","Web","/projects/04-atelier.svg","From INR 12,000","A visual-first studio presence designed for premium positioning.","Work and identity stay at the centre with flexible case-study presentation and quiet luxury.","Art direction, portfolio system, responsive build, structure"],
  ["05","MENTOR","EDUCATION","App","/projects/05-mentor.svg","From INR 10,000","A practical learning platform focused on clarity and progress.","A complex learning journey is reduced to a simple sequence of discovery, action and progress.","Product structure, dashboard UI, user flows, responsive implementation"],
  ["06","HAVEN","PROPERTY / LIVING","Web","/projects/06-haven.svg","From INR 12,000","A premium property experience built around confidence and calm.","Restrained visual language and structured information support considered property discovery.","Brand-led interface, listing flow, responsive frontend, interactions"],
  ["07","LUMEN","FINANCE / INSIGHT","App","/projects/07-lumen.svg","From INR 9,000","A focused information interface where clarity comes first.","Dense information is grouped and prioritised for fast decision making.","Information architecture, dashboard design, responsive application"],
  ["08","NEST","HOME / SERVICES","Web","/projects/08-nest.svg","From INR 15,000","A warmer digital system for home-focused services.","Approachable service discovery, strong identity and clear enquiry paths.","Service architecture, conversion flow, mobile optimisation, launch"],
  ["09","TABLE","HOSPITALITY","Commerce","/projects/09-table.svg","From INR 9,000","A hospitality experience designed around appetite and immediacy.","Menus, reservations and visual storytelling brought together without unnecessary weight.","Menu system, responsive website, CTA design, booking flow"],
  ["10","ROUTE","LOGISTICS","App","/projects/10-route.svg","From INR 18,000","An operational interface designed for speed and visibility.","The information operators need most is kept compact with strong status hierarchy.","Operational dashboard, workflow design, responsive implementation"],
  ["11","MOMENT","PHOTO / CREATIVE","Web","/projects/11-moment.svg","From INR 11,000","A portfolio experience where imagery leads the narrative.","Gallery-led presentation that lets creative work breathe while keeping navigation concise.","Editorial layout, gallery system, responsive design, motion"],
  ["12","CURATE","E-COMMERCE","Commerce","/projects/12-curate.svg","From INR 20,000","A refined storefront for considered products.","Premium product presentation combined with practical browsing and purchase flows.","Storefront, product UI, cart flow, mobile commerce experience"],
  ["13","PULSE","BUSINESS APP","App","/projects/13-pulse.svg","From INR 25,000","A compact business system for fast operational visibility.","Actionable information presented through a restrained interface for frequent daily use.","Dashboard system, role-based views, responsive implementation"],
  ["14","DAILY","PRODUCTIVITY","App","/projects/14-daily.svg","From INR 10,000","A practical productivity experience with a quieter interface.","Routines, tasks and repeatable actions presented with almost no learning curve.","Product flow, interface system, interaction design"],
  ["15","NOVA","COMMERCE PLATFORM","Commerce","/projects/15-nova.svg","From INR 14,000","A modern commerce concept with a sharp digital presence.","Product discovery, promotional hierarchy and a compact checkout journey.","Commerce UI, product architecture, responsive build, deployment"]
];

const process = [
  ["01","DISCOVERY","Scope, audience, requirements and the actual problem are understood before the interface is shaped."],
  ["02","DIRECTION","Information hierarchy, visual language and technical approach are established with practical constraints in mind."],
  ["03","BUILD","The approved direction becomes a working product with responsive behaviour, interactions and review points."],
  ["04","LAUNCH","Final checks, deployment and handover are treated as part of the project rather than an afterthought."]
];

const wa = (message:string) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

export default function HomePage(){
  const [filter,setFilter] = useState("All");
  const [selected,setSelected] = useState<string|null>(null);
  const [intro,setIntro] = useState(true);
  const cursor = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const visible = useMemo(()=>filter === "All" ? projects : projects.filter(p=>p[3]===filter),[filter]);
  const project = selected ? projects.find(p=>p[0]===selected) : null;

  useEffect(()=>{
    const timer=window.setTimeout(()=>setIntro(false),800);
    const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");observer.unobserve(e.target)}}),{threshold:.12});
    document.querySelectorAll("[data-reveal]").forEach(el=>observer.observe(el));
    const move=(e:MouseEvent)=>{if(cursor.current)cursor.current.style.transform=`translate3d(${e.clientX-3}px,${e.clientY-3}px,0)`;if(ring.current)ring.current.style.transform=`translate3d(${e.clientX-20}px,${e.clientY-20}px,0)`};
    const scroll=()=>{if(bar.current){const max=document.documentElement.scrollHeight-window.innerHeight;bar.current.style.width=`${max>0?(window.scrollY/max)*100:0}%`}};
    const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setSelected(null)};
    document.addEventListener("mousemove",move);window.addEventListener("scroll",scroll,{passive:true});document.addEventListener("keydown",key);scroll();
    return ()=>{window.clearTimeout(timer);observer.disconnect();document.removeEventListener("mousemove",move);window.removeEventListener("scroll",scroll);document.removeEventListener("keydown",key)};
  },[]);

  return <>
    <div className={`v2-intro ${intro?"":"v2-intro-off"}`}>
      <img src="/dn-studios-logo.svg" alt="DN Studios" className="v6-logo-intro" />
      <i></i><span>PRIVATE DIGITAL WORKS</span>
    </div>
    <div ref={cursor} className="v2-cursor"></div><div ref={ring} className="v2-ring"></div><div ref={bar} className="v2-progress"></div>

    <main className="v2-site">
      <div className="v4-topline"><span>DN STUDIOS / PRIVATE DIGITAL WORKS</span><span>AVAILABLE FOR SELECT PROJECTS</span><span>GUJARAT — INDIA</span></div>
      <nav className="v2-nav">
        <Link href="/" className="v2-brand" aria-label="DN Studios home">
          <img src="/dn-studios-logo.svg" alt="DN Studios" className="v6-logo-nav" />
          <span><strong>DN STUDIOS</strong><small>PRIVATE DIGITAL WORKS</small></span>
        </Link>
        <div className="v2-links"><a href="#work">WORK</a><a href="#services">SERVICES</a><Link href="/about">ABOUT</Link></div>
        <a className="v2-nav-cta" href={wa("Hello DN Studios,\n\nI would like to discuss a digital project. Please share the next steps and an initial estimate.\n\nRegards,")} target="_blank" rel="noreferrer">START A PROJECT</a>
      </nav>

      <section className="v2-hero v3-hero">
        <div className="v3-noise"></div>
        <div className="v3-scan"></div>
        <div className="v2-grid-bg"></div>
        <div className="v3-orb v3-orb-a"></div>
        <div className="v3-orb v3-orb-b"></div>
        <div className="v2-hero-copy" data-reveal>
          <span className="v2-kicker">DEVAM NAMERA / FOUNDER &amp; LEAD DEVELOPER</span>
          <h1>Digital work<em>with a sharper</em>point of view.</h1>
          <p>DN Studios is an independent digital studio creating websites, applications and custom software for brands, businesses and founders.</p>
          <div className="v2-actions"><a className="v2-btn v2-primary" href="#work">VIEW SELECTED WORK <span>↘</span></a><a className="v2-btn v2-ghost" href="tel:+918780692285">CALL +91 87806 92285</a></div>
          <div className="v2-meta"><span>5+ YEARS EXPERIENCE</span><span>GUJARAT / INDIA</span><span>DIRECT CLIENT COMMUNICATION</span></div><div className="v4-hero-foot"><span>SCROLL TO EXPLORE</span><i></i><b>01 — 06</b></div>
        </div>
        <div className="v2-orbit" data-reveal>
          <div className="v2-orbit-glow"></div><div className="v2-orbit-r o1"></div><div className="v2-orbit-r o2"></div><div className="v2-orbit-r o3"></div>
          <div className="v2-core"><b>DN</b><small>STUDIO / 2026</small></div><span className="chip ca">WEB</span><span className="chip cb">APP</span><span className="chip cc">SYSTEM</span>
        </div>
      </section>

      <section className="v3-signal" data-reveal>
        <div><span>DN / 2026</span><strong>INDEPENDENT DIGITAL STUDIO</strong></div>
        <div className="v3-signal-line"><i></i><span>AVAILABLE FOR SELECT PROJECTS</span></div>
        <div><span>WEB / APP / SYSTEM</span><strong>GUJARAT — INDIA</strong></div>
      </section>

      <section className="v2-manifesto" data-reveal><span>01 / STUDIO NOTE</span><h2>Good digital work should feel <i>obvious</i> after it is finished.</h2><p>The visual direction should make sense. The interface should feel natural. The technology should stay out of the client&apos;s way. Every decision should have a reason behind it.</p></section>

      <section className="v3-intelligence v5-intelligence" data-reveal>
        <div className="v5-intel-copy">
          <div className="v5-intel-eyebrow"><span>02 / DIGITAL PRODUCT INTELLIGENCE</span><i>DN STUDIOS INTELLIGENCE</i><b className="v6-status"><em></em> SYSTEM ONLINE</b></div>
          <h2>Where <i>strategy, design</i><br />and engineering become one system.</h2>
          <p>DN STUDIOS INTELLIGENCE is the thinking layer behind the studio — a disciplined approach to product structure, interface behaviour, visual direction and technical execution.</p>
          <div className="v5-intel-specs"><span>STRATEGY</span><b></b><span>UX / UI</span><b></b><span>ENGINEERING</span><b></b><span>PERFORMANCE</span></div>
          <div className="v6-intel-foot"><span>01</span><i></i><span>CLARITY</span><i></i><span>CONTROL</span><i></i><span>CRAFT</span></div>
        </div>
        <div className="v5-intel-stage" aria-label="DN Studios intelligence system visual">
          <div className="v5-stage-grid"></div>
          <div className="v5-stage-axis axis-x"></div><div className="v5-stage-axis axis-y"></div>
          <div className="v5-stage-ring ring-a"></div><div className="v5-stage-ring ring-b"></div><div className="v5-stage-ring ring-c"></div>
          <div className="v5-stage-core">
            <img src="/dn-studios-logo.svg" alt="DN" className="v6-logo-core" />
            <small>INTELLIGENCE</small>
          </div>
          <div className="v5-stage-module m1"><b>01</b><span>STRUCTURE</span><i></i></div>
          <div className="v5-stage-module m2"><b>02</b><span>INTERACTION</span><i></i></div>
          <div className="v5-stage-module m3"><b>03</b><span>ENGINEERING</span><i></i></div>
          <div className="v5-stage-readout"><span>LIVE SYSTEM</span><strong>DN / 2026</strong><em>HIGH-DEFINITION / CRISP VECTOR + CLEAN MOTION</em></div>
        </div>
      </section>

      <section id="work" className="v2-section">
        <header className="v2-section-head" data-reveal><div><span>03 / SELECTED WORK</span><h2>Projects with purpose.</h2></div><p>Fifteen selected concepts across web, applications and commerce.</p></header>
        <div className="v2-filter" data-reveal>{["All","Web","App","Commerce"].map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f==="All"?"ALL WORK":f.toUpperCase()}</button>)}</div>
        <div className="v2-projects">{visible.map((p,i)=><article key={p[0]} className="v2-project" data-reveal style={{transitionDelay:`${Math.min(i*35,240)}ms`}} onClick={()=>setSelected(p[0])}>
          <div className="v2-project-media"><div className="v4-project-top"><span>DN / {p[0]}</span><span>{p[3]}</span></div><img src={p[4]} alt={p[1]}/><span className="pn">{p[0]}</span><span className="open">VIEW CASE STUDY <b>↗</b></span></div>
          <div className="v2-project-meta"><div><span>{p[2]}</span><h3>{p[1]}</h3></div><strong>{p[5]}</strong></div><p>{p[6]}</p>
        </article>)}</div>
      </section>

      <section id="services" className="v2-section v2-services">
        <header className="v2-section-head" data-reveal><div><span>04 / SERVICES</span><h2>Built around the job.</h2></div><p>Each service opens a direct WhatsApp enquiry with a professional project brief.</p></header>
        <div className="v2-service-list">{services.map(s=><button key={s.no} className="v2-service" data-reveal onClick={()=>window.location.assign(wa(s.message))}><span>{s.no}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><aside><span>{s.price}</span><b>ENQUIRE ↗</b></aside></button>)}</div>
      </section>

      <section className="v2-section v2-process"><header className="v2-section-head" data-reveal><div><span>05 / PROCESS</span><h2>Simple. Direct. Deliberate.</h2></div></header><div className="v2-process-grid">{process.map(p=><article key={p[0]} data-reveal><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div></section>

      <section className="v2-founder" data-reveal><div className="v2-founder-photo"><img src="/devam-namera.jpg" alt="Devam Namera"/></div><div><span className="v2-kicker">05 / THE FOUNDER</span><h2>Directly involved in the work.</h2><p>I&apos;m Devam Namera, founder and lead developer at DN Studios. I work across product structure, interface direction and development, keeping communication direct from the first conversation through launch.</p><p>The studio is intentionally independent. That keeps the process lean, feedback clear and the final product close to the original objective.</p><Link className="v2-inline" href="/about">MORE ABOUT DN STUDIOS ↗</Link></div></section>

      <section className="v2-cta" data-reveal><span>06 / PROJECT ENQUIRIES</span><h2>Have a serious idea?</h2><p>Tell me what you are building, the platform you need and when you want it ready.</p><div className="v2-actions"><a className="v2-btn v2-primary" href={wa("Hello DN Studios,\n\nI would like to discuss a digital project. I can share the requirements, platform and target timeline. Please let me know the next steps and an initial estimate.\n\nRegards,")} target="_blank" rel="noreferrer">DISCUSS ON WHATSAPP</a><a className="v2-btn v2-ghost" href="tel:+918780692285">CALL +91 87806 92285</a></div></section>

      <footer className="v2-footer"><div className="v2-footer-grid"><div><img src="/dn-studios-logo.svg" alt="DN Studios" className="v6-logo-footer"/><span>PRIVATE DIGITAL WORKS</span><h2>DN STUDIOS</h2><p>Digital products, websites and software engineered with precision.</p></div><div><span>DIRECT CONTACT</span><a href="tel:+918780692285">+91 87806 92285</a><small>DEVAM NAMERA / FOUNDER &amp; LEAD DEVELOPER</small></div><div className="v2-footer-buttons"><a href="tel:+918780692285">CALL NOW</a><a href={wa("Hello DN Studios,\n\nI would like to discuss a project.\n\nRegards,")} target="_blank" rel="noreferrer">WHATSAPP</a></div></div><div className="v2-footer-line"></div><div className="v2-footer-bottom"><span>DN STUDIOS</span><span>GUJARAT / INDIA</span><span><Link href="/about">ABOUT</Link> <Link href="/terms-and-conditions">TERMS &amp; CONDITIONS</Link></span><span>&copy; 2026 DN STUDIOS</span></div></footer>
    </main>

    {project && <div className="v2-modal-bg" onClick={()=>setSelected(null)}><div className="v2-modal" onClick={e=>e.stopPropagation()}><button onClick={()=>setSelected(null)} className="v2-close">CLOSE ✕</button><div className="v2-modal-img"><img src={project[4]} alt={project[1]}/></div><div className="v2-modal-copy"><span>{project[0]} / {project[2]}</span><h2>{project[1]}</h2><p>{project[7]}</p><dl><div><dt>ESTIMATED INVESTMENT</dt><dd>{project[5]}</dd></div><div><dt>DELIVERABLES</dt><dd>{project[8]}</dd></div></dl><a href={wa(`Hello DN Studios,\n\nI would like to discuss a project inspired by the ${project[1]} case study. Please share the recommended scope, estimated investment and next steps.\n\nRegards,`)} target="_blank" rel="noreferrer">DISCUSS A SIMILAR PROJECT ↗</a></div></div></div>}
  </>;
}
