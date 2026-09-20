import Link from "next/link";

const capabilities = [
  ["01","Web Development","Responsive websites and digital platforms with a strong focus on structure, performance and presentation."],
  ["02","Mobile Applications","Mobile products built around practical user journeys, clean interfaces and dependable application architecture."],
  ["03","Web Applications","Dashboards, portals, SaaS products and workflow-driven applications built for real operational use."],
  ["04","E-Commerce","Online stores with thoughtful product presentation, checkout journeys and scalable commerce foundations."],
  ["05","PWA / Systems","Installable web experiences and lightweight systems designed for reliable cross-device usage."],
  ["06","Custom Software","Purpose-built software for businesses with requirements that do not fit an off-the-shelf product."]
];

const approach = [
  ["01","DISCOVERY","Understand the objective, audience, requirements and constraints before deciding what should be built."],
  ["02","DIRECTION","Set the information structure, visual language and technical approach for the project."],
  ["03","BUILD","Develop the product with responsive behaviour, useful interactions and regular review points."],
  ["04","LAUNCH","Prepare the final deployment, test the experience and hand over the finished product properly."]
];

export default function AboutPage(){
  return (
    <main className="dn-about-page">
      <div className="dn-about-shell">
        <header className="dn-about-nav">
          <span>DN STUDIOS / ABOUT</span>
          <Link href="/">BACK TO PORTFOLIO</Link>
        </header>

        <section className="dn-about-hero">
          <div>
            <span className="dn-about-label">DEVAM NAMERA / FOUNDER &amp; LEAD DEVELOPER</span>
            <h1>Independent digital work, built properly.</h1>
            <p>
              DN Studios is an independent digital studio based in Gujarat, India.
              The studio develops websites, applications and custom software for businesses,
              founders and brands that need a considered digital presence rather than a generic template.
            </p>
          </div>
          <aside>
            <span>STUDIO PROFILE</span>
            <strong>5+ years of hands-on digital development experience.</strong>
            <p>
              The studio stays intentionally direct. Clients communicate with the person
              responsible for the work, keeping feedback clear and decisions practical.
            </p>
          </aside>
        </section>

        <section className="dn-about-grid">
          <article>
            <span>01 / FOUNDER-LED</span>
            <h2>From first conversation to final deployment.</h2>
            <p>
              I am Devam Namera, founder and lead developer at DN Studios. My work covers
              product structure, interface direction and development, with the goal of turning
              an idea into a coherent digital product.
            </p>
          </article>
          <article>
            <span>02 / STUDIO APPROACH</span>
            <h2>Small studio. Direct communication.</h2>
            <p>
              Keeping the studio independent means there is no unnecessary layer between
              the client and the work. Decisions stay close to the project and revisions stay focused.
            </p>
          </article>
        </section>

        <section className="dn-about-section">
          <span>CAPABILITIES</span>
          <h2>What DN Studios builds.</h2>
          <div className="dn-capability-list">
            {capabilities.map(([no,title,text]) => (
              <article key={no}>
                <span>{no}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dn-about-section">
          <span>WORKING METHOD</span>
          <h2>A straightforward process.</h2>
          <div className="dn-approach-grid">
            {approach.map(([no,title,text]) => (
              <article key={no}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dn-about-standard">
          <div>
            <span>STUDIO STANDARD</span>
            <h2>Every project should feel finished, not merely delivered.</h2>
          </div>
          <p>
            Responsive behaviour is considered early, visual hierarchy stays consistent,
            interactions have a purpose and deployment is treated as part of the project.
          </p>
        </section>

        <section className="dn-about-contact">
          <div>
            <span>PROJECT ENQUIRIES</span>
            <h2>Have a real project in mind?</h2>
            <p>
              Call directly or start a WhatsApp conversation. Share the project,
              platform and target timeline and the scope can be discussed from there.
            </p>
          </div>
          <div className="dn-about-actions">
            <a href="tel:+918780692285">CALL +91 87806 92285</a>
            <a href="https://wa.me/918780692285?text=Hello%20DN%20Studios%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%20Please%20share%20the%20next%20steps.%0A%0ARegards%2C" target="_blank" rel="noreferrer">START ON WHATSAPP</a>
          </div>
        </section>

        <footer className="dn-simple-footer">
          <span>DN STUDIOS</span>
          <span>GUJARAT / INDIA</span>
          <Link href="/terms-and-conditions">TERMS &amp; CONDITIONS</Link>
          <Link href="/">RETURN HOME</Link>
        </footer>
      </div>
    </main>
  );
}