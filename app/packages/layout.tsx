import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore open source packages by Chris Thapa — @nepali-utils/core for Bikram Sambat date conversion, date-picker-bs for React, extensions_core and kundali_chart for Flutter. npm and pub.dev.",
  keywords: [
    "Chris Thapa packages",
    "Bikram Sambat package",
    "Nepali date converter npm",
    "Nepali date picker React",
    "Flutter extensions package",
    "Vedic astrology chart Flutter",
    "Kundali chart package",
    "npm packages",
    "pub.dev packages",
  ],
  openGraph: {
    title: "Packages | Packages by Chris Thapa",
    description:
      "Open source packages by Chris Thapa — JS/TS and Flutter libraries on npm and pub.dev.",
    url: `${siteUrl}/packages`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/packages`,
  },
}

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Packages by Chris Thapa",
    url: `${siteUrl}/packages`,
    description:
      "Open source packages by Chris Thapa — JS/TS and Flutter libraries on npm and pub.dev.",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "@nepali-utils/core",
          url: `${siteUrl}/packages/nepali-utils`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "date-picker-bs",
          url: `${siteUrl}/packages/date-picker-bs`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "extensions_core",
          url: `${siteUrl}/packages/extensions-core`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "kundali_chart",
          url: `${siteUrl}/packages/kundali-chart`,
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
