"use client"

import { ViewTransition } from "react"
import Image from "next/image"
import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const sections = [
  { id: "preview", label: "Preview" },
  { id: "getting-started", label: "Getting started" },
  { id: "installation", label: "Installation" },
  { id: "quick-start", label: "Quick start" },
  { id: "customization", label: "Customization" },
  { id: "dark-mode", label: "Dark mode" },
  { id: "house-labels", label: "House labels" },
  { id: "planet-abbreviations", label: "Planet abbreviations" },
  { id: "planet-placement", label: "Planet placement" },
  { id: "implementation", label: "Implementation details" },
  { id: "api", label: "API reference" },
]

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-20">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  )
}

function DocSubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-base font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  )
}

export default function KundaliChartDocs() {
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
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent px-4 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
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
                <a href="/docs" className="transition-colors hover:text-foreground">Docs</a>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                <span className="font-medium text-foreground">kundali_chart</span>
              </nav>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                kundali_chart
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A comprehensive Flutter package for creating beautiful and highly customizable
                Vedic astrology charts (Kundali/Birth Charts).
              </p>
            </div>

            {/* Mobile section nav */}
            <div className="lg:hidden mb-10 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* ─── Preview ─── */}
            <DocSection id="preview" title="Preview">
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
            </DocSection>

            {/* ─── Getting Started ─── */}
            <DocSection id="getting-started" title="Getting started">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">kundali_chart</code> renders the
                traditional 12-house Vedic birth chart with customizable styling. Pass planetary
                positions as per-house lists of planet abbreviations and it draws the chart with
                efficient custom painters.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Planet abbreviations: <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">Su</code> (Sun),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Mo</code> (Moon),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Ma</code> (Mars),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Me</code> (Mercury),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Ju</code> (Jupiter),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Ve</code> (Venus),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Sa</code> (Saturn),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Ra</code> (Rahu),
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> Ke</code> (Ketu).
              </p>
            </DocSection>

            {/* ─── Installation ─── */}
            <DocSection id="installation" title="Installation">
              <CodeBlock lang="bash" filename="terminal" code="flutter pub add kundali_chart" />
              <div className="mt-4">
                <CodeBlock lang="yaml" filename="pubspec.yaml" code={`dependencies:
  kundali_chart: ^0.0.4`} />
              </div>
              <div className="mt-4">
                <CodeBlock lang="dart" code={`import 'package:kundali_chart/kundali_chart.dart';`} />
              </div>
            </DocSection>

            {/* ─── Quick Start ─── */}
            <DocSection id="quick-start" title="Quick start">
              <CodeBlock filename="main.dart" code={`import 'package:flutter/material.dart';
import 'package:kundali_chart/kundali_chart.dart';

class AstrologyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
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

    return Scaffold(
      appBar: AppBar(title: Text('Birth Chart')),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: KundaliChart(
            houses: houses,
            strokeColor: Colors.black87,
            houseLabels: [
              '1\\nLagna\\nDhanus',   // Ascendant/Sagittarius
              '2\\nDhana\\nMakar',    // Wealth/Capricorn
              '3\\nSahaja\\nKumbh',   // Siblings/Aquarius
              '4\\nMeen',            // Home/Pisces
              '5\\nMesh',            // Children/Aries
              '6\\nRipu\\nVrish',     // Enemies/Taurus
              '7\\nKalatra\\nMithun', // Marriage/Gemini
              '8\\nAyu\\nKark',       // Longevity/Cancer
              '9\\nDharma\\nSimha',   // Religion/Leo
              '10\\nKarma\\nKanya',   // Career/Virgo
              '11\\nLabha\\nTula',    // Gains/Libra
              '12\\nVyaya\\nVrish',   // Losses/Scorpio
            ],
          ),
        ),
      ),
    );
  }
}`} />
            </DocSection>

            {/* ─── Customization ─── */}
            <DocSection id="customization" title="Customization">
              <DocSubSection title="Colors, lines & text styles">
                <CodeBlock lang="dart" code={`KundaliChart(
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
  textStyle: TextStyle(
    fontSize: 10,
    color: Colors.black87,
  ),
)`} />
              </DocSubSection>

              <DocSubSection title="Widget aliases">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  The same widget is exported under three names so it fits any naming convention:
                </p>
                <CodeBlock lang="dart" code={`KundaliChart(...);
VedicChart(...);      // identical API
AstrologyChart(...);  // identical API`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Dark Mode ─── */}
            <DocSection id="dark-mode" title="Dark mode">
              <DocSubSection title="Automatic">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Colors automatically adapt to the current theme:
                </p>
                <CodeBlock lang="dart" code={`KundaliChart(
  houses: houses,
  strokeColor: Colors.black87,
);`} />
              </DocSubSection>

              <DocSubSection title="Manual with theme extensions">
                <CodeBlock lang="dart" code={`Container(
  color: context.isDarkMode ? Colors.black : Colors.white,
  child: VedicChart(
    houses: houses,
    strokeColor: context.isDarkMode ? Colors.white70 : Colors.black87,
  ),
)`} />
              </DocSubSection>

              <DocSubSection title="Available extensions">
                <CodeBlock lang="dart" code={`context.isDarkMode;   // → bool
context.theme;         // → ThemeData
context.colorScheme;   // → ColorScheme
context.textTheme;     // → TextTheme`} />
              </DocSubSection>
            </DocSection>

            {/* ─── House Labels ─── */}
            <DocSection id="house-labels" title="House labels">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The traditional Vedic 12-house system with Sanskrit names. Pass <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">houseLabels</code> (12 strings) to label each house:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-5 py-3 font-semibold text-foreground">House</th>
                      <th className="px-5 py-3 font-semibold text-foreground">English</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Sanskrit</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Significance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "Ascendant", "Lagna", "Self, Personality"],
                      ["2", "Wealth", "Dhana", "Money, Family"],
                      ["3", "Siblings", "Sahaja", "Communication, Courage"],
                      ["4", "Home", "Sukha", "Mother, Property"],
                      ["5", "Children", "Putra", "Creativity, Romance"],
                      ["6", "Enemies", "Ripu", "Health, Service"],
                      ["7", "Marriage", "Kalatra", "Partnership, Spouse"],
                      ["8", "Longevity", "Ayu", "Transformation, Occult"],
                      ["9", "Religion", "Dharma", "Luck, Higher Learning"],
                      ["10", "Career", "Karma", "Profession, Status"],
                      ["11", "Gains", "Labha", "Income, Friends"],
                      ["12", "Losses", "Vyaya", "Expenses, Spirituality"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-border last:border-0">
                        {row.map((cell, i) => (
                          <td key={i} className={i === 0 ? "px-5 py-3 font-mono text-xs font-medium text-foreground" : "px-5 py-3 text-xs text-muted-foreground"}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            {/* ─── Planet Abbreviations ─── */}
            <DocSection id="planet-abbreviations" title="Planet abbreviations">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Standard Vedic astrology abbreviations used in the <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">houses</code> lists:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-5 py-3 font-semibold text-foreground">Abbreviation</th>
                      <th className="px-5 py-3 font-semibold text-foreground">English</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Sanskrit</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Element</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Su", "Sun", "Surya", "Fire"],
                      ["Mo", "Moon", "Chandra", "Water"],
                      ["Ma", "Mars", "Mangal", "Fire"],
                      ["Me", "Mercury", "Budh", "Earth"],
                      ["Ju", "Jupiter", "Guru", "Air"],
                      ["Ve", "Venus", "Shukra", "Water"],
                      ["Sa", "Saturn", "Shani", "Air"],
                      ["Ra", "Rahu", "North Node", "Shadow"],
                      ["Ke", "Ketu", "South Node", "Shadow"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{row[0]}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{row[1]}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{row[2]}</td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            {/* ─── Planet Placement ─── */}
            <DocSection id="planet-placement" title="Planet placement">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Planets are positioned inside their house by a single unified algorithm
                (<code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">placePlanetsInHouse</code> in
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> lib/src/layout/placement.dart</code>):
              </p>
              <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1">
                <li>1 planet → centered in the house</li>
                <li>≤ 3 planets → distributed horizontally, kept inside the house bounds</li>
                <li>&gt; 3 planets → circular distribution around the house center</li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                This is the single source of truth used by both the painter and
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> KundaliChart.calculatePlanetPlacements</code> — no duplicated placement logic.
              </p>
              <CodeBlock lang="dart" code={`// Returns placement offsets/texts for rendering
List<PlanetPlacement> placePlanetsInHouse(
  HousePosition house,
  List<String> planets,
  TextStyle style, {
  double padding = 4.0,
});`} />
            </DocSection>

            {/* ─── Implementation ─── */}
            <DocSection id="implementation" title="Implementation details">
              <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1">
                <li><strong>House geometry</strong> — <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">calculateHouses(center, size)</code> builds 12 <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">HousePosition</code> objects distributed around the center and clamped inside the chart square. House 0 (Lagna) sits at the top; houses follow clockwise at 30° steps.</li>
                <li><strong>Repainting</strong> — <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">KundaliPainter.shouldRepaint</code> compares style fields and the <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">houses</code>/<code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">houseLabels</code> arrays so the chart redraws when inputs change.</li>
                <li><strong>Responsive</strong> — all positions derive from chart size, <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">paddingFactor</code>, and <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">TextPainter</code> metrics — no hard-coded offsets.</li>
                <li><strong>Text scale</strong> — <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">TextStyle</code> sizes respect <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">MediaQuery.textScaleFactor</code> automatically.</li>
              </ul>
            </DocSection>

            {/* ─── API Reference ─── */}
            <DocSection id="api" title="API reference">
              <DocSubSection title="KundaliChart">
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="px-5 py-3 font-semibold text-foreground">Parameter</th>
                        <th className="px-5 py-3 font-semibold text-foreground">Type</th>
                        <th className="px-5 py-3 font-semibold text-foreground">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "houses", type: "List<List<String>> (required)", desc: "Planetary positions per house (12 entries)." },
                        { name: "strokeColor", type: "Color (required)", desc: "Chart line color." },
                        { name: "textStyle", type: "TextStyle?", desc: "General text styling." },
                        { name: "houseLabelStyle", type: "TextStyle?", desc: "House label styling." },
                        { name: "planetStyle", type: "TextStyle?", desc: "Planet text styling." },
                        { name: "lineWidth", type: "double (default 1.0)", desc: "Line thickness." },
                        { name: "paddingFactor", type: "double (default 0.8)", desc: "Chart padding." },
                        { name: "houseLabels", type: "List<String>?", desc: "Optional house labels (12 entries)." },
                        { name: "style", type: "BirthChartStyle", desc: "Chart style (North/South Indian)." },
                        { name: "theme", type: "BirthChartTheme?", desc: "Theme configuration." },
                      ].map((p) => (
                        <tr key={p.name} className="border-b border-border last:border-0">
                          <td className="px-5 py-3 font-mono text-xs font-medium text-foreground">{p.name}</td>
                          <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{p.type}</td>
                          <td className="px-5 py-3 text-xs text-muted-foreground">{p.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DocSubSection>

              <DocSubSection title="Widgets & exports">
                <CodeBlock lang="dart" code={`// All public API comes from a single import:
import 'package:kundali_chart/kundali_chart.dart';

// Widgets
KundaliChart / VedicChart / AstrologyChart

// Helpers
calculateHouses(center, size) → List<HousePosition>
calculatePlanetPlacements(houses, ...) → List<PlanetPlacement>
placePlanetsInHouse(house, planets, style) → List<PlanetPlacement>`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Footer ─── */}
            <div className="mt-14 border-t border-border pt-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-medium text-foreground">Still have questions?</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Check the source on GitHub or open an issue.</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/packages/kundali-chart"
                    className="btn-outline px-4 py-2 text-xs"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Package details
                  </a>
                  <a
                    href="https://github.com/workwithchris/kundali_chart"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline px-4 py-2 text-xs"
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
    </ViewTransition>
  )
}
