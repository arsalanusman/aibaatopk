"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

const ADMIN_KEY_STORAGE = "baato_admin_secret";

type ThreadSummary = {
  id: string;
  email: string | null;
  guestLabel: string | null;
  updatedAt: string;
  preview: string;
  messageCount: number;
};

export default function AdminSupportPage() {
  const [secret, setSecret] = useState("");
  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(async (adminSecret: string) => {
    setError(null);
    const res = await fetch("/api/admin/support/threads", {
      headers: { "x-admin-secret": adminSecret },
    });
    if (res.status === 401) {
      setError("Galat admin secret ya ADMIN_SECRET set nahi.");
      setThreads([]);
      setLoaded(false);
      return;
    }
    if (!res.ok) {
      setError("List load nahi hui.");
      return;
    }
    const data = await res.json();
    setThreads(data.threads as ThreadSummary[]);
    setLoaded(true);
    try {
      sessionStorage.setItem(ADMIN_KEY_STORAGE, adminSecret);
    } catch {
      /* ignore */
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    load(secret.trim());
  };

  return (
    <div className="min-h-dvh bg-[#070b14] px-4 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-[#2dd4bf]">← Baato</Link>
        <h1 className="mt-4 text-2xl font-bold">Support inbox (needs human)</h1>
        <p className="mt-1 text-sm text-slate-500">
          Payment / account threads yahan dikhti hain. Server pe <code className="text-slate-400">ADMIN_SECRET</code> set
          hona chahiye.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-wrap gap-2">
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Admin secret"
            className="min-w-[200px] flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
          />
          <button type="submit" className="rounded-xl bg-[#2dd4bf] px-4 py-2 text-sm font-bold text-[#042f2e]">
            Load
          </button>
        </form>

        {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}

        {loaded ? (
          <ul className="mt-8 space-y-3">
            {threads.length === 0 ? (
              <li className="text-sm text-slate-500">Abhi koi flagged thread nahi.</li>
            ) : (
              threads.map((t) => (
                <li
                  key={t.id}
                  className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm"
                >
                  <p className="font-mono text-xs text-slate-500">{t.id}</p>
                  <p className="mt-1 text-slate-300">{t.preview}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {t.messageCount} msgs · {t.updatedAt}
                    {t.email ? ` · ${t.email}` : ""}
                  </p>
                </li>
              ))
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
