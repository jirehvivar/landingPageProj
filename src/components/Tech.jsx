import { useInView } from "../hooks";

const items = [
  {
    title: "Systems & Operating Systems",
    desc: "Linux / Unix environments, process management, concurrency concepts, file systems, shell tools",
  },
  {
    title: "Databases",
    desc: "SQL & MySQL, relational modeling, normalization, indexing concepts, transactions (ACID)",
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Java, linked lists, trees, hash maps, time & space complexity",
  },
  {
    title: "Software Engineering",
    desc: "Design principles & patterns, requirements analysis, Git/GitHub collaboration",
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Black-box & white-box testing, verification & validation, JUnit4",
  },
  {
    title: "Frontend Development",
    desc: "React, component design, state management, interactive UI development",
  },
];

export default function Tech() {
  const { ref, inView } = useInView();

  return (
    <section className="section" id="tech" ref={ref}>
      <div className="container-wide">
        <div className="kicker">§ 03 — ENGINEERING</div>
        <h2 className="section-title-xl">Foundations</h2>
      </div>

      <div className="container-wide mosaic-grid-3 tech-grid">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="panel-glow panel-glow-hover tech-card"
            style={{
              transform: inView ? "translateY(0)" : `translateY(${[30, -20, 40, -10, 25, -30][i]}px)`,
              opacity: inView ? 1 : 0,
              transition: `transform 900ms cubic-bezier(0.2,0.8,0.2,1) ${i * 120}ms, opacity 900ms ease ${i * 120}ms, box-shadow 400ms ease`,
            }}
          >
            <div className="tech-card-tag">FIELD · 0{i + 1}</div>
            <h3 className="tech-card-title">{item.title}</h3>
            <p className="tech-card-body">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
