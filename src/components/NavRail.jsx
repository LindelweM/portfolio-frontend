import { useEffect, useState } from "react";
import { sections } from "../data/sections";
import { profile } from "../data/content";
import { useTheme } from "../hooks/useTheme";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)]
                 bg-[var(--surface)] text-[var(--muted)] transition-colors
                 hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
        className="transition-transform duration-500 group-hover:rotate-45"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
          </>
        ) : (
          <path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a6.8 6.8 0 0 0 11.1 11.1Z" />
        )}
      </svg>
    </button>
  );
}

export default function NavRail() {
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-0 z-40 w-full border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md
                 md:fixed md:left-0 md:top-0 md:h-screen md:w-60 md:border-b-0 md:border-r
                 md:flex md:flex-col md:justify-between md:bg-transparent md:backdrop-blur-none"
    >
      {/* Wordmark — desktop only; the mobile bar stays compact. */}
      <a
        href="#home"
        className="hidden md:block px-8 pt-10 font-display text-lg tracking-tight text-[var(--text)]"
      >
        {profile.name}
        <span className="text-[var(--accent)]">.</span>
      </a>

      <div className="flex items-center md:block">
        <div className="relative flex flex-1 gap-1 overflow-x-auto px-4 py-3 md:flex-col md:gap-0 md:overflow-visible md:px-8 md:py-0">
          {/* Sliding marker: rides the rail on desktop, hidden on mobile. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-8 hidden h-8 w-[2px] bg-[var(--accent)] md:block"
            style={{
              top: "4px",
              transform: `translateY(${activeIndex * 40}px)`,
              transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />

          {sections.map(({ id, label }, i) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex h-10 shrink-0 items-center gap-3 whitespace-nowrap rounded-full px-3 text-sm
                            transition-colors md:rounded-none md:pl-5 md:pr-0
                            ${
                              isActive
                                ? "bg-[var(--surface-2)] text-[var(--text)] md:bg-transparent"
                                : "text-[var(--muted)] hover:text-[var(--text)]"
                            }`}
              >
                <span
                  className={`font-mono text-[0.65rem] transition-colors ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--line-strong)]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display">{label}</span>
              </a>
            );
          })}
        </div>

        <div className="shrink-0 px-4 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:gap-3 md:px-8 md:pb-10">
        <ThemeToggle theme={theme} onToggle={toggle} />
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)]
                     bg-[var(--surface)] text-[var(--muted)] transition-colors
                     hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0" />
          </svg>
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)]
                     bg-[var(--surface)] text-[var(--muted)] transition-colors
                     hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
