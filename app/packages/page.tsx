"use client"

import { ViewTransition } from "react"
import { Nav } from "../nav"
import { CodeBlock } from "../code-block"

const packages = [
  {
    name: "@nepali-utils/core",
    stack: "TypeScript",
    tagline: "Core Bikram Sambat utilities for TypeScript",
    description:
      "A framework-agnostic TypeScript library providing everything you need to work with the Bikram Sambat calendar system — date conversion, formatting, location data, phone validation, currency utilities, and more.",
    href: "/packages/nepali-utils",
    docs: "/docs/nepali-utils",
    install: "npm install @nepali-utils/core",
  },
  {
    name: "date-picker-bs",
    stack: "React",
    tagline: "Bikram Sambat date picker for React",
    description:
      "A React component library that provides a beautiful, accessible date picker and standalone calendar for the Bikram Sambat (Nepali) calendar system. Built on Radix UI, Tailwind CSS, and @nepali-utils/core.",
    href: "/packages/date-picker-bs",
    docs: "/docs/date-picker-bs",
    install: "npm install date-picker-bs",
  },
  {
    name: "extensions_core",
    stack: "Flutter",
    tagline: "Dart & Flutter extensions",
    description:
      "A comprehensive, dependency-light collection of Dart & Flutter extensions. Stop hunting for separate extension packages — strings, numbers, dates, collections, colors, widgets, navigation, and more in one place.",
    href: "/packages/extensions-core",
    docs: "/docs/extensions-core",
    install: "flutter pub add extensions_core",
  },
  {
    name: "kundali_chart",
    stack: "Flutter",
    tagline: "Vedic astrology charts for Flutter",
    description:
      "A comprehensive Flutter package for creating beautiful and highly customizable Vedic astrology charts (Kundali/Birth Charts). Perfect for astrology applications, educational tools, and spiritual apps.",
    href: "/packages/kundali-chart",
    docs: "/docs/kundali-chart",
    install: "flutter pub add kundali_chart",
  },
]

export default function Packages() {
  return (
    <ViewTransition default="none" enter="page-enter" exit="page-exit">
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-3xl px-6 py-14 sm:px-8">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Packages</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">All packages</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            Open source libraries by Chris Thapa across two stacks — TypeScript &amp; React on npm,
            Dart &amp; Flutter on pub.dev. Every package is independently installable, fully typed,
            and documented.
          </p>
        </div>

        <div className="space-y-10">
          {packages.map((pkg) => (
            <section key={pkg.name} className="border-b border-border pb-10 last:border-b-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  <a href={pkg.href} className="hover:underline">{pkg.name}</a>
                </h2>
                <span className="inline-flex rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {pkg.stack}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{pkg.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
              <div className="mt-4">
                <CodeBlock lang="bash" code={pkg.install} />
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <a href={pkg.docs} className="link">Documentation</a>
                <a href={pkg.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Package details</a>
              </div>
            </section>
          ))}
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
          <p className="text-center text-xs text-muted-foreground">
            MIT License · Built for the Nepali community · by{" "}
            <a href="https://christhapa.com.np" target="_blank" rel="noreferrer" className="font-medium text-foreground transition-colors hover:underline">
              Chris Thapa
            </a>
          </p>
        </div>
      </footer>
    </div>
    </ViewTransition>
  )
}
