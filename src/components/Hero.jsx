import { useEffect, useRef } from "react";
import { profile, skills } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import Magnetic from "./Magnetic";
import heroImage from "../assets/profile_picture.jpg";

const marqueeItems = skills.flatMap((g) => g.items);

export default function Hero() {
  const role = useTypewriter(profile.roles ?? [profile.role]);
  const portraitRef = useRef(null);

  // Gentle parallax: the portrait drifts up as the hero scrolls away.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = portraitRef.current;
        if (!el) return;
        const y = Math.min(window.scrollY, window.innerHeight) * 0.12;
        el.style.transform = `translate3d(0, ${-y}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center px-6 pt-16 pb-20 md:px-16 md:pt-0"
    >
      <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="w-full flex-1">
          <div className="rise flex flex-wrap items-center gap-3" style={{ "--rise-delay": "1150ms" }}>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--text-soft)]">
                  Open to work
                </span>
              </span>
            )}
            <span className="eyebrow">{profile.location}</span>
          </div>

          <h1
            className="rise mt-7 font-display text-[clamp(2.6rem,8vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.02em]"
            style={{ "--rise-delay": "1250ms" }}
          >
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p
            className="rise mt-3 min-h-[2.2em] font-display text-[clamp(1.15rem,3.2vw,1.9rem)] italic text-[var(--accent)]"
            style={{ "--rise-delay": "1350ms" }}
          >
            <span className="caret">{role}</span>
          </p>

          <p
            className="rise mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
            style={{ "--rise-delay": "1450ms" }}
          >
            {profile.tagline}
          </p>

          <div className="rise mt-10 flex flex-wrap gap-4" style={{ "--rise-delay": "1550ms" }}>
            <Magnetic as="span" className="inline-block">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm"
              >
                See the work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic as="span" className="inline-block">
              <a
                href="#contact"
                className="btn-ghost inline-flex items-center rounded-full px-6 py-3 font-display text-sm"
              >
                Get in touch
              </a>
            </Magnetic>
          </div>
        </div>

        <div ref={portraitRef} className="rise shrink-0 self-center" style={{ "--rise-delay": "1050ms" }}>
          <div className="relative">
            {/* Soft halo behind the portrait. */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 26%, transparent), transparent 70%)",
              }}
            />
            <div className="relative rounded-full p-[3px] [background:conic-gradient(from_180deg,var(--accent),transparent_35%,var(--accent-bright)_65%,transparent)]">
              <img
                src={heroImage}
                alt={profile.name}
                className="h-44 w-44 rounded-full border-4 border-[var(--bg)] object-cover shadow-[var(--shadow-lg)] sm:h-56 sm:w-56 md:h-72 md:w-72"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee — a quiet strip of the stack, sitting on the hero's baseline. */}
      <div
        className="marquee rise mt-16 overflow-hidden border-y border-[var(--line)] py-3"
        style={{
          "--rise-delay": "1700ms",
          "--marquee-duration": `${marqueeItems.length * 2.2}s`,
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap px-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            </span>
          ))}
        </div>
      </div>

      <a
        href="#resume"
        aria-label="Scroll to resume"
        className="rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[var(--muted)] transition-colors hover:text-[var(--accent)] lg:block"
        style={{ "--rise-delay": "1850ms" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4v15M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
