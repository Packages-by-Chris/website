import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "date-picker-bs",
  description:
    "A customizable Bikram Sambat (Nepali) date picker and calendar for React. Built with Radix UI Popover and Tailwind CSS. Supports Nepali language, date constraints, custom formatting, and shadcn/ui theming.",
  openGraph: {
    title: "date-picker-bs | NepaliKit",
    description:
      "A customizable Bikram Sambat date picker and calendar for React.",
  },
}

export default function DatePickerPackageLayout({ children }: { children: React.ReactNode }) {
  return children
}
