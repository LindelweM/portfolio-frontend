import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-10 md:px-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {profile.name}
          <span className="text-[var(--accent)]">.</span> Built with React, Vite & Tailwind.
        </p>
        <a
          href="#home"
          className="link-underline self-start font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
