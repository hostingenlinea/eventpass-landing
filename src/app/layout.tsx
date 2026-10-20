import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "EventPass — Vendé entradas, cobrás vos",
  description:
    "Publicá tu evento, conectá MercadoPago, Stripe o PayPal y cobrá al instante. Sin comisión de plataforma.",
  openGraph: {
    title: "EventPass",
    description: "Vendé entradas y cobrás vos — sin comisión de plataforma.",
    url: "https://eventpass.click",
    siteName: "EventPass",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
