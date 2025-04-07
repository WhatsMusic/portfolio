
import React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Locale } from "@/lib/definitions";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";



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
      <body className={`bg-lightBg antialiased`}>


        <div className="flex flex-col">
          <Navbar params={{
            lang: lang
          }} />
          <main className="flex flex-col min-h-screen">
            <Navbar params={{ lang: lang }} />
            <div className="flex-grow">
              <SectionWrapper title={""} className="bg-lightBg">
                {children}
              </SectionWrapper>
            </div>
            <Footer params={{ lang: lang }} />
          </main>
        </div>
      </body>
    </html>
  );
}




