import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "kundali_chart",
  description:
    "A comprehensive Flutter package for creating beautiful and highly customizable Vedic astrology charts (Kundali/Birth Charts). Planet placement, Sanskrit house labels, dark mode, and responsive custom painters.",
  openGraph: {
    title: "kundali_chart | Packages by Chris Thapa",
    description:
      "Vedic astrology (Kundali) birth charts for Flutter with planet placement and dark mode.",
  },
}

export default function KundaliChartPackageLayout({ children }: { children: React.ReactNode }) {
  return children
}
