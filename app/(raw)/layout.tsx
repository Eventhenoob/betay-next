import type { Metadata } from "next";
import "../globals.css";

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
    <html lang="en" className="dark">
      <head>
			<link rel='icon' href='/logo.png' />
		</head>
      <body className="dark bg-white overflow-x-hidden">
        {children}
     </body>
    </html>
  );
}
