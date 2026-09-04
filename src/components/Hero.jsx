import { profile } from "../data/content";
import heroImage from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16 px-6 md:px-16 pt-16 md:pt-0"
    >
      <div className="flex-1">
        <p className="font-display text-[var(--color-signal)] text-sm mb-4">
          {profile.location}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl">
          {profile.name} — {profile.role}
        </h1>
        <p className="mt-6 max-w-xl text-[var(--color-slate)] text-base md:text-lg leading-relaxed">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-display text-sm px-5 py-3 bg-[var(--color-signal)] text-[var(--color-ink)] rounded-sm hover:opacity-90 transition-opacity"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="font-display text-sm px-5 py-3 border border-[var(--color-hairline)] text-[var(--color-paper)] rounded-sm hover:border-[var(--color-slate)] transition-colors"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-8 flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-slate)] hover:text-[var(--color-signal)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0" />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[var(--color-slate)] hover:text-[var(--color-signal)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>
      <div className="shrink-0 flex justify-center md:justify-end">
        <img
          src={heroImage}
          alt={profile.name}
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-2 border-[var(--color-hairline)] shadow-lg"
        />
      </div>
    </section>
  );
}
