import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://talariaworks.com"),
  title: {
    default: "Talaria Works — Managed IT, security & custom software",
    template: "%s — Talaria Works",
  },
  description:
    "Managed IT and security for the systems you run every day, and custom software for the ones you wish you had. Based in Illinois. We design it, deploy it, and keep it running.",
  openGraph: {
    title: "Talaria Works — Managed IT, security & custom software",
    description:
      "Managed IT, security, and custom software for organizations in Illinois and beyond.",
    url: "https://talariaworks.com",
    siteName: "Talaria Works",
    type: "website",
  },
  icons: { icon: "/assets/logo-mark.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Webfonts for the _ds design system. Loaded here because Turbopack drops the
            remote @import inside _ds/tokens/fonts.css when it inlines the design system.
            Families must match the _ds typography tokens (Cinzel / Libre Franklin / JetBrains Mono). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Libre+Franklin:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="site-shell">
          <div className="gold-bar" />
          <TopBar />
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
