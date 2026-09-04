import { useEffect, useRef, useState } from "react";

/**
 * The atmospheric layer: drifting colour wash, a warm spotlight tracking the
 * cursor, and the reading-progress hairline at the top of the page.
 */
export default function Ambience() {
  const spotRef = useRef(null);
  const [pointerOn, setPointerOn] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced || !fine) return;

    let frame = 0;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = spotRef.current;
        if (!el) return;
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        setPointerOn(true);
      });
    };
    const onLeave = () => setPointerOn(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div ref={spotRef} className="spotlight" data-on={pointerOn} aria-hidden="true" />
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-[var(--accent)]"
        style={{ transform: `scaleX(${progress})`, transition: "transform 120ms linear" }}
      />
    </>
  );
}
