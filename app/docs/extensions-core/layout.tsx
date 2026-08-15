import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "extensions_core Documentation",
  description:
    "Complete documentation for extensions_core — a dependency-light collection of Dart & Flutter extensions for strings, numbers, dates, collections, colors, widgets, navigation, and more.",
  openGraph: {
    title: "extensions_core Documentation | Christhapa Packages",
    description:
      "Complete documentation for the Dart & Flutter extensions collection.",
  },
}

export default function ExtensionsCoreDocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
