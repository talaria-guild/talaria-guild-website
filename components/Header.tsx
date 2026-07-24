"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "color-mix(in srgb, var(--surface-page) 88%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border-subtle)",
        flex: "none",
      }}
    >
      <div
        className="container-xl"
        style={{
          padding: "12px clamp(20px,4vw,32px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "12px clamp(16px,3vw,40px)",
          minHeight: 76,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flex: "none" }}
          aria-label="Talaria Works, home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" style={{ height: 40, width: "auto", display: "block" }} />
          <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.07em", lineHeight: 1, fontSize: 19, whiteSpace: "nowrap" }}>
              <span style={{ color: "var(--gold-600)" }}>TALARIA</span>
              <span style={{ color: "var(--text-strong)" }}> WORKS</span>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--text-subtle)", whiteSpace: "nowrap" }}>
              Engineered innovation
            </span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 2, marginLeft: "auto" }} aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="nav-link"
              data-active={isActive(n.href)}
              aria-current={isActive(n.href) ? "page" : undefined}
            >
              {n.label}
              <span className="nav-bar" />
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn--md btn--gold" style={{ flex: "none" }}>
          Request a consultation
          <ArrowRight size={16} strokeWidth={1.75} />
        </Link>
      </div>
    </header>
  );
}
