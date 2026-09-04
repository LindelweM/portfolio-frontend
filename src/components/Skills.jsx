import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-20 border-t border-[var(--color-hairline)]">
      <h2 className="font-display text-xl text-[var(--color-signal)] mb-8">Skills & Tools</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="font-display text-xs tracking-wide text-[var(--color-slate)] mb-3">
              {group.group}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[var(--color-paper)] text-sm border-l-2 border-[var(--color-hairline)] pl-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
