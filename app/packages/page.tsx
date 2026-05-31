"use client"

import { Nav } from "../nav"
import { CodeBlock } from "../code-block"

const packages = [
  {
    name: "@nepali-utils/core",
    tagline: "Core Bikram Sambat utilities for TypeScript",
    description:
      "A framework-agnostic TypeScript library providing everything you need to work with the Bikram Sambat calendar system — date conversion, formatting, location data, phone validation, currency utilities, and more.",
    features: [
      "BS ↔ AD date conversion with high accuracy",
      "Nepali number & currency formatting",
      "Complete Nepal location data (7 provinces, 77 districts, municipalities, wards)",
      "Nepali mobile number validation",
      "Calendar grid generation for UI rendering",
      "Zero runtime dependencies",
    ],
    href: "/packages/nepali-utils",
    docs: "/docs/nepali-utils",
    install: "npm install @nepali-utils/core",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    name: "date-picker-bs",
    tagline: "Bikram Sambat date picker for React",
    description:
      "A React component library that provides a beautiful, accessible date picker and standalone calendar for the Bikram Sambat (Nepali) calendar system. Built on Radix UI, Tailwind CSS, and @nepali-utils/core.",
    features: [
      "DatePickerBS — popover-based date picker with trigger button",
      "CalendarBS — standalone inline calendar component",
      "Full English and Nepali (Devanagari) language support",
      "Configurable date constraints (min/max, disabled days)",
      "Custom format patterns (e.g., YYYY MMMM DD)",
      "Deep styling via classNames prop & CSS variables",
    ],
    href: "/packages/date-picker-bs",
    docs: "/docs/date-picker-bs",
    install: "npm install date-picker-bs",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
]

export default function Packages() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Packages</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Every NepaliKit package is independently installable, fully typed, and
            designed to work seamlessly together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                {pkg.icon}
              </div>
              <h2 className="text-lg font-bold text-foreground">{pkg.name}</h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{pkg.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
              <ul className="mt-4 space-y-1.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <svg className="mt-0.5 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 mb-4">
                <CodeBlock lang="bash" code={pkg.install} />
              </div>
              <div className="flex gap-2">
                <a
                  href={pkg.href}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-all hover:opacity-90"
                >
                  Details
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a
                  href={pkg.docs}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-foreground transition-all hover:bg-accent"
                >
                  Docs
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
          <p className="text-center text-xs text-muted-foreground">
            MIT License · Built for the Nepali community
          </p>
        </div>
      </footer>
    </div>
  )
}
