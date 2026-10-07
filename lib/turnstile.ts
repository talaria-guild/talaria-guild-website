/**
 * Cloudflare Turnstile, read at request time like everything else (lib/site.ts):
 *   TURNSTILE_SITE_KEY    public, rendered into the contact page by the server
 *   TURNSTILE_SECRET_KEY  host .env, from GitHub secrets
 *
 * Fails CLOSED in production: with no secret configured, every submission is
 * refused and the visitor is shown email and phone instead. Anywhere else
 * (local dev, the dev instance before its keys are set) a missing secret skips
 * the check, so the form can still be exercised end to end.
 */

import { isPublicSite } from "@/lib/site";

export function turnstileSiteKey(): string | null {
  return process.env.TURNSTILE_SITE_KEY || null;
}

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token: string | null, remoteIp: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return !isPublicSite();
  if (!token) return false;

  const form = new URLSearchParams({ secret, response: token });
  if (remoteIp) form.set("remoteip", remoteIp);
  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body: form, signal: AbortSignal.timeout(8000), cache: "no-store" });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("[contact] Turnstile rejected:", data["error-codes"]?.join(",") ?? res.status);
    return data.success === true;
  } catch (err) {
    console.error("[contact] Turnstile unreachable:", err instanceof Error ? err.message : err);
    return false;
  }
}
