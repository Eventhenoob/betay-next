import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Agence Darwin | Agence de Communication Digitale",
  description: `Élevez votre présence numérique avec l'Agence Darwin. Experts en
Communication Digitale, nous élaborons des stratégies innovantes pour
votre réussite en ligne.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className="dark bg-black overflow-x-hidden">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
