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
  title: "Par.ti Haus | Art Direction",
  description: "Company profile and portfolio for art directing, music videos, TVC, and event installations.",
  icons: {
    icon: "/images/parti.png", 
    apple: "/images/parti.png",
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