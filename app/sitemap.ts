import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Same reasoning as robots.ts: SITE_URL must be read at request time, or the
// dev image would advertise prod URLs (and vice versa) from a frozen build.
export const dynamic = "force-dynamic";

// Three routes, hand-listed. A generated sitemap would need a route manifest
// this site does not have, and at this size the maintenance cost of adding a
// line here is lower than the cost of the machinery.
const ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
