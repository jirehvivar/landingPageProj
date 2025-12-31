export default function About() {
  return (
    <section className="section" id="about">
      <div className="container" style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr" }}>
        <div className="section-title">Background</div>

        <div
          style={{
            display: "grid",
            gap: 28,
            alignItems: "center",
            gridTemplateColumns: "1.1fr 0.9fr"
          }}
        >
          {/* Text */}
          <div>
            <h2 className="h2">
              Austin roots. Dallas focus.
              <br />
              Engineering mindset.
            </h2>

            <p className="sub" style={{ marginTop: 14 }}>
              I grew up in Austin, TX and now live in Dallas while finishing my degree at
              the University of Texas at Dallas. I’m about to graduate and focused on
              building clean, modern systems that feel as good as they function.Outside of engineering, 
              I’m drawn to disciplines that reward consistency and craftsmanship. This includes working out,
               creative work 
              like painting and sewing, and music. These interests shape how I think about structure,
               patience, and intentional design.
            </p>

            <div style={{ display: "flex", gap: 14, marginTop: 18, flexWrap: "wrap" }}>
              <span className="glass" style={{ padding: "8px 12px" }}>Dallas, TX</span>
              <span className="glass" style={{ padding: "8px 12px" }}>UTD 2026 Grad</span>
              <span className="glass" style={{ padding: "8px 12px" }}> Open to roles</span>
            </div>
          </div>

          {/* Image */}
          <div className="glass" style={{ padding: 12 }}>
            <img
              src="/resources/treesAustin.jpg"
              alt="Austin / Dallas"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 14
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
