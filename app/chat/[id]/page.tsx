"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { consumeGuestMessage, getGuestLeft, GUEST_MSG_LIMIT } from "@/lib/guest";
import { getPersona } from "@/lib/personas";

type Msg = { role: "user" | "ai"; text: string };

export default function ChatPage() {
  const params = useParams();
  const id = String(params?.id || "");
  const persona = getPersona(id);
  const endRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  if (!persona) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#070b14] px-4">
        <p className="text-slate-400">Character nahi mila.</p>
        <Link href="/discover" className="btn-teal">
          Characters
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
    window.setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          role: "ai",
          text: `(${persona.name}) “${text.slice(0, 100)}${text.length > 100 ? "…" : ""}” — samajh gaya. Abhi demo reply hai; production pe real model. Private · dating nahi.`,
        },
      ]);
      setBusy(false);
    }, 650);
  };

  return (
    <div className="mx-auto flex h-[100dvh] max-w-lg flex-col bg-[#070b14]">
      <header className="flex items-center gap-3 border-b border-white/10 px-3 py-3">
        <Link
          href="/discover"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg text-white"
          aria-label="Back"
        >
          ←
        </Link>
        <div className="relative h-11 w-11 overflow-hidden rounded-xl ring-1 ring-white/10">
          <Image src={persona.avatar} alt="" fill className="object-cover object-top" sizes="44px" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-white">{persona.name}</p>
          <p className="text-[11px] font-medium text-[#2dd4bf]">{persona.role} · AI only</p>
        </div>
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] tabular-nums text-slate-300">
          {left}/{GUEST_MSG_LIMIT}
        </span>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
        <p className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-[11px] leading-relaxed text-slate-500">
          Real insan nahi · dating nahi · {GUEST_MSG_LIMIT} free messages is device pe. Sensitive personal data mat
          share karo.
        </p>
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-6 ${
              m.role === "user"
                ? "ml-auto bg-[#2dd4bf]/20 text-white"
                : "mr-auto border border-white/10 bg-[#121826] text-slate-200"
            }`}
          >
            {m.text}
          </div>
        ))}
        {busy ? (
          <div className="mr-auto rounded-2xl border border-white/10 bg-[#121826] px-4 py-3 text-sm text-slate-500">
            Typing…
          </div>
        ) : null}
        {left <= 0 ? (
          <div className="rounded-2xl border border-[#2dd4bf]/25 bg-[#2dd4bf]/10 p-4 text-sm text-slate-200">
            Free try khatam. Account banao jab full AI wire ho — pehle{" "}
            <Link href="/signup" className="font-semibold text-[#2dd4bf] underline">
              Sign up
            </Link>{" "}
            ya{" "}
            <Link href="/discover" className="font-semibold text-[#2dd4bf] underline">
              dusra character
            </Link>
            .
          </div>
        ) : null}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={onSend}
        className="border-t border-white/10 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={left <= 0 || busy}
            placeholder={left <= 0 ? "Limit full" : "Roman Urdu mein likho…"}
            className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-slate-600 focus:border-[#2dd4bf]/45"
          />
          <button
            type="submit"
            disabled={left <= 0 || busy || !input.trim()}
            className="rounded-2xl bg-[#2dd4bf] px-5 text-sm font-bold text-[#042f2e] disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
