import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "date-picker-bs — Nepali (Bikram Sambat) date picker | Packages by Chris Thapa",
  description:
    "date-picker-bs is a customizable React date picker and calendar for the Bikram Sambat (Nepali) calendar. Built on Radix UI and Tailwind CSS with English & Nepali language support, date constraints, and custom formatting.",
  keywords: [
    "Nepali date picker React",
    "Bikram Sambat date picker",
    "Nepali calendar picker",
    "BS date picker npm",
    "Nepali calendar React component",
    "React date picker",
    "Nepali date input",
    "shadcn date picker",
  ],
  openGraph: {
    title: "date-picker-bs — Nepali (Bikram Sambat) date picker for React",
    description:
      "A customizable React date picker and calendar for the Bikram Sambat calendar, built with Radix UI and Tailwind CSS.",
    url: `${siteUrl}/packages/date-picker-bs`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/packages/date-picker-bs`,
  },
}

export default function DatePickerPackageLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "date-picker-bs",
    url: `${siteUrl}/packages/date-picker-bs`,
    description:
      "A customizable React date picker and calendar for the Bikram Sambat (Nepali) calendar system, built with Radix UI and Tailwind CSS.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web (React)",
    softwareVersion: "0.1.1",
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
        { "@type": "ListItem", position: 2, name: "date-picker-bs", item: `${siteUrl}/packages/date-picker-bs` },
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
