import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--line)] px-6 py-24 md:px-16 md:py-28">
      <SectionHeading
        id="skills"
        title="Skills & Tools"
        kicker="The stack I reach for day to day, across the backend, the pipes between services, and the cloud they run on."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 110} className="card card-hover p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="eyebrow">{group.group}</h3>
              <span className="font-mono text-[0.65rem] text-[var(--line-strong)]">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="chip cursor-default rounded-lg px-3 py-1.5 text-sm text-[var(--text)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
