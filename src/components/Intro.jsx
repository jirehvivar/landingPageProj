import { useEffect, useRef, useState } from "react";

const COUNT_MS = 900;
const EXIT_MS = 750;

export default function Intro({ onReveal, onDone }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onReveal();
      onDone();
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / COUNT_MS, 1);
      setCount(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!fired.current) {
        fired.current = true;
        setExiting(true);
        onReveal();
        setTimeout(onDone, EXIT_MS);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={exiting ? "intro intro-exit" : "intro"} aria-hidden="true">
      <div className="intro-inner">
        <div className="intro-kicker">§ 00 — PORTFOLIO DOSSIER</div>
        <div className="intro-name">JIREH VIVAR</div>
        <div className="intro-line">
          <span style={{ width: `${count}%` }} />
        </div>
        <div className="intro-count">{String(count).padStart(3, "0")} %</div>
      </div>
    </div>
  );
}
