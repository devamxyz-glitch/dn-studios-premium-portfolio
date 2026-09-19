import Link from "next/link";

const terms = [
  {
    no: "01",
    title: "Services",
    text: "DN Studios provides digital design and development services including websites, web applications, mobile applications, e-commerce systems, progressive web applications and custom software. The exact work included in a project is defined by the agreed scope or proposal."
  },
  {
    no: "02",
    title: "Proposals & Estimates",
    text: "Pricing and timelines shown on the portfolio are indicative unless expressly stated otherwise. A final estimate is prepared after the project scope, requirements, integrations and delivery expectations have been understood."
  },
  {
    no: "03",
    title: "Payment",
    text: "Project payment terms are agreed before development begins. Work may be divided into milestones depending on the size and nature of the engagement. Third-party charges, hosting, domains, paid APIs and external subscriptions are normally separate unless specifically included in the agreed scope."
  },
  {
    no: "04",
    title: "Scope & Revisions",
    text: "The agreed scope defines the expected deliverables. Material changes, additional functionality or new requirements introduced after approval may require a revised estimate and timeline. Reasonable design refinements are handled within the agreed project scope."
  },
  {
    no: "05",
    title: "Client Responsibilities",
    text: "The client is responsible for supplying accurate content, brand assets, credentials, approvals and other information required for the project in a timely manner. Delays in receiving these materials can affect delivery schedules."
  },
  {
    no: "06",
    title: "Third-Party Services",
    text: "Projects may depend on services operated by third parties, including hosting providers, payment gateways, app stores, analytics platforms, APIs and communication services. DN Studios does not control the availability, pricing or policy changes of those external services."
  },
  {
    no: "07",
    title: "Intellectual Property",
    text: "Unless otherwise agreed in writing, final project-specific assets and source code created specifically for the client are transferred according to the agreed commercial terms after the applicable project payments are completed. Pre-existing tools, reusable components, frameworks and third-party materials remain subject to their respective rights and licenses."
  },
  {
    no: "08",
    title: "Portfolio Use",
    text: "Unless confidentiality restrictions have been agreed in writing, DN Studios may display completed work as part of its portfolio and professional case studies. Confidential or unreleased work will be treated according to the agreed confidentiality requirements."
  },
  {
    no: "09",
    title: "Timelines",
    text: "Published timelines are estimates rather than guarantees. Delivery can be affected by scope changes, delayed feedback, missing content, third-party dependencies or technical conditions outside the studio's direct control."
  },
  {
    no: "10",
    title: "Cancellation",
    text: "A project may be cancelled subject to the payment and milestone terms agreed for that engagement. Work already completed, approved or committed to third-party services may remain chargeable."
  },
  {
    no: "11",
    title: "Support After Launch",
    text: "Post-launch support, maintenance and future feature development are handled according to the support arrangement agreed for the project. New functionality is treated as additional scope unless included in an active support agreement."
  },
  {
    no: "12",
    title: "Limitation",
    text: "DN Studios takes reasonable care in the design, development and testing of delivered work. The studio is not responsible for losses caused by third-party service failures, misuse of the product, unauthorised changes, inaccurate client-provided information or circumstances outside reasonable control."
  }
];

export default function TermsPage() {
  return (
    <main className="dn-terms-page">
      <div className="dn-terms-shell">

        <header className="dn-terms-nav">
          <span>DN STUDIOS / TERMS</span>
          <Link href="/">BACK TO PORTFOLIO</Link>
        </header>

        <section className="dn-terms-hero">
          <span>TERMS &amp; CONDITIONS</span>
          <h1>Clear terms for straightforward project work.</h1>
          <p>
            These terms describe the general basis on which DN Studios provides digital
            design and development services. Project-specific proposals or written agreements
            may define additional terms where required.
          </p>
          <small>LAST UPDATED: SEPTEMBER 2026</small>
        </section>

        <section className="dn-terms-list">
          {terms.map((item) => (
            <article key={item.no}>
              <span>{item.no}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="dn-terms-contact">
          <span>QUESTIONS ABOUT A PROJECT?</span>
          <h2>Contact DN Studios directly.</h2>
          <div>
            <a href="tel:+918780692285">+91 87806 92285</a>
            <a
              href="https://wa.me/918780692285?text=Hello%20DN%20Studios%2C%0A%0AI%20have%20a%20question%20about%20the%20project%20terms%20or%20scope.%0A%0ARegards%2C"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>
          </div>
        </section>

        <footer className="dn-terms-footer">
          <span>DN STUDIOS</span>
          <span>GUJARAT / INDIA</span>
          <Link href="/">RETURN TO WEBSITE</Link>
        </footer>

      </div>
    </main>
  );
}