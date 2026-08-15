import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "extensions_core",
  description:
    "A comprehensive, dependency-light collection of Dart & Flutter extensions — strings, numbers, dates, collections, colors, widgets, navigation, and form validators in one place.",
  openGraph: {
    title: "extensions_core | Packages by Chris Thapa",
    description:
      "Dart & Flutter extensions for strings, numbers, dates, collections, colors, widgets, and more.",
  },
}

export default function ExtensionsCorePackageLayout({ children }: { children: React.ReactNode }) {
  return children
}
