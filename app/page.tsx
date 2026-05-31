"use client"

import { Nav } from "./nav"
import { CodeBlock } from "./code-block"

const VERSION = "0.1.0"

const packages = [
  {
    name: "@nepali-utils/core",
    description: "Framework-agnostic TypeScript library for Bikram Sambat dates, number conversion, calendar utilities, location data, and phone validation.",
    features: [
      "BS ↔ AD date conversion",
      "Nepali number formatting",
      "Complete location data (provinces, districts, municipalities)",
      "Phone number validation for Nepal",
      "Currency formatting & number to words",
      "Zero dependencies, tree-shakeable",
    ],
    href: "/packages/nepali-utils",
    docs: "/docs/nepali-utils",
    install: "npm install @nepali-utils/core",
  },
  {
    name: "date-picker-bs",
    description: "A React date picker and calendar for the Bikram Sambat (Nepali) calendar — built with Radix UI Popover, Tailwind CSS, and shadcn/ui.",
    features: [
      "DatePickerBS — popover-based date picker",
      "CalendarBS — standalone inline calendar",
      "English & Nepali language support",
      "Date constraints (min, max, disabled days)",
      "Customizable formatting & styling",
      "Built on @nepali-utils/core",
    ],
    href: "/packages/date-picker-bs",
    docs: "/docs/date-picker-bs",
    install: "npm install date-picker-bs",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-gradient-radial pointer-events-none absolute inset-0" />
        <div className="bg-grid mask-fade-bottom pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">v{VERSION}</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">TypeScript</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">React</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            NepaliKit
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
            A collection of TypeScript tools for the Bikram Sambat (Nepali) ecosystem —
            dates, calendars, location data, validation, and React components.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/packages"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              Browse Packages
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ─── Packages ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-bold text-foreground">{pkg.name}</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {pkg.description}
              </p>
              <ul className="mb-5 space-y-1.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <svg className="mt-0.5 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mb-4">
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
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="text-sm font-semibold text-foreground">NepaliKit</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Bikram Sambat tools for the Nepali ecosystem — TypeScript · React · Tailwind CSS
            </p>
            <p className="text-[11px] text-muted-foreground/60">
              MIT License · Built for the Nepali community
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
