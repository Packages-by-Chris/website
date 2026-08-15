import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "kundali_chart Documentation",
  description:
    "Complete documentation for kundali_chart — a Flutter package for Vedic astrology (Kundali) birth charts. Customization, dark mode, house labels, planet placement, and more.",
  openGraph: {
    title: "kundali_chart Documentation | Christhapa Packages",
    description:
      "Complete documentation for the Vedic astrology charts package for Flutter.",
  },
}

export default function KundaliChartDocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
