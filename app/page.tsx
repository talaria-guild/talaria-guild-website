import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Btn, Eyebrow, IconChip } from "@/components/ui";
import { pillars, trust, process, PHONE, PHONE_HREF } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark" style={{ color: "var(--text-on-dark)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-mark-ondark.png" alt="" aria-hidden className="section-dark__mark" style={{ right: -150, top: -100, width: 620, maxWidth: "82vw", opacity: 0.05 }} />
        <div className="container-xl" style={{ position: "relative", padding: "clamp(60px,9vw,116px) clamp(20px,4vw,32px) clamp(68px,10vw,124px)" }}>
          <Eyebrow color="var(--gold-400)">Engineered innovation</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, fontSize: "clamp(33px,5.6vw,62px)", margin: "22px 0 0", color: "var(--white)", maxWidth: "16em", textWrap: "pretty" }}>
            Technology, engineered and managed — <span style={{ color: "var(--gold-400)" }}>end to end.</span>
          </h1>
          <p style={{ fontSize: "clamp(17px,1.5vw,21px)", fontWeight: 300, lineHeight: 1.55, color: "var(--silver-300)", margin: "26px 0 0", maxWidth: "42em", textWrap: "pretty" }}>
            Managed IT and security for the systems you run every day, and custom software for the ones you wish you had. We design it, deploy it, and keep it running.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 38, flexWrap: "wrap" }}>
            <Btn href="/contact">Start a conversation</Btn>
            <Btn href="/services" variant="ghostDark" icon={false}>See our services</Btn>
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
        <div className="container-xl" style={{ padding: "clamp(40px,5vw,60px) clamp(20px,4vw,32px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "clamp(24px,3vw,40px)" }}>
          {trust.map((t) => (
            <div key={t.title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ height: 2, width: 34, background: "var(--accent)" }} />
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-strong)" }}>{t.title}</div>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-muted)" }}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How an engagement moves */}
      <section className="container-lg" style={{ padding: "clamp(52px,7vw,92px) clamp(20px,4vw,32px)" }}>
        <div className="tw-eyebrow" style={{ marginBottom: 14 }}>How an engagement moves</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 0, border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", background: "var(--surface-card)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
          {process.map((s, i) => (
            <div key={s.step} style={{ padding: "clamp(24px,3vw,32px)", borderBottom: "1px solid var(--border-subtle)", borderLeft: i === 0 ? undefined : "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.22em", color: "var(--gold-600)" }}>{s.step}</div>
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
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "-0.015em", fontSize: "clamp(26px,3.4vw,40px)", color: "var(--white)", margin: 0 }}>Let&apos;s look at what you&apos;ve got.</h2>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--silver-300)", margin: "16px auto 0", maxWidth: "32em" }}>
            A short call, a straight answer, and a written next step — whether or not that step involves us.
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
