export default function Tech() {
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

  return (
    <section className="section" id="tech">
      <div className="container">
        <div className="section-title">Engineering</div>
        <h2 className="h2">Foundations</h2>

        <div className="grid grid-3 tech-grid">
          {items.map((item) => (
            <div key={item.title} className="glass card tech-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
