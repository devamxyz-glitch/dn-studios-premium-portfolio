"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const WA_NUMBER = "918780692285";

const services = [
  {
    no: "01",
    title: "WEB DEVELOPMENT",
    price: "From INR 8,000",
    text: "Premium marketing websites, studio sites and brand platforms with strong responsive execution.",
    message: "Hello DN Studios,\n\nI would like to enquire about a website project. I can share the business details, required pages and target timeline. Please let me know the recommended approach and an initial estimate.\n\nRegards,"
  },
  {
    no: "02",
    title: "MOBILE APPLICATIONS",
    price: "From INR 12,000",
    text: "Thoughtful mobile products built around clear user journeys, polished interfaces and practical functionality.",
    message: "Hello DN Studios,\n\nI would like to discuss a mobile application project. I can share the product idea, required features and target platform. Please let me know the next steps and an initial estimate.\n\nRegards,"
  },
  {
    no: "03",
    title: "WEB APPLICATIONS",
    price: "From INR 15,000",
    text: "Dashboards, portals, SaaS products and internal systems designed for real operational use.",
    message: "Hello DN Studios,\n\nI would like to discuss a web application project. I can share the workflow, required modules and expected timeline. Please let me know the recommended approach and an initial estimate.\n\nRegards,"
  },
  {
    no: "04",
    title: "E-COMMERCE",
    price: "From INR 12,000",
    text: "Commerce experiences with considered product presentation, checkout flows and scalable foundations.",
    message: "Hello DN Studios,\n\nI would like to discuss an e-commerce project. I can share the product catalogue, preferred features and expected launch timeline. Please let me know the next steps and an initial estimate.\n\nRegards,"
  },
  {
    no: "05",
    title: "PWA / SYSTEMS",
    price: "From INR 15,000",
    text: "Fast installable web experiences and lightweight systems for cross-device business use.",
    message: "Hello DN Studios,\n\nI would like to enquire about a PWA or business system. I can share the workflow, required functionality and target users. Please advise on the suitable approach and estimated investment.\n\nRegards,"
  },
  {
    no: "06",
    title: "CUSTOM SOFTWARE",
    price: "From INR 25,000",
    text: "Purpose-built software for specialised workflows, operations and product requirements.",
    message: "Hello DN Studios,\n\nI would like to discuss a custom software project. I can share the operational requirements, desired features and timeline. Please let me know how we can proceed with the initial discussion and estimate.\n\nRegards,"
  }
];

