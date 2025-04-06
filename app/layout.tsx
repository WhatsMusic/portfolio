
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
// import Link from "next/link";
// import { getDictionary } from "@/lang/dictionaries";
import { Locale } from "@/lib/definitions";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Schulz | Full Stack Developer",
  description: "Portfolio of Robert Schulz, Full Stack Developer specializing in Next.js, TypeScript, TailwindCSS, and PostgreSQL.",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
  children: React.ReactNode;
}>) {

  const resolvedParams = await params; // Auflösen des Promises
  const lang = resolvedParams?.lang || "en";

  if (!lang || (lang !== "de" && lang !== "en")) {
    throw new Error(`Invalid or missing locale: "${lang}"`);
  }


  // const dict = await getDictionary(lang as Locale);
  console.log("Requested locale:", lang);

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-lightBg antialiased`}>
        {/* <header className="w-full p-4 bg-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold">{dict.header.headline}</h1>
          <nav>
            <Link href={`/${lang}/home`} className="mr-4">{dict.nav.home}</Link>
            <Link href={`/${lang}/cv`} className="mr-4">{dict.nav.cv}</Link>
          </nav>
        </header>
        <main className="flex-grow flex flex-col m-auto p-4"> */}
        <div className="flex flex-col min-h-screen">
          <Navbar params={{
            lang: lang
          }} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer params={{
            lang: lang
          }} />
        </div>
      </body>
    </html>
  );
}




