import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import Cursor from "../components/ui/Cursor";
import { MotionProvider } from "../components/ui/motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: "italic",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Resty James Nazareno | Full-Stack Software Developer",
  description:
    "Portfolio of Resty James M. Nazareno, a full-stack software developer in Pampanga, Philippines, building HRIS, CRM, inventory, and ticketing systems with AI-assisted development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables live on <html> so Tailwind's :root theme tokens can resolve them.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable}`}
    >
      <body className="antialiased">
        {/* Without JS, show everything that would otherwise wait for its reveal. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important}[style*="translate"]{transform:none!important}[style*="inset("]{clip-path:none!important}`}</style>
        </noscript>
        <MotionProvider>
          {children}
          <Cursor />
        </MotionProvider>
      </body>
    </html>
  );
}
