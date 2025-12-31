export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} Jireh Vivar</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="mailto:jirehvivarvt@gmail.com">Email</a>
            <a href="https://github.com/jirehvivar" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jireh-vivar-a56462132/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
