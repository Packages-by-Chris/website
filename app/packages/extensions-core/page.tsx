"use client"

import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const features = [
  {
    title: "String Extensions",
    description: "Validation, parsing, case conversion, and slicing helpers for everyday string work.",
    code: `import 'package:extensions_core/extensions.dart';

'user@site.com'.isEmail();      // → true
'hello world'.toCamelCase();    // → helloWorld
'hello world'.toSnakeCase();    // → hello_world
'John Smith'.initials();        // → JS
'hello'.masked();               // → *ello
'hello world'.truncate(5);      // → hello...`,
  },
  {
    title: "Number & Int Extensions",
    description: "Formatting, conversion, and Flutter helpers on numbers.",
    code: `1024.formatBytes();         // → "1.00 KB"
1.ordinal();               // → "1st"
5.toBinary();              // → "101"
12.minutes;                // → Duration(minutes: 12)
10.heightBox;              // → SizedBox(height: 10)
3.14159.toFixed(2);        // → "3.14"`,
  },
  {
    title: "DateTime Extensions",
    description: "Boundaries, checks, and formatting for dates.",
    code: `final now = DateTime.now();

now.startOfDay;            // → 00:00 today
now.startOfMonth;          // → 1st of the month
now.isWeekend;             // → bool
now.ageInYears();          // → whole years
now.timeAgo(context);      // → "5 minutes ago"
now.format('yyyy-MM-dd');  // → "2026-08-16"`,
  },
  {
    title: "Collection Extensions",
    description: "Selection, math, grouping, and transformation for Iterable, List, and Map.",
    code: `[1, 2, 3, 4].sum;                     // → 10
[1, 2, 3].zip(['a', 'b']);            // → [(1, a), (2, b)]
[1, 2, 3, 4, 5].rotate(2);           // → [4, 5, 1, 2, 3]
[1, 2, 3].chunked(2);                // → [[1, 2], [3]]
{'a': 1, 'b': 2}.invert();          // → {1: a, 2: b}
{'a': 1, 'b': 2, 'c': 3}.pick(['a', 'c']); // → {a: 1, c: 3}`,
  },
  {
    title: "Color Extensions",
    description: "Hex conversion, shading, and Material helpers on Flutter colors.",
    code: `colorFromHex('#2196f3').toHex();  // → "#ff2196f3"
Colors.red.lighten(0.2);
Colors.red.complementary;        // → cyan
Colors.red.toMaterialColor();
Colors.red.isDark;               // → bool`,
  },
  {
    title: "Widget & Context Extensions",
    description: "Layout, interaction, and theme helpers on Widgets and BuildContext.",
    code: `Text('Hello').padding().background(Colors.red).tooltip('hi');
Text('Tap').inkWell(onTap);

context.isTablet;          // → bool
context.isDarkMode;        // → bool
context.hideKeyboard();
context.pushWithSlide(DetailsScreen());
context.showSnackBar('Saved!');`,
  },
]

export default function ExtensionsCorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <a href="/packages" className="hover:text-foreground transition-colors">Packages</a>
            <span>/</span>
            <span className="text-foreground font-medium">extensions_core</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            extensions_core
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            A comprehensive, dependency-light collection of Dart &amp; Flutter extensions.
            Stop hunting for separate extension packages — strings, numbers, dates, collections,
            colors, widgets, navigation, and more in one place.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.0.4</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Dart ^3.6</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Flutter &gt;=3.27</span>
          </div>
          <div className="mt-4">
            <CodeBlock lang="bash" code="flutter pub add extensions_core" />
          </div>
        </div>

        <div className="space-y-16">
          {features.map((f) => (
            <section key={f.title}>
              <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">{f.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">{f.description}</p>
              <CodeBlock lang="dart" code={f.code} />
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Related packages</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <a href="/packages/kundali-chart" className="rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-sm">
              <p className="text-sm font-semibold text-foreground">kundali_chart</p>
              <p className="mt-1 text-xs text-muted-foreground">Another Flutter package — Vedic astrology birth charts.</p>
            </a>
            <a href="/packages/nepali-utils" className="rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-sm">
              <p className="text-sm font-semibold text-foreground">@nepali-utils/core</p>
              <p className="mt-1 text-xs text-muted-foreground">Bikram Sambat utilities for the JS/TS ecosystem.</p>
            </a>
            <a href="/packages/date-picker-bs" className="rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-sm">
              <p className="text-sm font-semibold text-foreground">date-picker-bs</p>
              <p className="mt-1 text-xs text-muted-foreground">React date picker for the Nepali calendar.</p>
            </a>
          </div>
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
            href="/docs/extensions-core"
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
