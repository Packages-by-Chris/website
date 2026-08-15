import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Comprehensive guides and API references for every Christhapa package — date-picker-bs, @nepali-utils/core, extensions_core, and kundali_chart.",
  openGraph: {
    title: "Documentation | Christhapa Packages",
    description:
      "Comprehensive guides and API references for every Christhapa package.",
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
