import { SiteHeader } from "@/components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-12 text-[15px] leading-7 text-slate-400">
        <h1 className="font-display text-4xl text-white">Privacy · seedha</h1>
        <ul className="mt-8 list-disc space-y-3 pl-5">
          <li>Hum phone number ya CNIC nahi maangte free try ke liye.</li>
          <li>Yeh dating / public match app nahi — dusre users aapki chat nahi dekhte.</li>
          <li>
            AI jawab generate karne ke liye messages third-party LLM providers (jaise Gemini / dusre) tak ja sakte
            hain. Hum end-to-end encryption claim nahi karte.
          </li>
          <li>Guest mode pe messages pehle aapke browser/device pe rahte hain (local try).</li>
          <li>
            Contact:{" "}
            <a className="text-[#5eead4]" href="mailto:privacy@baato.pk">
              privacy@baato.pk
            </a>
          </li>
        </ul>
        <Link href="/" className="btn-ghost mt-10 inline-flex">
          Home
        </Link>
      </main>
    </>
  );
}
