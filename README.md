# NepaliKit Website

A Next.js documentation and demo site for the NepaliKit packages — `@nepali-utils/core` and `date-picker-bs`.

## Packages

| Package | Description |
|---|---|
| [`@nepali-utils/core`](../packages/nepali-utils) | Framework-agnostic TypeScript library for Bikram Sambat dates, number conversion, calendar utilities, location data, phone validation, and currency formatting. |
| [`date-picker-bs`](../packages/date-picker-bs) | A React date picker and calendar for the Bikram Sambat (Nepali) calendar — built with Radix UI Popover, Tailwind CSS, and shadcn/ui. |

## Getting started

```bash
# From the workspace root
npm install

# Build the packages
npm run build --prefix packages/nepali-utils
npm run build --prefix packages/date-picker-bs

# Start the dev server
npm run dev --prefix website
```

## Directory structure

```
website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with ThemeProvider
│   ├── packages/
│   │   ├── page.tsx          # Packages overview
│   │   ├── nepal-utils/      # @nepali-utils/core package detail
│   │   └── date-picker-bs/   # date-picker-bs package detail
│   └── docs/
│       ├── page.tsx          # Docs overview
│       ├── nepal-utils/      # @nepali-utils/core documentation
│       └── date-picker-bs/   # date-picker-bs documentation
├── lib/                      # Shared utilities
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Tech stack

- **Next.js** 16 (App Router)
- **Tailwind CSS** for styling
- **Radix UI Popover** for the date picker popover
- **Lucide React** for icons
- **shadcn/ui** CSS variable theming

## License

MIT
