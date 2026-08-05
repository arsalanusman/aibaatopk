import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <AppShell>
      <main className="mx-auto max-w-2xl px-4 py-12 text-[15px] leading-7 text-slate-400 sm:px-6">
        <h1 className="text-4xl font-bold text-white">Privacy · seedha</h1>
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-white">Data we ask</h2>
            <p className="mt-2">
              Free try: no phone / CNIC. Optional signup: nickname, email, password. We do not run a public match feed.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">AI / LLMs</h2>
            <p className="mt-2">
              Messages used to generate AI replies may be sent to third-party LLM providers. We do not claim
              end-to-end encryption. Sensitive data mat share karo.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Guest mode</h2>
            <p className="mt-2">
              Guest free-message counters pehle aapke browser (localStorage) pe store hote hain.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2">
              <a className="text-[#2dd4bf]" href="mailto:privacy@baato.pk">
                privacy@baato.pk
              </a>
            </p>
          </section>
        </div>
        <Link href="/" className="btn-outline mt-10 inline-flex">
          Home
        </Link>
      </main>
    </AppShell>
  );
}
