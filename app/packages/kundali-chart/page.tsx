"use client"

import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

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

export default function KundaliChartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <a href="/packages" className="hover:text-foreground transition-colors">Packages</a>
            <span>/</span>
            <span className="text-foreground font-medium">kundali_chart</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            kundali_chart
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            A comprehensive Flutter package for creating beautiful and highly customizable
            Vedic astrology charts (Kundali/Birth Charts). Perfect for astrology applications,
            educational tools, and spiritual apps.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">v0.0.4</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">MIT</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Flutter</span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">Dark mode</span>
          </div>
          <div className="mt-4">
            <CodeBlock lang="bash" code="flutter pub add kundali_chart" />
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
            <a href="/packages/extensions-core" className="rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-sm">
              <p className="text-sm font-semibold text-foreground">extensions_core</p>
              <p className="mt-1 text-xs text-muted-foreground">Dart &amp; Flutter extensions for strings, dates, collections.</p>
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
            href="/docs/kundali-chart"
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
