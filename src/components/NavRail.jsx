import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function NavRail() {
  const [active, setActive] = useState("home");

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

  return (
    <nav
      aria-label="Section navigation"
      className="md:fixed md:top-0 md:left-0 md:h-screen md:w-56 md:flex md:flex-col md:justify-center
                 sticky top-0 z-40 w-full bg-[var(--color-ink)]/95 backdrop-blur border-b md:border-b-0 md:border-r border-[var(--color-hairline)]"
    >
      <div className="flex md:flex-col overflow-x-auto md:overflow-visible px-4 md:px-8 py-3 md:py-0 gap-1 md:gap-1">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`whitespace-nowrap font-display text-xs tracking-wide px-3 py-2 rounded-sm transition-colors
              ${
                active === id
                  ? "text-[var(--color-signal)] bg-[var(--color-ink-raised)]"
                  : "text-[var(--color-slate)] hover:text-[var(--color-paper)]"
              }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
