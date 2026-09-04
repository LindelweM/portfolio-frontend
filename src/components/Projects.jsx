import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-20 border-t border-[var(--color-hairline)]">
      <h2 className="font-display text-xl text-[var(--color-signal)] mb-8">Projects</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col">
            <div className="aspect-video bg-[var(--color-ink-raised)] border border-[var(--color-hairline)] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <p className="font-display text-xs text-[var(--color-signal)] mt-4">{p.stack}</p>
            <h3 className="text-lg text-[var(--color-paper)] mt-1">{p.title}</h3>
            <p className="text-[var(--color-slate)] text-sm mt-2 leading-relaxed">
              {p.description}
            </p>
            <div className="flex gap-4 mt-4 font-display text-sm">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
              >
                Repo
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
