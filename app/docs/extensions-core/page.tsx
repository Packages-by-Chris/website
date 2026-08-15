"use client"

import { Nav } from "../../nav"
import { CodeBlock } from "../../code-block"

const sections = [
  { id: "getting-started", label: "Getting started" },
  { id: "installation", label: "Installation" },
  { id: "strings", label: "Strings" },
  { id: "numbers", label: "Numbers & Int" },
  { id: "datetime", label: "DateTime & Duration" },
  { id: "collections", label: "Collections" },
  { id: "color", label: "Color" },
  { id: "files", label: "File, Image & Icon" },
  { id: "context", label: "BuildContext" },
  { id: "widgets", label: "Widgets & TextStyle" },
  { id: "state", label: "State & Platform" },
  { id: "navigation", label: "Navigation" },
  { id: "validators", label: "Form validators" },
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

function ExtTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            {headers.map((h) => (
              <th key={h} className="px-5 py-3 font-semibold text-foreground">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? "px-5 py-3 font-mono text-xs font-medium text-foreground" : "px-5 py-3 text-xs text-muted-foreground"}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ExtensionsCoreDocs() {
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
                <span className="text-foreground font-medium">extensions_core</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                extensions_core
              </h1>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl">
                A comprehensive, dependency-light collection of Dart &amp; Flutter extensions
                across strings, numbers, dates, collections, colors, widgets, navigation, and more.
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
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">extensions_core</code> is a single
                package that covers the daily-driver Dart &amp; Flutter utilities. Import it once
                and get helpers for strings, numbers, dates, collections, colors, widgets, and navigation.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Requirements: Dart <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">^3.6.0</code> and
                Flutter <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">&gt;=3.27.0</code>. The only
                runtime dependency is <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">intl</code>.
              </p>
              <CodeBlock lang="dart" code={`import 'package:extensions_core/extensions.dart';

void main() {
  // Strings
  'hello world'.toCamelCase();      // helloWorld
  'hello world'.toSnakeCase();      // hello_world
  'user@site.com'.isEmail();        // true

  // Iterables
  [1, 2, 3, 4].sum;                 // 10
  [1, 2, 3].zip(['a', 'b']);        // [(1, a), (2, b)]

  // Colors
  colorFromHex('#2196f3').toHex();  // #ff2196f3

  // Dates
  DateTime.now().startOfWeek;       // Monday
}`} />
            </DocSection>

            {/* ─── Installation ─── */}
            <DocSection id="installation" title="Installation">
              <CodeBlock lang="bash" filename="terminal" code="flutter pub add extensions_core" />
              <div className="mt-4">
                <CodeBlock lang="yaml" filename="pubspec.yaml" code={`dependencies:
  extensions_core: ^0.0.4`} />
              </div>
            </DocSection>

            {/* ─── Strings ─── */}
            <DocSection id="strings" title="Strings">
              <DocSubSection title="Validation">
                <ExtTable headers={["Extension", "Description"]} rows={[
                  ["isEmail", "Valid email format"],
                  ["isUrl", "Valid URL"],
                  ["isPhoneNumber", "Valid phone number"],
                  ["isNumeric / isAlphabetic / isAlphanumeric", "Character set checks"],
                  ["containsUppercase / containsLowercase / containsDigit", "Character presence checks"],
                  ["containsSpecialCharacter", "Has special characters"],
                  ["isStrongPassword", "Password strength"],
                  ["isJson", "Valid JSON"],
                ]} />
              </DocSubSection>

              <DocSubSection title="Parsing">
                <CodeBlock lang="dart" code={`'123'.toIntSafe();       // → 123
'12.5'.toDoubleSafe();    // → 12.5
'true'.toBool();          // → true
''.isNullOrEmpty;         // → true (nullable)
'   '.isNullOrWhiteSpace; // → true`} />
              </DocSubSection>

              <DocSubSection title="Case conversion">
                <CodeBlock lang="dart" code={`'hello world'.capitalize();  // → "Hello world"
'hello world'.toTitleCase();  // → "Hello World"
'hello world'.toCamelCase();  // → "helloWorld"
'hello world'.toPascalCase(); // → "HelloWorld"
'hello world'.toSnakeCase();  // → "hello_world"
'hello world'.toKebabCase();  // → "hello-world"`} />
              </DocSubSection>

              <DocSubSection title="Slicing & more">
                <CodeBlock lang="dart" code={`'hello world'.truncate(5);   // → "hello..."
'hello'.reverse();            // → "olleh"
'John Smith'.initials();      // → "JS"
'9841234567'.masked();        // → "*****4567"
'hello123'.onlyDigits;        // → "123"
'hello world'.slugify();      // → "hello-world"
'abc'.replaceLast('c', 'z');  // → "abz"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Numbers ─── */}
            <DocSection id="numbers" title="Numbers & Int">
              <DocSubSection title="Formatting">
                <CodeBlock lang="dart" code={`1234.5.toCurrency();     // → "$1,234.50"
12345.toCompact();        // → "12.3K"
0.756.toPercentage();     // → "75.6%"
3.14159.toFixed(2);       // → "3.14"
1024.formatBytes();       // → "1.00 KB"
123.456.toDecimal(1);     // → "123.5"`} />
              </DocSubSection>

              <DocSubSection title="Conversion">
                <CodeBlock lang="dart" code={`1.ordinal();          // → "1st"
5.toBinary();         // → "101"
5.toOctal();          // → "5"
255.toHex();          // → "ff"

// Duration
12.milliseconds;      // → Duration(milliseconds: 12)
2.minutes;            // → Duration(minutes: 2)
3.hours;              // → Duration(hours: 3)

// Widgets
10.heightBox;         // → SizedBox(height: 10)
10.widthBox;          // → SizedBox(width: 10)`} />
              </DocSubSection>

              <DocSubSection title="Predicates & math">
                <CodeBlock lang="dart" code={`5.isPositive;          // → true
0.isZero;              // → true
10.isDivisibleBy(5);   // → true
4.isEven;              // → true
3.isOdd;               // → true
50.percentageOf(200);  // → 25.0
90.toRadians();        // → 1.5707...
3.toDegrees();         // → 171.88...
5.isBetween(1, 10);    // → true`} />
              </DocSubSection>
            </DocSection>

            {/* ─── DateTime ─── */}
            <DocSection id="datetime" title="DateTime & Duration">
              <DocSubSection title="Checks">
                <CodeBlock lang="dart" code={`final now = DateTime.now();

now.isToday;            // → bool
now.isYesterday;        // → bool
now.isTomorrow;         // → bool
now.isSameDay(other);   // → bool
now.isWeekend;          // → bool
now.isWeekday;          // → bool
now.isLeapYear;         // → bool
now.isInFuture;         // → bool
now.isInPast;           // → bool`} />
              </DocSubSection>

              <DocSubSection title="Boundaries">
                <CodeBlock lang="dart" code={`final now = DateTime.now();

now.startOfDay;    now.endOfDay;
now.startOfWeek;   now.endOfWeek;   // Monday–Sunday
now.startOfMonth;  now.endOfMonth;
now.startOfYear;   now.endOfYear;
now.tomorrow;      now.yesterday;`} />
              </DocSubSection>

              <DocSubSection title="Formatting & helpers">
                <CodeBlock lang="dart" code={`now.ageInYears();          // → whole years
now.quarter;              // → 1–4
now.format('yyyy-MM-dd'); // → "2026-08-16"
now.formattedDate;        // → locale-friendly date
now.timeAgo(context);     // → "5 minutes ago"
now.copyWith(day: 1);     // → first of the month`} />
              </DocSubSection>

              <DocSubSection title="Duration">
                <CodeBlock lang="dart" code={`const Duration(hours: 2, minutes: 3, seconds: 45)
  .inWeeks;   // → 0

const Duration(hours: 2, minutes: 3, seconds: 45)
  .format();  // → "2:03:45"`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Collections ─── */}
            <DocSection id="collections" title="Collections">
              <DocSubSection title="Iterable selection & math">
                <CodeBlock lang="dart" code={`[1, 2, 3].firstWhereOrNull((e) => e > 2); // → 3
[1, 2, 2, 3].distinctBy((e) => e);          // → [1, 2, 3]
[1, 2, 3].countWhere((e) => e > 1);         // → 2
[1, 2, 3].containsAll([2, 3]);              // → true

[1, 2, 3, 4].sum;       // → 10
[1, 2, 3].min;          // → 1
[1, 2, 3].max;          // → 3
[1, 2, 3].average;      // → 2.0`} />
              </DocSubSection>

              <DocSubSection title="Grouping & joining">
                <CodeBlock lang="dart" code={`[1, 2, 3].groupBy((e) => e.isEven ? 'even' : 'odd');
[1, 2, 3].zip(['a', 'b']);        // → [(1, a), (2, b)]
[(1, 'a'), (2, 'b')].unzip();     // → ([1, 2], ['a', 'b'])
[[1, 2], [3]].flatten();          // → [1, 2, 3]
[1, 2, 3].insertBetween(0);       // → [1, 0, 2, 0, 3]`} />
              </DocSubSection>

              <DocSubSection title="List helpers">
                <CodeBlock lang="dart" code={`[].isNullOrEmpty;               // → true
[1, 2, 3, 4, 5].takeLast(2);    // → [4, 5]
[1, 2, 3, 4, 5].rotate(2);      // → [4, 5, 1, 2, 3]
[1, 2, 3].chunked(2);           // → [[1, 2], [3]]
[1, null, 3].whereNotNull;      // → [1, 3]
[1, 1, 2].distinct;             // → [1, 2]
[1, 2, 3].safeGet(10);          // → null
[1, 1, 2].hasUniqueElements;    // → false`} />
              </DocSubSection>

              <DocSubSection title="Map helpers">
                <CodeBlock lang="dart" code={`{'a': 1}.getOrElse('b', 0);          // → 0
{'a': 1}.getOrPut('b', () => 2);    // → 2 (inserts key)
{'a': 1, 'b': 2}.invert();          // → {1: 'a', 2: 'b'}
{'a': 1, 'b': 2}.pick(['a']);       // → {'a': 1}
{'a': 1, 'b': 2}.omit(['b']);       // → {'a': 1}
{'a': 1}.merge({'b': 2});           // → {'a': 1, 'b': 2}`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Color ─── */}
            <DocSection id="color" title="Color">
              <CodeBlock lang="dart" code={`colorFromHex('#2196f3');           // → Color
Colors.red.toHex();                 // → "#ffff0000"
colorFromHex('#f00').darken(0.2);
colorFromHex('#f00').lighten(0.2);
colorFromHex('#f00').blend(Colors.blue, 0.5);
Colors.red.inverse;
Colors.red.complementary;           // → cyan
Colors.red.hue;                     // → 0.0
Colors.red.saturation;              // → 1.0
Colors.red.brightness;              // → 0.5
Colors.red.isDark;                  // → bool
Colors.red.isLight;                 // → bool
Colors.red.isTransparent;           // → bool
Colors.red.toMaterialColor();`} />
            </DocSection>

            {/* ─── File, Image & Icon ─── */}
            <DocSection id="files" title="File, Image & Icon">
              <DocSubSection title="File">
                <CodeBlock lang="dart" code={`final file = File('photo.jpg');

file.sizeBytes;            // → int (bytes)
file.sizeFormatted();      // → "1.23 MB"
file.sizeInMB;             // → double
file.isImage;              // → bool
file.isVideo;              // → bool
file.isAudio;              // → bool
file.readAsStringSafe();   // → String? (null on error)`} />
              </DocSubSection>

              <DocSubSection title="Image">
                <CodeBlock lang="dart" code={`image.toBase64();              // → String (data URI)
image.withFilter(ColorFilter.mode(Colors.red, BlendMode.multiply));`} />
              </DocSubSection>

              <DocSubSection title="Icon">
                <CodeBlock lang="dart" code={`Icon(Icons.home).withColor(Colors.blue);
Icon(Icons.home).withSize(32);`} />
              </DocSubSection>

              <DocSubSection title="EdgeInsets">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">EdgeInsets</code> has no
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> copyWith</code> in Flutter — this adds one:
                </p>
                <CodeBlock lang="dart" code={`EdgeInsets.zero.copyWith(left: 8, top: 16);`} />
              </DocSubSection>
            </DocSection>

            {/* ─── BuildContext ─── */}
            <DocSection id="context" title="BuildContext">
              <DocSubSection title="Media & screen">
                <CodeBlock lang="dart" code={`context.screenWidth;
context.screenHeight;
context.screenSize;
context.viewInsets;
context.viewPadding;
context.safePadding;
context.devicePixelRatio;
context.textScaler;
context.orientation;        // → Orientation
context.isPortrait;         // → bool
context.isLandscape;        // → bool
context.hideKeyboard();`} />
              </DocSubSection>

              <DocSubSection title="Device & theme">
                <CodeBlock lang="dart" code={`context.isMobile;            // → bool
context.isTablet;            // → bool
context.isDesktop;           // → bool
context.theme;               // → ThemeData
context.textTheme;           // → TextTheme
context.colorScheme;         // → ColorScheme
context.primaryColor;
context.scaffoldBackgroundColor;
context.iconTheme;
context.locale;
context.textDirection;`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Widgets ─── */}
            <DocSection id="widgets" title="Widgets & TextStyle">
              <DocSubSection title="Layout">
                <CodeBlock lang="dart" code={`Text('Hello').padding();
Text('Hello').padding(EdgeInsets.all(12));
Text('Hello').margin();
Text('Hello').background(Colors.red);
Text('Hello').border(color: Colors.black, width: 1);
Text('Hello').center();
Text('Hello').expanded();
Text('Hello').flexible();
Text('Hello').align(Alignment.center);
Text('Hello').size(100, 50);
Text('Hello').width(100);
Text('Hello').height(50);
Text('Hello').constrained(maxWidth: 200);
Text('Hello').aspectRatio(16 / 9);`} />
              </DocSubSection>

              <DocSubSection title="Interaction & effects">
                <CodeBlock lang="dart" code={`Text('Tap').onTap(() {});
Text('Tap').onLongPress(() {});
Text('Tap').onDoubleTap(() {});
Text('Tap').inkWell(() {});
Text('Hello').tooltip('hi');
Text('Hello').opacity(0.5);
Text('Hello').visible(false);
Text('Hello').safeArea();
Text('Hello').circular(12);
Text('Hello').elevated(4);
Text('Hello').blur(4);
Text('Hello').rotated(0.5);
Text('Hello').scaled(1.2);`} />
              </DocSubSection>

              <DocSubSection title="TextStyle">
                <CodeBlock lang="dart" code={`TextStyle().bold.color(Colors.red).size(24);
TextStyle().size(16).scaleSize(1.2);
TextStyle().weight(FontWeight.w700);
TextStyle().letterSpacing(1);
TextStyle().italic;
TextStyle().underline;
TextStyle().lineThrough;
TextStyle().withShadow();
TextStyle().outlined;
TextStyle().fontFamily('Roboto');`} />
              </DocSubSection>
            </DocSection>

            {/* ─── State & Platform ─── */}
            <DocSection id="state" title="State & Platform">
              <DocSubSection title="State">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">safeSetState</code> calls
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"> setState</code> only while the widget is mounted —
                  safe for async callbacks:
                </p>
                <CodeBlock lang="dart" code={`state.safeSetState(() {
  counter++;
});`} />
              </DocSubSection>

              <DocSubSection title="Platform">
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  Target-platform checks via <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">BuildContext</code>:
                </p>
                <CodeBlock lang="dart" code={`context.platform.isAndroid;   // → bool
context.platform.isIOS;       // → bool
context.platform.isWeb;       // → bool
context.platform.isMacOS;     // → bool
context.platform.isWindows;   // → bool
context.platform.isLinux;     // → bool
context.platform.isFuchsia;   // → bool
context.targetPlatform;       // → TargetPlatform`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Navigation ─── */}
            <DocSection id="navigation" title="Navigation">
              <DocSubSection title="Transitions">
                <CodeBlock lang="dart" code={`context.navigateTo(DetailsScreen());
context.navigateBack();
context.navigateToReplace(HomeScreen());
context.pushScreen(DetailsScreen());
context.pushWithFade(DetailsScreen());
context.pushWithSlide(DetailsScreen());
context.replaceScreen(DetailsScreen());`} />
              </DocSubSection>

              <DocSubSection title="Stack control & presenters">
                <CodeBlock lang="dart" code={`context.clearStackAndShow(HomeScreen());
context.popUntilRoute('/home');
context.popToFirst();
context.canPop;               // → bool
context.maybePop();
context.popWithResult('done');
context.currentRouteName;

// Presenters
context.showSheet(child);
context.showAppDialog(child);
context.showCusDialog(AlertDialog(...));
context.showSnackBar('Saved!');
context.removeSnackBar();`} />
              </DocSubSection>
            </DocSection>

            {/* ─── Form validators ─── */}
            <DocSection id="validators" title="Form validators">
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Composable <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">String? Function(String?)</code>
                validators, ready to drop straight into a <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">TextFormField</code>:
              </p>
              <CodeBlock lang="dart" code={`TextFormField(validator: requiredField);
TextFormField(validator: emailValidator);
TextFormField(validator: phoneValidator);
TextFormField(validator: minLengthValidator(6));
TextFormField(validator: maxLengthValidator(12));`} />
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
                    href="/packages/extensions-core"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Package details
                  </a>
                  <a
                    href="https://github.com/LeanQChris/extensions.git"
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
