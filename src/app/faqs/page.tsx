import type { Metadata } from "next";
import Link from "next/link";
import { faqCategories, faqs } from "@/content/faqs";
import { publishableFaqs } from "@/components/FaqList";
import { Accordion } from "@/components/Accordion";
import { Botanical } from "@/components/Botanical";
import { ClosingCta } from "@/components/ClosingCta";
import { ArrowRight } from "@/components/Icons";
import { reviewMode } from "@/config/site";
import { Breadcrumb, Eyebrow, PortalLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about virtual visits, service areas, consultations, treatment recommendations, appointment requests and the patient portal.",
};

export default function FaqsPage() {
  const groups = faqCategories
    .map((c) => ({ ...c, items: publishableFaqs(faqs.filter((f) => f.category === c.id)) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <section className="hero page-hero faq-hero" aria-labelledby="faqs-title">
        <div className="container">
          <Breadcrumb current="FAQs" />
          <div className="faq-hero-inner">
            <Eyebrow>Common questions</Eyebrow>
            <h1 id="faqs-title">Questions, answered.</h1>
            <p className="lead">
              Clear answers about how virtual care works, what to expect and how to get started. If you do not see your
              question here, bring it to your consultation.
            </p>
            <nav aria-label="FAQ topics" className="topic-chips">
              <ul>
                {groups.map((g) => (
                  <li key={g.id}>
                    <a href={`#topic-${g.id}`}>{g.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Botanical variant="sprig" className="faq-hero-botanical" />
        </div>
      </section>

      <section className="section faq-groups">
        <div className="container faq-layout">
          <div className="faq-main">
            {groups.map((g) => (
              <section key={g.id} id={`topic-${g.id}`} className="faq-group" aria-labelledby={`topic-${g.id}-title`}>
                <h2 id={`topic-${g.id}-title`} className="faq-group-title">
                  {g.label}
                </h2>
                <Accordion items={g.items} showReview={reviewMode} />
              </section>
            ))}
          </div>
          <aside className="faq-aside" aria-label="More help">
            <div className="aside-card">
              <h2 className="h3">Already a patient?</h2>
              <p>Medical questions are best sent securely through the Tebra patient portal.</p>
              <PortalLink className="btn btn-primary btn-sm">Patient Portal</PortalLink>
            </div>
            <div className="aside-card aside-card-plain">
              <h2 className="h3">Still wondering?</h2>
              <p>Get in touch with the practice for general, nonmedical questions.</p>
              <Link href="/contact" className="text-link arrow-link">
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <ClosingCta layout="card" title={<>The best questions start a conversation.</>} />
    </>
  );
}
