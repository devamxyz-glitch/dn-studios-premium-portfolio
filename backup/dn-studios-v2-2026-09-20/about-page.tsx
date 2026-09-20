import Link from "next/link";

const capabilities = [
  {
    no: "01",
    title: "Web Development",
    text: "Responsive websites and digital platforms with a strong focus on structure, performance and presentation."
  },
  {
    no: "02",
    title: "Mobile Applications",
    text: "Mobile products designed around practical user flows, clear interfaces and dependable application architecture."
  },
  {
    no: "03",
    title: "Web Applications",
    text: "Dashboards, portals, SaaS products and workflow-based applications built for real operational use."
  },
  {
    no: "04",
    title: "E-Commerce",
    text: "Online stores with thoughtful product presentation, checkout journeys and scalable commerce foundations."
  },
  {
    no: "05",
    title: "PWA / Systems",
    text: "Installable web experiences and lightweight systems intended to work reliably across devices."
  },
  {
    no: "06",
    title: "Custom Software",
    text: "Purpose-built software for businesses with requirements that do not fit an off-the-shelf product."
  }
];

const process = [
  ["01", "DISCOVERY", "Understand the objective, audience, technical requirements and practical constraints before development begins."],
  ["02", "DIRECTION", "Establish the visual language, information structure and technical approach for the project."],
  ["03", "BUILD", "Develop the product with regular progress checks, responsive implementation and focused refinement."],
  ["04", "LAUNCH", "Prepare the final deployment, verify the experience and hand over the finished product clearly."]
];

export default function AboutPage() {
  return (
    <main className="dn-about-page">
      <div className="dn-about-shell">

        <header className="dn-about-nav">
          <span>DN STUDIOS / ABOUT</span>
          <Link href="/">BACK TO PORTFOLIO</Link>
        </header>

        <section className="dn-about-hero">
          <div className="dn-about-hero-main">
            <span className="dn-about-label">DEVAM NAMERA / FOUNDER &amp; LEAD DEVELOPER</span>
            <h1>Independent digital work, built properly.</h1>
            <p>
              DN Studios is an independent digital studio based in Gujarat, India.
              The studio develops websites, applications and custom software for businesses,
              founders and brands that need a considered digital presence rather than a generic template.
            </p>
          </div>

          <aside className="dn-about-profile">
            <span>STUDIO PROFILE</span>
            <strong>5+ years of hands-on experience in digital development.</strong>
            <p>
              DN Studios is intentionally kept direct and focused. Projects are handled
              with close communication, practical decision-making and attention to the details
              that affect the finished product.
            </p>
          </aside>
        </section>

        <section className="dn-about-intro-grid">
          <article>
            <span>01 / WHO I AM</span>
            <h2>Founder-led from first conversation to launch.</h2>
            <p>
              I am Devam Namera, founder and lead developer at DN Studios.
              My role covers planning, interface direction, development and the technical
              decisions required to take a digital idea into a working product.
            </p>
          </article>

          <article>
            <span>02 / HOW I WORK</span>
            <h2>Small studio. Direct communication.</h2>
            <p>
              Keeping the studio independent means clients communicate directly with the
              person responsible for the work. It keeps feedback clear, decisions faster
              and the final result closer to the original objective.
            </p>
          </article>
        </section>

        <section className="dn-about-section">
          <span className="dn-about-section-label">CAPABILITIES</span>
          <h2>What DN Studios builds.</h2>

          <div className="dn-about-capability-list">
            {capabilities.map((item) => (
              <div className="dn-about-capability" key={item.no}>
                <span>{item.no}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="dn-about-section">
          <span className="dn-about-section-label">WORKING METHOD</span>
          <h2>A straightforward process.</h2>

          <div className="dn-about-process">
            {process.map(([no, title, text]) => (
              <article key={no}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dn-about-standards">
          <div>
            <span>STUDIO STANDARD</span>
            <h2>Every project should feel finished, not merely delivered.</h2>
          </div>
          <p>
            That means responsive behaviour is considered early, visual hierarchy is kept consistent,
            interactions have a purpose and deployment is treated as part of the project rather than
            something left until the final hour.
          </p>
        </section>

        <section className="dn-about-contact">
          <div>
            <span>PROJECT ENQUIRIES</span>
            <h2>Ready to discuss a real project?</h2>
            <p>
              Call directly or start a conversation on WhatsApp. Share your idea, required
              platform and target timeline; the initial discussion can then be used to define scope.
            </p>
          </div>

          <div className="dn-about-contact-actions">
            <a href="tel:+918780692285">CALL +91 87806 92285</a>
            <a
              href="https://wa.me/918780692285?text=Hello%20DN%20Studios%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%20I%20can%20share%20the%20requirements%2C%20platform%20and%20timeline.%0A%0ARegards%2C"
              target="_blank"
              rel="noreferrer"
            >
              START ON WHATSAPP
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}