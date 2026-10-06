import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Btn, IconChip } from "@/components/ui";
import { pillars, trust, process, PHONE, PHONE_HREF } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark" style={{ color: "var(--text-on-dark)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-mark-ondark.png" alt="" aria-hidden className="section-dark__mark" style={{ right: -150, top: -100, width: 620, maxWidth: "82vw", opacity: 0.05 }} />
        <div className="container-xl" style={{ position: "relative", padding: "clamp(60px,9vw,116px) clamp(20px,4vw,32px) clamp(68px,10vw,124px)" }}>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, fontSize: "clamp(33px,5.6vw,62px)", margin: 0, color: "var(--white)", maxWidth: "16em", textWrap: "pretty" }}>
            We run your IT and build the software it&apos;s missing.
          </h1>
          <p style={{ fontSize: "clamp(17px,1.5vw,21px)", fontWeight: 300, lineHeight: 1.55, color: "var(--silver-300)", margin: "26px 0 0", maxWidth: "42em", textWrap: "pretty" }}>
            Talaria Works is a small team in Central Illinois. We manage computers, Microsoft 365, and security for small businesses, and we write custom software and automation when off-the-shelf tools don&apos;t fit.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 38, flexWrap: "wrap" }}>
            <Btn href="/contact">Get in touch</Btn>
            <Btn href="/services" variant="ghostDark" icon={false}>See services</Btn>
          </div>
        </div>
      </section>

      {/* Two pillars */}
      <section className="container-xl" style={{ padding: "clamp(52px,7vw,92px) clamp(20px,4vw,32px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(20px,2.4vw,28px)" }}>
          {pillars.map((p) => (
            <Link key={p.title} href="/services" className="card-link">
              <IconChip icon={p.icon} />
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-2xl)", letterSpacing: "-0.01em", color: "var(--text-strong)", margin: 0 }}>{p.title}</h2>
              <p style={{ fontSize: "var(--text-md)", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>{p.body}</p>
              <span className="card-link__more">{p.more}<ArrowRight size={15} strokeWidth={1.75} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-sunken)" }}>
        <div className="container-xl" style={{ padding: "clamp(40px,5vw,60px) clamp(20px,4vw,32px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "clamp(24px,3vw,40px)" }}>
          {trust.map((t) => (
            <div key={t.title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-strong)" }}>{t.title}</div>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-muted)" }}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How an engagement moves */}
      <section className="container-lg" style={{ padding: "clamp(52px,7vw,92px) clamp(20px,4vw,32px)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.015em", fontSize: "clamp(22px,2.6vw,30px)", color: "var(--text-strong)", margin: "0 0 18px" }}>How we work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 0, border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", background: "var(--surface-card)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
          {process.map((s, i) => (
            <div key={s.step} style={{ padding: "clamp(24px,3vw,32px)", borderBottom: "1px solid var(--border-subtle)", borderLeft: i === 0 ? undefined : "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-strong)", margin: 0 }}>{i + 1}. {s.step}</h3>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-body)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="section-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-mark-ondark.png" alt="" aria-hidden className="section-dark__mark" style={{ left: -140, bottom: -160, width: 500, maxWidth: "72vw", opacity: 0.045 }} />
        <div className="container-md" style={{ position: "relative", padding: "clamp(52px,7vw,88px) clamp(20px,4vw,32px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.015em", fontSize: "clamp(26px,3.4vw,40px)", color: "var(--white)", margin: 0 }}>Tell us what&apos;s going on.</h2>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--silver-300)", margin: "16px auto 0", maxWidth: "32em" }}>
            A short call is usually enough for us to tell you whether we can help. If we can&apos;t, we&apos;ll say so.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <Btn href="/contact">Get in touch</Btn>
            <a href={PHONE_HREF} className="btn btn--lg btn--ghost-dark"><Phone size={17} strokeWidth={1.75} />{PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
