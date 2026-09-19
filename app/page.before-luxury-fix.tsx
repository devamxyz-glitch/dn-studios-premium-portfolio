"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type Project = {
  id: string;
  title: string;
  type: string;
  image: string;
  price: string;
  timeline: string;
  description: string;
  stack: string[];
};

type Service = {
  number: string;
  title: string;
  text: string;
  tags: string[];
  deliverables: string[];
  price: string;
  featured: string;
};

const projects: Project[] = [
  {id:"01",title:"NOURISH",type:"FOOD DELIVERY APP",image:"/projects/01-nourish.svg",price:"₹8,000+",timeline:"2–3 WEEKS",description:"A polished food ordering experience with restaurant discovery, category browsing, cart flow, order tracking and a clean mobile-first interface.",stack:["NEXT.JS","API","PAYMENTS"]},
  {id:"02",title:"FORM",type:"FITNESS APP",image:"/projects/02-form.svg",price:"₹10,000+",timeline:"2–3 WEEKS",description:"Workout planning and progress tracking with a focused dashboard, routines, activity cards and a high-retention mobile experience.",stack:["REACT","PWA","ANIMATION"]},
  {id:"03",title:"AERIS",type:"TRAVEL APP",image:"/projects/03-aeris.svg",price:"₹12,000+",timeline:"3–4 WEEKS",description:"Travel discovery product for destinations, stays and experiences with editorial imagery, itinerary cards and booking actions.",stack:["NEXT.JS","MAPS","API"]},
  {id:"04",title:"ATELIER",type:"FASHION STORE",image:"/projects/04-atelier.svg",price:"₹12,000+",timeline:"3–4 WEEKS",description:"Fashion commerce interface with collection browsing, product details, wishlist, cart and a refined checkout journey.",stack:["SHOP","CMS","CHECKOUT"]},
  {id:"05",title:"MENTOR",type:"EDUCATION APP",image:"/projects/05-mentor.svg",price:"₹10,000+",timeline:"2–3 WEEKS",description:"Learning platform with course discovery, lesson progress, teacher profiles, video learning surfaces and student dashboards.",stack:["PWA","LMS","AUTH"]},
  {id:"06",title:"HAVEN",type:"HOTEL BOOKING APP",image:"/projects/06-haven.svg",price:"₹12,000+",timeline:"3–4 WEEKS",description:"Hospitality booking experience built around rooms, amenities, dates, offers, guest details and a calm premium visual system.",stack:["BOOKING","CMS","PAYMENTS"]},
  {id:"07",title:"LUMEN",type:"SALON & BEAUTY APP",image:"/projects/07-lumen.svg",price:"₹9,000+",timeline:"2–3 WEEKS",description:"Appointment-led beauty platform with service menus, stylist profiles, availability, packages and instant booking.",stack:["REACT","BOOKING","API"]},
  {id:"08",title:"NEST",type:"REAL ESTATE APP",image:"/projects/08-nest.svg",price:"₹15,000+",timeline:"3–5 WEEKS",description:"Property discovery experience with visual listings, filters, location context, property details and lead capture.",stack:["NEXT.JS","MAPS","CRM"]},
  {id:"09",title:"TABLE",type:"RESTAURANT APP",image:"/projects/09-table.svg",price:"₹9,000+",timeline:"2–3 WEEKS",description:"Restaurant discovery and reservation product combining menus, tables, availability, offers and a frictionless booking flow.",stack:["BOOKING","CMS","API"]},
  {id:"10",title:"ROUTE",type:"LOGISTICS APP",image:"/projects/10-route.svg",price:"₹18,000+",timeline:"4–5 WEEKS",description:"Delivery operations interface with shipment cards, route status, driver activity, tracking and delivery updates.",stack:["MAPS","LIVE DATA","DASHBOARD"]},
  {id:"11",title:"MOMENT",type:"EVENTS APP",image:"/projects/11-moment.svg",price:"₹11,000+",timeline:"2–3 WEEKS",description:"Events platform for discovering experiences, viewing schedules, saving events and completing ticket reservations.",stack:["NEXT.JS","TICKETS","CMS"]},
  {id:"12",title:"CURATE",type:"MARKETPLACE APP",image:"/projects/12-curate.svg",price:"₹20,000+",timeline:"4–6 WEEKS",description:"Multi-category marketplace concept with seller cards, product discovery, collections, cart and seller workflows.",stack:["MARKETPLACE","AUTH","CHECKOUT"]},
  {id:"13",title:"PULSE",type:"BUSINESS SaaS",image:"/projects/13-pulse.svg",price:"₹25,000+",timeline:"4–6 WEEKS",description:"Business operations dashboard with activity overview, tasks, performance cards, team views and clean data hierarchy.",stack:["REACT","DASHBOARD","API"]},
  {id:"14",title:"DAILY",type:"GROCERY APP",image:"/projects/14-daily.svg",price:"₹10,000+",timeline:"2–4 WEEKS",description:"Fast grocery shopping experience with categories, offers, product cards, cart, delivery slot selection and order status.",stack:["COMMERCE","PWA","API"]},
  {id:"15",title:"NOVA",type:"SERVICE BOOKING APP",image:"/projects/15-nova.svg",price:"₹14,000+",timeline:"3–4 WEEKS",description:"Service marketplace for finding professionals, comparing services, checking slots and making appointments from one place.",stack:["BOOKING","SEARCH","AUTH"]},
];

