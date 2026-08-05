export type Persona = {
  id: string;
  name: string;
  role: string;
  blurb: string;
  /** Soft pastel avatar initial color */
  tone: string;
  safe: boolean;
};

/** Fictional AI companions — not real people, not a match marketplace. */
export const PERSONAS: Persona[] = [
  {
    id: "meher",
    name: "Meher",
    role: "Calm Listener",
    blurb: "Mature baat, dheemi awaz, judgment free sunna.",
    tone: "#3d5a5b",
    safe: true,
  },
  {
    id: "sana",
    name: "Sana",
    role: "Soft Dost",
    blurb: "Dil halka karne wali, narmi se reply.",
    tone: "#4a5568",
    safe: true,
  },
  {
    id: "usman",
    name: "Usman",
    role: "Steady Mentor",
    blurb: "Practical mashwara, bhai-dost energy — romance nahi pehle.",
    tone: "#2c5282",
    safe: true,
  },
  {
    id: "eshal",
    name: "Eshal",
    role: "Clear Helper",
    blurb: "Plans, study, roz-marra — short aur saaf.",
    tone: "#2f4f4f",
    safe: true,
  },
  {
    id: "zoya",
    name: "Zoya",
    role: "Light Chat",
    blurb: "Campus vibe, halki mazaaq — pressure free.",
    tone: "#553c2a",
    safe: true,
  },
  {
    id: "kabir",
    name: "Kabir",
    role: "Optional Close",
    blurb: "Clean close talk — clearly optional, forced nahi.",
    tone: "#3c366b",
    safe: false,
  },
];

export function getPersona(id: string): Persona | undefined {
  return PERSONAS.find((p) => p.id === id);
}
