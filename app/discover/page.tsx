"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { PortraitCard } from "@/components/CompanionCards";
import { PERSONAS, type Persona } from "@/lib/personas";

const FILTERS: { id: string; label: string; test: (p: Persona) => boolean }[] = [
  { id: "all", label: "All", test: () => true },
  { id: "listener", label: "Listeners", test: (p) => p.role === "AI Listener" },
  { id: "companion", label: "Companions", test: (p) => p.role === "AI Companion" },
  { id: "mentor", label: "Mentors", test: (p) => p.role === "AI Mentor" },
];

export default function DiscoverPage() {
  const [filter, setFilter] = useState("all");
  const list = useMemo(() => {
    const f = FILTERS.find((x) => x.id === filter) || FILTERS[0];
    return PERSONAS.filter(f.test);
  }, [filter]);

  return (
    <AppShell>
      <main className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {["Trust ✓", "Verified AI", "Private chats", "Not dating"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Aaj kis tarah ki baat chahiye?
        </h1>
        <p className="mt-3 text-center text-sm text-slate-500">
          Baato AI companions · {PERSONAS.length} characters · real people nahi
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f.id
                  ? "bg-[#2dd4bf] text-[#042f2e]"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {list.map((p) => (
            <PortraitCard key={p.id} p={p} />
          ))}
        </div>
        {list.length === 0 ? (
          <p className="py-16 text-center text-slate-500">Is filter pe koi nahi.</p>
        ) : null}
      </main>
    </AppShell>
  );
}
