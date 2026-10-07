/**
 * Cloudflare Turnstile, read at request time like everything else (lib/site.ts):
 *   TURNSTILE_SITE_KEY    public, rendered into the contact page by the server
 *   TURNSTILE_SECRET_KEY  host .env, from GitHub secrets
 *
 * Fails CLOSED in production: with no secret configured nothing is filed, and
 * the result is `unavailable` so the visitor is shown email and phone instead
 * (not a "you look like a bot" retry they can never pass). Anywhere else
 * (local dev, the dev instance before its keys are set) a missing secret skips
 * the check, so the form can still be exercised end to end.
 */

import { isPublicSite } from "@/lib/site";

export function turnstileSiteKey(): string | null {
  return process.env.TURNSTILE_SITE_KEY || null;
}

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** `ok` — human. `rejected` — Cloudflare said no; the visitor can retry. `unavailable` — we can't check right now. */
export type TurnstileResult = "ok" | "rejected" | "unavailable";

export async function verifyTurnstile(token: string | null, remoteIp: string | null): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return isPublicSite() ? "unavailable" : "ok";
  if (!token) return "rejected";

  const form = new URLSearchParams({ secret, response: token });
  if (remoteIp) form.set("remoteip", remoteIp);
  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body: form, signal: AbortSignal.timeout(8000), cache: "no-store" });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("[contact] Turnstile rejected:", data["error-codes"]?.join(",") ?? res.status);
    return data.success === true ? "ok" : "rejected";
  } catch (err) {
    console.error("[contact] Turnstile unreachable:", err instanceof Error ? err.message : err);
    return "unavailable";
  }
}
