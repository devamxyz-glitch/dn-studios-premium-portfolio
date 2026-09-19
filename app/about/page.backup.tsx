"use client";

import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "CLARITY",
    text: "Every digital product starts with a clear purpose, a defined audience and a focused user journey."
  },
  {
    number: "02",
    title: "CRAFT",
    text: "Interfaces are designed with precision across typography, spacing, interaction, responsiveness and visual hierarchy."
  },
  {
    number: "03",
    title: "PERFORMANCE",
    text: "Beautiful products should also feel fast, stable and reliable across real devices and real-world conditions."
  },
  {
    number: "04",
    title: "SCALABILITY",
    text: "The architecture is planned so the product can evolve with new users, features, integrations and business requirements."
  }
];

const capabilities = [
  "Web Development",
  "Mobile Applications",
  "Web Applications",
  "E-Commerce",
  "PWA & Systems",
  "Custom Software",
  "UI / UX Design",
  "API Integration"
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-top">
          <Link href="/" className="about-back">
            ← DN STUDIOS
          </Link>

          <span className="about-index">ABOUT / 001</span>
        </div>

        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow">DN STUDIOS — PRIVATE DIGITAL WORKS</span>

            <h1>
              Building digital
              <span> products with purpose.</span>
            </h1>

            <p className="about-lead">
              DN Studios is an independent digital studio focused on building
              modern websites, applications and custom software for people and
              businesses that care about quality.
            </p>

            <div className="about-hero-actions">
              <Link href="/#projects" className="about-primary-btn">
                VIEW PROJECTS ↗
              </Link>

              <Link href="/#contact" className="about-secondary-btn">
                START A PROJECT
              </Link>
            </div>
          </div>

          <div className="about-founder-card">
            <div className="about-photo-frame">
              <img
                src="/devam.jpg"
                alt="Devam Namera — Founder of DN Studios"
              />
              <div className="about-photo-overlay"></div>
            </div>

            <div className="about-founder-meta">
              <div>
                <small>FOUNDER / LEAD DEVELOPER</small>
                <strong>DEVAM NAMERA</strong>
              </div>

              <span>DN / 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-section-label">
          <span>02</span>
          <span>THE STUDIO</span>
        </div>

        <div className="about-intro-content">
          <h2>
            Small studio.
            <br />
            Serious digital work.
          </h2>

          <div className="about-intro-text">
            <p>
              DN Studios was built around a simple idea: digital products
              should look exceptional, work beautifully and solve a real
              problem.
            </p>

            <p>
              From landing pages and e-commerce experiences to mobile
              applications and custom business systems, every project is
              approached with the same attention to detail.
            </p>

            <p>
              The goal is not to make another generic website. The goal is to
              create a product that feels considered, memorable and ready for
              the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="about-experience">
        <div className="experience-number">
          <strong>5+</strong>
          <span>YEARS</span>
          <small>EXPERIENCE</small>
        </div>

        <div className="experience-copy">
          <span>EXPERIENCE / APPROACH</span>
          <h2>
            Design-led development,
            <br />
            engineered for reality.
          </h2>
          <p>
            The work sits between design and engineering — combining premium
            visual direction with practical development, responsive systems
            and modern technology.
          </p>
        </div>

        <div className="experience-stats">
          <div>
            <strong>50+</strong>
            <span>PROJECTS</span>
          </div>

          <div>
            <strong>8</strong>
            <span>CORE SERVICES</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>FOCUS ON QUALITY</span>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-section-label">
          <span>03</span>
          <span>PRINCIPLES</span>
        </div>

        <div className="principles-heading">
          <span>HOW WE WORK</span>
          <h2>
            Every detail has
            <br />
            a reason.
          </h2>
        </div>

        <div className="principles-grid">
          {principles.map((item) => (
            <article className="principle-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-capabilities">
        <div className="about-section-label">
          <span>04</span>
          <span>CAPABILITIES</span>
        </div>

        <div className="capabilities-layout">
          <div>
            <span className="capability-kicker">WHAT DN STUDIOS BUILDS</span>
            <h2>
              From first idea
              <br />
              to finished product.
            </h2>
          </div>

          <div className="capabilities-list">
            {capabilities.map((item, index) => (
              <div className="capability-row" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-statement">
        <div className="statement-mark">DN</div>

        <p>
          “The best digital work is not the loudest. It is the product people
          understand immediately, enjoy using and remember afterwards.”
        </p>

        <span>— DEVAM NAMERA / DN STUDIOS</span>
      </section>

      <section className="about-cta">
        <span>HAVE AN IDEA?</span>

        <h2>
          Let&apos;s build
          <br />
          something exceptional.
        </h2>

        <Link href="/#contact">
          START A PROJECT <span>→</span>
        </Link>
      </section>

      <footer className="about-footer">
        <div className="about-footer-brand">
          <img src="/dn-studios-logo.jpg" alt="DN Studios" />
          <span>PRIVATE DIGITAL WORKS</span>
        </div>

        <div>© 2026 DN STUDIOS</div>

        <Link href="/">BACK TO HOME ↑</Link>
      </footer>
    </main>
  );
}
