"use client"

import { useState } from "react"
import { DatePickerBS, type DateBS, formatBsDate, getTodayBs } from "date-picker-bs"
import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const features = [
  {
    title: "DatePickerBS",
    description: "A popover-based date picker with a customizable trigger button. Built on Radix UI Popover for accessibility.",
    code: `import { useState } from "react"
import { DatePickerBS, getTodayBs } from "date-picker-bs"

function App() {
  const [date, setDate] = useState(getTodayBs())

  return (
    <DatePickerBS
      value={date}
      onChange={setDate}
      className="w-[280px]"
    />
  )
}`,
  },
  {
    title: "CalendarBS",
    description: "A standalone inline calendar component that can be embedded anywhere in your UI.",
    code: `import { useState } from "react"
import { CalendarBS } from "date-picker-bs"

function App() {
  const [date, setDate] = useState()

  return (
    <CalendarBS
      selected={date}
      onSelect={setDate}
    />
  )
}`,
  },
  {
    title: "Nepali Language",
    description: "Switch to Nepali (Devanagari) with a single prop. Month names, weekday headers, and numerals are rendered in Nepali script.",
    code: `<DatePickerBS
  lang="ne"
  value={date}
  onChange={setDate}
  className="w-[280px]"
/>`,
  },
  {
    title: "Custom Formatting",
    description: "Override the display format with custom patterns using YYYY, MM, DD, MMMM, etc.",
    code: `<DatePickerBS
  value={date}
  onChange={setDate}
  formatOptions={{ pattern: "DD MMMM YYYY" }}
  placeholder="DD Month YYYY"
  className="w-[280px]"
/>`,
  },
  {
    title: "Date Constraints",
    description: "Restrict the selectable range with min/max dates or disable specific days with a custom callback.",
    code: `const today = getTodayBs()

<DatePickerBS
  value={date}
  onChange={setDate}
  minDate={today}
  maxDate={{ year: 2081, month: 6, day: 15 }}
  disabledDays={(d) => {
    // Disable weekends
    const dayIndex = (
      d.year * 365 + d.month * 30 + d.day
    ) % 7
    return dayIndex === 0 || dayIndex === 6
  }}
  className="w-[280px]"
/>`,
  },
  {
    title: "Deep Styling",
    description: "Style every part of the calendar with the classNames prop or override CSS variables globally.",
    code: `<CalendarBS
  selected={date}
  onSelect={setDate}
  classNames={{
    month: "text-lg font-bold",
    day: "rounded-full hover:bg-primary/10",
    today: "ring-2 ring-primary",
    selected: "bg-primary text-primary-foreground",
  }}
/>`,
  },
]

export default function DatePickerBSPage() {
  const [date, setDate] = useState<DateBS | undefined>(getTodayBs())
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

  return (
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
                <span className="font-medium text-foreground">date-picker-bs</span>
              </nav>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                date-picker-bs
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A customizable Bikram Sambat (Nepali) date picker and calendar built with Radix UI Popover
                and Tailwind CSS — compatible with shadcn/ui theming.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.1.1</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">React 18 / 19</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Radix UI</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Tailwind CSS</span>
              </div>
              <div className="mt-5">
                <CodeBlock lang="bash" code="npm install date-picker-bs" />
              </div>

              {/* Live demo */}
              <div className="mt-8 max-w-sm rounded-xl border border-border bg-card p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Try it live</p>
                <DatePickerBS value={date} onChange={setDate} className="w-full" />
                {date && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Selected: <span className="font-medium text-foreground">{formatBsDate(date, "en", { pattern: "YYYY MMMM DD" })}</span>
                  </p>
                )}
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
                <a href="/packages/nepali-utils" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">@nepali-utils/core</p>
                    <p className="mt-1 text-xs text-muted-foreground">The calendar engine and utilities this package re-exports.</p>
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
              <a href="/docs/date-picker-bs" className="btn-primary px-4 py-2 text-xs">
                View docs
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