const services: Service[] = [
  {number:"01",title:"WEB DEVELOPMENT",text:"High-end websites and digital experiences engineered for speed, responsiveness and a strong visual identity.",tags:["NEXT.JS","REACT","TYPESCRIPT"],deliverables:["Premium websites","Landing pages","Corporate sites","Interactive experiences"],price:"₹6,000 – ₹30,000+",featured:"DN STUDIOS PORTFOLIO"},
  {number:"02",title:"MOBILE APPLICATIONS",text:"Mobile-first product experiences designed around real user journeys, not desktop layouts squeezed into a phone.",tags:["FLUTTER","ANDROID","IOS"],deliverables:["Consumer apps","Booking apps","Utility apps","Business apps"],price:"₹12,000 – ₹55,000+",featured:"FORM / LUMEN"},
  {number:"03",title:"WEB APPLICATIONS",text:"Dashboards, portals and browser software with clean workflows, authentication, data and role-based interfaces.",tags:["REACT","API","AUTH"],deliverables:["Dashboards","Customer portals","Admin panels","CRM systems"],price:"₹15,000 – ₹65,000+",featured:"PULSE"},
  {number:"04",title:"E-COMMERCE",text:"Commerce products that connect discovery, products, cart, checkout and operational flows into one experience.",tags:["SHOP","CMS","CHECKOUT"],deliverables:["Online stores","Catalogs","Checkout","Seller systems"],price:"₹12,000 – ₹45,000+",featured:"ATELIER / CURATE"},
  {number:"05",title:"PWA / SYSTEMS",text:"Installable web products for teams that need reliable workflows, responsive interfaces and fast access from any device.",tags:["PWA","OFFLINE","API"],deliverables:["Progressive apps","Offline workflows","Internal systems","API portals"],price:"₹15,000 – ₹55,000+",featured:"MENTOR / ROUTE"},
  {number:"06",title:"CUSTOM SOFTWARE",text:"Purpose-built software for business workflows that need something more precise than an off-the-shelf tool.",tags:["AUTOMATION","API","WORKFLOW"],deliverables:["Internal tools","Automation","Role systems","Integrations"],price:"₹25,000 – ₹1,00,000+",featured:"CUSTOM BUILD"},
];

