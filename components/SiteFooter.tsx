import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-white/[0.07] bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2dd4bf] text-sm font-black text-[#042f2e]">
              B
            </span>
            <span className="text-lg font-semibold text-white">Baato</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
            Private Roman Urdu AI companions. Real people nahi. Dating / match app nahi.
          </p>
          <p className="mt-2 text-xs text-slate-600">ai.baato.pk · not Baato Maps</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link className="hover:text-white" href="/discover">
                  Characters
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/search">
                  Search
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/signup">
                  Sign up
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Trust</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link className="hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Help</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-white" href="mailto:support@baato.pk">
                  support@baato.pk
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="mailto:privacy@baato.pk">
                  privacy@baato.pk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Baato · AI companions — not a dating marketplace
      </div>
    </footer>
  );
}
