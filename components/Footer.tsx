import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/content";

const colTitle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-2xs)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--silver-500)",
};
const linkStyle: React.CSSProperties = { fontSize: "var(--text-sm)" };

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--silver-400)", flex: "none" }}>
      <div
        className="container-xl"
        style={{
          padding: "clamp(40px,5vw,56px) clamp(20px,4vw,32px) 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
          gap: "clamp(28px,4vw,48px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-full-ondark.png" alt="Talaria Works" style={{ height: 58, width: "auto", display: "block", alignSelf: "flex-start" }} />
          <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, maxWidth: "24em" }}>
            Managed IT, security, and custom software for organizations in Illinois and beyond.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={colTitle}>Services</div>
          <Link href="/services" className="chrome-link" style={linkStyle}>Managed IT &amp; security</Link>
          <Link href="/services" className="chrome-link" style={linkStyle}>Software &amp; AI engineering</Link>
          <Link href="/services" className="chrome-link" style={linkStyle}>Coverage levels</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={colTitle}>Site</div>
          <Link href="/" className="chrome-link" style={linkStyle}>Home</Link>
          <Link href="/contact" className="chrome-link" style={linkStyle}>Contact</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={colTitle}>Reach us</div>
          <a href={PHONE_HREF} className="chrome-link" style={linkStyle}><Phone size={15} strokeWidth={1.75} />{PHONE}</a>
          <a href={EMAIL_HREF} className="chrome-link" style={linkStyle}><Mail size={15} strokeWidth={1.75} />{EMAIL}</a>
          <span style={{ display: "flex", alignItems: "center", gap: 9, fontSize: "var(--text-sm)" }}><MapPin size={15} strokeWidth={1.75} />Illinois, United States</span>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-dark)" }}>
        <div
          className="container-xl"
          style={{
            padding: "18px clamp(20px,4vw,32px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 20px",
            justifyContent: "space-between",
            fontSize: "var(--text-xs)",
            color: "var(--silver-500)",
          }}
        >
          <span>© 2026 Talaria Works. All rights reserved.</span>
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>talariaworks.com</span>
        </div>
      </div>
    </footer>
  );
}
