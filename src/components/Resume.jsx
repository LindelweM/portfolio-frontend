import { profile, education, certifications, stats } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Magnetic from "./Magnetic";

function EntryList({ title, items, primaryKey, secondaryKey }) {
  return (
    <div>
      <h3 className="eyebrow mb-5">{title}</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <Reveal
            key={item[primaryKey]}
            delay={i * 90}
            className="card card-hover flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <p className="text-[var(--text)]">{item[primaryKey].trim()}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{item[secondaryKey]}</p>
            </div>
            <p className="shrink-0 font-mono text-xs text-[var(--accent)] sm:pl-6">
              {item.period.replace("Year – ", "")}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="border-t border-[var(--line)] px-6 py-24 md:px-16 md:py-28">
      <SectionHeading id="resume" title="Resume" />

      <Reveal className="max-w-3xl">
        <p className="text-lg leading-relaxed text-[var(--text-soft)]">{profile.intro}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="bg-[var(--surface)] p-6">
            <p className="font-display text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              <Counter value={stat.value} />
              <span className="text-[var(--accent)]">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm leading-snug text-[var(--muted)]">{stat.label}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <EntryList
          title="Education"
          items={education}
          primaryKey="qualification"
          secondaryKey="institution"
        />
        <EntryList
          title="Certifications"
          items={certifications}
          primaryKey="name"
          secondaryKey="issuer"
        />
      </div>

      <Reveal className="mt-14">
        <Magnetic as="span" className="inline-block">
          <a
            href={profile.resumeFile}
            download="Lindelwe-Myeza-CV.pdf"
            className="btn-primary inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-display text-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
            </svg>
            Download CV
          </a>
        </Magnetic>
      </Reveal>
    </section>
  );
}
