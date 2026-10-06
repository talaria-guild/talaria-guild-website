"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/content";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string; callback: (token: string) => void; "expired-callback": () => void; "error-callback": () => void }) => string;
      reset: (id?: string) => void;
    };
  }
}

const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type Status = "idle" | "sending" | "sent" | "invalid" | "verification" | "unavailable";

const formHeading: React.CSSProperties = { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text-strong)", margin: 0 };
const formText: React.CSSProperties = { margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)" };

/**
 * Posts to /api/contact, which checks Turnstile and files the inquiry in Ops.
 * `siteKey` and `plan` come from the server per request (see app/contact/page.tsx).
 * When the server can't file it, the visitor gets a ready-made email instead, so
 * a message is never lost to an outage on our side.
 */
export default function ContactForm({ siteKey, plan }: { siteKey: string | null; plan: string | null }) {
  const [status, setStatus] = useState<Status>("idle");
  const [mailto, setMailto] = useState<string | null>(null);
  const token = useRef<string | null>(null);
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!siteKey || !widget.current) return;
    const el = widget.current;
    const render = () => {
      if (!window.turnstile || el.childElementCount > 0) return;
      widgetId.current = window.turnstile.render(el, {
        sitekey: siteKey,
        callback: (t) => (token.current = t),
        "expired-callback": () => (token.current = null),
        "error-callback": () => (token.current = null),
      });
    };
    if (window.turnstile) return render();
    let script = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);
    return () => script?.removeEventListener("load", render);
  }, [siteKey]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget.elements as HTMLFormControlsCollection & Record<string, HTMLInputElement>;
    const get = (k: string) => (f[k]?.value ? f[k].value.trim() : "");
    const fields = { name: get("name"), email: get("email"), company: get("company"), phone: get("phone"), message: get("message") };

    setMailto(
      `mailto:${EMAIL}?subject=` +
        encodeURIComponent("Website inquiry: " + (fields.company || fields.name)) +
        "&body=" +
        encodeURIComponent(
          [`Name: ${fields.name}`, fields.company && `Company: ${fields.company}`, fields.phone && `Phone: ${fields.phone}`, "", fields.message]
            .filter((l) => l !== "" && l !== undefined)
            .join("\n"),
        ),
    );
    setStatus("sending");

    let next: Status = "unavailable";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...fields,
          plan: plan ?? undefined,
          source: "/contact",
          website: get("website"),
          turnstileToken: token.current,
        }),
      });
      if (res.ok) next = "sent";
      else if (res.status === 400) next = "invalid";
      else if (res.status === 403) next = "verification";
    } catch {
      next = "unavailable";
    }
    if (next !== "sent") {
      token.current = null;
      window.turnstile?.reset(widgetId.current);
    }
    setStatus(next);
  };

  if (status === "sent") {
    return (
      <div role="status" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", padding: "clamp(8px,2vw,24px) 0" }}>
        <span className="icon-chip" style={{ width: 46, height: 46, borderRadius: "var(--radius-circle)" }}>
          <Check size={22} strokeWidth={1.75} />
        </span>
        <h2 style={formHeading}>Thanks, we got it.</h2>
        <p style={formText}>We&apos;ll reply within one business day. If it&apos;s urgent, call {PHONE}.</p>
      </div>
    );
  }

  if (status === "unavailable") {
    return (
      <div role="alert" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", padding: "clamp(8px,2vw,24px) 0" }}>
        <h2 style={formHeading}>That didn&apos;t go through.</h2>
        <p style={formText}>
          The problem is on our end. Your message is still here: send it by email, or call us at{" "}
          <a href={PHONE_HREF} className="link-gold" style={{ display: "inline" }}>{PHONE}</a>.
        </p>
        {mailto && (
          <a href={mailto} className="btn btn--lg btn--gold">
            Send it by email
            <ArrowRight size={18} strokeWidth={1.75} />
          </a>
        )}
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="field">
        <label htmlFor="tw-name">Name</label>
        <input id="tw-name" name="name" type="text" required maxLength={200} autoComplete="name" placeholder="Your name" className="field-input" />
      </div>
      <div className="field">
        <label htmlFor="tw-email">Email</label>
        <input id="tw-email" name="email" type="email" required maxLength={320} autoComplete="email" placeholder="you@company.com" className="field-input" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 18 }}>
        <div className="field">
          <label htmlFor="tw-company">
            Company <span style={{ fontWeight: 400, color: "var(--text-subtle)" }}>(optional)</span>
          </label>
          <input id="tw-company" name="company" type="text" maxLength={200} autoComplete="organization" placeholder="Organization" className="field-input" />
        </div>
        <div className="field">
          <label htmlFor="tw-phone">
            Phone <span style={{ fontWeight: 400, color: "var(--text-subtle)" }}>(optional)</span>
          </label>
          <input id="tw-phone" name="phone" type="tel" maxLength={50} autoComplete="tel" placeholder="217-000-0000" className="field-input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="tw-message">Message</label>
        <textarea id="tw-message" name="message" rows={5} required maxLength={5000} placeholder="What's going on, and what would a good outcome look like?" className="field-input" />
      </div>

      {/* Honeypot: hidden from people and screen readers, filled in by naive bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="tw-website">Website</label>
        <input id="tw-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {siteKey && <div ref={widget} />}

      {(status === "invalid" || status === "verification") && (
        <p role="alert" style={{ ...formText, color: "var(--text-strong)" }}>
          {status === "invalid"
            ? "Please check your name, email, and message, then try again."
            : "We couldn't confirm you're not a bot. Please try again."}
        </p>
      )}

      <button type="submit" className="btn btn--lg btn--gold" disabled={sending} aria-busy={sending}>
        {sending ? "Sending…" : "Send message"}
        {!sending && <ArrowRight size={18} strokeWidth={1.75} />}
      </button>
      <p style={{ margin: 0, fontSize: "var(--text-xs)", lineHeight: 1.6, color: "var(--text-subtle)" }}>
        We use what you send only to reply. Nothing is shared.
      </p>
    </form>
  );
}
