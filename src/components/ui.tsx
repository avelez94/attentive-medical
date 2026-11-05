import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { reviewMode, site } from "@/config/site";
import { images, type ImageKey } from "@/content/images";
import { ArrowRight, External } from "./Icons";
import { Botanical } from "./Botanical";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline" | "text";
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", arrow = true, external, className }: ButtonProps) {
  const cls = `btn btn-${variant} ${className ?? ""}`;
  const icon = external ? <External size={18} /> : arrow ? <ArrowRight size={18} className="btn-arrow" /> : null;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        {icon}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}

export function BookButton({ variant = "primary", className, label = "Book a Consultation" }: { variant?: ButtonProps["variant"]; className?: string; label?: string }) {
  return (
    <ButtonLink href="/book" variant={variant} className={className}>
      {label}
    </ButtonLink>
  );
}

/** Patient portal link. Opens Tebra in a new tab once the URL is configured. */
export function PortalLink({ className, children = "Patient Portal" }: { className?: string; children?: ReactNode }) {
  const url = site.integrations.portalUrl;
  if (url) {
    return (
      <a href={url} className={className} target="_blank" rel="noopener noreferrer">
        {children}
        <External size={15} className="inline-icon" />
        <span className="sr-only"> (opens Tebra in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href="/contact#patient-portal" className={className}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, line, className }: { children: ReactNode; line?: boolean; className?: string }) {
  return <p className={`eyebrow ${line ? "eyebrow-line" : ""} ${className ?? ""}`}>{children}</p>;
}

/** Visible only on development and preview builds with NEXT_PUBLIC_REVIEW_MODE=true. */
export function ReviewNote({ children, title = "Pending practice confirmation" }: { children: ReactNode; title?: string }) {
  if (!reviewMode) return null;
  return (
    <aside className="review-note" aria-label="Review note">
      <strong>{title}</strong>
      <span>{children}</span>
    </aside>
  );
}

type PhotoProps = {
  slot: ImageKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders a licensed photo from the image manifest, or a soft placeholder
 * until one is supplied. Placeholders are labeled in review mode.
 */
export function Photo({ slot, className, sizes = "(max-width: 768px) 100vw, 50vw", priority }: PhotoProps) {
  const img = images[slot];
  if (img.src) {
    return (
      <div className={`photo ${className ?? ""}`}>
        <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} />
      </div>
    );
  }
  return (
    <div className={`photo photo-placeholder ${className ?? ""}`} aria-hidden={reviewMode ? undefined : true}>
      <Botanical variant="stem" className="photo-placeholder-art" />
      {reviewMode && (
        <span className="photo-placeholder-label">
          <strong>Photo pending</strong>
          {img.alt}
        </span>
      )}
    </div>
  );
}

export { RichText } from "./RichText";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
