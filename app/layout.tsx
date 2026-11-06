import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://japasend.com"),
  title: {
    default: "JapaSend — Your money. Your people. Your home.",
    template: "%s | JapaSend",
  },
  description:
    "JapaSend is being built to help Nigerians abroad take care of family, bills and everyday financial needs back home.",
  applicationName: "JapaSend",
  openGraph: {
    title: "JapaSend — Your money. Your people. Your home.",
    description:
      "A simpler way to stay connected to the people and things that matter back home in Nigeria.",
    url: "https://japasend.com",
    siteName: "JapaSend",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JapaSend — Your money. Your people. Your home.",
    description:
      "A simpler way to stay connected to home, wherever life takes you.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
