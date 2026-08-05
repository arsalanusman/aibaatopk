import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { TrustStrip } from "@/components/TrustStrip";
import { PersonaCard } from "@/components/PersonaCard";
import { PERSONAS } from "@/lib/personas";

export default function HomePage() {
  const featured = PERSONAS.filter((p) => p.safe).slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero — brand first, one job */}
        <section className="relative mx-auto flex min-h-[min(88dvh,760px)] max-w-5xl flex-col justify-end px-4 pb-16 pt-20 sm:pb-24 sm:pt-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5eead4]/80">
            Private AI · Roman Urdu
          </p>
          <h1 className="font-display mt-4 max-w-xl text-[2.75rem] leading-[1.05] text-white sm:text-6xl">
            Jab dil kare,
            <br />
            baat kar lo.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-400">
            Sirf fictional AI characters. Koi stranger, koi match, koi public profile nahi — private room
            aapki language mein.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/discover" className="btn-primary">
              AI characters dekho
            </Link>
            <Link href="/about" className="btn-ghost">
              Kaise kaam karta hai
            </Link>
          </div>
          <p className="mt-6 text-[12px] text-slate-500">
            Pehle 3 free messages · bina login · phone/CNIC nahi
          </p>
        </section>

        <TrustStrip />

        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-white sm:text-4xl">Aaj kis tarah baat chahiye?</h2>
              <p className="mt-2 text-sm text-slate-500">
                Yeh sab AI hain · real insan nahi · labels “listener / dost / mentor”
              </p>
            </div>
            <Link href="/discover" className="shrink-0 text-sm font-semibold text-[#5eead4]">
              Sab dekho →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {featured.map((p) => (
              <PersonaCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-white/[0.02] py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="font-display text-center text-3xl text-white">3 simple steps</h2>
            <ol className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-3">
              {[
                { n: "01", t: "Character choose", d: "AI badge wale companion pick karo" },
                { n: "02", t: "Free try", d: "3 messages bina account" },
                { n: "03", t: "Private baat", d: "Chaaho to baad mein email signup" },
              ].map((s) => (
                <li key={s.n} className="text-center sm:text-left">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#5eead4]">{s.n}</span>
                  <p className="mt-2 font-semibold text-white">{s.t}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl text-white">Kyun trust karein?</h2>
          <ul className="mt-6 space-y-2 text-left text-sm leading-7 text-slate-400">
            <li>• No phone number ya CNIC</li>
            <li>• Chats sirf aapke account (future) / device pe private</li>
            <li>• Real dating / match system bilkul nahi</li>
            <li>• Messages AI replies ke liye LLM providers ko ja sakte hain — Privacy pe open</li>
            <li>
              • Support:{" "}
              <a className="text-[#5eead4] underline-offset-2 hover:underline" href="mailto:support@baato.pk">
                support@baato.pk
              </a>
            </li>
          </ul>
          <Link href="/discover" className="btn-primary mt-10 inline-flex">
            Try AI chat
          </Link>
        </section>

        <footer className="border-t border-white/[0.06] py-10 text-center text-xs text-slate-500">
          <p className="font-display text-lg text-slate-300">ai.baato</p>
          <p className="mt-2">Private Roman Urdu AI companions · Not Baato Maps · Not a dating app</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <a href="mailto:privacy@baato.pk" className="hover:text-white">
              privacy@baato.pk
            </a>
          </div>
          <p className="mt-6">© {new Date().getFullYear()} ai.baato</p>
        </footer>
      </main>
    </>
  );
}
