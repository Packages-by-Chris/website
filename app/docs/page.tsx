"use client"

import { Nav } from "../nav"
import { CodeBlock } from "../code-block"

const docPackages = [
  {
    name: "@nepali-utils/core",
    tagline: "Core Bikram Sambat utilities",
    description: "Date conversion, formatting, calendar data, location, validation, and currency — all in one zero-dependency TypeScript library.",
    href: "/docs/nepali-utils",
    sections: ["Date conversion", "Formatting & numerals", "Calendar grids", "Location data", "Phone validation", "Currency formatting"],
  },
  {
    name: "date-picker-bs",
    tagline: "React date picker",
    description: "A customizable Bikram Sambat date picker and calendar for React, built with Radix UI and Tailwind CSS.",
    href: "/docs/date-picker-bs",
    sections: ["Installation", "Usage", "Props reference", "Format patterns", "Styling guide", "TypeScript types"],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Documentation</h1>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Comprehensive guides and API references for every NepaliKit package.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {docPackages.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <h2 className="text-lg font-bold text-foreground group-hover:text-foreground">{pkg.name}</h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{pkg.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {pkg.sections.map((s) => (
                  <li key={s} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-6">
          <h2 className="text-base font-bold text-foreground mb-2">Quick install</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Install everything you need for Bikram Sambat development:
          </p>
          <CodeBlock lang="bash" code="# Core utilities (framework-agnostic)
npm install @nepali-utils/core

# React date picker (includes @nepali-utils/core)
npm install date-picker-bs" />
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
