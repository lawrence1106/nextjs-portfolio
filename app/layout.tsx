import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lawrence Torres",
    template: "%s | Lawrence Torres",
  },
  description: "Senior Software Engineer — React, Node.js, scalable web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        <main style={{ paddingTop: 'calc(var(--navbar-height) + 1rem)' }} className="px-4 min-h-[85vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
