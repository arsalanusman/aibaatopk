import { TopBar } from "@/components/TopBar";
import { PortraitCard } from "@/components/CompanionCards";
import { BottomNav } from "@/components/BottomNav";
import { PERSONAS } from "@/lib/personas";

export const metadata = {
  title: "Characters",
  description: "Aaj kis tarah ki baat chahiye? Baato AI companions.",
};

export default function DiscoverPage() {
  return (
    <div className="min-h-dvh pb-24 md:pb-12">
      <TopBar mode="desktop" />
      <main className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6">
        <div className="mb-6 flex flex-wrap gap-2 md:justify-center">
          {["Trust ✓", "Verified AI", "Private"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
        <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Aaj kis tarah ki baat chahiye?
        </h1>
        <p className="mt-3 text-center text-sm text-slate-500">Baato AI Companions · Character selection</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {PERSONAS.map((p) => (
            <PortraitCard key={p.id} p={p} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
