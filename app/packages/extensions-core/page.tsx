"use client"

import { ViewTransition } from "react"
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
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

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
                <span className="font-medium text-foreground">extensions_core</span>
              </nav>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                extensions_core
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A comprehensive, dependency-light collection of Dart &amp; Flutter extensions.
                Stop hunting for separate extension packages — strings, numbers, dates, collections,
                colors, widgets, navigation, and more in one place.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.0.4</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Dart ^3.6</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Flutter &gt;=3.27</span>
              </div>
              <div className="mt-5">
                <CodeBlock lang="bash" code="flutter pub add extensions_core" />
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
                <CodeBlock lang="dart" code={f.code} />
              </section>
            ))}

            <div className="mt-16 border-t border-border pt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">Related packages</h2>
              <div className="divide-y divide-border border-y border-border">
                <a href="/packages/kundali-chart" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">kundali_chart</p>
                    <p className="mt-1 text-xs text-muted-foreground">Another Flutter package — Vedic astrology birth charts.</p>
                  </div>
                  <svg className="mt-1 shrink-0 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/packages/nepali-utils" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">@nepali-utils/core</p>
                    <p className="mt-1 text-xs text-muted-foreground">Bikram Sambat utilities for the JS/TS ecosystem.</p>
                  </div>
                  <svg className="mt-1 shrink-0 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/packages/date-picker-bs" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">date-picker-bs</p>
                    <p className="mt-1 text-xs text-muted-foreground">React date picker for the Nepali calendar.</p>
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
              <a href="/docs/extensions-core" className="btn-primary px-4 py-2 text-xs">
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
