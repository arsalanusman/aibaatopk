export type Persona = {
  id: string;
  name: string;
  role: "AI Listener" | "AI Companion" | "AI Mentor";
  roleColor: string;
  blurb: string;
  avatar: string;
  tags: string[];
  featured?: boolean;
};

export const PERSONAS: Persona[] = [
  {
    id: "meher",
    name: "Meher",
    role: "AI Listener",
    roleColor: "#3b82f6",
    blurb: "Mature sunne wali · dheemi awaz · judgment free",
    avatar: "/personas/meher.png",
    tags: ["listener", "calm"],
    featured: true,
  },
  {
    id: "sana",
    name: "Sana",
    role: "AI Companion",
    roleColor: "#8b5cf6",
    blurb: "Soft dost · narmi se baat · dil halka",
    avatar: "/personas/sana.png",
    tags: ["friend", "soft"],
    featured: true,
  },
  {
    id: "usman",
    name: "Usman",
    role: "AI Mentor",
    roleColor: "#0ea5e9",
    blurb: "Steady mashwara · practical · bhai energy",
    avatar: "/personas/usman.png",
    tags: ["mentor", "practical"],
    featured: true,
  },
  {
    id: "eshal",
    name: "Eshal",
    role: "AI Companion",
    roleColor: "#64748b",
    blurb: "Clear helper · tasks · study · short replies",
    avatar: "/personas/eshal.png",
    tags: ["helper"],
    featured: true,
  },
  {
    id: "zoya",
    name: "Zoya",
    role: "AI Companion",
    roleColor: "#a16207",
    blurb: "Campus vibe · light mazaaq · pressure free",
    avatar: "/personas/zoya.png",
    tags: ["friend", "fun"],
  },
  {
    id: "kabir",
    name: "Kabir",
    role: "AI Companion",
    roleColor: "#059669",
    blurb: "Clean close talk · optional · forced nahi",
    avatar: "/personas/kabir.png",
    tags: ["close", "optional"],
  },
  {
    id: "alya",
    name: "Alya",
    role: "AI Companion",
    roleColor: "#db2777",
    blurb: "Office calm · soft company · private",
    avatar: "/personas/alya.png",
    tags: ["companion"],
  },
  {
    id: "rida",
    name: "Rida",
    role: "AI Companion",
    roleColor: "#7c3aed",
    blurb: "Playful close · clear AI · safe framing",
    avatar: "/personas/rida.png",
    tags: ["close"],
  },
  {
    id: "hamza",
    name: "Hamza",
    role: "AI Companion",
    roleColor: "#2563eb",
    blurb: "Soft boyfriend energy · fictional only",
    avatar: "/personas/hamza.png",
    tags: ["optional"],
  },
  {
    id: "bilal",
    name: "Bilal",
    role: "AI Mentor",
    roleColor: "#b45309",
    blurb: "Steady office man · mature baat",
    avatar: "/personas/bilal.png",
    tags: ["mentor"],
  },
];

export function getPersona(id: string) {
  return PERSONAS.find((p) => p.id === id);
}

export function searchPersonas(q: string) {
  const n = q.trim().toLowerCase();
  if (!n) return PERSONAS;
  return PERSONAS.filter(
    (p) =>
      p.name.toLowerCase().includes(n) ||
      p.blurb.toLowerCase().includes(n) ||
      p.role.toLowerCase().includes(n) ||
      p.tags.some((t) => t.includes(n))
  );
}
