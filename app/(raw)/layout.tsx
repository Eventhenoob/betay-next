import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: `Agence Darwin | Agence de Communication Digitale`,
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
      <body className="dark bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