const projects = [
  { id:"01", title:"NOURISH", type:"HEALTH / WELLNESS", category:"Web", image:"/projects/01-nourish.svg", price:"From INR 8,000", intro:"A calm digital experience for a modern wellness brand.", detail:"NOURISH focuses on editorial hierarchy, trust-building content and a frictionless mobile reading experience.", deliverables:"Responsive website, visual system, content structure, performance pass" },
  { id:"02", title:"FORM", type:"FITNESS PLATFORM", category:"Web", image:"/projects/02-form.svg", price:"From INR 10,000", intro:"A focused fitness platform built around a confident visual system.", detail:"FORM combines structured information, strong typography and conversion-led calls to action without visual noise.", deliverables:"UI direction, responsive implementation, interaction design, deployment" },
  { id:"03", title:"AERIS", type:"TRAVEL / LIFESTYLE", category:"Web", image:"/projects/03-aeris.svg", price:"From INR 12,000", intro:"An atmospheric travel interface with a refined editorial rhythm.", detail:"AERIS uses large imagery, restrained typography and intentional spacing to make exploration feel effortless.", deliverables:"Experience design, responsive frontend, visual motion, optimisation" },
  { id:"04", title:"ATELIER", type:"CREATIVE STUDIO", category:"Web", image:"/projects/04-atelier.svg", price:"From INR 12,000", intro:"A visual-first studio presence designed for premium positioning.", detail:"ATELIER puts work and identity at the centre, with a flexible case-study structure and a quieter luxury aesthetic.", deliverables:"Art direction, portfolio system, responsive build, CMS-ready structure" },
  { id:"05", title:"MENTOR", type:"EDUCATION", category:"App", image:"/projects/05-mentor.svg", price:"From INR 10,000", intro:"A practical learning platform focused on clarity and progress.", detail:"MENTOR turns a complex learning journey into a simple sequence of discovery, action and measurable progress.", deliverables:"Product structure, dashboard UI, user flows, responsive implementation" },
  { id:"06", title:"HAVEN", type:"PROPERTY / LIVING", category:"Web", image:"/projects/06-haven.svg", price:"From INR 12,000", intro:"A premium property experience built around confidence and calm.", detail:"HAVEN uses a restrained palette and highly structured information to support premium property discovery.", deliverables:"Brand-led interface, listing flow, responsive frontend, interactions" },
  { id:"07", title:"LUMEN", type:"FINANCE / INSIGHT", category:"App", image:"/projects/07-lumen.svg", price:"From INR 9,000", intro:"A focused information interface where clarity comes first.", detail:"LUMEN presents dense information with clear hierarchy and deliberate grouping for quick decision making.", deliverables:"Information architecture, dashboard design, responsive application" },
  { id:"08", title:"NEST", type:"HOME / SERVICES", category:"Web", image:"/projects/08-nest.svg", price:"From INR 15,000", intro:"A warmer digital system for home-focused services.", detail:"NEST pairs a polished visual identity with approachable service discovery and clear enquiry paths.", deliverables:"Service architecture, conversion flow, mobile optimisation, launch" },
  { id:"09", title:"TABLE", type:"HOSPITALITY", category:"Commerce", image:"/projects/09-table.svg", price:"From INR 9,000", intro:"A hospitality experience designed around appetite and immediacy.", detail:"TABLE brings menus, reservations and visual storytelling together without making the experience feel heavy.", deliverables:"Menu system, responsive website, CTA design, booking flow" },
  { id:"10", title:"ROUTE", type:"LOGISTICS", category:"App", image:"/projects/10-route.svg", price:"From INR 18,000", intro:"An operational interface designed for speed and visibility.", detail:"ROUTE prioritises the information operators need most, with a compact interface and strong status hierarchy.", deliverables:"Operational dashboard, workflow design, responsive implementation" },
  { id:"11", title:"MOMENT", type:"PHOTO / CREATIVE", category:"Web", image:"/projects/11-moment.svg", price:"From INR 11,000", intro:"A portfolio experience where imagery leads the narrative.", detail:"MOMENT creates a gallery-led journey that lets creative work breathe while keeping navigation concise.", deliverables:"Editorial layout, gallery system, responsive design, motion" },
  { id:"12", title:"CURATE", type:"E-COMMERCE", category:"Commerce", image:"/projects/12-curate.svg", price:"From INR 20,000", intro:"A refined storefront for considered products.", detail:"CURATE combines premium product presentation with practical browsing and purchase flows.", deliverables:"Storefront, product UI, cart flow, mobile commerce experience" },
  { id:"13", title:"PULSE", type:"BUSINESS APP", category:"App", image:"/projects/13-pulse.svg", price:"From INR 25,000", intro:"A compact business system for fast operational visibility.", detail:"PULSE presents actionable information with a restrained interface designed for frequent daily use.", deliverables:"Dashboard system, role-based views, responsive implementation" },
  { id:"14", title:"DAILY", type:"PRODUCTIVITY", category:"App", image:"/projects/14-daily.svg", price:"From INR 10,000", intro:"A practical productivity experience with a quieter interface.", detail:"DAILY is built around routines, tasks and small repeatable actions that need almost no learning curve.", deliverables:"Product flow, interface system, interaction design" },
  { id:"15", title:"NOVA", type:"COMMERCE PLATFORM", category:"Commerce", image:"/projects/15-nova.svg", price:"From INR 14,000", intro:"A modern commerce concept with a sharp digital presence.", detail:"NOVA combines product discovery, promotional hierarchy and a compact checkout journey.", deliverables:"Commerce UI, product architecture, responsive build, deployment" }
];

const process = [
  ["01","DISCOVERY","Scope, audience, requirements and the actual problem are understood before the interface is shaped."],
  ["02","DIRECTION","Information hierarchy, visual language and technical approach are established with practical constraints in mind."],
  ["03","BUILD","The approved direction becomes a working product with responsive behaviour, interactions and regular review points."],
  ["04","LAUNCH","Final checks, deployment and handover are treated as part of the project rather than an afterthought."]
];

