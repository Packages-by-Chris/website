"use client"

import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const sections = [
  { id: "getting-started", label: "Getting started" },
  { id: "installation", label: "Installation" },
  { id: "date-conversion", label: "Date conversion" },
  { id: "formatting", label: "Formatting" },
  { id: "calendar-data", label: "Calendar data" },
  { id: "comparison", label: "Date comparison" },
  { id: "location", label: "Location data" },
  { id: "validation", label: "Validation" },
  { id: "currency", label: "Currency" },
  { id: "constants", label: "Constants" },
  { id: "api", label: "API reference" },
]

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">{title}</h2>
      {children}
    </section>
  )
}

function DocSubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-semibold text-foreground mb-3">{title}</h3>
      {children}
    </div>
  )
}

export default function NepaliUtilsDocs() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">

          {/* ─── Sidebar ─── */}
          <aside className="hidden lg:block">
            <nav className="sticky top-20 space-y-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">On this page</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* ─── Content ─── */}
          <div className="min-w-0">
            <div className="mb-12 pb-8 border-b border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <a href="/docs" className="hover:text-foreground transition-colors">Docs</a>
                <span>/</span>
                <span className="text-foreground font-medium">@nepali-utils/core</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                @nepali-utils/core
              </h1>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl">
                Framework-agnostic TypeScript library for Bikram Sambat operations, location data,
                validation, and currency formatting.
              </p>
            </div>

            {/* Mobile section nav */}
            <div className="lg:hidden mb-10 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* ─── Getting Started ─── */}
            <DocSection id="getting-started" title="Getting started">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">@nepali-utils/core</code> is a zero-dependency TypeScript library
                providing utilities for the Bikram Sambat (Nepali) calendar system. It covers
                dates from BS 2000 to BS 2100 (AD 1943–2043) with high accuracy.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The library is organized into several modules:
              </p>
              <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1">
                <li><strong>Dates</strong> — Conversion, formatting, comparison, calendar data</li>
                <li><strong>Location</strong> — Provinces, districts, municipalities, wards for Nepal</li>
                <li><strong>Validation</strong> — Nepali mobile number validation with carrier detection</li>
                <li><strong>Currency</strong> — Nepali currency formatting and number-to-words</li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The library is framework-agnostic and works with any JavaScript/TypeScript project.
              </p>
            </DocSection>

            {/* ─── Installation ─── */}
            <DocSection id="installation" title="Installation">
              <CodeBlock lang="bash" filename="terminal" code="npm install @nepali-utils/core" />
              <div className="mt-4">
                <CodeBlock lang="bash" filename="terminal" code="pnpm add @nepali-utils/core" />
              </div>
              <div className="mt-4">
                <CodeBlock lang="bash" filename="terminal" code="yarn add @nepali-utils/core" />
              </div>
            </DocSection>

            {/* ─── Date Conversion ─── */}
            <DocSection id="date-conversion" title="Date conversion">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Convert between Bikram Sambat and Gregorian (AD) dates. All conversion functions
                are accurate for BS 2000–2100 (AD 1943–2043).
              </p>

              <DocSubSection title="BS → AD">
                <CodeBlock code={`import { bsToAd } from "@nepali-utils/core"

const date = bsToAd({ year: 2081, month: 5, day: 15 })
// → Date (JavaScript Date object)`} />
              </DocSubSection>

              <DocSubSection title="AD → BS">
                <CodeBlock code={`import { adToBs } from "@nepali-utils/core"

const bsDate = adToBs(new Date())
// → { year: 2081, month: 5, day: 15 }`} />
              </DocSubSection>

              <DocSubSection title="Today's date">
                <CodeBlock code={`import { getTodayBs } from "@nepali-utils/core"

const today = getTodayBs()
// → { year: 2081, month: 5, day: 15 }`} />
              </DocSubSection>

              <DocSubSection title="Day of week">
                <CodeBlock code={`import { getBsDayOfWeek } from "@nepali-utils/core"

const dayOfWeek = getBsDayOfWeek({ year: 2081, month: 5, day: 15 })
// → 0 (Sunday) through 6 (Saturday)`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Formatting ─── */}
            <DocSection id="formatting" title="Formatting">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Format BS dates with custom patterns in English or Nepali. Pattern tokens include
                YYYY, YY, MMMM, MMM, MM, and DD.
              </p>

              <DocSubSection title="Date formatting">
                <CodeBlock code={`import { formatBsDate } from "@nepali-utils/core"

formatBsDate(date, "en", { pattern: "YYYY MMMM DD" })
// → "2081 Bhadra 15"

formatBsDate(date, "ne", { pattern: "YYYY MMMM DD" })
// → "२०८१ भदौ १५"

formatBsDate(date, "en", { pattern: "YYYY-MM-DD" })
// → "2081-05-15"

formatBsDate(date, "en", { pattern: "MMMM DD, YYYY" })
// → "Bhadra 15, 2081"`} />
              </DocSubSection>

              <DocSubSection title="Nepali numerals">
                <CodeBlock code={`import { toNepaliNumber, parseNepaliNumber } from "@nepali-utils/core"

toNepaliNumber(2081)     // → "२०८१"
toNepaliNumber(12345)    // → "१२३४५"

parseNepaliNumber("२०८१") // → 2081`} />
              </DocSubSection>

              <DocSubSection title="Month navigation">
                <CodeBlock code={`import { getPrevMonth, getNextMonth, MONTHS } from "@nepali-utils/core"

getPrevMonth(2081, 5)  // → { year: 2081, month: 4 }
getNextMonth(2081, 5)  // → { year: 2081, month: 6 }

MONTHS.en  // → ["Baisakh", "Jestha", "Ashad", ...]
MONTHS.ne  // → ["बैशाख", "जेष्ठ", "असार", ...]`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Calendar Data ─── */}
            <DocSection id="calendar-data" title="Calendar data">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Generate calendar grids and query month/year data for building custom calendar UIs.
              </p>

              <DocSubSection title="Calendar grid">
                <CodeBlock code={`import { generateCalendarGrid, type CalendarDay } from "@nepali-utils/core"

const grid: CalendarDay[] = generateCalendarGrid(2081, 5)
// Returns an array of CalendarDay objects with day, month, year,
// isCurrentMonth, isToday, dayOfWeek, and date properties.`} />
              </DocSubSection>

              <DocSubSection title="Month/year info">
                <CodeBlock code={`import { getDaysInBsMonth, getDaysInBsYear, isValidBsYear, getBsYearRange, validateBsDate } from "@nepali-utils/core"

getDaysInBsMonth(2081, 5)  // → number of days in Bhadra 2081 (e.g. 32)
getDaysInBsYear(2081)      // → total days in BS year 2081 (e.g. 365)
isValidBsYear(2081)        // → true
getBsYearRange()           // → { min: 2000, max: 2100 }

// Validate a BS date — throws if invalid
validateBsDate(2081, 5, 15) // → undefined (valid)
validateBsDate(2081, 13, 1) // → throws "Invalid BS month: 13"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Date Comparison ─── */}
            <DocSection id="comparison" title="Date comparison">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Compare BS dates with equality and ordering checks.
              </p>
              <CodeBlock code={`import { isSameBsDate, isBeforeBsDate, isAfterBsDate } from "@nepali-utils/core"

const d1 = { year: 2081, month: 5, day: 15 }
const d2 = { year: 2081, month: 6, day: 1 }

isSameBsDate(d1, d1)   // → true
isBeforeBsDate(d1, d2) // → true
isAfterBsDate(d2, d1)  // → true`} />
            </DocSection>

            {/* ─── Location Data ─── */}
            <DocSection id="location" title="Location data">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Complete dataset for Nepal's administrative divisions including all 7 provinces,
                77 districts, municipalities, and wards. All data includes English and Nepali names.
              </p>

              <DocSubSection title="Provinces">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  All 7 provinces with Nepali and English names, identified by UUID:
                </p>
                <CodeBlock code={`import { provinces, getProvinceById, getProvinceByNameEn } from "@nepali-utils/core"

provinces  // → ProvinceInfo[] (all 7 provinces)

getProvinceById("1a2d297a-b4d4-4062-9801-62813c324753")
// → { id: "...", name: "कोशी प्रदेश", nameEn: "Koshi Province" }

getProvinceByNameEn("Bagmati Province")
// → { id: "...", name: "बागमती प्रदेश", nameEn: "Bagmati Province" }`} />
              </DocSubSection>

              <DocSubSection title="Districts">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  All 77 districts, each linked to a province via <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">provinceId</code>:
                </p>
                <CodeBlock code={`import { districts, getDistrictById, getDistrictsByProvince } from "@nepali-utils/core"

districts  // → DistrictInfo[] (all 77 districts)

getDistrictById("6accfa6f-c4ab-4b95-b0bf-aaf740375f62")
// → { id: "...", provinceId: "...", name: "ताप्लेजुङ", nameEn: "Taplejung", ... }

getDistrictsByProvince("1a2d297a-b4d4-4062-9801-62813c324753")
// → DistrictInfo[] (districts in Koshi province)`} />
              </DocSubSection>

              <DocSubSection title="Municipalities">
                <CodeBlock code={`import { municipalities, getMunicipalityById, getMunicipalitiesByDistrict } from "@nepali-utils/core"

getMunicipalityById(1)
// → { id: 1, districtId: 1, nameEn: "...", nameNe: "...", type: "...", ... }

getMunicipalitiesByDistrict(1)
// → MunicipalityInfo[]

getMunicipalitiesByProvince(1)
// → MunicipalityInfo[] (all municipalities in Koshi)`} />
              </DocSubSection>

              <DocSubSection title="Wards">
                <CodeBlock code={`import { wards, getWardsByMunicipality, getWardsByDistrict, getWardsByProvince } from "@nepali-utils/core"

getWardsByMunicipality(1)
// → WardInfo[]

getWardsByDistrict(1)
// → WardInfo[]

getWardsByProvince(1)
// → WardInfo[]`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Validation ─── */}
            <DocSection id="validation" title="Validation">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Validate Nepali mobile phone numbers with carrier detection and formatting.
              </p>

              <DocSubSection title="Phone validation">
                <CodeBlock code={`import { isValidNepaliMobile, getPhoneType, formatNepaliPhone } from "@nepali-utils/core"

isValidNepaliMobile("9841234567") // → true
isValidNepaliMobile("12345")     // → false

getPhoneType("9841234567") // → "NTC" (Nepal Telecom)
getPhoneType("9861234567") // → "NTC"
getPhoneType("9851234567") // → "Ncell"

formatNepaliPhone("9841234567")
// → "984-1234567"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Currency ─── */}
            <DocSection id="currency" title="Currency">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Format amounts in Nepali currency (रु) and convert numbers to Nepali words.
              </p>

              <DocSubSection title="Currency formatting">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">formatNepaliCurrency</code> accepts options for language, symbol, and decimal control:
                </p>
                <CodeBlock code={`import { formatNepaliCurrency } from "@nepali-utils/core"

// Default — Nepali numerals with रु symbol
formatNepaliCurrency(12345.67)
// → "रु १२,३४५.६७"

// English output
formatNepaliCurrency(12345.67, { lang: "en" })
// → "Rs. 12,345.67"

// Hide symbol
formatNepaliCurrency(1000, { symbol: false })
// → "१,०००.००"

// Whole number only (no decimals)
formatNepaliCurrency(1000, { decimal: false })
// → "रु १,०००"

// Negative amounts
formatNepaliCurrency(-500)
// → "रु -५००.००"`} />
              </DocSubSection>

              <DocSubSection title="Number to words">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Converts numbers to Nepali words using the traditional place value system (सय, हजार, लाख, करोड):
                </p>
                <CodeBlock code={`import { toNepaliWords } from "@nepali-utils/core"

toNepaliWords(0)         // → "शून्य"
toNepaliWords(5)         // → "पाँच"
toNepaliWords(100)       // → "एक सय"
toNepaliWords(1000)      // → "एक हजार"
toNepaliWords(12345)     // → "बाह्र हजार तीन सय पैंतालीस"
toNepaliWords(100000)    // → "एक लाख"
toNepaliWords(10000000)  // → "एक करोड"
toNepaliWords(-50)       // → "ऋण पचास"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Constants ─── */}
            <DocSection id="constants" title="Constants">
              <DocSubSection title="MONTHS">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  All 12 Bikram Sambat months with English and Nepali names:
                </p>
                <CodeBlock code={`import { MONTHS } from "@nepali-utils/core"

MONTHS
// → [
//   { value: 1,  nameEn: "Baisakh", nameNe: "बैशाख" },
//   { value: 2,  nameEn: "Jestha",  nameNe: "जेष्ठ" },
//   { value: 3,  nameEn: "Ashadh",  nameNe: "आषाढ" },
//   { value: 4,  nameEn: "Shrawan", nameNe: "श्रावण" },
//   { value: 5,  nameEn: "Bhadra",  nameNe: "भाद्र" },
//   { value: 6,  nameEn: "Ashwin",  nameNe: "आश्विन" },
//   { value: 7,  nameEn: "Kartik",  nameNe: "कार्तिक" },
//   { value: 8,  nameEn: "Mangsir", nameNe: "मंसिर" },
//   { value: 9,  nameEn: "Poush",   nameNe: "पौष" },
//   { value: 10, nameEn: "Magh",    nameNe: "माघ" },
//   { value: 11, nameEn: "Falgun",  nameNe: "फाल्गुन" },
//   { value: 12, nameEn: "Chaitra", nameNe: "चैत्र" },
// ]`} />
              </DocSubSection>

              <DocSubSection title="WEEKDAYS">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  7 weekdays with short/long names in both languages:
                </p>
                <CodeBlock code={`import { WEEKDAYS } from "@nepali-utils/core"

WEEKDAYS[0]
// → { value: 0, shortEn: "Sun", shortNe: "आइत", longEn: "Sunday", longNe: "आइतबार" }

WEEKDAYS[6]
// → { value: 6, shortEn: "Sat", shortNe: "शनि", longEn: "Saturday", longNe: "शनिबार" }`} />
              </DocSubSection>
            </DocSection>

            {/* ─── API Reference ─── */}
            <DocSection id="api" title="API reference">

              <h3 className="text-base font-semibold text-foreground mb-3">Conversion</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Signature</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "bsToAd(year, month, day)", sig: "(y: number, m: number, d: number) => Date", desc: "BS → AD. Throws if date is invalid or outside BS 2000–2100." },
                      { fn: "adToBs(date)", sig: "(date: Date) => DateBS", desc: "AD → BS. Throws if date is before BS 2000-01-01 (AD 1943-04-14)." },
                      { fn: "getTodayBs()", sig: "() => DateBS", desc: "Current date in BS. Always succeeds." },
                      { fn: "getBsDayOfWeek(year, month, day)", sig: "(y: number, m: number, d: number) => number", desc: "Day of week: 0 (Sunday) through 6 (Saturday). Throws on invalid date." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.sig}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Formatting</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Signature</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "formatBsDate(date, lang?, opts?)", sig: "(d: DateBS, lang?: BsLang, opts?: BsFormatOptions) => string", desc: "Format with pattern (YYYY-MM-DD, DD MMMM YYYY, etc.). Default pattern: YYYY-MM-DD." },
                      { fn: "toNepaliNumber(num)", sig: "(num: number) => string", desc: "Arabic → Nepali digits (e.g. 2081 → २०८१). Handles negative numbers." },
                      { fn: "parseNepaliNumber(str)", sig: "(str: string) => number", desc: "Nepali → Arabic digits (e.g. २०८१ → 2081). Non-digits pass through." },
                      { fn: "getPrevMonth(year, month)", sig: "(y: number, m: number) => { year, month }", desc: "Previous month. Wraps from Baisakh (1) to Chaitra (12) of previous year." },
                      { fn: "getNextMonth(year, month)", sig: "(y: number, m: number) => { year, month }", desc: "Next month. Wraps from Chaitra (12) to Baisakh (1) of next year." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.sig}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Calendar data</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Signature</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "generateCalendarGrid(year, month, ...)", sig: "(y: number, m: number, sel?: DateBS, today?: DateBS, disabledFn?: fn) => CalendarDay[][]", desc: "Generates 6×7 grid (weeks × days) with padding, today/selected/disabled state." },
                      { fn: "getDaysInBsMonth(year, month)", sig: "(y: number, m: number) => number", desc: "Days in a BS month (29–32). Throws if month is outside 1–12 or year unsupported." },
                      { fn: "getDaysInBsYear(year)", sig: "(y: number) => number", desc: "Total days in a BS year (354–366). Throws if year outside BS 2000–2100." },
                      { fn: "isValidBsYear(year)", sig: "(y: number) => boolean", desc: "True if year is in BS 2000–2100. Never throws." },
                      { fn: "getBsYearRange()", sig: "() => { min: number; max: number }", desc: "Returns { min: 2000, max: 2100 }." },
                      { fn: "validateBsDate(year, month, day)", sig: "(y: number, m: number, d: number) => void", desc: "Throws descriptive Error if month is outside 1–12 or day is outside valid range." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.sig}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Signature</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "isSameBsDate(a, b)", sig: "(a: DateBS, b: DateBS) => boolean", desc: "True if year, month, and day are all equal." },
                      { fn: "isBeforeBsDate(a, b)", sig: "(a: DateBS, b: DateBS) => boolean", desc: "True if a is chronologically before b (compares year → month → day)." },
                      { fn: "isAfterBsDate(a, b)", sig: "(a: DateBS, b: DateBS) => boolean", desc: "True if a is chronologically after b." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.sig}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Location</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Export</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Type</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { name: "provinces", type: "ProvinceInfo[]", desc: "All 7 provinces (Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, Sudurpashchim)" },
                      { name: "getProvinceById(id)", type: "ProvinceInfo | undefined", desc: "Lookup by UUID. Returns undefined if not found." },
                      { name: "getProvinceByNameEn(name)", type: "ProvinceInfo | undefined", desc: "Lookup by English name (e.g. 'Bagmati Province'). Case-sensitive." },
                      { name: "districts", type: "DistrictInfo[]", desc: "All 77 districts" },
                      { name: "getDistrictById(id)", type: "DistrictInfo | undefined", desc: "Lookup by UUID." },
                      { name: "getDistrictsByProvince(provinceId)", type: "DistrictInfo[]", desc: "Districts in a province. Empty array if no match." },
                      { name: "municipalities", type: "MunicipalityInfo[]", desc: "All municipalities (nagarpalika and gaupalika)" },
                      { name: "getMunicipalityById(id)", type: "MunicipalityInfo | undefined", desc: "Lookup by UUID." },
                      { name: "getMunicipalitiesByDistrict(districtId)", type: "MunicipalityInfo[]", desc: "Municipalities in a district." },
                      { name: "getMunicipalitiesByProvince(provinceId)", type: "MunicipalityInfo[]", desc: "Municipalities in a province." },
                      { name: "wards", type: "WardInfo[]", desc: "All wards across all municipalities" },
                      { name: "getWardsByMunicipality(id)", type: "WardInfo[]", desc: "Wards in a municipality." },
                      { name: "getWardsByDistrict(id)", type: "WardInfo[]", desc: "Wards in a district." },
                      { name: "getWardsByProvince(id)", type: "WardInfo[]", desc: "Wards in a province." },
                    ].map((r) => (
                      <tr key={r.name} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.name}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.type}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Validation</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Signature</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "isValidNepaliMobile(phone)", sig: "(phone: string) => boolean", desc: "Validates 10-digit Nepali mobile. Strips +977/977 prefix, spaces, dashes. Checks prefix against 16 known operator codes." },
                      { fn: "getPhoneType(phone)", sig: "(phone: string) => 'mobile' | 'landline' | 'unknown'", desc: "Detects mobile (9X, 10 digits), landline (area code match), or unknown." },
                      { fn: "formatNepaliPhone(phone)", sig: "(phone: string) => string", desc: "Formats mobile as XXX-XXX-XXXX or returns national number for landline." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.sig}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Currency</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Signature</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "formatNepaliCurrency(amount, opts?)", sig: "(amount: number, opts?: NepaliCurrencyOptions) => string", desc: "Format with रु/Rs. symbol, Indian number grouping, Devanagari or English digits, optional decimals." },
                      { fn: "toNepaliWords(num)", sig: "(num: number) => string", desc: "Number to Nepali words (सय, हजार, लाख, करोड). Handles 0 and negatives." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.sig}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <DocSubSection title="NepaliCurrencyOptions">
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead><tr className="border-b border-border bg-muted/30">
                      <th className="px-5 py-3 font-semibold text-foreground">Option</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Type</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Default</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                    </tr></thead>
                    <tbody>
                      <tr className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">lang</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">"en" | "ne"</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground/60">"ne"</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">Output language for numerals</td>
                      </tr>
                      <tr className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">symbol</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground/60">true</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">Show रु / Rs. prefix</td>
                      </tr>
                      <tr className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">decimal</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground/60">true</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">Show .XX decimal places</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </DocSubSection>

            </DocSection>

            {/* ─── Footer ─── */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Still have questions?</p>
                  <p className="text-xs text-muted-foreground/60">Check the source on GitHub or open an issue.</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/packages/nepali-utils"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Package details
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
