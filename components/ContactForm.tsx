"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { EMAIL, PHONE } from "@/lib/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget.elements as HTMLFormControlsCollection & Record<string, HTMLInputElement>;
    const get = (k: string) => (f[k]?.value ? f[k].value.trim() : "");

    // --- Current behavior: open the visitor's mail client (no backend needed). ---
    // To deliver server-side later (Formspree, a Route Handler, or Payload), replace
    // this block with a fetch("/api/contact", { method: "POST", body: ... }) call.
    const body = [
      "Name: " + get("name"),
      "Email: " + get("email"),
      get("company") ? "Company: " + get("company") : null,
      get("phone") ? "Phone: " + get("phone") : null,
      "",
      get("message"),
    ]
      .filter((l) => l !== null)
      .join("\n");
    const href =
      `mailto:${EMAIL}?subject=` +
      encodeURIComponent("Website enquiry — " + (get("company") || get("name"))) +
      "&body=" +
      encodeURIComponent(body);
    setSent(true);
    window.location.href = href;
  };

  if (sent) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", padding: "clamp(8px,2vw,24px) 0" }}>
        <span className="icon-chip" style={{ width: 46, height: 46, borderRadius: "var(--radius-circle)" }}>
          <Check size={22} strokeWidth={1.75} />
        </span>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text-strong)", margin: 0 }}>
          Your message is ready to send.
        </h2>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)" }}>
          We&apos;ve opened it in your mail app — send it and we&apos;ll reply within one business day. Prefer to talk instead? Call {PHONE}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="field">
        <label htmlFor="tw-name">Name</label>
        <input id="tw-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="field-input" />
      </div>
      <div className="field">
        <label htmlFor="tw-email">Email</label>
        <input id="tw-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className="field-input" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 18 }}>
        <div className="field">
          <label htmlFor="tw-company">
            Company <span style={{ fontWeight: 400, color: "var(--text-subtle)" }}>(optional)</span>
          </label>
          <input id="tw-company" name="company" type="text" autoComplete="organization" placeholder="Organization" className="field-input" />
        </div>
        <div className="field">
          <label htmlFor="tw-phone">
            Phone <span style={{ fontWeight: 400, color: "var(--text-subtle)" }}>(optional)</span>
          </label>
          <input id="tw-phone" name="phone" type="tel" autoComplete="tel" placeholder="217-000-0000" className="field-input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="tw-message">Message</label>
        <textarea id="tw-message" name="message" rows={5} required placeholder="What's going on, and what would a good outcome look like?" className="field-input" />
      </div>
      <button type="submit" className="btn btn--lg btn--gold">
        Send message
        <ArrowRight size={18} strokeWidth={1.75} />
      </button>
      <p style={{ margin: 0, fontSize: "var(--text-xs)", lineHeight: 1.6, color: "var(--text-subtle)" }}>
        We use what you send only to reply. Nothing is shared.
      </p>
    </form>
  );
}
