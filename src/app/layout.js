import { Analytics } from "@vercel/analytics/react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Inter } from "next/font/google";
import MantineLayout from "@/components/layout/MantineLayout";
import "./globals.css";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Movie Watch | %s",
    default: "Movie Watch",
  },
  description: "Discover the latest and greatest movies and TV shows.",
  metadataBase: new URL("https://movie-watch-zeta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Movie Watch",
    "latest movies",
    "trending movies",
    "upcoming movies",
    "popular movies",
    "top-rated movies",
    "latest tv series",
    "trending tv series",
    "popular tv series",
    "currently airing tv series",
  ],

  images: [
    {
      url: "/images/logo.png",
    },
  ],
  openGraph: {
    title: {
      template: "Movie Watch | %s",
      default: "Movie Watch",
    },
    description: "Discover the latest and greatest movies and TV shows.",
    url: "/",
    siteName: "Movie Watch",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
      },
    ],
  },
  twitter: {
    title: {
      template: "Movie Watch | %s",
      default: "Movie Watch",
    },
    description: "Discover the latest and greatest movies and TV shows.",
    creator: "@ogwenya1",
    card: "summary",
    images: [
      {
        url: "/images/logo.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={`${inter.className}`}>
        <MantineProvider defaultColorScheme="dark">
          <MantineLayout>
            {children}
            <Analytics />
          </MantineLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
