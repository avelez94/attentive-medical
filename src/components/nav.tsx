import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import wordmark from "../../public/brand/logo-wordmark.png";
import fullLogo from "../../public/brand/logo-full.png";

export const mainNav = [
  { href: "/weight-management", label: "Weight Management" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/meet-your-provider", label: "Meet Your Provider" },
  { href: "/faqs", label: "FAQs" },
];

/**
 * The practice logo. The header uses the horizontal wordmark; the footer
 * uses the full logo with its gold ring. Source file: assets/brand/.
 */
export function Logo({ onClick, variant = "wordmark" }: { onClick?: () => void; variant?: "wordmark" | "full" }) {
  const img = variant === "full" ? fullLogo : wordmark;
  return (
    <Link href="/" className={`logo logo-${variant}`} onClick={onClick} aria-label={`${site.name}, home`}>
      <Image src={img} alt={site.name} priority={variant === "wordmark"} sizes={variant === "full" ? "240px" : "260px"} />
    </Link>
  );
}
