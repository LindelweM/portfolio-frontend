import { profile, education, certifications } from "../data/content";

export default function Resume() {
  return (
    <section id="resume" className="px-6 md:px-16 py-20 border-t border-[var(--color-hairline)]">
      <h2 className="font-display text-xl text-[var(--color-signal)] mb-8">Resume</h2>

      <p className="max-w-4xl text-[var(--color-paper)] leading-relaxed">{profile.intro}</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="font-display text-xs tracking-wide text-[var(--color-slate)] mb-4">
            EDUCATION
          </h3>
          <div className="space-y-4">
            {education.map((ed) => (
              <div key={ed.qualification} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <div>
                  <p className="text-[var(--color-paper)]">{ed.qualification}</p>
                  <p className="text-[var(--color-slate)] text-sm">{ed.institution}</p>
                </div>
                <p className="font-display text-sm text-[var(--color-slate)] shrink-0">{ed.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-wide text-[var(--color-slate)] mb-4">
            CERTIFICATIONS
          </h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <div>
                  <p className="text-[var(--color-paper)]">{cert.name}</p>
                  <p className="text-[var(--color-slate)] text-sm">{cert.issuer}</p>
                </div>
                <p className="font-display text-sm text-[var(--color-slate)] shrink-0">{cert.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href={profile.resumeFile}
        download
        className="inline-block mt-12 font-display text-sm px-5 py-3 bg-[var(--color-signal)] text-[var(--color-ink)] rounded-sm hover:opacity-90 transition-opacity"
      >
        Download CV
      </a>
    </section>
  );
}
