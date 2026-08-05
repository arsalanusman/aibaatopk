"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function TopBar() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/discover", label: "Characters" },
    { href: "/search", label: "Search" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070b14]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2dd4bf] to-[#0d9488] text-lg font-black text-[#042f2e] shadow-[0_8px_20px_rgba(45,212,191,0.35)]">
            B
          </span>
          <span className="text-[1.35rem] font-semibold tracking-tight text-white">Baato</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/discover"
            className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:inline"
          >
            Free try
          </Link>
          <Link href="/login" className="btn-outline !hidden !rounded-full !px-4 !py-2 text-[13px] sm:!inline-flex">
            Login
          </Link>
          <Link href="/signup" className="btn-teal !hidden !rounded-full !px-4 !py-2 text-[13px] md:!inline-flex">
            Sign up
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" className="btn-outline !py-2.5 text-center text-[13px]">
                Login
              </Link>
              <Link href="/signup" className="btn-teal !py-2.5 text-center text-[13px]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
