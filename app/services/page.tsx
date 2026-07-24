import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Btn, Eyebrow, IconChip } from "@/components/ui";
import { ShieldCheck, SquareCode } from "lucide-react";
import { managedFeatures, softwareFeatures, tiers, type Feature } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two practices that hold each other up: managed IT & security, and software & AI engineering. Delivered as one service, from assessment through ongoing management.",
};

function FeatureGrid({ features, minCol, pad = 24 }: { features: Feature[]; minCol: number; pad?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${minCol}px,1fr))`, gap: "clamp(16px,2vw,22px)", marginTop: "clamp(28px,4vw,40px)" }}>
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div key={f.title} className="feature-card" style={{ padding: pad }}>
            <Icon size={20} strokeWidth={1.75} style={{ color: "var(--gold-600)" }} />
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-strong)", margin: 0 }}>{f.title}</h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)" }}>{f.body}</p>
          </div>
        );
      })}
    </div>
  );
}

function SectionHeading({ icon: Icon, children }: { icon: typeof ShieldCheck; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <IconChip icon={Icon} size={44} iconSize={22} />
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.015em", fontSize: "clamp(24px,3vw,36px)", color: "var(--text-strong)", margin: 0 }}>{children}</h2>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="section-dark" style={{ borderBottom: "1px solid var(--border-dark)" }}>
        <div className="container-xl" style={{ padding: "clamp(48px,6vw,76px) clamp(20px,4vw,32px)" }}>
          <Eyebrow color="var(--gold-400)">Services</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08, fontSize: "clamp(30px,4.4vw,50px)", margin: "20px 0 0", color: "var(--white)", maxWidth: "20em" }}>
            Two practices that hold each other up.
          </h1>
          <p style={{ fontSize: "var(--text-lg)", fontWeight: 300, lineHeight: 1.6, color: "var(--silver-300)", margin: "20px 0 0", maxWidth: "40em" }}>
            Most firms do one or the other. Running the infrastructure teaches us what the software has to survive; building the software teaches us where the infrastructure gets strained.
          </p>
        </div>
      </section>

      {/* Managed IT & security */}
      <section className="container-xl" style={{ padding: "clamp(48px,6vw,84px) clamp(20px,4vw,32px) clamp(28px,4vw,44px)" }}>
        <SectionHeading icon={ShieldCheck}>Managed IT &amp; security</SectionHeading>
        <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--text-muted)", margin: "18px 0 0", maxWidth: "44em" }}>
          Everything below is delivered as one service, not a menu of add-ons. What differs between plans is depth of coverage, not who answers the phone.
        </p>
        <FeatureGrid features={managedFeatures} minCol={280} />
      </section>

      {/* Coverage levels */}
      <section style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-sunken)" }}>
        <div className="container-xl" style={{ padding: "clamp(44px,6vw,72px) clamp(20px,4vw,32px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="tw-eyebrow" style={{ marginBottom: 12 }}>Coverage levels</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.015em", fontSize: "clamp(22px,2.6vw,30px)", color: "var(--text-strong)", margin: 0 }}>Three ways to be covered.</h3>
            </div>
            <a href="/contact" className="link-gold">Request pricing<ArrowRight size={15} strokeWidth={1.75} /></a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "clamp(18px,2vw,24px)", marginTop: "clamp(24px,3vw,36px)" }}>
            {tiers.map((t) => (
              <div key={t.name} className={`tier-card${t.featured ? " tier-card--featured" : ""}`}>
                {t.featured && <div className="tier-badge">Most chosen</div>}
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--silver-500)" }}>{t.level}</div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text-strong)", margin: 0 }}>{t.name}</h4>
                <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)" }}>{t.blurb}</p>
                <ul className="tier-list">
                  {t.items.map((it) => (
                    <li key={it}><Check size={16} strokeWidth={1.75} style={{ color: "var(--gold-600)", marginTop: 3, flex: "none" }} />{it}</li>
                  ))}
                </ul>
                <a href="/contact" className="link-gold link-gold--mono" style={{ marginTop: "auto" }}>Request pricing<ArrowRight size={14} strokeWidth={1.75} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & AI engineering */}
      <section className="container-xl" style={{ padding: "clamp(48px,6vw,84px) clamp(20px,4vw,32px)" }}>
        <SectionHeading icon={SquareCode}>Software &amp; AI engineering</SectionHeading>
        <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--text-muted)", margin: "18px 0 0", maxWidth: "44em" }}>
          We start from the work itself — the spreadsheet holding the process together, the handoff that keeps failing — and build only what earns its keep. You own the result outright.
        </p>
        <FeatureGrid features={softwareFeatures} minCol={300} pad={26} />
      </section>

      {/* CTA band */}
      <section className="section-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-mark-ondark.png" alt="" aria-hidden className="section-dark__mark" style={{ right: -130, top: -120, width: 460, maxWidth: "70vw", opacity: 0.045 }} />
        <div className="container-md" style={{ position: "relative", padding: "clamp(52px,7vw,88px) clamp(20px,4vw,32px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.015em", fontSize: "clamp(26px,3.2vw,38px)", color: "var(--white)", margin: 0 }}>Not sure which side of this you need?</h2>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--silver-300)", margin: "16px auto 0", maxWidth: "32em" }}>
            Describe the problem in your own words. We&apos;ll tell you which of these it actually is.
          </p>
          <div style={{ marginTop: 30 }}>
            <Btn href="/contact">Contact us</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
