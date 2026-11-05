"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { site, portalBlurb } from "@/config/site";
import { Logo, mainNav } from "./nav";
import { ArrowRight, Close, External, Menu } from "./Icons";

function PortalNavLink({ className, onClick }: { className?: string; onClick?: () => void }) {
  const url = site.integrations.portalUrl;
  if (url) {
    return (
      <a href={url} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        Patient Portal
        <External size={14} className="inline-icon" />
        <span className="sr-only"> (opens Tebra in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href="/contact#patient-portal" className={className} onClick={onClick}>
      Patient Portal
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Lock page scroll, trap focus and close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    const panel = panelRef.current;
    // Start the panel right below the header, wherever the header sits.
    const header = panel?.closest(".site-header");
    const place = () => {
      if (panel && header) panel.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    };
    place();
    window.addEventListener("resize", place);
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        const list = focusables();
        if (!list.length) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1080px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    return () => {
      body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      window.removeEventListener("resize", place);
    };
  }, [open, close]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="container header-inner">
        <Logo onClick={() => setOpen(false)} />

        <nav className="main-nav" aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link" aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <PortalNavLink className="nav-link nav-link-portal" />
            </li>
          </ul>
        </nav>

        <Link href="/book" className="btn btn-primary btn-sm header-cta" aria-current={pathname === "/book" ? "page" : undefined}>
          <span>Book a Consultation</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={22} /> : <Menu size={22} />}
          <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-nav">
            <li>
              <Link href="/" className="mobile-nav-link" aria-current={pathname === "/" ? "page" : undefined} onClick={() => close(false)}>
                Home
              </Link>
            </li>
            {mainNav.map((item, i) => (
              <li key={item.href} style={{ ["--i" as string]: i + 1 }}>
                <Link
                  href={item.href}
                  className="mobile-nav-link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => close(false)}
                >
                  {item.label}
                  <ArrowRight size={18} />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="mobile-nav-link" aria-current={isActive("/contact") ? "page" : undefined} onClick={() => close(false)}>
                Contact
                <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-footer">
          <Link href="/book" className="btn btn-primary btn-block" onClick={() => close(false)}>
            <span>Book a Consultation</span>
            <ArrowRight size={18} />
          </Link>
          <div className="mobile-portal">
            <PortalNavLink className="btn btn-outline btn-block" onClick={() => close(false)} />
            <p>{portalBlurb}</p>
          </div>
          <p className="mobile-menu-area">{site.serviceAreaLine}</p>
        </div>
      </div>
    </header>
  );
}
