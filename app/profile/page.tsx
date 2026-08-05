import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { GUEST_MSG_LIMIT } from "@/lib/guest";

export default function ProfilePage() {
  return (
    <AppShell>
      <main className="mx-auto max-w-md px-4 py-10 sm:px-6">
        <div className="glass-panel p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2dd4bf]/15 text-2xl font-bold text-[#2dd4bf]">
            G
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">Guest</h1>
          <p className="mt-1 text-sm text-slate-500">
            Login nahi — free try ({GUEST_MSG_LIMIT} msgs). Account se chats save hongi (jald).
          </p>
          <div className="mt-6 grid gap-3">
            <Link href="/signup" className="btn-teal w-full">
              Free account banao
            </Link>
            <Link href="/login" className="btn-outline w-full">
              Login
            </Link>
            <Link href="/discover" className="btn-ghost-teal w-full py-2 text-center">
              Characters pe jao →
            </Link>
          </div>
        </div>
        <div className="mt-6 space-y-2 text-sm">
          <Link href="/settings" className="block rounded-xl border border-white/10 px-4 py-3 text-slate-300 hover:bg-white/5">
            Settings
          </Link>
          <Link href="/privacy" className="block rounded-xl border border-white/10 px-4 py-3 text-slate-300 hover:bg-white/5">
            Privacy
          </Link>
          <Link href="/about" className="block rounded-xl border border-white/10 px-4 py-3 text-slate-300 hover:bg-white/5">
            About Baato
          </Link>
        </div>
      </main>
    </AppShell>
  );
}
