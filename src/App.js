import { useState } from "react";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [revealed, setRevealed] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className={revealed ? "site site-revealed" : "site"}>
      <div className="grain" aria-hidden="true" />
      {!introDone && (
        <Intro
          onReveal={() => setRevealed(true)}
          onDone={() => setIntroDone(true)}
        />
      )}
      <Header />
      <main>
        <Hero revealed={revealed} />
        <About />
        <Tech />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
