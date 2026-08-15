# AGENTS.md

## What this is

`website` — a Next.js 16 demo/docs site for `@nepali-utils/core` and `date-picker-bs`. App Router. Depends on the **published** `date-picker-bs@^0.1.1` from npm, not the local package source.

## Commands (run from this dir)

| Command | What it does |
|---|---|
| `npm run dev` | `next dev --webpack` |
| `npm run build` | `next build --webpack` |
| `npm run start` | `next start` |

- **Keep the `--webpack` flag.** Next.js 16 defaults to Turbopack; these scripts explicitly opt out, and the `next.config.js` webpack hook (`resolve.symlinks = false` + `transpilePackages`) relies on webpack.
- No lint/typecheck script; `next build` performs type-checking.

## Dependency pipeline (how local changes reach the site)

- The site consumes `date-picker-bs` from the **installed npm version** in `node_modules`. Edits to `../date-picker-bs` or `../nepali-utils-core` source are **invisible here** until you publish + reinstall (or `npm link`, which the webpack config is set up for).
- `tailwind.config.ts` `content` scans `./node_modules/date-picker-bs/dist/**/*.{js,jsx}` so Tailwind generates the component's shadcn classes. If a rebuild of `date-picker-bs` changes class names, the site's Tailwind output updates only after reinstalling.

## Layout

- `app/` — pages (`page.tsx`, `packages/`, `docs/`) plus shared `layout.tsx`, `theme-provider.tsx`, `code-block.tsx`, `example-preview.tsx`.
- `lib/utils.ts` — shared helpers (e.g. `cn`).
- `app/*` route dirs use Tailwind shadcn-style CSS variables defined in `app/globals.css`.
