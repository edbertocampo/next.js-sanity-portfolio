import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edbert Ocampo | Portfolio",
  description: "Aspiring QA Engineer / Web Developer / VA Freelancer / Professor showcasing projects, skills, and experience.",
  keywords: ["Edbert Ocampo", "Portfolio", "Web Developer", "QA Engineer", "Projects", "Skills", "Resume"],
  authors: [{ name: "Edbert Ocampo" }],
  openGraph: {
    title: "Edbert Ocampo | Portfolio",
    description: "Showcasing projects, skills, and experience of Edbert Ocampo.",
    url: "https://edbert-ocampo.vercel.app",
    siteName: "Edbert Ocampo Portfolio",
    images: [
      {
        url: "https://edbert-ocampo.vercel.app/me.jpg",
        width: 800,
        height: 600,
        alt: "Edbert Ocampo",
      },
    ],
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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
