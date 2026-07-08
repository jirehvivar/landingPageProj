export default function Footer() {
  const expertise = [
    "Full-Stack Development",
    "React Interfaces",
    "Systems & Databases",
    "Testing & Quality Assurance",
    "AI Agents & 3D Web",
  ];
  const contact = [
    ["MAIL", "jirehvivarvt@gmail.com", "mailto:jirehvivarvt@gmail.com"],
    ["GITHUB", "@jirehvivar", "https://github.com/jirehvivar"],
    ["LINKEDIN", "jireh-vivar", "https://www.linkedin.com/in/jireh-vivar-a56462132/"],
    ["STATUS", "Open to roles", null],
  ];

  return (
    <footer className="footer" id="contact">
      <div className="container-wide footer-grid">
        <div className="panel-glow footer-brand">
          <div className="footer-brand-tag">JIREH VIVAR</div>
          <div className="footer-brand-title">
            Thoughtful interfaces. Scalable systems. Where design and data meet.
          </div>
        </div>

        <div className="panel-glow skew-pane footer-panel">
          <div className="footer-panel-tag">EXPERTISE</div>
          <ul className="footer-expertise">
            {expertise.map((e) => (
              <li key={e}>
                <span className="footer-dot" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-glow skew-pane-r footer-panel footer-panel-wide">
          <div className="footer-panel-tag">CONTACT</div>
          <ul className="footer-contact">
            {contact.map(([k, v, href]) => (
              <li key={k}>
                <span className="footer-contact-key">{k}</span>
                {href ? (
                  <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">
                    {v}
                  </a>
                ) : (
                  <span>{v}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wide footer-bottom">
        <span>© MMXXVI JIREH VIVAR</span>
        <span>LAYER MOSAIC PORTFOLIO v2.0</span>
      </div>
    </footer>
  );
}
