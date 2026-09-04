import Reveal from "./Reveal";
import { sectionNumber } from "../data/sections";

export default function SectionHeading({ id, title, kicker }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-[var(--accent)]">{sectionNumber(id)}</span>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--text)]">
          {title}
        </h2>
        <span className="rule flex-1 translate-y-[-0.3em]" aria-hidden="true" />
      </div>
      {kicker && (
        <p className="mt-4 max-w-xl text-[var(--muted)] leading-relaxed pl-10">{kicker}</p>
      )}
    </Reveal>
  );
}
