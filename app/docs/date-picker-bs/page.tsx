"use client"

import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const VERSION = "0.1.0"

const sections = [
  { id: "getting-started", label: "Getting started" },
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "examples", label: "Examples" },
  { id: "datepicker-props", label: "DatePickerBS props" },
  { id: "calendar-props", label: "CalendarBS props" },
  { id: "format-patterns", label: "Format patterns" },
  { id: "language", label: "Language & localization" },
  { id: "constraints", label: "Date constraints" },
  { id: "year-grid", label: "Year grid" },
  { id: "styling", label: "Styling" },
  { id: "types", label: "TypeScript" },
  { id: "utils", label: "Utility functions" },
]

function PropTable({ rows }: { rows: { name: string; type: string; default: string; desc: string }[] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-5 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-5 py-3 font-semibold text-foreground">Type</th>
            <th className="px-5 py-3 font-semibold text-foreground">Default</th>
            <th className="px-5 py-3 font-semibold text-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className="border-b border-border last:border-0">
              <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.name}</td>
              <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.type}</td>
              <td className="px-5 py-3 font-mono text-xs text-muted-foreground/60">{r.default}</td>
              <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

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

export default function DatePickerDocs() {
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
                <span className="text-foreground font-medium">date-picker-bs</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                date-picker-bs
              </h1>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl">
                Everything you need to know about the Bikram Sambat date picker for React.
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
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">date-picker-bs</code> is a React component library
                that provides a date picker and calendar for the Bikram Sambat (Nepali) calendar system. It covers
                dates from BS 2000 to BS 2100 (AD 1943–2043) with high accuracy.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The library exports two main components:
              </p>
              <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1">
                <li><code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">DatePickerBS</code> — A popover-based date picker with a trigger button.</li>
                <li><code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">CalendarBS</code> — A standalone inline calendar component.</li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Both components share the same underlying calendar engine and support English and Nepali
                languages, date constraints, custom formatting, and extensive styling via className.
              </p>
            </DocSection>

            {/* ─── Installation ─── */}
            <DocSection id="installation" title="Installation">
              <DocSubSection title="Package manager">
                <CodeBlock lang="bash" filename="terminal" code="npm install date-picker-bs" />
                <CodeBlock lang="bash" filename="terminal" code="pnpm add date-picker-bs" />
                <CodeBlock lang="bash" filename="terminal" code="yarn add date-picker-bs" />
              </DocSubSection>

              <DocSubSection title="shadcn/ui registry">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  You can also install via the shadcn/ui registry:
                </p>
                <CodeBlock lang="bash" filename="terminal" code="npx shadcn@latest add https://date-picker-bs.vercel.app/r/date-picker-bs.json" />
              </DocSubSection>

              <DocSubSection title="Peer dependencies">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  The library requires the following peer dependencies:
                </p>
                <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1">
                  <li><code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">react</code> ^18.0.0 || ^19.0.0</li>
                  <li><code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-popover</code> ^1.0.0</li>
                  <li><code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">lucide-react</code> ^0.400.0</li>
                </ul>
              </DocSubSection>
            </DocSection>

            {/* ─── Usage ─── */}
            <DocSection id="usage" title="Usage">
              <DocSubSection title="Basic DatePickerBS">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  The simplest way to use the date picker:
                </p>
                <CodeBlock filename="app.tsx" code={`import { useState } from "react"
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
}`} />
              </DocSubSection>

              <DocSubSection title="Basic CalendarBS">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Use the standalone calendar component:
                </p>
                <CodeBlock code={`import { useState } from "react"
import { CalendarBS } from "date-picker-bs"

function App() {
  const [date, setDate] = useState()

  return (
    <CalendarBS
      selected={date}
      onSelect={setDate}
    />
  )
}`} />
              </DocSubSection>

              <DocSubSection title="Nepali language">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Set <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">lang=&quot;ne&quot;</code> to display the calendar in Nepali:
                </p>
                <CodeBlock code={`<DatePickerBS
  lang="ne"
  value={date}
  onChange={setDate}
  className="w-[280px]"
/>`} />
              </DocSubSection>

              <DocSubSection title="Custom format">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Override the display format with the <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">formatOptions</code> prop:
                </p>
                <CodeBlock code={`<DatePickerBS
  value={date}
  onChange={setDate}
  formatOptions={{ pattern: "DD MMMM YYYY" }}
  placeholder="DD Month YYYY"
  className="w-[280px]"
/>`} />
              </DocSubSection>

              <DocSubSection title="Default month">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Control which month the calendar opens to with <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">defaultMonth</code>:
                </p>
                <CodeBlock code={`<CalendarBS
  defaultMonth={{ year: 2080, month: 10 }}
  onMonthChange={(m) => console.log("Month changed:", m)}
/>`} />
              </DocSubSection>

              <DocSubSection title="Controlled open state">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Control the popover open state externally with <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">open</code> and <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">onOpenChange</code>:
                </p>
                <CodeBlock code={`const [open, setOpen] = useState(false)

<DatePickerBS
  value={date}
  onChange={setDate}
  open={open}
  onOpenChange={setOpen}
/>`} />
              </DocSubSection>

              <DocSubSection title="Disabled state">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Pass <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">disabled</code> to prevent interaction:
                </p>
                <CodeBlock code={`<DatePickerBS
  value={getTodayBs()}
  onChange={() => {}}
  disabled
  className="w-[280px]"
/>`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Examples ─── */}
            <DocSection id="examples" title="Examples">
              <DocSubSection title="Form integration">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Use <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">DatePickerBS</code> inside a form with a submit handler:
                </p>
                <CodeBlock code={`import { useState } from "react"
import { DatePickerBS, type DateBS, formatBsDate, getTodayBs } from "date-picker-bs"

function BookingForm() {
  const [date, setDate] = useState<DateBS | undefined>(getTodayBs())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) return
    const formatted = formatBsDate(date, "en", { pattern: "YYYY-MM-DD" })
    console.log("Booking submitted for:", formatted)
    // → "Booking submitted for: 2081-05-15"
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Select a date
        </label>
        <DatePickerBS
          value={date}
          onChange={setDate}
          className="w-[280px]"
          placeholder="Pick a date"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
      >
        Submit booking
      </button>
    </form>
  )
}`} />
              </DocSubSection>

              <DocSubSection title="Date range picker">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Combine two <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">DatePickerBS</code> instances for a start and end date range:
                </p>
                <CodeBlock code={`import { useState } from "react"
import { DatePickerBS, type DateBS, isAfterBsDate, getTodayBs } from "date-picker-bs"

function DateRangePicker() {
  const [startDate, setStartDate] = useState<DateBS | undefined>(getTodayBs())
  const [endDate, setEndDate] = useState<DateBS | undefined>()

  const handleStartChange = (date: DateBS) => {
    setStartDate(date)
    // Clear end date if it's before the new start date
    if (endDate && !isAfterBsDate(endDate, date)) {
      setEndDate(undefined)
    }
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Start date
        </label>
        <DatePickerBS
          value={startDate}
          onChange={handleStartChange}
          className="w-[240px]"
          placeholder="Start date"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          End date
        </label>
        <DatePickerBS
          value={endDate}
          onChange={setEndDate}
          minDate={startDate}
          className="w-[240px]"
          placeholder="End date"
        />
      </div>
    </div>
  )
}`} />
              </DocSubSection>
            </DocSection>

            {/* ─── DatePickerBS Props ─── */}
            <DocSection id="datepicker-props" title="DatePickerBS props">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">DatePickerBS</code> component wraps <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">CalendarBS</code> inside a Radix UI Popover.
                It accepts all CalendarBS props plus the following:
              </p>
              <PropTable rows={[
                { name: "value", type: "DateBS | undefined", default: "—", desc: "The selected Bikram Sambat date." },
                { name: "onChange", type: "(date: DateBS) => void", default: "—", desc: "Called when a date is selected." },
                { name: "lang", type: '"en" | "ne"', default: '"en"', desc: "Display language." },
                { name: "minDate", type: "DateBS | undefined", default: "—", desc: "Earliest selectable date." },
                { name: "maxDate", type: "DateBS | undefined", default: "—", desc: "Latest selectable date." },
                { name: "disabled", type: "boolean", default: "false", desc: "Disables the entire picker." },
                { name: "disabled", type: "(date: DateBS) => boolean", default: "—", desc: "Custom function to disable specific days." },
                { name: "formatOptions", type: "{ pattern: string }", default: "—", desc: "Override the display format of the trigger." },
                { name: "placeholder", type: "string", default: '"Pick a date"', desc: "Placeholder text when no date is selected." },
                { name: "open", type: "boolean", default: "—", desc: "Controlled open state of the popover." },
                { name: "onOpenChange", type: "(open: boolean) => void", default: "—", desc: "Called when the popover open state changes." },
                { name: "className", type: "string", default: "—", desc: "Additional classes for the trigger button." },
                { name: "popoverContentClassName", type: "string", default: "—", desc: "Additional classes for the popover content panel." },
              ]} />
            </DocSection>

            {/* ─── CalendarBS Props ─── */}
            <DocSection id="calendar-props" title="CalendarBS props">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">CalendarBS</code> component is the core calendar view.
              </p>
              <PropTable rows={[
                { name: "selected", type: "DateBS | undefined", default: "—", desc: "The selected date." },
                { name: "onSelect", type: "(date: DateBS) => void", default: "—", desc: "Called when a date is selected." },
                { name: "lang", type: '"en" | "ne"', default: '"en"', desc: "Display language." },
                { name: "defaultMonth", type: "{ year, month }", default: "selected | today", desc: "Initial month to display on mount." },
                { name: "onMonthChange", type: "(month: { year, month }) => void", default: "—", desc: "Called when the displayed month changes via navigation." },
                { name: "minDate", type: "DateBS | undefined", default: "—", desc: "Earliest selectable date." },
                { name: "maxDate", type: "DateBS | undefined", default: "—", desc: "Latest selectable date." },
                { name: "disabled", type: "(date: DateBS) => boolean", default: "—", desc: "Custom function to disable specific days." },
                { name: "fromYear", type: "number", default: "2000", desc: "Earliest year shown in the year grid view." },
                { name: "toYear", type: "number", default: "2100", desc: "Latest year shown in the year grid view." },
                { name: "today", type: "DateBS | undefined", default: "getTodayBs()", desc: "Override the date used for \"today\" highlighting." },
                { name: "classNames", type: "Partial<CalendarBSClassNames>", default: "—", desc: "Override internal component classes for deep customization (20+ slots)." },
              ]} />
            </DocSection>

            {/* ─── Format Patterns ─── */}
            <DocSection id="format-patterns" title="Format patterns">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">formatOptions.pattern</code> prop accepts the following tokens:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border mb-4">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-5 py-3 font-semibold text-foreground">Token</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Meaning</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Example (en)</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Example (ne)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { token: "YYYY", meaning: "4-digit year", en: "2081", ne: "२०८१" },
                      { token: "YY", meaning: "2-digit year", en: "81", ne: "८१" },
                      { token: "MMMM", meaning: "Full month name", en: "Bhadra", ne: "भदौ" },
                      { token: "MMM", meaning: "Abbreviated month", en: "Bhad", ne: "भदौ" },
                      { token: "MM", meaning: "2-digit month", en: "05", ne: "०५" },
                      { token: "DD", meaning: "2-digit day", en: "15", ne: "१५" },
                    ].map((r, i) => (
                      <tr key={r.token} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.token}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.meaning}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.en}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.ne}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <DocSubSection title="Example patterns">
                <CodeBlock code={`// ISO-like, numeric
formatOptions={{ pattern: "YYYY-MM-DD" }}
// → "2081-05-15"

// Full month name
formatOptions={{ pattern: "YYYY MMMM DD" }}
// → "२०८१ भदौ १५" (Nepali)

// Day first
formatOptions={{ pattern: "DD MMMM YYYY" }}
// → "15 Bhadra 2081" (English)

// Month day, year
formatOptions={{ pattern: "MMMM DD, YYYY" }}
// → "Bhadra 15, 2081"

// Abbreviated
formatOptions={{ pattern: "YYYY MMM DD" }}
// → "2081 Bhad 15"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Language ─── */}
            <DocSection id="language" title="Language & localization">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The library ships with two languages: English (<code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">en</code>) and
                Nepali (<code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">ne</code>). When Nepali is selected:
              </p>
              <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1">
                <li>Month names appear in Devanagari script (बैशाख, जेष्ठ, असार, ...)</li>
                <li>Weekday headers show Nepali abbreviations (आइत, सोम, ...)</li>
                <li>Numerals use Nepali digits (०, १, २, ३, ...)</li>
                <li>Navigation button labels remain in English for consistency</li>
              </ul>
              <CodeBlock code={`// English (default)
<DatePickerBS lang="en" value={date} onChange={setDate} />

// Nepali
<DatePickerBS lang="ne" value={date} onChange={setDate} />`} />
              <DocSubSection title="Nepali numerals">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Use the <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">toNepaliNumber</code> and <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">parseNepaliNumber</code> utilities
                  for converting between Arabic and Nepali digits:
                </p>
                <CodeBlock code={`import { toNepaliNumber, parseNepaliNumber } from "date-picker-bs"

toNepaliNumber(2081)     // → "२०८१"
parseNepaliNumber("२०८१") // → 2081`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Constraints ─── */}
            <DocSection id="constraints" title="Date constraints">
              <DocSubSection title="Min / max date">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Restrict the selectable range with <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">minDate</code> and <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">maxDate</code>:
                </p>
                <CodeBlock code={`const today = getTodayBs()
const nextWeek = {
  year: today.year,
  month: today.month,
  day: today.day + 7,
}

<DatePickerBS
  value={date}
  onChange={setDate}
  minDate={today}
  maxDate={nextWeek}
  className="w-[280px]"
/>`} />
              </DocSubSection>

              <DocSubSection title="Disabled days callback">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Use <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">disabledDays</code> for fine-grained control over which dates are selectable.
                  Return <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">true</code> to disable a day:
                </p>
                <CodeBlock code={`// Disable weekends
<DatePickerBS
  value={date}
  onChange={setDate}
  disabledDays={(d) => {
    const dayIndex = (
      d.year * 365 + d.month * 30 + d.day
    ) % 7
    return dayIndex === 0 || dayIndex === 6
  }}
  placeholder="Weekdays only"
  className="w-[280px]"
/>`} />
              </DocSubSection>

              <DocSubSection title="Today highlighting">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Today's date is automatically highlighted in the calendar with a distinct visual style.
                  The <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">getTodayBs()</code> function returns the current date in the BS calendar system.
                </p>
              </DocSubSection>
            </DocSection>

            {/* ─── Year Grid ─── */}
            <DocSection id="year-grid" title="Year grid">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Click the month/year header in the calendar to toggle between month view and year grid view. The year
                grid shows 12 years per page with previous/next pagination — useful for quickly jumping across decades.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Control the visible year range with <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">fromYear</code> and <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">toYear</code>. These
                clamp both the month navigation and the year grid.
              </p>
              <CodeBlock code={`// Restrict to BS 2075–2085
<CalendarBS
  selected={date}
  onSelect={setDate}
  fromYear={2075}
  toYear={2085}
/>`} />
            </DocSection>

            {/* ─── Styling ─── */}
            <DocSection id="styling" title="Styling">
              <DocSubSection title="Via className">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Both components accept a <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">className</code> prop for custom styling.
                  For <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">DatePickerBS</code>, this applies to the trigger button:
                </p>
                <CodeBlock code={`<DatePickerBS value={date} onChange={setDate} className="w-[280px] h-10 text-sm" />`} />
              </DocSubSection>

              <DocSubSection title="Via CalendarClassNames">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  The <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">CalendarBS</code> component accepts a
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> classNames</code> prop for deep customization of internal elements:
                </p>
                <CodeBlock code={`<CalendarBS
  selected={date}
  onSelect={setDate}
  classNames={{
    month: "text-lg font-bold",
    day: "rounded-full hover:bg-primary/10",
    today: "ring-2 ring-primary",
    selected: "bg-primary text-primary-foreground",
  }}
/>`} />
              </DocSubSection>

              <DocSubSection title="CSS variables">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  The component uses shadcn/ui-style CSS variables for theming. Override these variables
                  in your global stylesheet to customize the look:
                </p>
                <CodeBlock lang="css" code={`/* Your global CSS */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;
  --card: 0 0% 100%;
  --popover: 0 0% 100%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --muted-foreground: 0 0% 46%;
  --border: 0 0% 90%;
  --radius: 0.5rem;
}`} />
              </DocSubSection>
            </DocSection>

            {/* ─── TypeScript ─── */}
            <DocSection id="types" title="TypeScript">
              <DocSubSection title="DateBS type">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  The core date type used throughout the library:
                </p>
                <CodeBlock code={`type DateBS = {
  year: number   // BS year (e.g. 2081)
  month: number  // 1-indexed month (1 = Baisakh)
  day: number    // Day of month (1-32)
}`} />
              </DocSubSection>

              <DocSubSection title="CalendarBSClassNames type">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  20+ named slots for deep styling of every calendar element (all optional):
                </p>
                <CodeBlock code={`interface CalendarBSClassNames {
  caption: string
  captionLabel: string
  nav: string
  navButton: string
  navButtonPrev: string
  navButtonNext: string
  table: string
  headRow: string
  headCell: string
  row: string
  cell: string
  day: string
  daySelected: string
  dayToday: string
  dayOutside: string
  dayDisabled: string
  yearGrid: string
  yearCell: string
  yearButton: string
  yearSelected: string
  yearToday: string
  yearDisabled: string
}`} />
                <p className="text-sm leading-relaxed text-muted-foreground mt-3">
                  Pass as <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">Partial&lt;CalendarBSClassNames&gt;</code> — all fields are optional.
                </p>
              </DocSubSection>

              <DocSubSection title="Imports">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  All types and utilities are exported from the package entry point:
                </p>
                <CodeBlock code={`import {
  // Components
  DatePickerBS,
  CalendarBS,

  // Types
  type DateBS,
  type BsLang,
  type BsFormatOptions,
  type CalendarDay,
  type CalendarBSClassNames,
  type CalendarBSProps,
  type DatePickerBSProps,
  type DatePickerMode,

  // Constants
  MONTHS,
  WEEKDAYS,

  // Utilities
  getTodayBs,
  formatBsDate,
  bsToAd,
  adToBs,
  getBsDayOfWeek,
  getDaysInBsMonth,
  getDaysInBsYear,
  getPrevMonth,
  getNextMonth,
  generateCalendarGrid,
  isSameBsDate,
  isBeforeBsDate,
  isAfterBsDate,
  isValidBsYear,
  getBsYearRange,
  toNepaliNumber,
  parseNepaliNumber,
} from "date-picker-bs"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Utils ─── */}
            <DocSection id="utils" title="Utility functions">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                All utilities from <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">@nepali-utils/core</code> are re-exported from <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">date-picker-bs</code>. Below is the complete API reference.
              </p>

              <h3 className="text-base font-semibold text-foreground mb-3">Conversion</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Returns</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "getTodayBs()", ret: "DateBS", desc: "Current date in BS. Always succeeds." },
                      { fn: "bsToAd(year, month, day)", ret: "Date", desc: "BS → Date (AD). Throws if date is invalid or outside BS 2000–2100." },
                      { fn: "adToBs(date)", ret: "DateBS", desc: "Date (AD) → BS. Throws if before BS 2000-01-01 (AD 1943-04-14)." },
                      { fn: "getBsDayOfWeek(year, month, day)", ret: "number (0–6)", desc: "Day of week: 0 = Sunday, 6 = Saturday. Throws on invalid date." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.ret}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">Formatting &amp; navigation</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Function</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Returns</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "formatBsDate(date, lang?, opts?)", ret: "string", desc: "Format with pattern: YYYY-MM-DD, DD MMMM YYYY, etc. Default: YYYY-MM-DD." },
                      { fn: "toNepaliNumber(num)", ret: "string", desc: "Arabic → Nepali digits (e.g. 2081 → २०८१). Handles negatives." },
                      { fn: "parseNepaliNumber(str)", ret: "number", desc: "Nepali → Arabic (e.g. २०८१ → 2081). Non-digits pass through." },
                      { fn: "getPrevMonth(year, month)", ret: "{ year, month }", desc: "Previous month (wraps year at Baisakh)." },
                      { fn: "getNextMonth(year, month)", ret: "{ year, month }", desc: "Next month (wraps year at Chaitra)." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.ret}</td>
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
                    <th className="px-5 py-3 font-semibold text-foreground">Returns</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "generateCalendarGrid(year, month, ...)", ret: "CalendarDay[][]", desc: "6×7 grid (weeks × days) with today/selected/disabled/padding state." },
                      { fn: "getDaysInBsMonth(year, month)", ret: "number (29–32)", desc: "Days in a BS month. Throws if month is outside 1–12." },
                      { fn: "getDaysInBsYear(year)", ret: "number (354–366)", desc: "Total days in a BS year. Throws if outside BS 2000–2100." },
                      { fn: "isValidBsYear(year)", ret: "boolean", desc: "True if year is in BS 2000–2100." },
                      { fn: "getBsYearRange()", ret: "{ min, max }", desc: "Returns { min: 2000, max: 2100 }." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.ret}</td>
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
                    <th className="px-5 py-3 font-semibold text-foreground">Returns</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { fn: "isSameBsDate(a, b)", ret: "boolean", desc: "True if year, month, and day are all equal." },
                      { fn: "isBeforeBsDate(a, b)", ret: "boolean", desc: "True if a is before b (year → month → day)." },
                      { fn: "isAfterBsDate(a, b)", ret: "boolean", desc: "True if a is after b." },
                    ].map((r) => (
                      <tr key={r.fn} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{r.fn}</td>
                        <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.ret}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">CalendarDay fields</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-border bg-muted/30">
                    <th className="px-5 py-3 font-semibold text-foreground">Field</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Type</th>
                    <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { name: "day", type: "number | null", desc: "Day of month (null for padding cells)" },
                      { name: "date", type: "DateBS | null", desc: "The BS date (null for padding)" },
                      { name: "isToday", type: "boolean", desc: "Matches today's date" },
                      { name: "isSelected", type: "boolean", desc: "Matches the selected date" },
                      { name: "isDisabled", type: "boolean", desc: "Disabled by callback" },
                      { name: "isOutside", type: "boolean", desc: "Padding cell outside current month" },
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

              <DocSubSection title="Usage examples">
                <CodeBlock code={`import {
  getTodayBs,
  formatBsDate,
  bsToAd,
  adToBs,
  toNepaliNumber,
  isSameBsDate,
  isBeforeBsDate,
  generateCalendarGrid,
} from "date-picker-bs"

// Get today
const today = getTodayBs()
// → { year: 2081, month: 5, day: 15 }

// Format
formatBsDate(today, "en", { pattern: "YYYY MMMM DD" })
// → "2081 Bhadra 15"

formatBsDate(today, "ne", { pattern: "YYYY MMMM DD" })
// → "२०८१ भदौ १५"

// Convert BS → AD
const adDate = bsToAd(today.year, today.month, today.day)
// → Date object

// Convert AD → BS
const bsDate = adToBs(new Date())
// → DateBS object

// Compare dates
isSameBsDate(today, { year: 2081, month: 5, day: 15 })  // → true
isBeforeBsDate({ year: 2080, month: 12, day: 30 }, today) // → true

// Nepali numerals
toNepaliNumber(2081)      // → "२०८१"
parseNepaliNumber("२०८१") // → 2081

// Calendar grid
const weeks = generateCalendarGrid(2081, 5)
// → CalendarDay[][] — ready for rendering`} />
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
                    href="/packages/date-picker-bs"
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
