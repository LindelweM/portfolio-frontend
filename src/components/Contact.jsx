import { useState } from "react";
import { profile } from "../data/content";

// Point this at your deployed backend (see /server in the project root).
const API_URL = import.meta.env.VITE_CONTACT_API_URL || "http://localhost:4000/api/contact";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-20 border-t border-[var(--color-hairline)] pb-32">
      <h2 className="font-display text-xl text-[var(--color-signal)] mb-8">Contact</h2>

      <div className="flex flex-col md:flex-row gap-16">
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-5">
          <div>
            <label htmlFor="name" className="font-display text-xs text-[var(--color-slate)] block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[var(--color-ink-raised)] border border-[var(--color-hairline)] rounded-sm px-4 py-3 text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-signal)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-display text-xs text-[var(--color-slate)] block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[var(--color-ink-raised)] border border-[var(--color-hairline)] rounded-sm px-4 py-3 text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-signal)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-display text-xs text-[var(--color-slate)] block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-[var(--color-ink-raised)] border border-[var(--color-hairline)] rounded-sm px-4 py-3 text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-signal)] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="font-display text-sm px-5 py-3 bg-[var(--color-signal)] text-[var(--color-ink)] rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-[var(--color-signal)]">Thanks — message sent.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Try again, or email me directly.
            </p>
          )}
        </form>

        <div className="font-display text-sm space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>{profile.email}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
