"use client";

import { useEffect, useId, useState } from "react";
import { Plus } from "./Icons";
import { RichText } from "./RichText";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string[];
  reviewNote?: string;
};

type Props = {
  items: AccordionItem[];
  headingLevel?: "h2" | "h3";
  /** Show review notes (only passed in review mode). */
  showReview?: boolean;
};

export function Accordion({ items, headingLevel = "h3", showReview }: Props) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const base = useId();
  const Heading = headingLevel;

  // Open the item named in the URL hash, for links such as /faqs#cost.
  useEffect(() => {
    const sync = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash && items.some((i) => i.id === hash)) {
        setOpen((prev) => new Set(prev).add(hash));
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [items]);

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const btnId = `${base}-${item.id}-btn`;
        const panelId = `${base}-${item.id}-panel`;
        return (
          <div className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.id} id={item.id}>
            <Heading className="accordion-heading">
              <button
                type="button"
                id={btnId}
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.question}</span>
                <span className="accordion-icon" aria-hidden="true">
                  <Plus size={18} />
                </span>
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={btnId} className="accordion-panel" hidden={!isOpen}>
              <div className="accordion-panel-inner">
                {item.answer.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} />
                  </p>
                ))}
                {showReview && item.reviewNote && (
                  <p className="review-note review-note-inline">
                    <strong>Pending practice confirmation</strong>
                    <span>{item.reviewNote}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
