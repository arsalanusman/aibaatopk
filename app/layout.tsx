import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ai.baato — Private Roman Urdu AI companions",
    template: "%s · ai.baato",
  },
  description:
    "Fictional AI companions in Roman Urdu. No phone/CNIC. Not a dating app. Try private chat bina account.",
  metadataBase: new URL("https://ai.baato.pk"),
  openGraph: {
    title: "ai.baato — Private AI chat, dating nahi",
    description: "Real strangers nahi — sirf fictional AI. Private room, clear privacy.",
    url: "https://ai.baato.pk",
    siteName: "ai.baato",
    locale: "en_PK",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-atmosphere font-sans antialiased" style={{ fontFamily: "var(--font-dm), var(--sans)" }}>
        {children}
      </body>
    </html>
  );
}
