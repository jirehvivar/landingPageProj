export default function Hero() {
  return (
    <section className="heroMeta" id="top" aria-label="Hero">
      {/* Background image */}
      <div className="heroBg" aria-hidden="true" />

      {/* Moving connected blobs */}
      <div className="metaLayer" aria-hidden="true">
        <div className="meta m1" />
        <div className="meta m2" />
        <div className="meta m3" />
      </div>

      {/* Dark overlay on top of image+blobs */}
      <div className="heroShade" aria-hidden="true" />

      {/* Content */}
      <div className="container hero-inner">
        <div className="kicker">Portfolio</div>
        <h1 className="headline">
          I’m <span className="grad">Jireh</span>.
        </h1>
        <p className="sub">
          A software engineer student at UTD building thoughtful interfaces and scalable systems. Where design and data meet.
        </p>

        <div className="hero-actions">
          <a className="btn btn-gold" href="#projects">Explore projects</a>
          <a className="btn" href="#about">About me</a>
        </div>
      </div>
    </section>
  );
}
