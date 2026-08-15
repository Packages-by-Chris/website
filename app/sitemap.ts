import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/packages`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/docs`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/packages/nepali-utils`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/packages/date-picker-bs`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/packages/extensions-core`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/packages/kundali-chart`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/docs/nepali-utils`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/docs/date-picker-bs`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/docs/extensions-core`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/docs/kundali-chart`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
