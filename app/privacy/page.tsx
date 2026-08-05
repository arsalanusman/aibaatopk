import Link from "next/link";
import { TopBar } from "@/components/TopBar";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh">
      <TopBar />
      <main className="mx-auto max-w-xl px-4 py-12 text-[15px] leading-7 text-slate-400">
        <h1 className="text-4xl font-bold text-white">Privacy</h1>
        <ul className="mt-6 list-disc space-y-3 pl-5">
          <li>No phone / CNIC for free try.</li>
          <li>Not a dating app — no public match feed.</li>
          <li>AI replies may go to LLM providers. We do not claim E2E encryption.</li>
          <li>
            <a className="text-[#2dd4bf]" href="mailto:privacy@baato.pk">
              privacy@baato.pk
            </a>
          </li>
        </ul>
        <Link href="/" className="btn-outline mt-10 inline-flex">
          Home
        </Link>
      </main>
    </div>
  );
}
