"use client"

import { Nav } from "./nav"
import { CodeBlock } from "./code-block"

const packages = [
  {
    name: "@nepali-utils/core",
    stack: "TypeScript",
    description:
      "Framework-agnostic TypeScript library for Bikram Sambat dates, number conversion, calendar utilities, location data, and phone validation.",
    href: "/packages/nepali-utils",
    docs: "/docs/nepali-utils",
  },
  {
    name: "date-picker-bs",
    stack: "React",
    description:
      "A React date picker and calendar for the Bikram Sambat (Nepali) calendar — built with Radix UI Popover, Tailwind CSS, and shadcn/ui.",
    href: "/packages/date-picker-bs",
    docs: "/docs/date-picker-bs",
  },
  {
    name: "extensions_core",
    stack: "Flutter",
    description:
      "A comprehensive, dependency-light collection of Dart & Flutter extensions — strings, numbers, dates, collections, colors, widgets, navigation, and more.",
    href: "/packages/extensions-core",
    docs: "/docs/extensions-core",
  },
  {
    name: "kundali_chart",
    stack: "Flutter",
    description:
      "A comprehensive Flutter package for creating beautiful and highly customizable Vedic astrology charts (Kundali/Birth Charts).",
    href: "/packages/kundali-chart",
    docs: "/docs/kundali-chart",
  },
]

const installLines = `# JS / TS
npm install @nepali-utils/core
npm install date-picker-bs

# Dart / Flutter
flutter pub add extensions_core
flutter pub add kundali_chart`

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-gradient-radial pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] text-muted-foreground">
            Open source · MIT · v0.1.0
          </span>
          <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Libraries for the
            <br className="hidden sm:block" /> Nepali ecosystem
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            Bikram Sambat date tools, a React date picker, Dart &amp; Flutter extensions,
            and Vedic astrology charts — by Chris Thapa.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="/docs" className="btn-primary px-5 py-2.5">
              Read the docs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="https://github.com/LeanQChris"
              target="_blank"
              rel="noreferrer"
              className="btn-outline px-5 py-2.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Introduction</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">What is Christhapa Packages?</h2>
        </div>
        <p className="doc-lead">
          Christhapa Packages is a collection of open source libraries maintained by Chris Thapa,
          spanning two stacks. The JavaScript/TypeScript side focuses on the Bikram Sambat (Nepali)
          calendar — from a zero-dependency core library to a fully-featured React date picker.
          The Dart/Flutter side ships daily-driver extensions and a Vedic astrology chart widget.
        </p>
        <p className="mt-4 doc-body">
          Every package is independently published, versioned, and documented. They are designed to
          work standalone, but several build on each other — <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">date-picker-bs</code>{" "}
          re-exports <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@nepali-utils/core</code> so a single install gives you the
          full Bikram Sambat toolkit.
        </p>
      </section>

      {/* ─── Quick start ─── */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:px-8">
        <div className="mb-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Quick start</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Install everything</h2>
        </div>
        <p className="doc-body mb-4">
          Add any combination of packages to your project. The React date picker includes the core
          utilities it needs.
        </p>
        <CodeBlock lang="bash" filename="terminal" code={installLines} />
      </section>

      {/* ─── Packages ─── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
          <div className="mb-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Packages</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Explore the collection</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {packages.map((pkg) => (
              <div key={pkg.name} className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    <a href={pkg.href} className="hover:underline">{pkg.name}</a>
                  </h3>
                  <span className="mt-1.5 inline-flex rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {pkg.stack}
                  </span>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <a href={pkg.docs} className="link">Documentation</a>
                    <a href={pkg.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Package details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <span className="text-sm font-semibold text-foreground">Christhapa Packages</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Open source libraries by Chris Thapa — TypeScript · React · Dart · Flutter
            </p>
            <p className="text-[11px] text-muted-foreground/60">
              MIT License · packages.christhapa.com.np
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
