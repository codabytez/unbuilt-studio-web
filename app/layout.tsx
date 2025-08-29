import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/react-query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unbuilt Studio",
  description: "Crafting digital experiences with precision and creativity.",
  keywords: [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Products",
    "Custom Websites",
    "App Development",
    "Creative Agency",
    "Tech Solutions",
    "Software Development",
    "User Experience",
  ],
  authors: [{ name: "Unbuilt Studio", url: "https://unbuilt.studio" }],
  creator: "Unbuilt Studio",

  openGraph: {
    title: "Unbuilt Studio",
    description: "Crafting digital experiences with precision and creativity.",
    url: "https://unbuilt.studio",
    siteName: "Unbuilt Studio",
    images: [
      {
        url: "https://unbuilt.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unbuilt Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unbuilt Studio",
    description: "Crafting digital experiences with precision and creativity.",
    images: ["https://unbuilt.studio/og-image.png"],
    creator: "@madebyunbuilt",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </QueryProvider>
  );
}
