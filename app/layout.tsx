import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Baato — Private AI companions",
    template: "%s · Baato",
  },
  description:
    "Jab dil kare, baat kar lo. Fictional AI characters. Real people nahi. Dating nahi. Free try bina phone.",
  metadataBase: new URL("https://ai.baato.pk"),
  openGraph: {
    title: "Baato — Private AI chat",
    description: "Roman Urdu AI companions. Not a dating app.",
    url: "https://ai.baato.pk",
    siteName: "Baato",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className={`${figtree.className} bg-baato min-h-dvh antialiased`}>{children}</body>
    </html>
  );
}
