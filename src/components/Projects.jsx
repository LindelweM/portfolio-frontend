import { useState } from "react";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Screenshot with a designed fallback: if the image is missing the card shows
 * a patterned plate with the project's monogram instead of an empty box.
 */
function Thumbnail({ project }) {
  const [failed, setFailed] = useState(!project.image);
  const monogram = project.title
    .split(" ")
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-t-[13px] border-b border-[var(--line)]">
      {failed ? (
        <div className="plate flex h-full w-full items-center justify-center">
          <span className="font-display text-5xl text-[var(--accent)] opacity-60">{monogram}</span>
        </div>
      ) : (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--accent) 26%, transparent), transparent 55%)",
        }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--line)] px-6 py-24 md:px-16 md:py-28">
      <SectionHeading
        id="projects"
        title="Projects"
        kicker="Things I've built to sharpen ideas I use at work — event-driven services, caching layers, and small tools that earn their keep."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 120}
            as="article"
            className="card card-hover group flex flex-col overflow-hidden"
          >
            <Thumbnail project={p} />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl leading-snug text-[var(--text)]">{p.title}</h3>
                <span className="font-mono text-xs text-[var(--line-strong)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.split("·").map((tech) => (
                  <li
                    key={tech}
                    className="chip rounded-full px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--text-soft)]"
                  >
                    {tech.trim()}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-5 border-t border-[var(--line)] pt-5 font-display text-sm">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5" />
                  </svg>
                  Repo
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex items-center gap-1.5 text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
