// Section order drives both the nav rail and the numbering on each heading.
export const sections = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const sectionNumber = (id) => {
  const index = sections.findIndex((s) => s.id === id);
  return String(index + 1).padStart(2, "0");
};
