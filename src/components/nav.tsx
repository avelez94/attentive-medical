import Link from "next/link";
import { site } from "@/config/site";
import { LogoMark } from "./Botanical";

export const mainNav = [
  { href: "/weight-management", label: "Weight Management" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/meet-your-provider", label: "Meet Your Provider" },
  { href: "/faqs", label: "FAQs" },
];

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="logo" onClick={onClick} aria-label={`${site.name}, home`}>
      <LogoMark className="logo-mark" />
      <span className="logo-text">
        <span className="logo-name">{site.shortName}</span>
        <span className="logo-descriptor">{site.descriptor}</span>
      </span>
    </Link>
  );
}

