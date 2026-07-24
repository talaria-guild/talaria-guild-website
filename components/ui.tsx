import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";

/** Button-styled link. Internal routes use next/link; tel:/mailto: use a plain anchor. */
export function Btn({
  href,
  children,
  variant = "gold",
  size = "lg",
  icon = true,
  onDarkGhost = false,
  style,
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghostDark";
  size?: "lg" | "md";
  icon?: boolean;
  onDarkGhost?: boolean;
  style?: CSSProperties;
}) {
  const cls = `btn btn--${size} btn--${variant === "gold" ? "gold" : "ghost-dark"}`;
  const iconSize = size === "lg" ? 18 : 16;
  const inner = (
    <>
      {children}
      {icon && <ArrowRight size={iconSize} strokeWidth={1.75} />}
    </>
  );
  const internal = href.startsWith("/");
  if (internal) {
    return (
      <Link href={href} className={cls} style={style}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} style={style}>
      {inner}
    </a>
  );
}

/** Mono uppercase kicker with an optional gold dash. */
export function Eyebrow({
  children,
  dash = true,
  color = "var(--text-brand)",
}: {
  children: ReactNode;
  dash?: boolean;
  color?: string;
}) {
  return (
    <span className="eyebrow" style={{ color }}>
      {dash && <span className="eyebrow-dash" />}
      {children}
    </span>
  );
}

/** Gold rounded-square icon chip. */
export function IconChip({
  icon: Icon,
  size = 46,
  iconSize = 23,
}: {
  icon: LucideIcon;
  size?: number;
  iconSize?: number;
}) {
  return (
    <span className="icon-chip" style={{ width: size, height: size }}>
      <Icon size={iconSize} strokeWidth={1.75} />
    </span>
  );
}
