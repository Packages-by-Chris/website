import type { Metadata } from "next"
import { ThemeProvider } from "./theme-provider"
import "./globals.css"

const siteUrl = "https://nepalikit.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NepaliKit — Bikram Sambat Tools for React & TypeScript",
    template: "%s | NepaliKit",
  },
  description:
    "A collection of Bikram Sambat (Nepali) tools including a date picker, calendar utilities, number conversion, location data, and validation — built for React and TypeScript.",
  keywords: [
    "Bikram Sambat",
    "Nepali date picker",
    "Nepali calendar",
    "Nepali date converter",
    "BS to AD",
    "Nepali number",
    "Nepali utilities",
    "React date picker",
    "TypeScript",
    "NepaliKit",
  ],
  authors: [{ name: "NepaliKit" }],
  creator: "NepaliKit",
  publisher: "NepaliKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NepaliKit",
    title: "NepaliKit — Bikram Sambat Tools for React & TypeScript",
    description:
      "A collection of Bikram Sambat (Nepali) tools including a date picker, calendar utilities, number conversion, location data, and validation — built for React and TypeScript.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NepaliKit — Bikram Sambat Tools for React & TypeScript",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NepaliKit — Bikram Sambat Tools for React & TypeScript",
    description:
      "A collection of Bikram Sambat (Nepali) tools including a date picker, calendar utilities, number conversion, location data, and validation.",
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
    name: "NepaliKit",
    url: siteUrl,
    description:
      "A collection of Bikram Sambat (Nepali) tools including a date picker, calendar utilities, number conversion, location data, and validation.",
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
