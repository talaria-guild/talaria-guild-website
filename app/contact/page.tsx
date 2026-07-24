import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're working on. We'll get back to you within one business day — no obligation. Call 217-827-3483 or email info@talariaworks.com.",
};

const cardLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-2xs)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--text-subtle)",
};

export default function ContactPage() {
  return (
    <section
      className="container-xl"
      style={{
        padding: "clamp(40px,6vw,76px) clamp(20px,4vw,32px) clamp(56px,8vw,100px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "clamp(32px,5vw,64px)",
        alignItems: "start",
      }}
    >
      {/* Left: intro + reach us */}
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Eyebrow>Contact</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08, fontSize: "clamp(30px,4.2vw,48px)", color: "var(--text-strong)", margin: 0, maxWidth: "16em" }}>
          Tell us what you&apos;re working on.
        </h1>
        <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--text-muted)", margin: 0, maxWidth: "34em" }}>
          We&apos;ll get back to you within one business day. No obligation.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 6 }}>
          <a href={PHONE_HREF} className="contact-card">
            <Phone size={20} strokeWidth={1.75} style={{ color: "var(--gold-600)" }} />
            <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={cardLabel}>Call</span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text-strong)" }}>{PHONE}</span>
            </span>
          </a>
          <a href={EMAIL_HREF} className="contact-card">
            <Mail size={20} strokeWidth={1.75} style={{ color: "var(--gold-600)" }} />
            <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={cardLabel}>Email</span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-strong)" }}>{EMAIL}</span>
            </span>
          </a>
        </div>

        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={cardLabel}>Hours</div>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)", maxWidth: "30em" }}>
            Business hours are Central time. Managed clients on 24/7 coverage reach the on-call line day or night.
          </p>
        </div>
      </div>

      {/* Right: form card */}
      <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", padding: "clamp(24px,3.4vw,40px)" }}>
        <ContactForm />
      </div>
    </section>
  );
}
