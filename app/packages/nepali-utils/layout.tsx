import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "@nepali-utils/core — Bikram Sambat utilities | Packages by Chris Thapa",
  description:
    "@nepali-utils/core is a zero-dependency TypeScript library for Bikram Sambat (Nepali) date conversion (BS to AD / AD to BS), formatting, calendar grids, Nepal location data, phone validation, and currency formatting.",
  keywords: [
    "Nepali date converter",
    "BS to AD converter",
    "AD to BS converter",
    "Bikram Sambat library",
    "Nepali calendar TypeScript",
    "Nepali number to words",
    "Nepali phone validation",
    "Nepali currency formatting",
    "Bikram Sambat npm",
    "Nepali utilities",
  ],
  openGraph: {
    title: "@nepali-utils/core — Bikram Sambat utilities for TypeScript",
    description:
      "Zero-dependency TypeScript library for Bikram Sambat date conversion, formatting, calendar data, location, validation, and currency.",
    url: `${siteUrl}/packages/nepali-utils`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/packages/nepali-utils`,
  },
}

export default function NepaliUtilsPackageLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "@nepali-utils/core",
    url: `${siteUrl}/packages/nepali-utils`,
    description:
      "Zero-dependency TypeScript library for Bikram Sambat date conversion, formatting, calendar grids, Nepal location data, phone validation, and currency formatting.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any (JavaScript / TypeScript)",
    softwareVersion: "0.1.0",
    programmingLanguage: "TypeScript",
    license: "https://opensource.org/licenses/MIT",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: { "@type": "Person", name: "Chris Thapa" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Packages", item: `${siteUrl}/packages` },
        { "@type": "ListItem", position: 2, name: "@nepali-utils/core", item: `${siteUrl}/packages/nepali-utils` },
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
