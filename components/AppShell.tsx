import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { SiteFooter } from "@/components/SiteFooter";

type Props = {
  children: React.ReactNode;
  /** Hide bottom nav (chat, etc.) */
  hideNav?: boolean;
  /** Hide marketing footer */
  hideFooter?: boolean;
  /** Extra bottom padding for mobile nav */
  padNav?: boolean;
};

export function AppShell({ children, hideNav, hideFooter, padNav = true }: Props) {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <div className={`flex-1 ${padNav && !hideNav ? "pb-24 lg:pb-0" : ""}`}>{children}</div>
      {!hideFooter ? <SiteFooter /> : null}
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}

export function PageHero({
  title,
  sub,
  actions,
}: {
  title: string;
  sub?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10 text-center sm:pt-14">
      <h1 className="anim-up text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {sub ? <p className="anim-up anim-delay-1 mx-auto mt-4 max-w-xl text-[16px] leading-7 text-slate-400">{sub}</p> : null}
      {actions ? <div className="anim-up anim-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3">{actions}</div> : null}
    </div>
  );
}

export function EmptyState({ title, sub, href, cta }: { title: string; sub: string; href: string; cta: string }) {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <p className="text-xl font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-500">{sub}</p>
      <Link href={href} className="btn-teal mt-6 inline-flex">
        {cta}
      </Link>
    </div>
  );
}
