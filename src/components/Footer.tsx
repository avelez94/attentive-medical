import Link from "next/link";
import { site, portalBlurb } from "@/config/site";
import { Logo, mainNav } from "./nav";
import { PortalLink, BookButton } from "./ui";
import { Botanical } from "./Botanical";
import { External } from "./Icons";

export function Footer() {
  const { contact, integrations } = site;
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Botanical variant="branch" className="footer-botanical" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">
            Personalized virtual medical weight management with {site.provider.name}, {site.provider.credentials}.
          </p>
          <p className="footer-area">{site.serviceAreaLine}</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/book">Book a Consultation</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Patients</h2>
          <ul>
            <li>
              <PortalLink>Patient Portal</PortalLink>
            </li>
            {integrations.paymentUrl && (
              <li>
                <a href={integrations.paymentUrl} target="_blank" rel="noopener noreferrer">
                  Make a Payment
                  <External size={14} className="inline-icon" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            )}
            <li>
              <Link href="/faqs">Common questions</Link>
            </li>
          </ul>
          <p className="footer-small">{portalBlurb}</p>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Contact</h2>
          <ul>
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            <li>
              <Link href="/contact">Contact the practice</Link>
            </li>
          </ul>
          <BookButton variant="light" className="btn-sm footer-book" />
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {year} {site.name}. All visits are virtual.
        </p>
        <p>In an emergency, call 911. Please do not use this website for urgent medical needs.</p>
      </div>
    </footer>
  );
}
