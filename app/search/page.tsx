"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { PersonaListItem } from "@/components/CompanionCards";
import { searchPersonas } from "@/lib/personas";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchPersonas(q), [q]);

  return (
    <AppShell>
      <main className="mx-auto max-w-xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Search</h1>
        <p className="mt-1 text-sm text-slate-500">Name, role, ya vibe se dhoondo</p>
        <label className="relative mt-6 block">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 3.5 3.5" strokeLinecap="round" />
            </svg>
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. listener, meher, mentor…"
            className="input-dark !pl-10"
            autoFocus
          />
        </label>
        <div className="mt-6 space-y-2">
          {results.map((p) => (
            <PersonaListItem key={p.id} p={p} />
          ))}
        </div>
        {results.length === 0 ? (
          <p className="py-12 text-center text-sm text-slate-500">Koi character nahi mila.</p>
        ) : null}
      </main>
    </AppShell>
  );
}
