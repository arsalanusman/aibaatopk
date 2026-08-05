import Image from "next/image";
import Link from "next/link";
import type { Persona } from "@/lib/personas";

export function PortraitCard({ p }: { p: Persona }) {
  return (
    <Link
      href={`/chat/${p.id}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-[22px] border border-white/10 bg-[#121826] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/45 hover:shadow-[0_24px_50px_rgba(45,212,191,0.14)]"
    >
      <Image
        src={p.avatar}
        alt={p.name}
        fill
        sizes="(max-width:768px) 50vw, 25vw"
        className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <span
        className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white shadow-md backdrop-blur-sm"
        style={{ backgroundColor: `${p.roleColor}e6` }}
      >
        {p.role}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <p className="text-[16px] font-semibold text-white sm:text-[17px]">{p.name}</p>
        <p className="mt-0.5 line-clamp-2 text-[12px] leading-snug text-white/75">{p.blurb}</p>
        <span className="mt-3 inline-flex rounded-xl bg-[#2dd4bf] px-3.5 py-2 text-[12px] font-bold text-[#042f2e] shadow-[0_8px_18px_rgba(45,212,191,0.35)] transition group-hover:bg-[#5eead4]">
          Talk to me
        </span>
      </div>
    </Link>
  );
}

export function CompanionRow({ p }: { p: Persona }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md transition hover:border-[#2dd4bf]/25 hover:bg-white/[0.06]">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10">
        <Image src={p.avatar} alt="" fill className="object-cover object-top" sizes="56px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold text-white">{p.name}</p>
        <p className="truncate text-[12px] text-slate-400">
          {p.role} · {p.blurb}
        </p>
      </div>
      <Link
        href={`/chat/${p.id}`}
        className="shrink-0 rounded-xl bg-[#2dd4bf] px-3.5 py-2.5 text-[12px] font-bold text-[#042f2e] shadow-[0_8px_18px_rgba(45,212,191,0.3)]"
      >
        Talk to me
      </Link>
    </div>
  );
}

export function PersonaListItem({ p }: { p: Persona }) {
  return (
    <Link
      href={`/chat/${p.id}`}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0e1422] p-3 transition hover:border-[#2dd4bf]/30"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <Image src={p.avatar} alt="" fill className="object-cover object-top" sizes="48px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-white">{p.name}</p>
        <p className="truncate text-xs text-slate-500">{p.blurb}</p>
      </div>
      <span className="text-xs font-semibold text-[#2dd4bf]">Chat →</span>
    </Link>
  );
}
