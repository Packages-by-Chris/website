import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "kundali_chart Documentation | Packages by Chris Thapa",
  description:
    "Complete kundali_chart documentation — install, quick start, customization, dark mode, house labels, planet abbreviations & placement, and API reference for Vedic astrology (Kundali) charts in Flutter.",
  keywords: [
    "Kundali chart docs",
    "Vedic astrology chart Flutter guide",
    "Kundali chart Flutter documentation",
    "birth chart Flutter tutorial",
    "Kundali widget customization",
    "Vedic chart house labels",
    "astrology chart API Flutter",
  ],
  openGraph: {
    title: "kundali_chart Documentation | Packages by Chris Thapa",
    description:
      "Install, customization, dark mode, house labels, and planet placement docs for the Flutter Vedic astrology chart package.",
    url: `${siteUrl}/docs/kundali-chart`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/docs/kundali-chart`,
  },
}

export default function KundaliChartDocsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "kundali_chart — Vedic astrology (Kundali) charts for Flutter",
    description:
      "Complete documentation for the Flutter Vedic astrology chart package.",
    url: `${siteUrl}/docs/kundali-chart`,
    author: { "@type": "Person", name: "Chris Thapa" },
    publisher: { "@type": "Organization", name: siteName },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Docs", item: `${siteUrl}/docs` },
        { "@type": "ListItem", position: 2, name: "kundali_chart", item: `${siteUrl}/docs/kundali-chart` },
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
