import { useState } from "react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

// Point this at your deployed backend (see /server in the project root).
const API_URL = import.meta.env.VITE_CONTACT_API_URL || "http://localhost:4000/api/contact";

const MESSAGE_LIMIT = 1000;

const fieldClasses = `peer w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 pb-2.5 pt-6
  text-[var(--text)] outline-none transition-colors
  placeholder:text-transparent focus:border-[var(--accent)]
  hover:border-[var(--line-strong)]`;

// Floating label: parked over the field's own text position while empty, then
// tucked into the top padding once the field has content or focus. The resting
// offset differs between a single-line input and a textarea.
const labelBase = `pointer-events-none absolute left-4 top-2 font-mono text-[0.65rem] uppercase tracking-[0.14em]
  text-[var(--muted)] transition-all duration-200
  peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal
  peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[0.65rem] peer-focus:uppercase
  peer-focus:tracking-[0.14em] peer-focus:text-[var(--accent)]`;

const inputLabel = `${labelBase} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2`;
const textareaLabel = `${labelBase} peer-placeholder-shown:top-[1.55rem]`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "error" || status === "sent") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-[var(--line)] px-6 py-24 md:px-16 md:py-28">
      <SectionHeading
        id="contact"
        title="Contact"
        kicker="Hiring, collaborating, or just comparing notes on distributed systems — the inbox is open."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <Reveal as="form" onSubmit={handleSubmit} className="card p-6 md:p-8">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder=" "
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClasses}
                />
                <label htmlFor="name" className={inputLabel}>
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClasses}
                />
                <label htmlFor="email" className={inputLabel}>
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={MESSAGE_LIMIT}
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                className={`${fieldClasses} resize-none`}
              />
              <label htmlFor="message" className={textareaLabel}>
                Message
              </label>
              <span
                className={`pointer-events-none absolute bottom-3 right-4 font-mono text-[0.65rem] ${
                  form.message.length > MESSAGE_LIMIT * 0.9
                    ? "text-[var(--accent)]"
                    : "text-[var(--line-strong)]"
                }`}
              >
                {form.message.length}/{MESSAGE_LIMIT}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Magnetic as="span" className="inline-block">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-display text-sm disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" className="animate-spin">
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>
            </Magnetic>

            <p aria-live="polite" className="text-sm">
              {status === "sent" && (
                <span className="inline-flex items-center gap-2 text-[var(--accent)]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                  Thanks — your message is on its way.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-500">
                  Something went wrong.{" "}
                  <a href={`mailto:${profile.email}`} className="link-underline">
                    Email me directly
                  </a>{" "}
                  instead.
                </span>
              )}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="card card-hover group flex items-center gap-4 p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-wash)] text-[var(--accent)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="eyebrow block">Email</span>
              <span className="block truncate text-sm text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {profile.email}
              </span>
            </span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card card-hover group flex items-center gap-4 p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-wash)] text-[var(--accent)]">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0" />
              </svg>
            </span>
            <span>
              <span className="eyebrow block">LinkedIn</span>
              <span className="block text-sm text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                lindelwe-myeza
              </span>
            </span>
          </a>

          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-wash)] text-[var(--accent)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </span>
            <span>
              <span className="eyebrow block">Based in</span>
              <span className="block text-sm text-[var(--text)]">{profile.location}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
