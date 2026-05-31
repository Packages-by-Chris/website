"use client"

import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const features = [
  {
    title: "Date Conversion",
    description: "Convert between Bikram Sambat and Gregorian (AD) dates with high accuracy for dates from BS 2000 to BS 2100 (AD 1943–2043).",
    code: `import { bsToAd, adToBs, getTodayBs } from "@nepali-utils/core"

const today = getTodayBs()
// → { year: 2081, month: 5, day: 15 }

const adDate = bsToAd(today)
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
// Returns array of CalendarDay objects for rendering

getDaysInBsMonth(2081, 5) // → number of days in Bhadra 2081
MONTHS.ne                 // → ["बैशाख", "जेष्ठ", ...]`,
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
getProvinceById(1)          // → ProvinceInfo
getDistrictsByProvince(1)   // → districts in province 1`,
  },
  {
    title: "Validation",
    description: "Validate Nepali phone numbers with carrier detection.",
    code: `import { isValidNepaliMobile, getPhoneType } from "@nepali-utils/core"

isValidNepaliMobile("9841234567") // → true
getPhoneType("9841234567")         // → "NTC"

formatNepaliPhone("9841234567")
// → "984-1234567"`,
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

export default function NepaliUtilsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <a href="/packages" className="hover:text-foreground transition-colors">Packages</a>
            <span>/</span>
            <span className="text-foreground font-medium">@nepali-utils/core</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            @nepali-utils/core
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            Framework-agnostic TypeScript library for Bikram Sambat (Nepali) date operations,
            number conversion, calendar utilities, location data, validation, and currency formatting.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.1.0</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">TypeScript</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Zero deps</span>
          </div>
          <div className="mt-4">
            <CodeBlock lang="bash" code="npm install @nepali-utils/core" />
          </div>
        </div>

        <div className="space-y-16">
          {features.map((f) => (
            <section key={f.title}>
              <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">{f.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">{f.description}</p>
              <CodeBlock code={f.code} />
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <a
            href="/packages"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            All packages
          </a>
          <a
            href="/docs/nepali-utils"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90 transition-colors"
          >
            View docs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
