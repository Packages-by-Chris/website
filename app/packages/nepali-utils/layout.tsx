import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "@nepali-utils/core",
  description:
    "A zero-dependency TypeScript library for Bikram Sambat (Nepali) date operations — conversion, formatting, calendar grids, Nepal location data, phone validation, and currency formatting.",
  openGraph: {
    title: "@nepali-utils/core | NepaliKit",
    description:
      "Core Bikram Sambat utilities for TypeScript — date conversion, formatting, location data, and more.",
  },
}

export default function NepaliUtilsPackageLayout({ children }: { children: React.ReactNode }) {
  return children
}
