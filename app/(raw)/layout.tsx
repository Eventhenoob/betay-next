import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Darwin",
    template: "%s - Darwin"
  },
  description: "L'Evolution Digitale",
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
