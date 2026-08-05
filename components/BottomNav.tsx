"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  {
    href: "/search",
    label: "Search",
    match: (p: string) => p.startsWith("/search"),
  },
  {
    href: "/discover",
    label: "New Chat",
    match: (p: string) => p.startsWith("/discover") || p.startsWith("/chat"),
  },
  {
    href: "/settings",
    label: "Settings",
    match: (p: string) => p.startsWith("/settings") || p.startsWith("/about") || p.startsWith("/privacy"),
  },
  {
    href: "/profile",
    label: "Profile",
    match: (p: string) => p.startsWith("/profile") || p.startsWith("/login") || p.startsWith("/signup"),
  },
] as const;

function Icon({ name, active }: { name: string; active: boolean }) {
  const c = active ? "#2dd4bf" : "#94a3b8";
  const props = { viewBox: "0 0 24 24", className: "h-6 w-6", fill: "none", stroke: c, strokeWidth: 1.8 };
  if (name === "Home")
    return (
      <svg {...props}>
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" strokeLinejoin="round" />
      </svg>
    );
  if (name === "Search")
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 3.5 3.5" strokeLinecap="round" />
      </svg>
    );
  if (name === "New Chat")
    return (
      <svg {...props}>
        <rect x="4" y="5" width="16" height="13" rx="2.5" />
        <path d="M12 9v5M9.5 11.5h5" strokeLinecap="round" />
      </svg>
    );
  if (name === "Settings")
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" />
        <path
          d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <svg {...props}>
      <circle cx="12" cy="9" r="3.2" />
      <path d="M5.5 19c1.4-3.2 3.6-4.8 6.5-4.8s5.1 1.6 6.5 4.8" strokeLinecap="round" />
    </svg>
  );
}

export function BottomNav() {
  const path = usePathname() || "/";
  if (path.startsWith("/chat")) return null;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#070b14]/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid h-[4.25rem] max-w-lg grid-cols-5">
        {TABS.map((t) => {
          const active = t.match(path);
          return (
            <Link
              key={t.label}
              href={t.href}
              className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
                active ? "text-[#2dd4bf]" : "text-slate-400"
              }`}
            >
              <Icon name={t.label} active={active} />
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
