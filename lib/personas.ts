export type Persona = {
  id: string;
  name: string;
  role: "AI Listener" | "AI Companion" | "AI Mentor";
  roleColor: string;
  blurb: string;
  avatar: string;
  accent: string;
};

export const PERSONAS: Persona[] = [
  {
    id: "meher",
    name: "Meher",
    role: "AI Listener",
    roleColor: "#3b82f6",
    blurb: "Mature sunne wali · calm baat",
    avatar: "/personas/meher.png",
    accent: "#1e3a5f",
  },
  {
    id: "sana",
    name: "Sana",
    role: "AI Companion",
    roleColor: "#8b5cf6",
    blurb: "Soft dost · narmi se",
    avatar: "/personas/sana.png",
    accent: "#2d1f3d",
  },
  {
    id: "usman",
    name: "Usman",
    role: "AI Mentor",
    roleColor: "#0ea5e9",
    blurb: "Steady mashwara · practical",
    avatar: "/personas/usman.png",
    accent: "#0f2a3a",
  },
  {
    id: "eshal",
    name: "Eshal",
    role: "AI Companion",
    roleColor: "#64748b",
    blurb: "Clear helper · short replies",
    avatar: "/personas/eshal.png",
    accent: "#1c2434",
  },
  {
    id: "zoya",
    name: "Zoya",
    role: "AI Companion",
    roleColor: "#a16207",
    blurb: "Campus vibe · halki mazaaq",
    avatar: "/personas/zoya.png",
    accent: "#2a2118",
  },
  {
    id: "kabir",
    name: "Kabir",
    role: "AI Companion",
    roleColor: "#059669",
    blurb: "Clean close talk · optional",
    avatar: "/personas/kabir.png",
    accent: "#0f2e24",
  },
  {
    id: "alya",
    name: "Alya",
    role: "AI Companion",
    roleColor: "#db2777",
    blurb: "Office calm · soft company",
    avatar: "/personas/alya.png",
    accent: "#2e1a24",
  },
  {
    id: "rida",
    name: "Rida",
    role: "AI Companion",
    roleColor: "#7c3aed",
    blurb: "Playful close · clear AI",
    avatar: "/personas/rida.png",
    accent: "#221a30",
  },
];

export function getPersona(id: string) {
  return PERSONAS.find((p) => p.id === id);
}
