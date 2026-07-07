export default function Projects() {
  const projects = [
    {
      title: "FireCastX (Raytheon RTX)",
      desc: "Interactive wildfire prediction platform visualizing real-time risk data across the United States.",
      link: "https://firecastx.vercel.app/",
      linkLabel: "View project",
    },
    {
      title: "CometClaim UTD",
      desc: "Centralized web system that replaced a manual, multi-building lost-and-found process.",
      link: "https://www.youtube.com/watch?v=ZwSiprDzcTI",
      linkLabel: "View Project",
    },
    {
      title: "Ad-Astra",
      desc: "Ad Astra is a space-themed tycoon game where players collect asteroids for currency, build ship modules, and upgrade their spaceship to expand their resource production and progression.",
      link: "https://play.unity.com/en/games/b51345d6-1161-4623-896b-5e3537929860/ad-astra",
      linkLabel: "View Project",
    },
    {
      title: "Neodymium",
      desc: "Library management system with a Django + SQLite backend and a cozy-bookshop React frontend — live catalog search across 25,000 books with cover art, checkouts, borrower cards, and fine tracking.",
      link: "https://jirehvivar.github.io/Neodymium/",
      linkLabel: "View Project",
    },
    {
      title: "Portfolio Game",
      desc: "Explorable 3D portfolio built with Three.js and React Three Fiber — walk through a game world where each area presents a project, instead of scrolling a page. In active development.",
      link: "https://jirehvivar.github.io/portfolioGame/",
      linkLabel: "View Project",
    },
    {
      title: "Refundly",
      desc: "AI customer-support agent that approves or denies e-commerce refunds through tool-calling. A deterministic policy engine keeps final authority over every refund — even a jailbroken model can't move money — while an admin dashboard streams the agent's reasoning live and a voice pipeline shares the same enforcement path.",
      link: "https://github.com/jirehvivar/refundly",
      linkLabel: "View Code",
    },

  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-title">Projects</div>
        <h2 className="h2">Selected work</h2>

        <div className="grid grid-3 projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="glass card project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {p.linkLabel} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
