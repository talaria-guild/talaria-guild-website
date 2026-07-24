import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck, SquareCode, Radar, Activity, Users, DatabaseBackup,
  MailWarning, Headset, FileCheck2, LayoutDashboard, Workflow, Sparkles,
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
  { icon: DatabaseBackup, title: "Backup & disaster recovery", body: "Immutable copies held off-site and restore drills you actually see the results of — a backup nobody has tested is a guess." },
  { icon: MailWarning, title: "Email security & awareness training", body: "Filtering ahead of the inbox, plus short simulated-phishing coaching that teaches staff rather than shames them." },
  { icon: Headset, title: "Helpdesk your staff will use", body: "Day-to-day requests answered by engineers who already know your setup, so nobody has to re-explain the printer every time." },
  { icon: FileCheck2, title: "Compliance-ready operations", body: "Controls, documentation, and evidence kept audit-ready for regulated work such as HIPAA and CMMC — before the questionnaire arrives." },
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
    items: ["Managed endpoint protection", "Email filtering and awareness training", "Patch oversight and monthly reporting"],
    featured: false,
  },
  {
    level: "Level 02",
    name: "Fully managed everyday IT",
    blurb: "We become your IT department — the whole running of it, end of story.",
    items: ["Everything in the security baseline", "Unlimited helpdesk and onboarding support", "Microsoft 365, device, and identity administration", "Backup with verified restore drills"],
    featured: true,
  },
  {
    level: "Level 03",
    name: "Compliance-ready, 24/7",
    blurb: "For regulated work, where proving the control matters as much as having it.",
    items: ["Everything in fully managed IT", "Round-the-clock detection and response", "Control mapping and audit evidence", "Incident response plan, rehearsed"],
    featured: false,
  },
] as const;

export const PHONE = "217-827-3483";
export const PHONE_HREF = "tel:2178273483";
export const EMAIL = "info@talariaworks.com";
export const EMAIL_HREF = "mailto:info@talariaworks.com";
