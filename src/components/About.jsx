import { useInView, useScrollY } from "../hooks";

const fragments = [
  {
    label: "Focus",
    body:
      "Software engineer that graduated from the University of Texas- Dallas May 2026. I work across the stack — React interfaces on the front, Django and SQL-backed systems behind them — and I care most about the seam where design and data meet.",
  },
  {
    label: "Practice",
    body:
      "I build end-to-end: requirements, data modeling, interface, tests. Recent work spans a wildfire-risk platform with Raytheon RTX, an AI refund agent governed by a deterministic policy engine, and a 25,000-book library system with live search.",
  },
  {
    label: "Direction",
    body:
      "Headed into full-time software engineering — product-minded, full-stack roles where thoughtful interfaces meet scalable backends. Open to roles now, and shipping constantly in the meantime.",
  },
];

export default function About() {
  const { ref, inView } = useInView();
  const y = useScrollY();
  const offsets = [-30, 20, -15];
  const speeds = [0.05, -0.06, 0.04];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container-wide">
        <div className="kicker">§ 02 — ABOUT ME</div>
        <h2 className="section-title-xl">The Engineer</h2>

        <div className="about-chips">
          <span className="chip-mosaic">UTD · 2026 Grad</span>
          <span className="chip-mosaic">Full-Stack</span>
          <span className="chip-mosaic">Open to Roles</span>
        </div>
      </div>

      <div className="container-wide about-grid">
        {fragments.map((f, i) => (
          <div
            key={f.label}
            className={`panel-glow about-card ${i === 1 ? "skew-pane-r" : "skew-pane"}`}
            style={{
              transform: inView
                ? `translateY(${y * speeds[i]}px)`
                : `translateY(${offsets[i] + 40}px)`,
              opacity: inView ? 1 : 0,
              transition: `transform 900ms cubic-bezier(0.2,0.8,0.2,1) ${i * 150}ms, opacity 900ms ease ${i * 150}ms`,
            }}
          >
            <div className="about-card-tag">FRAGMENT · 0{i + 1}</div>
            <h4 className="about-card-title">{f.label}</h4>
            <p className="about-card-body">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
