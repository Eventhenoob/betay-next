import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Darwin",
  description: "L'Evolution Digitale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
			<link rel='icon' href='/logo.png' />
		</head>
      <body className={"dark overflow-x-hidden"}>
        <Navigation />
        {children}
        <Footer /> 
     </body>
    </html>
  );
}
