import { Metadata, Viewport } from "next";

export const APP = {
  NAME: "Unbuilt Studio",
  URL: "https://unbuilt.studio",
  EMAIL: "hello@unbuilt.studio",
  PHONE: "+2347011340549",
  TWITTER: "https://x.com/madebyunbuilt",
  INSTAGRAM: "https://instagram.com/madebyunbuilt",
  LINKEDIN: "https://linkedin.com/company/madebyunbuilt",
  TIKTOK: "https://www.tiktok.com/@madebyunbuilt",
  FACEBOOK: "https://www.facebook.com/madebyunbuilt",
};

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  PROJECTS: "/projects",
  BLOG: "/blog",
  CONTACT: "/contact",
};
export const META: Metadata = {
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

export const VIEWPORT: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
