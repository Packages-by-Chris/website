"use client"

import { ViewTransition } from "react"
import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"
import Image from "next/image"

const features = [
  {
    title: "KundaliChart Widget",
    description: "A ready-to-use Vedic astrology birth chart. Pass planetary positions per house and it renders the traditional 12-house layout.",
    code: `import 'package:flutter/material.dart';
import 'package:kundali_chart/kundali_chart.dart';

final houses = <List<String>>[
  ['Sa'],       // House 1: Saturn
  ['Ra'],       // House 2: Rahu
  ['Mo'],       // House 3: Moon
  [],           // House 4: Empty
  ['Ma'],       // House 5: Mars
  ['Su', 'Me'], // House 6: Sun and Mercury
  ['Ve'],       // House 7: Venus
  ['Ke'],       // House 8: Ketu
  [],           // House 9: Empty
  ['Ju'],       // House 10: Jupiter
  [],           // House 11: Empty
  [],           // House 12: Empty
];

KundaliChart(
  houses: houses,
  strokeColor: Colors.black87,
  houseLabels: [
    '1\\nLagna\\nDhanus', '2\\nDhana\\nMakar',
    '3\\nSahaja\\nKumbh', '4\\nMeen',
    '5\\nMesh', '6\\nRipu\\nVrish',
    '7\\nKalatra\\nMithun', '8\\nAyu\\nKark',
    '9\\nDharma\\nSimha', '10\\nKarma\\nKanya',
    '11\\nLabha\\nTula', '12\\nVyaya\\nVrish',
  ],
);`,
  },
  {
    title: "Customization",
    description: "Complete control over colors, line widths, text styles, and layout.",
    code: `KundaliChart(
  houses: planetaryData,
  strokeColor: Colors.deepPurple,
  lineWidth: 1.5,
  paddingFactor: 0.85,
  houseLabelStyle: TextStyle(
    fontSize: 11,
    fontWeight: FontWeight.w600,
    color: Colors.indigo,
  ),
  planetStyle: TextStyle(
    fontSize: 13,
    fontWeight: FontWeight.bold,
    color: Colors.orange,
  ),
  textStyle: TextStyle(fontSize: 10, color: Colors.black87),
);`,
  },
  {
    title: "Dark Mode",
    description: "Colors adapt automatically to the current theme, or control them manually with theme extensions.",
    code: `// Automatic: adapts to the ambient theme
KundaliChart(houses: houses, strokeColor: Colors.black87);

// Manual control
Container(
  color: context.isDarkMode ? Colors.black : Colors.white,
  child: VedicChart(
    houses: houses,
    strokeColor: context.isDarkMode ? Colors.white70 : Colors.black87,
  ),
);`,
  },
  {
    title: "Planet Placement",
    description: "Planets are positioned inside each house by a single unified algorithm — centered for one, distributed horizontally for up to three, and circular for more.",
    code: `// The single source of truth used by the painter
// and by KundaliChart.calculatePlanetPlacements:
List<PlanetPlacement> placePlanetsInHouse(
  house,        // HousePosition geometry
  planets,      // List<String> abbreviations
  style,        // TextStyle for metrics
  { padding = 4.0 },
);

// Standard Vedic abbreviations: Su, Mo, Ma, Me, Ju, Ve, Sa, Ra, Ke`,
  },
  {
    title: "Responsive & Fast",
    description: "All positions derive from chart size, paddingFactor, and TextPainter metrics — no hard-coded offsets. Efficient custom painters keep rendering smooth.",
    code: `// House 0 (Lagna) sits at the top, houses follow
// clockwise at 30° steps around the center.
List<HousePosition> calculateHouses(
  Offset center,
  Size size,
);

// Text scales automatically with the ambient
// MediaQuery.textScaleFactor.`,
  },
]

const sidebarSections = features.map((f) => ({
  id: f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  label: f.title,
}))

export default function KundaliChartPage() {
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
                {sidebarSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent px-4 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground"
                  >
                    {s.label}
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
                <span className="font-medium text-foreground">kundali_chart</span>
              </nav>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                kundali_chart
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A comprehensive Flutter package for creating beautiful and highly customizable
                Vedic astrology charts (Kundali/Birth Charts). Perfect for astrology applications,
                educational tools, and spiritual apps.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.0.4</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Flutter</span>
                <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground">Dark mode</span>
              </div>
              <div className="mt-5">
                <CodeBlock lang="bash" code="flutter pub add kundali_chart" />
              </div>
            </div>

            {/* Preview image */}
            <section className="mb-14">
              <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">Preview</h2>
              <figure className="rounded-xl border border-border bg-card p-6">
                <div className="flex justify-center">
                  <Image
                    src="/kundali-chart.png"
                    alt="Kundali chart preview"
                    width={400}
                    height={400}
                    className="h-auto w-auto max-w-full rounded-lg"
                    priority
                  />
                </div>
                <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                  Traditional 12-house Vedic birth chart rendered with default styling.
                </figcaption>
              </figure>
            </section>

            {/* Mobile section nav */}
            <div className="lg:hidden mb-10 flex flex-wrap gap-2">
              {sidebarSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* ─── Features ─── */}
            {features.map((f) => {
              const id = f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
              return (
                <section key={f.title} id={id} className="mb-14 scroll-mt-20">
                  <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">{f.title}</h2>
                  <p className="doc-body mb-4">{f.description}</p>
                  <CodeBlock lang="dart" code={f.code} />
                </section>
              )
            })}

            <div className="mt-16 border-t border-border pt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">Related packages</h2>
              <div className="divide-y divide-border border-y border-border">
                <a href="/packages/extensions-core" className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-accent/50">
                  <div>
                    <p className="text-sm font-semibold text-foreground">extensions_core</p>
                    <p className="mt-1 text-xs text-muted-foreground">Dart &amp; Flutter extensions for strings, dates, collections.</p>
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
              <a href="/docs/kundali-chart" className="btn-primary px-4 py-2 text-xs">
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
