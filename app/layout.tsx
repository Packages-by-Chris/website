import type { Metadata } from "next"
import { ThemeProvider } from "./theme-provider"
import "./globals.css"

const siteUrl = "https://packages.christhapa.com.np"
const siteName = "Christhapa Packages"
const siteTitle = "Christhapa Packages — Open Source Libraries for JS/TS & Flutter"
const siteDescription =
  "A curated collection of open source packages by Chris Thapa — Bikram Sambat (Nepali) date utilities, a React date picker, Dart & Flutter extensions, and Vedic astrology charts."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Christhapa Packages",
    "Chris Thapa",
    "Bikram Sambat",
    "Nepali date picker",
    "Nepali calendar",
    "Nepali date converter",
    "BS to AD",
    "Nepali number",
    "Nepali utilities",
    "React date picker",
    "TypeScript",
    "Flutter",
    "Dart",
    "Flutter extensions",
    "Vedic astrology",
    "Kundali chart",
    "open source",
    "npm",
    "pub.dev",
  ],
  authors: [{ name: "Chris Thapa" }],
  creator: "Chris Thapa",
  publisher: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Chris Thapa",
      url: "https://christhapa.com.np",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="scrollbar-thin">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
