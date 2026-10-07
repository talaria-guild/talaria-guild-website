import { createHmac } from "node:crypto";

/**
 * Files a contact-form inquiry in Talaria Ops through its machine door
 * (crm D49, D163): `POST /api/machine/v1/leads.intake`, HMAC-signed.
 *
 * Server only — the secret must never reach a client bundle. Everything is read
 * at REQUEST time, never at build time (see lib/site.ts), so one image serves
 * both environments:
 *   OPS_URL             e.g. https://ops.talariaworks.com  (compose file)
 *   OPS_MACHINE         `website` or `website_dev`         (compose file)
 *   OPS_MACHINE_SECRET  ≥32 chars                          (host .env, from GitHub secrets)
 */

export type Lead = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  plan?: string;
  source?: string;
};

/** Ops treats a shorter secret as unset (crm src/machine/signature.ts). */
const MIN_SECRET_LENGTH = 32;
const TIMEOUT_MS = 8000;

type OpsConfig = { url: string; machine: string; secret: string };

function config(): OpsConfig | null {
  const url = process.env.OPS_URL;
  const machine = process.env.OPS_MACHINE;
  const secret = process.env.OPS_MACHINE_SECRET;
  if (!url || !machine || !secret || secret.length < MIN_SECRET_LENGTH) return null;
  return { url: url.replace(/\/+$/, ""), machine, secret };
}

/** `t=<unix seconds>,v1=<hex HMAC-SHA256 of "${t}.${body}">`, as crm signMachineRequest. */
function sign(secret: string, body: string, timestamp: number): string {
  const digest = createHmac("sha256", secret).update(`${timestamp}.${body}`, "utf8").digest("hex");
  return `t=${timestamp},v1=${digest}`;
}

/**
 * `ok` — filed. `rejected` — Ops refused the input itself (400), so retrying
 * won't help. `unavailable` — not configured, unreachable, refused the
 * credentials, or rate-limited; the visitor should use email or phone instead.
 */
export type FileResult = "ok" | "rejected" | "unavailable";

export async function fileLead(lead: Lead): Promise<FileResult> {
  const cfg = config();
  if (!cfg) return "unavailable";

  const body = JSON.stringify(lead);
  try {
    const res = await fetch(`${cfg.url}/api/machine/v1/leads.intake`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-ops-machine": cfg.machine,
        "x-ops-signature": sign(cfg.secret, body, Math.floor(Date.now() / 1000)),
      },
      body,
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    if (res.ok) return "ok";
    console.error(`[contact] Ops leads.intake answered ${res.status}`);
    return res.status === 400 ? "rejected" : "unavailable";
  } catch (err) {
    console.error("[contact] Ops leads.intake unreachable:", err instanceof Error ? err.message : err);
    return "unavailable";
  }
}
