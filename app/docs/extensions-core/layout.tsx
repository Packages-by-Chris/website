import type { Metadata } from "next"
import { siteUrl, siteName, ogImage } from "@/lib/seo"

export const metadata: Metadata = {
  title: "extensions_core Documentation | Packages by Chris Thapa",
  description:
    "Complete extensions_core documentation — install and usage guides for Dart & Flutter extensions: strings, numbers, DateTime, collections, colors, files, BuildContext, widgets, navigation, and form validators.",
  keywords: [
    "Dart extensions docs",
    "Flutter extensions guide",
    "Flutter string extensions documentation",
    "Dart DateTime helpers docs",
    "Flutter collection extensions",
    "Flutter form validators docs",
    "extensions_core usage",
  ],
  openGraph: {
    title: "extensions_core Documentation | Packages by Chris Thapa",
    description:
      "Install and usage docs for the Dart & Flutter extensions collection — strings, numbers, dates, collections, and more.",
    url: `${siteUrl}/docs/extensions-core`,
    siteName,
    images: [ogImage],
  },
  alternates: {
    canonical: `${siteUrl}/docs/extensions-core`,
  },
}

export default function ExtensionsCoreDocsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "extensions_core — Dart & Flutter extensions",
    description:
      "Complete documentation for the dependency-light Dart & Flutter extensions collection.",
    url: `${siteUrl}/docs/extensions-core`,
    author: { "@type": "Person", name: "Chris Thapa" },
    publisher: { "@type": "Organization", name: siteName },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Docs", item: `${siteUrl}/docs` },
        { "@type": "ListItem", position: 2, name: "extensions_core", item: `${siteUrl}/docs/extensions-core` },
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
