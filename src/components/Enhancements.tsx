"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

/**
 * Gentle reveal on scroll. Content is fully visible without JavaScript and
 * for visitors who prefer reduced motion (see the CSS for `.js-reveal`).
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    root.classList.add("reveal-ready");
    // Safety net: never leave content hidden.
    const t = window.setTimeout(() => els.forEach((el) => el.classList.add("is-visible")), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);
  return null;
}

/**
 * Discreet booking button for small screens. It appears after the visitor
 * scrolls past the opening section and the footer reserves space for it so
 * it never covers content.
 */
export function MobileBookBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const hidden = pathname === "/book";

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 320;
      setVisible(window.scrollY > 520 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden, pathname]);

  if (hidden) return null;
  return (
    <div className={`mobile-book ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <Link href="/book" className="btn btn-primary mobile-book-btn" tabIndex={visible ? 0 : -1}>
        <span>Book a Consultation</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
