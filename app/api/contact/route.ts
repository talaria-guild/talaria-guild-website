import { NextResponse } from "next/server";
import { fileLead, type Lead } from "@/lib/ops";
import { verifyTurnstile } from "@/lib/turnstile";

/**
 * The contact form's only destination. Order matters: cheap checks first, so a
 * bot costs us as little as possible before it is turned away.
 *   1. honeypot   2. per-IP rate limit   3. shape   4. Turnstile   5. Ops
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Same ceilings Ops enforces (crm leads.intake), so a valid form is never refused there. */
const LIMITS = { name: 200, email: 320, company: 200, phone: 50, message: 5000, plan: 50, source: 100 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Per-IP, in memory. One container serves each environment, so this is the
 * whole picture; a restart forgets it, which is fine for a spam brake. Ops has
 * its own hourly ceiling behind this (crm D163) in case the secret ever leaks.
 */
const WINDOW_MS = 60 * 60 * 1000;
const PER_IP_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= PER_IP_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return false;
}

/**
 * The visitor as Caddy saw them. Caddy is the only ingress and, with no
 * trusted_proxies configured, discards any client-sent X-Forwarded-For and
 * writes the peer address. Taking the LAST entry stays correct even if that
 * ever changes to appending, where the first entry would be attacker-chosen.
 */
function clientIp(req: Request): string | null {
  return req.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() || req.headers.get("x-real-ip");
}

function field(data: Record<string, unknown>, key: keyof typeof LIMITS): string | undefined {
  const v = data[key];
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t ? t.slice(0, LIMITS[key]) : undefined;
}

const json = (status: number, body: object) => NextResponse.json(body, { status });

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = (await req.json()) as Record<string, unknown>;
  } catch {
    return json(400, { error: "invalid" });
  }

  // Hidden field a person never fills in. Answer as if it worked, so the bot learns nothing.
  if (typeof data.website === "string" && data.website.trim() !== "") return json(200, { ok: true });

  const ip = clientIp(req);
  if (ip && rateLimited(ip)) return json(429, { error: "rate_limited" });

  const name = field(data, "name");
  const email = field(data, "email")?.toLowerCase();
  const message = field(data, "message");
  if (!name || !email || !EMAIL_RE.test(email) || !message) return json(400, { error: "invalid" });

  const token = typeof data.turnstileToken === "string" ? data.turnstileToken : null;
  const human = await verifyTurnstile(token, ip);
  if (human === "rejected") return json(403, { error: "verification" });
  if (human === "unavailable") return json(503, { error: "unavailable" });

  const lead: Lead = {
    name,
    email,
    message,
    company: field(data, "company"),
    phone: field(data, "phone"),
    plan: field(data, "plan"),
    source: field(data, "source"),
  };

  const result = await fileLead(lead);
  if (result === "ok") return json(200, { ok: true });
  if (result === "rejected") return json(400, { error: "invalid" });
  return json(503, { error: "unavailable" });
}
