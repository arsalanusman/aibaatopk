import { SiteHeader } from "@/components/SiteHeader";
import { PersonaCard } from "@/components/PersonaCard";
import { PERSONAS } from "@/lib/personas";

export const metadata = {
  title: "Discover AI companions",
  description: "Pick a fictional AI — Calm Listener, Soft Dost, Mentor. Real people nahi.",
};

export default function DiscoverPage() {
  const calm = PERSONAS.filter((p) => p.safe);
  const optional = PERSONAS.filter((p) => !p.safe);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8">
        <h1 className="font-display text-3xl text-white sm:text-4xl">AI companions</h1>
        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
          Har card pe <span className="text-slate-300">AI Companion</span> badge — yeh real insan nahi. Dating /
          match bilkul nahi.
        </p>

        <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-wide text-slate-500">
          Listeners & dost (default)
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {calm.map((p) => (
            <PersonaCard key={p.id} p={p} />
          ))}
        </div>

        {optional.length ? (
          <>
            <h2 className="mt-12 text-[13px] font-semibold uppercase tracking-wide text-slate-500">
              Optional · pehle calm ones try karo
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {optional.map((p) => (
                <PersonaCard key={p.id} p={p} />
              ))}
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}
