import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore NepaliKit packages — @nepali-utils/core for core Bikram Sambat utilities and date-picker-bs for React date picker components.",
  openGraph: {
    title: "Packages | NepaliKit",
    description:
      "Explore NepaliKit packages for Bikram Sambat development.",
  },
}

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children
}
