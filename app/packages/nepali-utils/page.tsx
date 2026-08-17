"use client"

import { ViewTransition } from "react"
import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const features = [
  {
    title: "Date Conversion",
    description: "Convert between Bikram Sambat and Gregorian (AD) dates with high accuracy for dates from BS 2000 to BS 2100 (AD 1943–2043).",
    code: `import { bsToAd, adToBs, getTodayBs } from "@nepali-utils/core"

const today = getTodayBs()
// → { year: 2081, month: 5, day: 15 }

const adDate = bsToAd(today.year, today.month, today.day)
// → Date (JavaScript Date object)

const backToBs = adToBs(adDate)
// → { year: 2081, month: 5, day: 15 }`,
  },
  {
    title: "Date Comparison",
    description: "Compare BS dates with equality and ordering checks.",
    code: `import { isSameBsDate, isBeforeBsDate, isAfterBsDate } from "@nepali-utils/core"

isSameBsDate(date1, date2)   // → boolean
isBeforeBsDate(date1, date2) // → boolean
isAfterBsDate(date1, date2)  // → boolean`,
  },
  {
    title: "Formatting",
    description: "Format BS dates with custom patterns in English or Nepali (Devanagari).",
    code: `import { formatBsDate, toNepaliNumber, parseNepaliNumber } from "@nepali-utils/core"

formatBsDate(date, "en", { pattern: "YYYY MMMM DD" })
// → "2081 Bhadra 15"

formatBsDate(date, "ne", { pattern: "YYYY MMMM DD" })
// → "२०८१ भदौ १५"

toNepaliNumber(2081)     // → "२०८१"
parseNepaliNumber("२०८१") // → 2081`,
  },
  {
    title: "Calendar Data",
    description: "Get calendar grid data, month details, and year ranges for building custom calendar UIs.",
    code: `import { generateCalendarGrid, getDaysInBsMonth, MONTHS } from "@nepali-utils/core"

const grid = generateCalendarGrid(2081, 5)
// Returns CalendarDay[][] — 6 weeks × 7 days, ready for rendering

getDaysInBsMonth(2081, 5) // → number of days in Bhadra 2081
MONTHS[0]                 // → { value: 1, nameEn: "Baisakh", nameNe: "बैशाख" }`,
  },
  {
    title: "Location Data",
    description: "Complete dataset for Nepal's provinces, districts, municipalities, and wards with utility functions for lookups.",
    code: `import {
  provinces, getProvinceById,
  districts, getDistrictsByProvince,
  municipalities, getMunicipalitiesByDistrict,
} from "@nepali-utils/core"

provinces                  // → all 7 provinces
getProvinceById("31648741-3bc6-4b03-ad68-7950a5ffec17")
// → ProvinceInfo
getDistrictsByProvince("1a2d297a-b4d4-4062-9801-62813c324753")
// → DistrictInfo[] (districts in the province)`,
  },
  {
    title: "Validation",
    description: "Validate Nepali phone numbers with carrier detection.",
    code: `import { isValidNepaliMobile, getPhoneType } from "@nepali-utils/core"

isValidNepaliMobile("9841234567") // → true
getPhoneType("9841234567")         // → "mobile"

formatNepaliPhone("9841234567")
// → "984-123-4567"`,
  },
  {
    title: "Currency",
    description: "Format amounts in Nepali currency and convert numbers to Nepali words.",
    code: `import { formatNepaliCurrency, toNepaliWords } from "@nepali-utils/core"

formatNepaliCurrency(12345.67)
// → "रु १२,३४५.६७"

toNepaliWords(12345)
// → "बाह्र हजार तीन सय पैंतालीस"`,
  },
]

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

export default function NepaliUtilsPage() {
  return (
    <ViewTransition default="none" enter="page-enter" exit="page-exit">
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">

          {/* ─── Sidebar ─── */}
          <aside className="hidden lg:block">
            <nav className="sticky top-20">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">On this page</p>
              <div className="border-l border-border">
                {features.map((f) => (
                  <a
                    key={f.title}
                    href={`#${slugify(f.title)}`}
                    className="-ml-px block border-l-2 border-transparent px-4 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground"
                  >
                    {f.title}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          {/* ─── Content ─── */}
          <div className="min-w-0">
            <div className="mb-12 pb-8 border-b border-border">
              <nav className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <a href="/packages" className="transition-colors hover:text-foreground">Packages</a>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                <span className="font-medium text-foreground">@nepali-utils/core</span>
              </nav>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                @nepali-utils/core
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Framework-agnostic TypeScript library for Bikram Sambat (Nepali) date operations,
                number conversion, calendar utilities, location data, validation, and currency formatting.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.1.0</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">TypeScript</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Zero deps</span>
              </div>
              <div className="mt-5">
                <CodeBlock lang="bash" code="npm install @nepali-utils/core" />
              </div>
            </div>

            {/* Mobile section nav */}
            <div className="lg:hidden mb-10 flex flex-wrap gap-2">
              {features.map((f) => (
                <a
                  key={f.title}
                  href={`#${slugify(f.title)}`}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  {f.title}
                </a>
              ))}
            </div>

            {features.map((f) => (
              <section key={f.title} id={slugify(f.title)} className="mb-14 scroll-mt-20">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">{f.title}</h2>
                <p className="doc-body mb-4">{f.description}</p>
                <CodeBlock code={f.code} />
              </section>
            ))}

            <div className="mt-16 border-t border-border pt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">Related packages</h2>
              <div className="divide-y divide-border border-y border-border">
                <a href="/packages/date-picker-bs" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">date-picker-bs</p>
                    <p className="mt-1 text-xs text-muted-foreground">React date picker &amp; calendar built on this library.</p>
                  </div>
                  <svg className="mt-1 shrink-0 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/packages/extensions-core" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">extensions_core</p>
                    <p className="mt-1 text-xs text-muted-foreground">Dart &amp; Flutter extensions for strings, dates, collections.</p>
                  </div>
                  <svg className="mt-1 shrink-0 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/packages/kundali-chart" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">kundali_chart</p>
                    <p className="mt-1 text-xs text-muted-foreground">Vedic astrology charts for Flutter.</p>
                  </div>
                  <svg className="mt-1 shrink-0 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <a href="/packages" className="btn-outline px-4 py-2 text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All packages
              </a>
              <a href="/docs/nepali-utils" className="btn-primary px-4 py-2 text-xs">
                View docs
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ViewTransition>
  )
}