function openWhatsApp(message: string) {
  window.location.assign("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message));
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [loaded, setLoaded] = useState(false);
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  useEffect(() => {
    const introTimer = window.setTimeout(() => setLoaded(true), 700);

    const reveal = () => {
      const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      items.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    };

    const cleanupReveal = reveal();

    const onMove = (event: MouseEvent) => {
      if (!cursorDot.current || !cursorRing.current) return;
      cursorDot.current.style.transform = `translate3d(${event.clientX - 3}px, ${event.clientY - 3}px, 0)`;
      cursorRing.current.style.transform = `translate3d(${event.clientX - 20}px, ${event.clientY - 20}px, 0)`;
    };

    const onScroll = () => {
      if (!progress.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.current.style.width = `${value}%`;
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    onScroll();

    return () => {
      window.clearTimeout(introTimer);
      cleanupReveal();
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div className={`lux-intro ${loaded ? "lux-intro-hidden" : ""}`}>
        <div className="lux-intro-mark">DN</div>
        <div className="lux-intro-line"></div>
        <span>PRIVATE DIGITAL WORKS</span>
      </div>

      <div ref={cursorDot} className="lux-cursor-dot"></div>
      <div ref={cursorRing} className="lux-cursor-ring"></div>
      <div ref={progress} className="lux-progress"></div>

      <main className="lux-site">
        <nav className="lux-nav">
          <Link href="/" className="lux-brand">
            <span className="lux-brand-mark">DN</span>
            <span>
              <strong>DN STUDIOS</strong>
              <small>PRIVATE DIGITAL WORKS</small>
            </span>
          </Link>

          <div className="lux-nav-links">
            <a href="#work">WORK</a>
            <a href="#services">SERVICES</a>
            <Link href="/about">ABOUT</Link>
          </div>

          <a
            className="lux-nav-cta"
            href="https://wa.me/918780692285?text=Hello%20DN%20Studios%2C%0A%0AI%20would%20like%20to%20discuss%20a%20digital%20project.%20Please%20share%20the%20next%20steps%20and%20an%20initial%20estimate.%0A%0ARegards%2C"
            target="_blank"
            rel="noreferrer"
          >
            START A PROJECT
          </a>
        </nav>

        <section className="lux-hero">
          <div className="lux-hero-grid"></div>
          <div className="lux-hero-copy" data-reveal>
            <span className="lux-eyebrow">DEVAM NAMERA / FOUNDER &amp; LEAD DEVELOPER</span>
            <h1>
              Digital work
              <em>with a sharper</em>
              point of view.
            </h1>
            <p>
              DN Studios is an independent digital studio creating websites, applications
              and custom software for brands, businesses and founders.
            </p>

            <div className="lux-hero-actions">
              <a href="#work" className="lux-btn lux-btn-primary">VIEW SELECTED WORK</a>
              <a href="tel:+918780692285" className="lux-btn lux-btn-ghost">CALL +91 87806 92285</a>
            </div>

            <div className="lux-hero-meta">
              <span>5+ YEARS EXPERIENCE</span>
              <span>GUJARAT / INDIA</span>
              <span>AVAILABLE FOR SELECT PROJECTS</span>
            </div>
          </div>

          <div className="lux-orbit" data-reveal>
            <div className="lux-orbit-glow"></div>
            <div className="lux-orbit-ring lux-ring-1"></div>
            <div className="lux-orbit-ring lux-ring-2"></div>
            <div className="lux-orbit-ring lux-ring-3"></div>
            <div className="lux-orbit-core">
              <span>DN</span>
              <small>STUDIO / 2026</small>
            </div>
            <div className="lux-orbit-chip chip-a">WEB</div>
            <div className="lux-orbit-chip chip-b">APP</div>
            <div className="lux-orbit-chip chip-c">SYSTEM</div>
          </div>
        </section>

        <section className="lux-manifesto" data-reveal>
          <span>01 / STUDIO NOTE</span>
          <h2>
            Good digital work should feel
            <i>obvious</i> after it is finished.
          </h2>
          <p>
            The visual direction should make sense. The interface should feel natural.
            The technology should stay out of the client&apos;s way. Every decision should
            have a reason behind it.
          </p>
        </section>

        <section id="work" className="lux-work-section">
          <div className="lux-section-head" data-reveal>
            <div>
              <span>02 / SELECTED WORK</span>
              <h2>Projects with purpose.</h2>
            </div>
            <p>Fifteen selected concepts across web, applications and commerce.</p>
          </div>

          <div className="lux-filter" data-reveal>
            {["All","Web","App","Commerce"].map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "All" ? "ALL WORK" : filter.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="lux-project-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="lux-project-card"
                data-reveal
                style={{ transitionDelay: `${Math.min(index * 40, 260)}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="lux-project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="lux-project-number">{project.id}</span>
                  <span className="lux-project-open">OPEN CASE STUDY ↗</span>
                </div>
                <div className="lux-project-info">
                  <div>
                    <span>{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <strong>{project.price}</strong>
                </div>
                <p>{project.intro}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="lux-services">
          <div className="lux-section-head" data-reveal>
            <div>
              <span>03 / SERVICES</span>
              <h2>Built around the job.</h2>
            </div>
            <p>Click any service to start a direct WhatsApp enquiry.</p>
          </div>

          <div className="lux-service-list">
            {services.map((service) => (
              <button
                key={service.no}
                className="lux-service-row"
                onClick={() => openWhatsApp(service.message)}
                data-reveal
              >
                <span className="lux-service-no">{service.no}</span>
                <div className="lux-service-main">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className="lux-service-price">
                  <span>{service.price}</span>
                  <b>ENQUIRE ↗</b>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="lux-process">
          <div className="lux-section-head" data-reveal>
            <div>
              <span>04 / PROCESS</span>
              <h2>Simple. Direct. Deliberate.</h2>
            </div>
          </div>

          <div className="lux-process-grid">
            {process.map(([no, title, text]) => (
              <article key={no} data-reveal>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lux-founder" data-reveal>
          <div className="lux-founder-image">
            <div className="lux-founder-frame">
              <img src="/devam-namera.jpg" alt="Devam Namera" />
            </div>
          </div>
          <div className="lux-founder-copy">
            <span>05 / THE FOUNDER</span>
            <h2>Directly involved in the work.</h2>
            <p>
              I&apos;m Devam Namera, founder and lead developer at DN Studios.
              I work across product structure, interface direction and development,
              keeping communication direct from the first conversation through launch.
            </p>
            <p>
              The studio is intentionally independent. That keeps the process lean,
              feedback clear and the final product close to the original objective.
            </p>
            <Link href="/about" className="lux-inline-link">MORE ABOUT DN STUDIOS ↗</Link>
          </div>
        </section>

        <section className="lux-cta" data-reveal>
          <div className="lux-cta-kicker">06 / PROJECT ENQUIRIES</div>
          <h2>Have a serious idea?</h2>
          <p>
            Tell me what you are building, the platform you need and when you want it ready.
            We can start with a straightforward conversation.
          </p>
          <div className="lux-cta-actions">
            <a
              href="https://wa.me/918780692285?text=Hello%20DN%20Studios%2C%0A%0AI%20would%20like%20to%20discuss%20a%20digital%20project.%20I%20can%20share%20the%20requirements%2C%20platform%20and%20target%20timeline.%20Please%20let%20me%20know%20the%20next%20steps%20and%20an%20initial%20estimate.%0A%0ARegards%2C"
              target="_blank"
              rel="noreferrer"
              className="lux-btn lux-btn-primary"
            >
              DISCUSS ON WHATSAPP
            </a>
            <a href="tel:+918780692285" className="lux-btn lux-btn-ghost">
              CALL +91 87806 92285
            </a>
          </div>
        </section>

        <footer className="lux-footer">
          <div className="lux-footer-top">
            <div>
              <span className="lux-footer-kicker">PRIVATE DIGITAL WORKS</span>
              <h2>DN STUDIOS</h2>
              <p>Digital products, websites and software engineered with precision.</p>
            </div>

            <div className="lux-footer-contact">
              <span>DIRECT CONTACT</span>
              <a href="tel:+918780692285">+91 87806 92285</a>
              <small>DEVAM NAMERA / FOUNDER &amp; LEAD DEVELOPER</small>
            </div>

            <div className="lux-footer-buttons">
              <a href="tel:+918780692285">CALL NOW</a>
              <a
                href="https://wa.me/918780692285?text=Hello%20DN%20Studios%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A%0ARegards%2C"
                target="_blank"
                rel="noreferrer"
              >
                WHATSAPP
              </a>
            </div>
          </div>

          <div className="lux-footer-line"></div>

          <div className="lux-footer-bottom">
            <span>DN STUDIOS</span>
            <span>GUJARAT / INDIA</span>
            <span className="lux-footer-links">
              <Link href="/about">ABOUT</Link>
              <Link href="/terms-and-conditions">TERMS &amp; CONDITIONS</Link>
            </span>
            <span>&copy; 2026 DN STUDIOS</span>
          </div>
        </footer>
      </main>

      {selectedProject && (
        <div className="lux-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="lux-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} case study`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="lux-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close">
              CLOSE ✕
            </button>

            <div className="lux-modal-visual">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="lux-modal-copy">
              <span>{selectedProject.id} / {selectedProject.type}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.detail}</p>

              <div className="lux-modal-meta">
                <div>
                  <small>ESTIMATED INVESTMENT</small>
                  <strong>{selectedProject.price}</strong>
                </div>
                <div>
                  <small>DELIVERABLES</small>
                  <strong>{selectedProject.deliverables}</strong>
                </div>
              </div>

              <a
                className="lux-modal-action"
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  `Hello DN Studios,\n\nI would like to discuss a project inspired by the ${selectedProject.title} case study. Please share the recommended scope, estimated investment and next steps.\n\nRegards,`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                DISCUSS A SIMILAR PROJECT ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}