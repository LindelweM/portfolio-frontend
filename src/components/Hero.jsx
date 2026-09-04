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
