import { MapPin, Phone, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/content";

export default function TopBar() {
  return (
    <div style={{ background: "var(--ink-950)", color: "var(--silver-400)", flex: "none" }}>
      <div
        className="container-xl"
        style={{
          padding: "7px clamp(20px,4vw,32px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px 20px",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-2xs)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <MapPin size={13} strokeWidth={1.75} style={{ color: "var(--gold-500)" }} />
          Illinois
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <a href={PHONE_HREF} className="chrome-link" style={{ letterSpacing: "0.14em" }}>
            <Phone size={12} strokeWidth={1.75} />
            {PHONE}
          </a>
          <a href={EMAIL_HREF} className="chrome-link" style={{ letterSpacing: "0.14em" }}>
            <Mail size={12} strokeWidth={1.75} />
            {EMAIL}
          </a>
        </span>
      </div>
    </div>
  );
}
