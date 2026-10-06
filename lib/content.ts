import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck, SquareCode, Radar, Activity, Users, DatabaseBackup,
  MailWarning, Headset, LayoutDashboard, Workflow, Sparkles,
  GraduationCap, GitMerge,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; body: string };

/** Home — the two capability pillars. */
export const pillars = [
  {
    icon: ShieldCheck,
    title: "Managed IT & security",
    body: "Your systems watched around the clock, kept current, backed up, and defended — with someone who picks up when a person is what you need.",
    more: "What's included",
  },
  {
    icon: SquareCode,
    title: "Software & AI engineering",
    body: "Applications, portals, and automation shaped around how your business actually runs — with AI used where it removes real work, not as decoration.",
    more: "How we build",
  },
] as const;

/** Home — trust bar. */
export const trust = [
  { title: "Decades in the field", body: "Enterprise-grade practice, sized to what you're actually running." },
  { title: "Local and responsive", body: "Illinois hours, Illinois answers — never a ticket queue in another timezone." },
  { title: "One team, whole scope", body: "The people who plan the work are the people who own it afterward." },
  { title: "Plain language", body: "Recommendations in writing, in words you can repeat to your board." },
] as const;

/** Home — how an engagement moves. */
export const process = [
  { step: "01 / Assess", body: "We walk your environment, name the risks worth money, and hand you the findings in writing." },
  { step: "02 / Build & deploy", body: "Defenses hardened, gaps closed, software shipped — in stages your team can absorb." },
  { step: "03 / Manage", body: "Watched, maintained, and reviewed with you on a set cadence for as long as it runs." },
] as const;

/** Services — Managed IT & security capabilities. */
export const managedFeatures: Feature[] = [
  { icon: Radar, title: "24/7 managed detection & response", body: "A security team watching enterprise endpoint telemetry overnight and on holidays, with authority to contain a threat before you wake up." },
  { icon: Activity, title: "Monitoring & patching", body: "Servers, workstations, and network gear kept current on a tested schedule, so updates land in a maintenance window instead of a crisis." },
  { icon: Users, title: "Microsoft 365 management", body: "Accounts, licensing, permissions, and device policy governed properly — including the joiner-and-leaver work most teams do by memory." },
  { icon: DatabaseBackup, title: "Backup & recovery", body: "Cloud backup of Microsoft 365 and your computers, with restores tested so we know they work." },
  { icon: MailWarning, title: "Security awareness training", body: "Short lessons and practice phishing emails, so your staff learn what a bad message looks like before a real one arrives." },
  { icon: Headset, title: "Helpdesk your staff will use", body: "Day-to-day requests answered by engineers who already know your setup, so nobody has to re-explain the printer every time." },
];

/** Services — Software & AI engineering capabilities. */
export const softwareFeatures: Feature[] = [
  { icon: LayoutDashboard, title: "Custom web apps & portals", body: "Internal tools and customer-facing portals that fit your process instead of bending it to fit a product you rent." },
  { icon: Workflow, title: "Workflow automation", body: "The re-typing, the chasing, the copy-paste between systems — measured first, then removed." },
  { icon: Sparkles, title: "AI-powered tools", body: "Document handling, drafting, classification, and search built into the systems your staff already open every morning." },
  { icon: GraduationCap, title: "AI consultation & training", body: "Where it pays off, where it doesn't, what to keep off it — with hands-on sessions and usage guidance for your team." },
  { icon: GitMerge, title: "Systems integration", body: "Finance, operations, and line-of-business platforms wired together so one number means one thing everywhere." },
];

/** Services — coverage levels (names shown, pricing gated per positioning). */
export const tiers = [
  {
    level: "Level 01",
    name: "Security baseline",
    blurb: "For teams with IT already handled who need the security floor raised.",
    items: ["Endpoint protection watched by a 24/7 security team", "Patching, DNS filtering, and Microsoft 365 license management", "Monthly status report, with support billed by the hour"],
    featured: false,
  },
  {
    level: "Level 02",
    name: "Fully managed everyday IT",
    blurb: "We become your IT department — the whole running of it, end of story.",
    items: ["Everything in the security baseline", "Unlimited remote helpdesk, weekdays 8 to 5", "Cloud backup for Microsoft 365 and computers", "Security awareness training and a password manager"],
    featured: true,
  },
] as const;

export const PHONE = "217-699-1337";
export const PHONE_HREF = "tel:2176991337";
export const EMAIL = "info@talariaworks.com";
export const EMAIL_HREF = "mailto:info@talariaworks.com";
