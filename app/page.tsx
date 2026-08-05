import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { TrustBar } from "@/components/TrustBar";
import { CompanionRow, PortraitCard } from "@/components/CompanionCards";
import { BottomNav } from "@/components/BottomNav";
import { PERSONAS } from "@/lib/personas";

export default function HomePage() {
  const grid = PERSONAS.slice(0, 4);
  const list = PERSONAS.slice(0, 5);

  return (
    <>
      {/* —— Desktop / tablet (mockup web dark) —— */}
      <div className="hidden min-h-dvh md:block">
        <TopBar mode="desktop" />
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-6">
          <section className="flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
              Jab dil kare, baat kar lo.
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-slate-400">
              Sirf fictional AI characters. Real people nahi. Dating nahi.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/discover" className="text-[15px] font-semibold text-[#2dd4bf] transition hover:text-[#5eead4]">
                Explore Characters →
              </Link>
              <Link href="/discover" className="btn-teal !rounded-xl !px-8">
                Try for Free
              </Link>
            </div>
          </section>

          <div className="mt-14">
            <TrustBar />
          </div>

          <section className="mt-16">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Aaj kis tarah ki baat chahiye?
            </h2>
            <p className="mt-2 text-center text-sm text-slate-500">
              Har card pe AI badge · real insan nahi
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {grid.map((p) => (
                <PortraitCard key={p.id} p={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/discover" className="btn-outline !rounded-full">
                More characters
              </Link>
            </div>
          </section>
        </main>
      </div>

      {/* —— Mobile (mockup phone) —— */}
      <div className="flex min-h-dvh flex-col md:hidden">
        <TopBar mode="mobile" />
        <main className="flex-1 px-4 pb-28 pt-2">
          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-white">
            Jab dil kare,
            <br />
            baat kar lo.
          </h1>
          <p className="mt-3 max-w-sm text-[14px] leading-6 text-slate-400">
            Short, safe, non-dating conversations with private AI companions.
          </p>

          <div className="mt-8 space-y-3">
            {list.map((p) => (
              <CompanionRow key={p.id} p={p} />
            ))}
          </div>

          <Link
            href="/discover"
            className="mt-6 block text-center text-sm font-semibold text-[#2dd4bf]"
          >
            All AI companions →
          </Link>
        </main>
        <BottomNav />
      </div>
    </>
  );
}
