import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "kundali_chart — Vedic astrology charts for Flutter | Packages by Chris Thapa",
  description:
    "kundali_chart is a Flutter package for creating beautiful, customizable Vedic astrology (Kundali / Birth) charts — 12-house layout, Sanskrit house labels, planet placement, and dark mode support.",
  keywords: [
    "Kundali chart Flutter",
    "Vedic astrology chart Flutter",
    "birth chart Flutter package",
    "Kundali widget Flutter",
    "astrology app Flutter",
    "Kundali chart pub.dev",
    "Vedic chart custom painter",
    "horoscope chart Flutter",
  ],
  openGraph: {
    title: "kundali_chart — Vedic astrology (Kundali) charts for Flutter",
    description:
      "A comprehensive Flutter package for beautiful, customizable Vedic astrology birth charts with planet placement, house labels, and dark mode.",
    url: `${siteUrl}/packages/kundali-chart`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/packages/kundali-chart`,
  },
}

export default function KundaliChartPackageLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "kundali_chart",
    url: `${siteUrl}/packages/kundali-chart`,
    description:
      "A comprehensive Flutter package for creating beautiful and highly customizable Vedic astrology (Kundali) birth charts with planet placement, Sanskrit house labels, and dark mode.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Flutter",
    softwareVersion: "0.0.4",
    programmingLanguage: "Dart",
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
        { "@type": "ListItem", position: 2, name: "kundali_chart", item: `${siteUrl}/packages/kundali-chart` },
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
