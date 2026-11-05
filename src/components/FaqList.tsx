import { reviewMode } from "@/config/site";
import type { Faq } from "@/content/faqs";
import { Accordion, type AccordionItem } from "./Accordion";

/**
 * Filters FAQs for the current build. Unconfirmed answers are hidden on
 * the live site and shown with a review note in review mode.
 */
export function publishableFaqs(list: Faq[]): AccordionItem[] {
  return list
    .filter((f) => reviewMode || f.answer.length > 0)
    .map((f) => ({
      id: f.id,
      question: f.question,
      answer: f.answer.length ? f.answer : ["Answer pending. This question is hidden on the live site until the practice confirms the details."],
      reviewNote: f.pendingNote,
    }));
}

export function FaqList({ items, headingLevel }: { items: Faq[]; headingLevel?: "h2" | "h3" }) {
  return <Accordion items={publishableFaqs(items)} headingLevel={headingLevel} showReview={reviewMode} />;
}
