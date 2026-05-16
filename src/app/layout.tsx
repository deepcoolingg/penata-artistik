import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Par.ti Haus | Art Direction & Set Design", // Judul yang bakal muncul di biru-biru Google
  description: "Collective of obsessive art directors building sets with pure sweat, passion, and unapologetic aesthetics.", // Deskripsi di bawah judul
  keywords: ["art direction", "set design", "penata artistik", "exhibition", "jakarta"], // Keyword rahasia buat bantu pencarian
  openGraph: {
    title: "Par.ti Haus | Art Direction",
    description: "Transforming imagination into visual wonders.",
    url: "https://partistic.com",
    siteName: "Par.ti Haus",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.className} text-zinc-900 antialiased pt-20 min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}