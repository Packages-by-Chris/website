"use client"

import { Nav } from "../nav"
import { CodeBlock } from "../code-block"

const docPackages = [
  {
    name: "@nepali-utils/core",
    stack: "TypeScript",
    tagline: "Core Bikram Sambat utilities",
    description: "Date conversion, formatting, calendar data, location, validation, and currency — all in one zero-dependency TypeScript library.",
    href: "/docs/nepali-utils",
    sections: ["Date conversion", "Formatting & numerals", "Calendar grids", "Location data", "Phone validation", "Currency formatting"],
  },
  {
    name: "date-picker-bs",
    stack: "React",
    tagline: "React date picker",
    description: "A customizable Bikram Sambat date picker and calendar for React, built with Radix UI and Tailwind CSS.",
    href: "/docs/date-picker-bs",
    sections: ["Installation", "Usage", "Props reference", "Format patterns", "Styling guide", "TypeScript types"],
  },
  {
    name: "extensions_core",
    stack: "Flutter",
    tagline: "Dart & Flutter extensions",
    description: "A dependency-light collection of Dart & Flutter extensions for strings, numbers, dates, collections, colors, widgets, navigation, and more.",
    href: "/docs/extensions-core",
    sections: ["Installation", "Strings", "Numbers", "DateTime", "Collections", "Colors", "Widgets", "Navigation"],
  },
  {
    name: "kundali_chart",
    stack: "Flutter",
    tagline: "Vedic astrology charts",
    description: "A comprehensive Flutter package for creating beautiful and highly customizable Vedic astrology (Kundali) birth charts with dark mode support.",
    href: "/docs/kundali-chart",
    sections: ["Installation", "Quick start", "Customization", "Dark mode", "House labels", "Planet placement"],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Documentation</h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Comprehensive guides and API references for every Christhapa package.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {docPackages.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base font-semibold text-foreground">{pkg.name}</h2>
                <span className="shrink-0 rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{pkg.stack}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{pkg.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
              <div className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
                {pkg.sections.map((s) => (
                  <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read the docs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-2 text-base font-semibold text-foreground">Quick install</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Install everything you need for Bikram Sambat development:
          </p>
          <CodeBlock lang="bash" code="# Core utilities (framework-agnostic)
npm install @nepali-utils/core

# React date picker (includes @nepali-utils/core)
npm install date-picker-bs

# Dart & Flutter extensions
flutter pub add extensions_core

# Vedic astrology charts for Flutter
flutter pub add kundali_chart" />
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
