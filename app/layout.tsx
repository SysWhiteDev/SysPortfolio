import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://syswhite.dev"),
  title: "SysWhite's Portfolio",
  description: "Turn your ideas into reality by collaborating with me.",
  openGraph: {
    title: "SysWhite's Portfolio",
    description: "Discover what I made in my journey!",
    url: "https://syswhite.dev/",
    siteName: "SysWhite's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <div className="text-neutral-100">
            <Navbar />
            <div className="page-transition-element">
              {children}
              <Footer />
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
