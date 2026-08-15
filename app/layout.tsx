import type { Metadata } from "next"
import { ThemeProvider } from "./theme-provider"
import {
  siteUrl,
  siteName,
  owner,
  defaultKeywords,
  siteDescription,
} from "@/lib/seo"
import "./globals.css"

const siteTitle = "Packages by Chris Thapa — Open Source Libraries for JS/TS & Flutter"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: defaultKeywords,
  authors: [{ name: owner.name, url: owner.url }],
  creator: owner.name,
  publisher: siteName,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
  alternates: {
    canonical: siteUrl,
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@id": `${owner.url}/#person`,
  },
  inLanguage: "en-US",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${owner.url}/#person`,
  name: owner.name,
  url: owner.url,
  sameAs: [owner.github],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = [websiteJsonLd, personJsonLd]

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
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
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
