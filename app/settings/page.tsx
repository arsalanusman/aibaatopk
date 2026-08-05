"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { GUEST_MSG_LIMIT, getGuestLeft, getGuestUsed } from "@/lib/guest";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [used, setUsed] = useState(0);
  const [left, setLeft] = useState(GUEST_MSG_LIMIT);

  useEffect(() => {
    setUsed(getGuestUsed());
    setLeft(getGuestLeft());
  }, []);

  const clearGuest = () => {
    try {
      localStorage.removeItem("aibaatopk_guest_used");
    } catch {
      /* ignore */
    }
    setUsed(0);
    setLeft(GUEST_MSG_LIMIT);
  };

  return (
    <AppShell>
      <main className="mx-auto max-w-lg px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">App preferences · guest try</p>

        <section className="glass-panel mt-8 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Guest try</h2>
          <p className="mt-3 text-sm text-slate-300">
            Used: <span className="font-semibold text-white">{used}</span> / {GUEST_MSG_LIMIT}
          </p>
          <p className="text-sm text-slate-300">
            Left: <span className="font-semibold text-[#2dd4bf]">{left}</span>
          </p>
          <button type="button" onClick={clearGuest} className="btn-outline mt-4 !py-2 text-sm">
            Reset free messages (local)
          </button>
        </section>

        <section className="mt-4 space-y-2">
          {[
            { href: "/about", t: "About" },
            { href: "/privacy", t: "Privacy policy" },
            { href: "/profile", t: "Profile" },
            { href: "mailto:support@baato.pk", t: "Contact support" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white hover:bg-white/[0.06]"
            >
              {l.t}
              <span className="text-slate-500">→</span>
            </Link>
          ))}
        </section>

        <p className="mt-8 text-center text-xs text-slate-600">Theme: dark (product default) · v0.1 aibaatopk</p>
      </main>
    </AppShell>
  );
}
