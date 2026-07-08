export default function Header() {
  const items = [
    ["HOME", "#top"],
    ["ABOUT", "#about"],
    ["FOUNDATIONS", "#tech"],
    ["PROJECTS", "#projects"],
  ];

  return (
    <>
      {/* Minimal fixed top bar */}
      <div className="topbar">
        <a href="#top" className="topbar-brand">JIREH VIVAR</a>
        <a
          className="btn-mosaic btn-mosaic-sm"
          href="https://github.com/jirehvivar"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>

      {/* Staggered side navigation */}
      <nav className="sidenav" aria-label="Sections">
        {items.map(([label, href], i) => (
          <a
            key={label}
            href={href}
            className="sidenav-link"
            style={{ transform: `translateX(${i * 6}px)` }}
          >
            <span className="btn-mosaic btn-mosaic-sm">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
