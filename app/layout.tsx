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
    "Jab dil kare, baat kar lo. Fictional AI characters. Real people nahi. Dating nahi.",
  metadataBase: new URL("https://ai.baato.pk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className={`${figtree.className} bg-baato min-h-dvh antialiased`}>{children}</body>
    </html>
  );
}
