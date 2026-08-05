import Link from "next/link";
import { AppShell, PageHero } from "@/components/AppShell";
import { TrustBar } from "@/components/TrustBar";
import { CompanionRow, PortraitCard } from "@/components/CompanionCards";
import { PERSONAS } from "@/lib/personas";

const STEPS = [
  { n: "01", t: "Character choose karo", d: "Listener, dost, mentor — AI badge wale" },
  { n: "02", t: "Free try", d: "3 messages bina account, phone nahi" },
  { n: "03", t: "Private baat", d: "Chaaho to baad mein free account" },
];

export default function HomePage() {
  const featured = PERSONAS.filter((p) => p.featured);
  const restPreview = PERSONAS.slice(0, 6);

  return (
    <AppShell>
      {/* Hero */}
      <PageHero
        title="Jab dil kare, baat kar lo."
        sub="Sirf fictional AI characters. Real people nahi. Dating nahi. Short, safe, private conversations."
        actions={
          <>
            <Link href="/discover" className="btn-ghost-teal">
              Explore Characters →
            </Link>
            <Link href="/discover" className="btn-teal !px-8">
              Try for Free
            </Link>
          </>
        }
      />

      <div className="anim-up anim-delay-3 mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <TrustBar />
      </div>

      {/* Mobile-style list (all screens, compact on desktop as secondary) */}
      <section className="mx-auto mt-14 max-w-lg px-4 lg:hidden">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-semibold text-white">AI companions</h2>
          <Link href="/discover" className="text-xs font-semibold text-[#2dd4bf]">
            See all
          </Link>
        </div>
        <div className="space-y-3">
          {restPreview.map((p) => (
            <CompanionRow key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Portrait grid */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:mt-20">
        <div className="text-center">
          <h2 className="section-title">Aaj kis tarah ki baat chahiye?</h2>
          <p className="section-sub mx-auto max-w-lg">
            Har card pe role badge · AI Companion / Listener / Mentor · real insan nahi
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {(featured.length ? featured : PERSONAS.slice(0, 4)).map((p) => (
            <PortraitCard key={p.id} p={p} />
          ))}
        </div>
        <div className="mt-8 hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4">
          {PERSONAS.filter((p) => !p.featured)
            .slice(0, 4)
            .map((p) => (
              <PortraitCard key={p.id} p={p} />
            ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/discover" className="btn-outline !rounded-full !px-8">
            More characters
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <div className="glass-panel px-6 py-12 sm:px-10">
          <h2 className="section-title text-center">Kaise kaam karta hai</h2>
          <ol className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="text-center sm:text-left">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#2dd4bf]">{s.n}</span>
                <p className="mt-2 text-lg font-semibold text-white">{s.t}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust honesty */}
      <section className="mx-auto mt-20 max-w-2xl px-4 text-center sm:px-6">
        <h2 className="section-title">Kyun trust karein?</h2>
        <ul className="mt-8 space-y-3 text-left text-[15px] leading-7 text-slate-400">
          <li className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="text-[#2dd4bf]">✓</span>
            No phone number ya CNIC free try ke liye
          </li>
          <li className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="text-[#2dd4bf]">✓</span>
            Real dating / match / public profile bilkul nahi
          </li>
          <li className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="text-[#2dd4bf]">✓</span>
            Chats private framing — dusre users aapki baat nahi dekhte
          </li>
          <li className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="text-[#2dd4bf]">✓</span>
            AI replies LLM providers se aa sakte hain — Privacy pe clearly likha
          </li>
        </ul>
        <Link href="/privacy" className="btn-ghost-teal mt-6 inline-flex">
          Privacy policy →
        </Link>
      </section>

      {/* CTA band */}
      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-[#2dd4bf]/20 bg-gradient-to-br from-[#0f766e]/40 via-[#0e1422] to-[#121a2b] px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#2dd4bf]/15 blur-3xl" />
          <h2 className="relative text-3xl font-bold text-white sm:text-4xl">Private AI chat shuru?</h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300">
            Pehle free try · nickname + email baad mein. Sensitive data mat share karo.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/discover" className="btn-teal !px-8">
              Characters dekho
            </Link>
            <Link href="/signup" className="btn-outline">
              Free account
            </Link>
          </div>
        </div>
      </section>

      <div className="h-10" />
    </AppShell>
  );
}
