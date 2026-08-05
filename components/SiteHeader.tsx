import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0b1220]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-display text-2xl tracking-tight text-white">
          ai<span className="text-[#5eead4]">baato</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/about" className="hidden rounded-full px-3 py-1.5 text-slate-300 hover:text-white sm:inline">
            About
          </Link>
          <Link href="/privacy" className="hidden rounded-full px-3 py-1.5 text-slate-300 hover:text-white sm:inline">
            Privacy
          </Link>
          <Link href="/discover" className="btn-primary !py-2 !px-4 text-[13px]">
            AI characters
          </Link>
        </nav>
      </div>
      <p className="border-t border-white/[0.04] px-4 py-1.5 text-center text-[11px] text-slate-500">
        Private AI companions · Real people nahi · Dating app nahi
      </p>
    </header>
  );
}
