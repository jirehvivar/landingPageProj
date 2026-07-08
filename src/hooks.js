import { useEffect, useRef, useState } from "react";

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return y;
}

export function useInView(rootMargin = "-15% 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { rootMargin, threshold: 0.05 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}
