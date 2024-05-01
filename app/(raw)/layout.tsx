import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agence Darwin | Agence de Communication Digitale",
    template: "%s - Darwin"
  },
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
      <body className="dark bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
