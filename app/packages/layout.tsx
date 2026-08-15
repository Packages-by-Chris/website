import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore Packages by Chris Thapa — @nepali-utils/core for core Bikram Sambat utilities, date-picker-bs for React date pickers, extensions_core for Dart & Flutter extensions, and kundali_chart for Vedic astrology charts.",
  openGraph: {
    title: "Packages | Packages by Chris Thapa",
    description:
      "Explore open source packages by Chris Thapa — JS/TS and Flutter libraries.",
  },
}

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children
}
