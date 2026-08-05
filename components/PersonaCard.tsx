import Link from "next/link";
import type { Persona } from "@/lib/personas";

export function PersonaCard({ p }: { p: Persona }) {
  return (
    <Link
      href={`/chat/${p.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121a2b] transition hover:border-[#5eead4]/35"
    >
      <div
        className="relative flex aspect-[4/5] items-end p-4"
        style={{
          background: `linear-gradient(160deg, ${p.tone} 0%, #0b1220 90%)`,
        }}
      >
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-md border border-[#5eead4]/30 bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#5eead4]">
            AI Companion
          </span>
          {!p.safe ? (
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-300">
              Optional
            </span>
          ) : null}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="select-none text-6xl font-semibold text-white/15 transition group-hover:text-white/25">
            {p.name.slice(0, 1)}
          </span>
        </div>
        <div className="relative w-full">
          <p className="text-lg font-semibold text-white">{p.name}</p>
          <p className="text-[12px] font-medium text-[#5eead4]/90">{p.role}</p>
          <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-white/70">{p.blurb}</p>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-3 text-center text-[13px] font-semibold text-slate-200">
        Baat shuru karo
      </div>
    </Link>
  );
}
