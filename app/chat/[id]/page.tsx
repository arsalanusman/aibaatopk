"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { consumeGuestMessage, getGuestLeft, GUEST_MSG_LIMIT } from "@/lib/guest";
import { getPersona } from "@/lib/personas";

type Msg = { role: "user" | "ai"; text: string };

export default function ChatPage() {
  const params = useParams();
  const id = String(params?.id || "");
  const persona = getPersona(id);

  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [left, setLeft] = useState(GUEST_MSG_LIMIT);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setLeft(getGuestLeft());
    if (persona) {
      setMsgs([
        {
          role: "ai",
          text: `Salam — main ${persona.name} hoon (${persona.role}). Yeh fictional AI hai, real insan nahi. ${persona.blurb} Aram se likho.`,
        },
      ]);
    }
  }, [persona]);

  if (!persona) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4">
        <p className="text-slate-400">Character nahi mila.</p>
        <Link href="/discover" className="btn-primary">
          Discover
        </Link>
      </div>
    );
  }

  const onSend = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    if (getGuestLeft() <= 0) {
      setLeft(0);
      return;
    }
    if (!consumeGuestMessage()) {
      setLeft(0);
      return;
    }
    setLeft(getGuestLeft());
    setInput("");
    setMsgs((m) => [...m, { role: "user", text }]);
    setBusy(true);
    // Local mock reply — wire real LLM later
    window.setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          role: "ai",
          text: `(AI · ${persona.name}) Samajh gaya: “${text.slice(0, 80)}${text.length > 80 ? "…" : ""}”. Abhi yeh demo reply hai — production pe real model lagega. Koi public feed nahi.`,
        },
      ]);
      setBusy(false);
    }, 600);
  };

  return (
    <div className="mx-auto flex h-[100dvh] max-w-lg flex-col bg-[#0b1220]">
      <header className="flex items-center gap-3 border-b border-white/[0.08] px-3 py-3">
        <Link href="/discover" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white">
          ←
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-white">{persona.name}</p>
          <p className="text-[11px] text-[#5eead4]">AI Companion · {persona.role}</p>
        </div>
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] tabular-nums text-slate-300">
          {left} free
        </span>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
        <p className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-[11px] leading-relaxed text-slate-500">
          Real insan nahi · dating nahi · {GUEST_MSG_LIMIT} free try messages (device pe). Sensitive personal data mat
          share karo.
        </p>
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-6 ${
              m.role === "user"
                ? "ml-auto bg-[#5eead4]/15 text-white"
                : "mr-auto border border-white/[0.08] bg-[#121a2b] text-slate-200"
            }`}
          >
            {m.text}
          </div>
        ))}
        {left <= 0 ? (
          <div className="rounded-2xl border border-[#ef6f5e]/30 bg-[#ef6f5e]/10 p-4 text-sm text-slate-200">
            Free try khatam. Baad mein full product (login + real AI) yahan connect hoga.
            <Link href="/" className="mt-3 block font-semibold text-[#5eead4]">
              Home pe jao →
            </Link>
          </div>
        ) : null}
      </div>

      <form onSubmit={onSend} className="border-t border-white/[0.08] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={left <= 0 || busy}
            placeholder={left <= 0 ? "Limit full" : "Roman Urdu mein likho…"}
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none placeholder:text-slate-600 focus:border-[#5eead4]/40"
          />
          <button
            type="submit"
            disabled={left <= 0 || busy || !input.trim()}
            className="rounded-full bg-[#5eead4] px-5 text-sm font-semibold text-[#042f2e] disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
