import { SiteHeader } from "@/components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-12 leading-7 text-slate-400">
        <h1 className="font-display text-4xl text-white">ai.baato kya hai?</h1>
        <div className="mt-8 space-y-5 text-[15px]">
          <p>
            <strong className="text-white">ai.baato</strong> ek private AI companion platform hai — Roman Urdu mein
            freely baat karne ke liye. Yahan real strangers nahi milte.
          </p>
          <p>
            Sirf <strong className="text-white">fictional AI characters</strong> hain jo aapki language samjhein —
            dil halka karne, casual baat, mashwara, ya soft companion vibe.
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
            Purpose: bohot se log apni language mein kisi se freely baat nahi kar paate. Yeh unke liye private room
            hai — dating marketplace nahi.
          </p>
          <p>
            Sawal / complaint / naya persona:{" "}
            <a className="text-[#5eead4] underline-offset-2 hover:underline" href="mailto:support@baato.pk">
              support@baato.pk
            </a>
            {" · "}
            <a className="text-[#5eead4] underline-offset-2 hover:underline" href="mailto:privacy@baato.pk">
              privacy@baato.pk
            </a>
          </p>
        </div>
        <Link href="/discover" className="btn-primary mt-10 inline-flex">
          Characters dekho
        </Link>
      </main>
    </>
  );
}
