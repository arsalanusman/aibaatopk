"use client";

import { AppShell } from "@/components/AppShell";
import { SUPPORT_THREAD_STORAGE_KEY } from "@/lib/support/constants";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

type Msg = { id: string; role: "user" | "assistant"; content: string };

async function ensureThreadId(): Promise<string> {
  try {
    const existing = localStorage.getItem(SUPPORT_THREAD_STORAGE_KEY);
    if (existing) return existing;
  } catch {
    /* ignore */
  }
  const res = await fetch("/api/support/threads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guestLabel: "web-guest" }),
  });
  if (!res.ok) throw new Error("Could not start support chat");
  const data = await res.json();
  const id = String(data.threadId);
  try {
    localStorage.setItem(SUPPORT_THREAD_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
  return id;
}

export default function SupportPage() {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const loadThread = useCallback(async (id: string): Promise<void> => {
    const res = await fetch(`/api/support/threads/${id}`);
    if (res.status === 404) {
      try {
        localStorage.removeItem(SUPPORT_THREAD_STORAGE_KEY);
      } catch {
        /* ignore */
      }
      const newId = await ensureThreadId();
      await loadThread(newId);
      return;
    }
    if (!res.ok) throw new Error("Could not load chat");
    const data = await res.json();
    setMsgs(
      (data.messages as { id: string; role: "user" | "assistant"; content: string }[]).map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
      }))
    );
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const id = await ensureThreadId();
        if (cancelled) return;
        setThreadId(id);
        await loadThread(id);
      } catch {
        if (!cancelled) setError("Support chat load nahi ho saki. Thori der baad try karein.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [loadThread]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  const onSend = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy || !threadId) return;
    setError(null);
    setInput("");
    setBusy(true);
    const optimisticId = `tmp-${Date.now()}`;
    setMsgs((m) => [...m, { id: optimisticId, role: "user", content: text }]);
    try {
      const res = await fetch(`/api/support/threads/${threadId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("Send failed");
      const data = await res.json();
      setMsgs((m) => {
        const withoutTmp = m.filter((x) => x.id !== optimisticId);
        return [
          ...withoutTmp,
          {
            id: data.userMessage.id,
            role: "user" as const,
            content: data.userMessage.content,
          },
          {
            id: data.assistantMessage.id,
            role: "assistant" as const,
            content: data.assistantMessage.content,
          },
        ];
      });
    } catch {
      setMsgs((m) => m.filter((x) => x.id !== optimisticId));
      setInput(text);
      setError("Message send nahi hua. Dobara try karein.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AppShell hideFooter padNav>
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-lg flex-col px-4 pb-28 pt-6 sm:px-6">
        <h1 className="text-2xl font-bold text-white">Support</h1>
        <p className="mt-1 text-sm text-slate-500">
          Roman Urdu mein likho — AI turant jawab dega; team bhi follow up karegi.
        </p>

        <div className="glass-panel mt-6 flex min-h-[50dvh] flex-1 flex-col overflow-hidden p-0">
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.length === 0 && !busy ? (
              <p className="text-sm text-slate-500">
                Masla likho: login, Plus / JazzCash, free messages, account delete, app load nahi ho rahi…
              </p>
            ) : null}
            {msgs.map((m) => (
              <div
                key={m.id}
                className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[14px] leading-6 ${
                  m.role === "user"
                    ? "ml-auto bg-[#2dd4bf]/20 text-white"
                    : "mr-auto border border-white/10 bg-[#121826] text-slate-200"
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy ? (
              <div className="mr-auto rounded-2xl border border-white/10 bg-[#121826] px-4 py-3 text-sm text-slate-500">
                AI reply…
              </div>
            ) : null}
            <div ref={endRef} />
          </div>

          {error ? <p className="px-4 pb-2 text-sm text-red-400">{error}</p> : null}

          <form onSubmit={onSend} className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={busy || !threadId}
                placeholder="Apna sawal likho…"
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none placeholder:text-slate-600 focus:border-[#2dd4bf]/45"
              />
              <button
                type="submit"
                disabled={busy || !input.trim() || !threadId}
                className="rounded-2xl bg-[#2dd4bf] px-5 text-sm font-bold text-[#042f2e] disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-slate-600">
          Email:{" "}
          <a className="text-[#2dd4bf]" href="mailto:support@baato.pk">
            support@baato.pk
          </a>
        </p>
      </div>
    </AppShell>
  );
}
