import { useInView } from "../hooks";

const projects = [
  {
    title: "FireCastX (Raytheon RTX)",
    desc: "Interactive wildfire prediction platform visualizing real-time risk data across the United States.",
    tags: [
      ["TYPE", "WEB PLATFORM"],
      ["FOCUS", "WILDFIRE RISK"],
      ["STATUS", "LIVE"],
    ],
    link: "https://firecastx.vercel.app/",
    linkLabel: "View Project",
  },
  {
    title: "Refundly",
    desc: "AI customer-support agent that approves or denies e-commerce refunds through tool-calling. A deterministic policy engine keeps final authority over every refund — even a jailbroken model can't move money — while an admin dashboard streams the agent's reasoning live.",
    tags: [
      ["TYPE", "AI AGENT"],
      ["FOCUS", "TOOL-CALLING"],
      ["STATUS", "CODE"],
    ],
    link: "https://github.com/jirehvivar/refund-agent",
    linkLabel: "View Code",
  },
  {
    title: "CometClaim UTD",
    desc: "Centralized web system that replaced a manual, multi-building lost-and-found process.",
    tags: [
      ["TYPE", "WEB SYSTEM"],
      ["FOCUS", "LOST & FOUND"],
      ["STATUS", "DEMO"],
    ],
    link: "https://www.youtube.com/watch?v=ZwSiprDzcTI",
    linkLabel: "View Project",
  },
  {
    title: "Portfolio Game",
    desc: "Explorable 3D portfolio built with Three.js and React Three Fiber — walk through a game world where each area presents a project, instead of scrolling a page. In active development.",
    tags: [
      ["TYPE", "3D WEB"],
      ["STACK", "THREE.JS / R3F"],
      ["STATUS", "IN DEV"],
    ],
    link: "https://jirehvivar.github.io/portfolioGame/",
    linkLabel: "View Project",
  },
  {
    title: "Neodymium",
    desc: "Library management system with a Django + SQLite backend and a cozy-bookshop React frontend — live catalog search across 25,000 books with cover art, checkouts, borrower cards, and fine tracking.",
    tags: [
      ["TYPE", "FULL-STACK"],
      ["STACK", "DJANGO + REACT"],
      ["STATUS", "LIVE"],
    ],
    link: "https://jirehvivar.github.io/Neodymium/",
    linkLabel: "View Project",
  },
  {
    title: "Ad-Astra",
    desc: "Space-themed tycoon game where players collect asteroids for currency, build ship modules, and upgrade their spaceship to expand resource production and progression.",
    tags: [
      ["TYPE", "UNITY GAME"],
      ["FOCUS", "SPACE TYCOON"],
      ["STATUS", "IN DEV"],
    ],
    link: "https://play.unity.com/en/games/b51345d6-1161-4623-896b-5e3537929860/ad-astra",
    linkLabel: "View Project",
  },
  
  
  
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container-wide">
        <div className="kicker">§ 04 — SELECTED WORK</div>
        <h2 className="section-title-xl">Projects</h2>
      </div>

      <div className="container-wide mosaic-grid-3 projects-grid">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="panel-glow panel-glow-hover project-card"
            style={{
              transform: inView ? "translateY(0)" : `translateY(${[30, -20, 40, -10, 25, -30][i]}px)`,
              opacity: inView ? 1 : 0,
              transition: `transform 900ms cubic-bezier(0.2,0.8,0.2,1) ${i * 120}ms, opacity 900ms ease ${i * 120}ms, box-shadow 400ms ease`,
            }}
          >
            <div className="project-card-num">№ 0{i + 1}</div>
            <h3 className="project-card-title">{p.title}</h3>

            <ul className="project-tags">
              {p.tags.map(([k, v]) => (
                <li key={k}>
                  <span className="project-tag-key">{k}:</span>
                  <span className="project-tag-val">{v}</span>
                </li>
              ))}
            </ul>

            <p className="project-card-body">{p.desc}</p>

            <div className="project-card-link">{p.linkLabel.toUpperCase()} →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
