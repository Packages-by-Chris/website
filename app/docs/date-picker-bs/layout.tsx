import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "date-picker-bs Documentation",
  description:
    "Complete documentation for date-picker-bs — a React date picker and calendar for the Bikram Sambat (Nepali) calendar system. Learn about props, formatting, styling, and more.",
  openGraph: {
    title: "date-picker-bs Documentation | NepaliKit",
    description:
      "Complete documentation for the Bikram Sambat date picker for React.",
  },
}

export default function DatePickerDocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
