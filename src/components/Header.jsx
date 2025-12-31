export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        {/* Brand */}
        <div className="brand">
          <img
            src="/resources/StrechedGoldG.png"
            alt="Jireh Vivar logo"
            className="brand-logo"
          />
          <span>Jireh Vivar</span>
        </div>

        {/* Navigation */}
        <nav className="navlinks">
          <a href="#about">About</a>
          <a href="#tech">Tech</a>
          <a href="#projects">Projects</a>

          <a
            className="btn"
            href="https://github.com/jirehvivar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
