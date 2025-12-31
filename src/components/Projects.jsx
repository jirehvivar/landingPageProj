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
      title: "Snake Game",
      desc: "Interactive grid-based game featuring real-time state updates, collision logic, and responsive controls.",
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
