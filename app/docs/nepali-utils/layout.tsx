import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "@nepali-utils/core Documentation",
  description:
    "Complete documentation for @nepali-utils/core — a zero-dependency TypeScript library for Bikram Sambat date conversion, formatting, calendar data, location, validation, and currency utilities.",
  openGraph: {
    title: "@nepali-utils/core Documentation | NepaliKit",
    description:
      "Complete documentation for the core Bikram Sambat utilities library.",
  },
}

export default function NepaliUtilsDocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
