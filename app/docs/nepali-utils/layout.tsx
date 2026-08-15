import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "@nepali-utils/core Documentation | Packages by Chris Thapa",
  description:
    "Complete @nepali-utils/core documentation — install, BS to AD / AD to BS conversion, formatting patterns, calendar data, location data, phone validation, and currency utilities for Bikram Sambat.",
  keywords: [
    "Bikram Sambat docs",
    "Nepali date conversion guide",
    "BS to AD converter documentation",
    "Nepali number formatting docs",
    "Nepali calendar data",
    "Nepali phone validation docs",
    "TypeScript date utilities docs",
  ],
  openGraph: {
    title: "@nepali-utils/core Documentation | Packages by Chris Thapa",
    description:
      "Install, conversion, formatting, calendar, location, validation, and currency docs for the core Bikram Sambat library.",
    url: `${siteUrl}/docs/nepali-utils`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/docs/nepali-utils`,
  },
}

export default function NepaliUtilsDocsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "@nepali-utils/core — Bikram Sambat utilities for TypeScript",
    description:
      "Complete documentation for the zero-dependency Bikram Sambat TypeScript library.",
    url: `${siteUrl}/docs/nepali-utils`,
    author: { "@type": "Person", name: "Chris Thapa" },
    publisher: { "@type": "Organization", name: siteName },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Docs", item: `${siteUrl}/docs` },
        { "@type": "ListItem", position: 2, name: "@nepali-utils/core", item: `${siteUrl}/docs/nepali-utils` },
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
