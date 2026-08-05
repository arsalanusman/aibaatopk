import Link from "next/link";

export function TopBar({ mode = "desktop" }: { mode?: "desktop" | "mobile" }) {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2dd4bf] to-[#0d9488] text-lg font-black text-[#042f2e] shadow-[0_8px_20px_rgba(45,212,191,0.35)]">
          B
        </span>
        <span className="text-[1.35rem] font-semibold tracking-tight text-white">Baato</span>
      </Link>

      {mode === "desktop" ? (
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/discover" className="text-sm text-slate-300 transition hover:text-white">
            Free try
          </Link>
          <span className="hidden text-slate-600 sm:inline">/</span>
          <Link href="/login" className="btn-outline !rounded-full !px-5 !py-2 text-[13px]">
            Login
          </Link>
        </div>
      ) : (
        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </header>
  );
}
