import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventPass — Organizá eventos memorables",
  description:
    "La plataforma todo-en-uno para gestionar invitados, check-in con QR, mesas, regalos y más. Hacé que cada evento sea inolvidable.",
  openGraph: {
    title: "EventPass",
    description: "La plataforma todo-en-uno para organizar eventos memorables.",
    url: "https://eventpass.click",
    siteName: "EventPass",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
