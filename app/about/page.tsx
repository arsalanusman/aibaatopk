import Link from "next/link";
import { TopBar } from "@/components/TopBar";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="min-h-dvh">
      <TopBar />
      <main className="mx-auto max-w-xl px-4 py-12 leading-7 text-slate-400">
        <h1 className="text-4xl font-bold text-white">Baato kya hai?</h1>
        <div className="mt-6 space-y-4 text-[15px]">
          <p>
            Private Roman Urdu AI companions. Real strangers nahi. Match / dating marketplace nahi.
          </p>
          <p>Sirf aap aur aapka chosen fictional AI character.</p>
          <p>
            Support:{" "}
            <a className="text-[#2dd4bf]" href="mailto:support@baato.pk">
              support@baato.pk
            </a>
          </p>
        </div>
        <Link href="/discover" className="btn-teal mt-10 inline-flex">
          Explore characters
        </Link>
      </main>
    </div>
  );
}
