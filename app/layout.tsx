import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//@ts-expect-error (no types)
import "./globals.css";
import QueryProvider from "@/react-query-provider";
import { META, VIEWPORT } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = META;

export const viewport: Viewport = VIEWPORT;

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
