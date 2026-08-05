import Link from "next/link";
import { TopBar } from "@/components/TopBar";

export default function LoginPage() {
  return (
    <div className="min-h-dvh">
      <TopBar />
      <main className="mx-auto flex max-w-md flex-col px-4 py-16">
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <p className="mt-2 text-sm text-slate-400">Full accounts baad mein wire — abhi free try try karo.</p>
        <Link href="/discover" className="btn-teal mt-8">
          Continue free try
        </Link>
      </main>
    </div>
  );
}
