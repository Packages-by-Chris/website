import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Comprehensive guides and API references for every NepaliKit package — date-picker-bs, @nepali-utils/core, and more.",
  openGraph: {
    title: "Documentation | NepaliKit",
    description:
      "Comprehensive guides and API references for every NepaliKit package.",
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
