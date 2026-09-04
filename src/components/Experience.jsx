import { useState } from "react";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const VISIBLE_POINTS = 3;

/** "Present - 3 years 1 month" → { current: true, duration: "3 years 1 month" } */
function parsePeriod(period) {
  const [status, ...rest] = period.split(" - ");
  return {
    current: status.trim().toLowerCase() === "present",
    duration: rest.join(" - ").trim() || status.trim(),
  };
}

function Job({ job }) {
  const [expanded, setExpanded] = useState(false);
  const { current, duration } = parsePeriod(job.period);
  const collapsible = job.points.length > VISIBLE_POINTS;
  const points = expanded || !collapsible ? job.points : job.points.slice(0, VISIBLE_POINTS);

  return (
    <div className="relative pl-10 md:pl-14">
      {/* Node on the spine. */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 flex h-[18px] w-[18px] translate-x-[-8.5px] items-center justify-center
                    rounded-full border-2 bg-[var(--bg)] transition-colors md:translate-x-[-8.5px]
                    ${current ? "border-[var(--accent)]" : "border-[var(--line-strong)]"}`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            current ? "pulse-dot bg-[var(--accent)]" : "bg-[var(--line-strong)]"
          }`}
        />
      </span>

      <div className="card card-hover p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {current && (
            <span className="rounded-full bg-[var(--accent-wash)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--accent)]">
              Current
            </span>
          )}
          <span className="font-mono text-xs text-[var(--muted)]">{duration}</span>
        </div>

        <h3 className="mt-3 font-display text-xl leading-snug text-[var(--text)]">
          {job.role}
        </h3>
        <p className="mt-1 text-sm text-[var(--accent)]">{job.org}</p>

        <ul className="mt-4 space-y-2.5">
          {points.map((pt) => (
            <li key={pt} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        {collapsible && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="link-underline mt-4 inline-flex items-center gap-1.5 font-display text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            {expanded ? "Show less" : `Show ${job.points.length - VISIBLE_POINTS} more`}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--line)] px-6 py-24 md:px-16 md:py-28">
      <SectionHeading
        id="experience"
        title="Experience"
        kicker="Six years across banking, IoT and enterprise systems — plus the bootcamps where I've taught the next intake."
      />

      <div className="relative max-w-3xl">
        {/* The spine, fading out at the end of the timeline. */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-2 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--line-strong), transparent 96%)",
          }}
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${job.role}`} delay={i * 90}>
              <Job job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
