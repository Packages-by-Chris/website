import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "extensions_core — Dart & Flutter extensions | Packages by Chris Thapa",
  description:
    "extensions_core is a dependency-light collection of Dart & Flutter extensions — strings, numbers, DateTime, collections, colors, widgets, navigation, and form validators in a single package.",
  keywords: [
    "Dart extensions",
    "Flutter extensions",
    "Flutter string extensions",
    "Dart utilities package",
    "Flutter DateTime helpers",
    "Flutter form validators",
    "Dart collection extensions",
    "extensions_core pub.dev",
  ],
  openGraph: {
    title: "extensions_core — Dart & Flutter extensions",
    description:
      "A dependency-light collection of Dart & Flutter extensions for strings, numbers, dates, collections, colors, widgets, navigation, and validators.",
    url: `${siteUrl}/packages/extensions-core`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/packages/extensions-core`,
  },
}

export default function ExtensionsCorePackageLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "extensions_core",
    url: `${siteUrl}/packages/extensions-core`,
    description:
      "A comprehensive, dependency-light collection of Dart & Flutter extensions for strings, numbers, dates, collections, colors, widgets, navigation, and validators.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Dart / Flutter",
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
        { "@type": "ListItem", position: 2, name: "extensions_core", item: `${siteUrl}/packages/extensions-core` },
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
