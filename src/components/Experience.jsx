import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 py-20 border-t border-[var(--color-hairline)]">
      <h2 className="font-display text-xl text-[var(--color-signal)] mb-8">Experience</h2>

      <div className="space-y-10 max-w-2xl">
        {experience.map((job) => (
          <div key={`${job.org}-${job.role}`} className="flex flex-col sm:flex-row sm:gap-8">
            <p className="font-display text-sm text-[var(--color-slate)] sm:w-32 shrink-0 mb-2 sm:mb-0">
              {job.period}
            </p>
            <div>
              <h3 className="text-[var(--color-paper)]">
                {job.role} <span className="text-[var(--color-slate)]">· {job.org}</span>
              </h3>
              <ul className="mt-2 space-y-1">
                {job.points.map((pt) => (
                  <li key={pt} className="text-[var(--color-slate)] text-sm leading-relaxed">
                    — {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
