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

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <a href="/packages" className="hover:text-foreground transition-colors">Packages</a>
            <span>/</span>
            <span className="text-foreground font-medium">date-picker-bs</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            date-picker-bs
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            A customizable Bikram Sambat (Nepali) date picker and calendar built with Radix UI Popover
            and Tailwind CSS — compatible with shadcn/ui theming.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.1.0</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">React 18 / 19</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Radix UI</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Tailwind CSS</span>
          </div>
          <div className="mt-4">
            <CodeBlock lang="bash" code="npm install date-picker-bs" />
          </div>

          {/* Live demo */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 max-w-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Try it live</p>
            <DatePickerBS value={date} onChange={setDate} className="w-full" />
            {date && (
              <p className="mt-4 text-sm text-muted-foreground">
                Selected: <span className="font-medium text-foreground">{formatBsDate(date, "en", { pattern: "YYYY MMMM DD" })}</span>
              </p>
            )}
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
            href="/docs/date-picker-bs"
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
