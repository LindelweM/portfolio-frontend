import { useEffect, useState } from "react";

/** Types each phrase out, holds it, deletes it, moves to the next. */
export function useTypewriter(phrases, { typeMs = 68, deleteMs = 34, holdMs = 1900 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [enabled] = useState(
    () =>
      typeof window === "undefined" ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!enabled || phrases.length === 0) return;

    const phrase = phrases[index % phrases.length];

    if (!deleting && text === phrase) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? phrase.slice(0, prev.length - 1) : phrase.slice(0, prev.length + 1)
        ),
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, enabled, typeMs, deleteMs, holdMs]);

  // Reduced motion: show the first phrase, statically.
  return enabled ? text : phrases[0] ?? "";
}
