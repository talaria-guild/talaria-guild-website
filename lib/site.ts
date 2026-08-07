/**
 * The canonical origin this instance is serving under.
 *
 * Read at REQUEST time, never at build time — see the note in the Dockerfile.
 * `SITE_URL` deliberately has no `NEXT_PUBLIC_` prefix: that prefix inlines the
 * value into the client bundle during `next build`, which would make the dev
 * and prod images different artifacts and break the promote-don't-rebuild
 * deploy. Only `robots.ts` and `sitemap.ts` consume this, and both run on the
 * server.
 *
 * Defaults to production because an unset variable most likely means someone
 * ran the image by hand, and pointing at prod is the harmless direction. What
 * is NOT harmless is dev being crawlable, which is why `isPublicSite()` below
 * requires a positive signal rather than trusting a default.
 */
export const SITE_URL = process.env.SITE_URL ?? "https://talariaworks.com";

/**
 * Whether search engines should index this instance.
 *
 * Fails CLOSED: only an explicit `SITE_ENV=production` opts in. An unset or
 * misspelled value yields a `Disallow: /`, which costs a deploy to notice and
 * fix. The opposite default would let dev.talariaworks.com into the index as a
 * duplicate of the real site — expensive to detect and slow to undo.
 *
 * The Caddy vhost for dev also sends `X-Robots-Tag: noindex` (deploy/dev/
 * setup-host.sh). Two independent mechanisms on purpose: robots.txt is a
 * crawl directive that a misbehaving bot can ignore, while the header travels
 * with every response including ones reached from a direct link.
 */
export function isPublicSite(): boolean {
  return process.env.SITE_ENV === "production";
}
