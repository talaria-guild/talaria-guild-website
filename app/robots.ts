import type { MetadataRoute } from "next";
import { SITE_URL, isPublicSite } from "@/lib/site";

// Rendered per request rather than at build time. Without this Next would
// prerender robots.txt during `docker build`, freeze whatever SITE_ENV was set
// then (nothing), and ship the same answer to both environments — defeating the
// entire point of reading the variable.
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  if (!isPublicSite()) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
