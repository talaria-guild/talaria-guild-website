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
    body: "We keep your computers patched, backed up, and watched by a 24/7 security team. When something breaks, you call us and talk to someone who knows your setup.",
    more: "What's included",
  },
  {
    icon: SquareCode,
    title: "Software & AI engineering",
    body: "Custom apps, portals, and automation built around how your business already works. We use AI where it saves your staff real time, and we'll tell you when it won't.",
    more: "What we build",
  },
] as const;

/** Home — trust bar. */
export const trust = [
  { title: "About 40 years of IT experience", body: "Between us, mostly in large enterprise environments. We bring the same habits to offices with one to fifty computers." },
  { title: "Based in Central Illinois", body: "We work Central time and answer our own phone." },
  { title: "Same people, start to finish", body: "Whoever plans your project also supports it after launch." },
  { title: "Plain answers", body: "We put recommendations in writing and skip the jargon." },
] as const;

/** Home — how we work. */
export const process = [
  { step: "Assess", body: "We look at what you have, point out the risks that could actually cost you money, and write it up for you." },
  { step: "Fix and build", body: "We close the gaps and ship any new software in stages, so your team isn't hit with everything at once." },
  { step: "Run it", body: "We maintain everything and check in with you on a regular schedule." },
] as const;

/** Services — Managed IT & security capabilities. */
export const managedFeatures: Feature[] = [
  { icon: Radar, title: "24/7 threat detection & response", body: "A Huntress security operations center watches your computers around the clock and can isolate one that's been compromised, even at 3 a.m." },
  { icon: Activity, title: "Monitoring & patching", body: "Windows and third-party updates go out on a schedule we test first, so nothing restarts in the middle of your workday." },
  { icon: Users, title: "Microsoft 365 management", body: "Accounts, licenses, permissions, and device policies, including setting up new hires and shutting off access when someone leaves." },
  { icon: DatabaseBackup, title: "Backup & recovery", body: "Cloud backup of Microsoft 365 and your computers, with restores tested so we know they work." },
  { icon: MailWarning, title: "Security awareness training", body: "Short lessons and practice phishing emails, so your staff learn what a bad message looks like before a real one arrives." },
  { icon: Headset, title: "Helpdesk", body: "Call or email and you'll reach someone who already knows your setup." },
];

/** Services — Software & AI engineering capabilities (rendered as a plain list). */
export const softwareFeatures: Feature[] = [
  { icon: LayoutDashboard, title: "Custom web apps & portals", body: "Internal tools and customer portals built around the way you already work." },
  { icon: Workflow, title: "Workflow automation", body: "We find where staff retype or copy data between systems, then automate it." },
  { icon: Sparkles, title: "AI-powered tools", body: "Document processing, drafting, sorting, and search added to software your staff already uses." },
  { icon: GraduationCap, title: "AI consultation & training", body: "Help deciding where AI is worth using in your business, plus hands-on training for your staff." },
  { icon: GitMerge, title: "Systems integration", body: "Connecting your accounting, operations, and other systems so they share the same data." },
];

/** Services — coverage levels (names shown, pricing gated per positioning). */
export const tiers = [
  {
    level: "Level 01",
    name: "Security baseline",
    blurb: "For businesses that already have someone handling day-to-day IT and want security covered.",
    items: ["Endpoint protection watched by a 24/7 security team", "Patching, DNS filtering, and Microsoft 365 license management", "Monthly status report, with support billed by the hour"],
  },
  {
    level: "Level 02",
    name: "Fully managed everyday IT",
    blurb: "We act as your IT department, with helpdesk, backups, and security included.",
    items: ["Everything in the security baseline", "Unlimited remote helpdesk, weekdays 8 to 5", "Cloud backup for Microsoft 365 and computers", "Security awareness training and a password manager"],
  },
] as const;

export const PHONE = "217-699-1337";
export const PHONE_HREF = "tel:2176991337";
export const EMAIL = "info@talariaworks.com";
export const EMAIL_HREF = "mailto:info@talariaworks.com";