const popular = ["Food Delivery","Fitness","Travel","Fashion","Education","Hotel Booking","Salon & Beauty","Real Estate","Restaurant","Logistics","Events","Marketplace"];

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({defaults:{ease:"power4.out"}});
      tl.fromTo(".hero-copy > *", {opacity:0,y:30}, {opacity:1,y:0,duration:.8,stagger:.08})
        .fromTo(".hero-photo", {opacity:0,scale:1.04}, {opacity:1,scale:1,duration:1.2}, "-.55")
        .fromTo(".hero-line", {scaleX:0}, {scaleX:1,duration:.8}, "-.55");
      gsap.to(".hero-photo img", {scale:1.025,duration:7,repeat:-1,yoyo:true,ease:"sine.inOut"});
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el,{opacity:0,y:35},{opacity:1,y:0,duration:.75,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}});
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedService ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject, selectedService]);

  return (
    <main ref={root} className="site">
      <div className="luxury-noise" />
      <nav className="nav">
        <Link href="/" className="nav-brand"><img src="/dn-studios-logo.jpg" alt="DN Studios" /><span>DN <b>STUDIOS</b></span></Link>
        <div className="nav-center">PRIVATE DIGITAL STUDIO / INDIA</div>
        <div className="nav-right"><a href="#work">WORK</a><a href="#services">SERVICES</a><Link href="/about">ABOUT</Link><a href="#contact">CONTACT</a><a className="hire-pill" href="#contact">HIRE ME ↗</a></div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker">BUILD · DESIGN · LAUNCH</div>
          <div className="hero-line" />
          <div className="hero-brand-row">
            <div><span className="eyebrow">FOUNDER & LEAD DEVELOPER</span><h1>DEVAM<br/><em>NAMERA.</em></h1></div>
            <img className="hero-mark" src="/dn-studios-logo.jpg" alt="DN Studios mark" />
          </div>
          <p className="hero-intro">Turning ideas into powerful digital products — modern websites, mobile applications, web applications and custom software built for real users.</p>
          <div className="hero-actions"><a className="gold-button" href="#work">VIEW MY PROJECTS <span>→</span></a><a className="outline-button" href="#contact">GET IN TOUCH <span>↗</span></a></div>
          <div className="hero-meta"><span>GUJARAT / INDIA</span><span>WEB · MOBILE · UI/UX · E-COMMERCE · API</span><span>5+ YEARS EXPERIENCE</span></div>
        </div>
        <div className="hero-photo-wrap"><div className="hero-photo"><img src="/devam-namera.jpg" alt="Devam Namera"/><div className="photo-vignette"/><div className="photo-caption"><span>DN / 001</span><span>DEVAM NAMERA</span></div></div><div className="hero-side-note">CODE<br/>DESIGN<br/>CREATE ↗</div></div>
      </section>

      <section className="letterhead-strip"><span className="rule"/><img src="/dn-studios-logo.jpg" alt="DN Studios"/><div><b>DN STUDIOS</b><span>PRIVATE DIGITAL WORKS · WEB · MOBILE · SOFTWARE</span></div><span className="rule"/></section>

      <section className="statement reveal"><span className="section-index">01 / THE STUDIO</span><div className="statement-content"><div><span className="statement-small">NOT JUST A WEBSITE.<br/>NOT JUST AN APP.</span><h2>REAL<br/><span>PRODUCTS.</span></h2></div><p>DN Studios is an independent digital studio led by Devam Namera. The work combines visual design, product thinking and development to turn ideas into polished digital experiences that feel modern, useful and built to last.</p></div></section>

      <section id="work" className="work-section">
        <div className="section-heading reveal"><div><span className="section-index">02 / PROJECT ARCHIVE</span><h2>MOST POPULAR<br/><em>APPS.</em></h2></div><span className="section-count">15 FEATURED PRODUCTS</span></div>
        <p className="section-lead reveal">A curated selection of realistic product concepts and builds across food, fitness, travel, commerce, education, hospitality, services and business software.</p>
        <div className="project-grid">{projects.map((project) => <button key={project.id} className="project-tile reveal" onClick={() => setSelectedProject(project)}><div className="project-tile-media"><img src={project.image} alt={project.title}/><span className="project-number">{project.id}</span><span className="project-label">PRODUCT UI</span><div className="tile-shine"/></div><div className="project-tile-copy"><div className="project-topline"><span>{project.type}</span><b>{project.price}</b></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-mini-meta"><span>{project.timeline}</span><span>{project.stack.slice(0,2).join(" · ")}</span></div><strong>OPEN CASE STUDY ↗</strong></div></button>)}</div>
        <div className="more-projects reveal"><div><span className="section-index">PROJECTS BEYOND THE FEATURED SET</span><h3>WE'VE BUILT<br/><em>MANY MORE.</em></h3></div><p>These are the selected products shown publicly. The studio also works on smaller websites, business tools, landing pages, redesigns, integrations and custom digital experiences.</p></div>
      </section>

      <section className="experience-strip reveal"><div className="experience-years"><b>5+</b><span>YEARS<br/>EXPERIENCE</span></div><div className="experience-copy"><span>5+ YEARS EXPERIENCED</span><p>Building high-quality web and mobile applications with a focus on performance, clean code, visual detail and real user experiences.</p></div><div className="experience-stat"><b>15+</b><span>FEATURED<br/>PRODUCTS</span></div><div className="experience-stat"><b>6</b><span>CORE<br/>SERVICES</span></div><div className="experience-stat"><b>100%</b><span>DETAIL<br/>FOCUSED</span></div></section>

      <section className="popular-section reveal"><div className="section-heading"><div><span className="section-index">03 / PRODUCT CATEGORIES</span><h2>POPULAR<br/><em>BUILDS.</em></h2></div></div><div className="popular-grid">{popular.map((item,i)=><div className="popular-item" key={item}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b><i>↗</i></div>)}</div></section>

      <section id="services" className="capabilities"><div className="section-heading reveal"><div><span className="section-index">04 / CAPABILITIES</span><h2>WHAT I<br/><em>BUILD.</em></h2></div><span className="section-count">CLICK A SERVICE / OPEN DOSSIER</span></div><div className="service-list">{services.map(service=><button key={service.number} className="service-row reveal" onClick={()=>setSelectedService(service)}><span className="service-number">{service.number}</span><span className="service-title">{service.title}</span><span className="service-price">{service.price}</span><span className="service-arrow">↗</span></button>)}</div></section>

      <section className="luxury-break reveal"><img src="/dn-studios-logo.jpg" alt="DN Studios"/><div><span>PRECISION · PERFORMANCE · PRESENCE</span><h2>THE DETAILS<br/><em>DO THE TALKING.</em></h2></div><p>Ultra-luxury digital work is about restraint, hierarchy, typography, motion and performance working together — not filling every empty space.</p></section>

      <section className="founder reveal"><div className="founder-image"><img src="/devam-namera.jpg" alt="Devam Namera"/><div className="founder-image-overlay"/><span>FOUNDER / LEAD DEVELOPER</span></div><div className="founder-copy"><span className="section-index">05 / THE FOUNDER</span><h2>DEVAM<br/><em>NAMERA.</em></h2><p className="founder-role">FOUNDER & LEAD DEVELOPER · DN STUDIOS</p><p>I build digital products from the intersection of technology, design and detail — from the first idea and interface to responsive development, integrations and launch.</p><Link href="/about" className="outline-button">MORE ABOUT DN STUDIOS <span>↗</span></Link></div></section>

      <section id="contact" className="contact reveal"><span className="section-index">06 / CONTACT</span><div className="contact-title"><span>LET'S BUILD</span><span className="italic">SOMETHING</span><span>GREAT.</span></div><a className="contact-email" href="mailto:hello@dnstudios.in">HELLO@DNSTUDIOS.IN</a><div className="contact-bottom"><span>GUJARAT / INDIA</span><span>WEB · MOBILE · SOFTWARE</span><span>AVAILABLE FOR NEW PROJECTS</span></div></section>

      <footer className="footer"><div className="footer-brand"><img src="/dn-studios-logo.jpg" alt="DN Studios"/><div><b>DN</b><span>STUDIOS</span></div></div><div><span>IDEAS → CODE → REALITY</span><span>© 2026 DN STUDIOS</span></div><div><a href="mailto:hello@dnstudios.in">HELLO@DNSTUDIOS.IN</a><span>PRIVATE DIGITAL WORKS</span></div></footer>

      {(selectedProject || selectedService) && <div className="dossier-backdrop" onClick={()=>{setSelectedProject(null);setSelectedService(null)}}><div className="dossier" onClick={e=>e.stopPropagation()}><button className="dossier-close" onClick={()=>{setSelectedProject(null);setSelectedService(null)}}>CLOSE ×</button>{selectedProject && <div className="dossier-project"><div className="dossier-image"><img src={selectedProject.image} alt={selectedProject.title}/></div><div className="dossier-copy"><span className="section-index">CASE {selectedProject.id} / PRODUCT DOSSIER</span><span className="dossier-type">{selectedProject.type}</span><h2>{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="dossier-commercial"><div><small>STARTING FROM</small><strong>{selectedProject.price}</strong></div><div><small>TIMELINE</small><strong>{selectedProject.timeline}</strong></div><div><small>STACK</small><strong>{selectedProject.stack.join(" · ")}</strong></div></div><div className="dossier-tags">{selectedProject.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div></div>}{selectedService && <div className="dossier-service"><span className="section-index">{selectedService.number} / SERVICE DOSSIER</span><span className="dossier-type">FEATURED: {selectedService.featured}</span><h2>{selectedService.title}</h2><p className="dossier-lead">{selectedService.text}</p><div className="dossier-commercial"><div><small>STARTING RANGE</small><strong>{selectedService.price}</strong></div><div><small>DELIVERABLES</small><strong>{selectedService.deliverables.length} CORE ITEMS</strong></div><div><small>METHOD</small><strong>DESIGN → BUILD → LAUNCH</strong></div></div><div className="dossier-service-grid"><div><span>DELIVERABLES</span>{selectedService.deliverables.map(x=><b key={x}>{x}</b>)}</div><div><span>STACK / METHODS</span><div className="dossier-tags">{selectedService.tags.map(x=><span key={x}>{x}</span>)}</div></div></div></div>}</div></div>}
    </main>
  );
}
