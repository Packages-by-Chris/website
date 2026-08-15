import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Documentation and API references for packages by Chris Thapa — @nepali-utils/core, date-picker-bs, extensions_core, and kundali_chart. Install, usage guides, props, formatting, styling, and more.",
  keywords: [
    "Nepali date picker docs",
    "Bikram Sambat documentation",
    "Nepali date converter guide",
    "Flutter extensions docs",
    "Kundali chart documentation",
    "React date picker docs",
    "TypeScript library docs",
    "developer documentation",
  ],
  openGraph: {
    title: "Documentation | Packages by Chris Thapa",
    description:
      "Guides and API references for every package — @nepali-utils/core, date-picker-bs, extensions_core, and kundali_chart.",
    url: `${siteUrl}/docs`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/docs`,
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Documentation — Packages by Chris Thapa",
    url: `${siteUrl}/docs`,
    description: "Guides and API references for packages by Chris Thapa.",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
