import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "date-picker-bs Documentation | Packages by Chris Thapa",
  description:
    "Complete date-picker-bs documentation — install, usage, DatePickerBS & CalendarBS props, format patterns, language & localization, date constraints, styling, and TypeScript types for the Nepali date picker.",
  keywords: [
    "Nepali date picker docs",
    "Bikram Sambat date picker guide",
    "React date picker documentation",
    "DatePickerBS props",
    "Nepali calendar component docs",
    "date-picker-bs install",
    "React Nepali calendar tutorial",
  ],
  openGraph: {
    title: "date-picker-bs Documentation | Packages by Chris Thapa",
    description:
      "Usage, props, formatting, language, constraints, and styling docs for the Bikram Sambat date picker for React.",
    url: `${siteUrl}/docs/date-picker-bs`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/docs/date-picker-bs`,
  },
}

export default function DatePickerDocsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "date-picker-bs — Bikram Sambat date picker for React",
    description:
      "Complete documentation for the React date picker for the Bikram Sambat calendar.",
    url: `${siteUrl}/docs/date-picker-bs`,
    author: { "@type": "Person", name: "Chris Thapa" },
    publisher: { "@type": "Organization", name: siteName },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Docs", item: `${siteUrl}/docs` },
        { "@type": "ListItem", position: 2, name: "date-picker-bs", item: `${siteUrl}/docs/date-picker-bs` },
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
