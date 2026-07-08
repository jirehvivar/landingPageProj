import { useScrollY } from "../hooks";

const PANES = 4;
const OFFSETS = [40, -30, 20, -50];
const SPEEDS = [0.15, 0.28, 0.08, 0.22];
const ENTER_FROM = [120, -90, 150, -110];

export default function Hero({ revealed }) {
  const y = useScrollY();

  return (
    <section
      className={revealed ? "hero hero-revealed" : "hero"}
      id="top"
      aria-label="Hero"
    >
      {/* Four parallax panes slicing one archway image */}
      <div className="hero-panes">
        {Array.from({ length: PANES }).map((_, i) => (
          <div
            key={i}
            className="pane-wrap"
            style={{
              "--enter-from": `${ENTER_FROM[i]}px`,
              transitionDelay: `${i * 130}ms`,
            }}
          >
            <div
              className="pane panel-glow"
              style={{ transform: `translateY(${OFFSETS[i] - y * SPEEDS[i]}px)` }}
            >
              <div
                className="pane-img"
                style={{ backgroundPosition: `${(i / (PANES - 1)) * 100}% center` }}
              />
              <div className="pane-fade" />
              <div className="pane-label">PANE · 0{i + 1}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Title overlay */}
      <div className="hero-overlay">
        <div className="hero-kicker">[ SOFTWARE ENGINEER · UTD · CLASS OF MMXXVI ]</div>
        <h1 className="hero-title">
          JIREH
          <br />
          <span>VIVAR</span>
        </h1>
        <p className="hero-sub">
          A software engineering student at UTD building thoughtful interfaces
          and scalable systems. Where design and data meet.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-mosaic">Explore Projects</a>
          <a href="#about" className="btn-mosaic">About Me</a>
        </div>
      </div>

      <div className="hero-scroll">SCROLL ↓ EXPLORE</div>
    </section>
  );
}
