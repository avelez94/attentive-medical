import Image from "next/image";
import { site } from "@/config/site";
import { Person } from "./Icons";

/**
 * Dr. Crawford's portrait. Until her actual photograph is supplied, this
 * shows a clearly marked placeholder. Never substitute a stock or
 * generated person here.
 */
export function ProviderPortrait({ className, priority }: { className?: string; priority?: boolean }) {
  const { portrait, name, credentials } = site.provider;
  if (portrait) {
    return (
      <div className={`portrait ${className ?? ""}`}>
        <Image src={portrait} alt={`${name}, ${credentials}`} fill sizes="(max-width: 768px) 80vw, 420px" priority={priority} />
      </div>
    );
  }
  return (
    <div className={`portrait portrait-placeholder ${className ?? ""}`} role="img" aria-label="Placeholder for the provider's portrait">
      <Person size={64} />
      <span>Provider portrait</span>
      <small>Photo coming soon</small>
    </div>
  );
}
