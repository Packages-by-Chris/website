import type { MetadataRoute } from "next"
import { siteUrl, siteName } from "@/lib/seo"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Packages",
    description:
      "Open source packages by Chris Thapa — Bikram Sambat date utilities, React date picker, Dart & Flutter extensions, and Vedic astrology charts.",
    start_url: siteUrl,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
