import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export const metadata = {
  title: "About",
  description: "Baato — private Roman Urdu AI companions. Not a dating app.",
};

export default function AboutPage() {
  return (
    <AppShell>
      <main className="mx-auto max-w-2xl px-4 py-12 leading-7 text-slate-400 sm:px-6">
        <h1 className="text-4xl font-bold text-white">Baato kya hai?</h1>
        <div className="mt-8 space-y-5 text-[15px]">
          <p>
            <strong className="text-white">Baato</strong> (ai.baato.pk) private AI companion platform hai — Roman Urdu
            mein freely baat ke liye.
          </p>
          <p>
            Yahan <strong className="text-white">real strangers nahi</strong> milte. Sirf fictional AI characters —
            dil halka, mashwara, soft company.
          </p>
          <p className="text-white">
            Koi public profile nahi.
            <br />
            Koi match nahi.
            <br />
            Koi random inbox nahi.
          </p>
          <p>Sirf aap aur aapka chosen AI companion.</p>
          <p>
            Purpose: language mein freely baat jo ghar jaisi lage — dating marketplace nahi.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-2">
              <a className="text-[#2dd4bf]" href="mailto:support@baato.pk">
                support@baato.pk
              </a>
              {" · "}
              <a className="text-[#2dd4bf]" href="mailto:privacy@baato.pk">
                privacy@baato.pk
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/discover" className="btn-teal">
            Characters
          </Link>
          <Link href="/privacy" className="btn-outline">
            Privacy
          </Link>
        </div>
      </main>
    </AppShell>
  );
}
