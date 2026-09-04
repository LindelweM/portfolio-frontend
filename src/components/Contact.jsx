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

        <div className="font-display text-sm space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="block text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
