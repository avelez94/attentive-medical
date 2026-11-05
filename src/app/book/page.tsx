import type { Metadata } from "next";
import { site, bookingInstructions, portalBlurb, reviewMode } from "@/config/site";
import { faqsFor } from "@/content/faqs";
import { Botanical } from "@/components/Botanical";
import { FaqList } from "@/components/FaqList";
import { Calendar, Check, Lock, MapPin, Video } from "@/components/Icons";
import { TebraScheduler } from "@/components/TebraScheduler";
import { Breadcrumb, ButtonLink, Eyebrow, PortalLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Choose an available time to request a virtual weight management consultation.",
};

export default function BookPage() {
  const url = site.integrations.schedulerUrl;

  return (
    <>
      <section className="hero page-hero book-hero" aria-labelledby="book-title">
        <div className="container">
          <Breadcrumb current="Book a Consultation" />
          <div className="book-hero-inner">
            <Eyebrow>Book a consultation</Eyebrow>
            <h1 id="book-title">Let&rsquo;s find a time to talk.</h1>
            <p className="lead">{bookingInstructions}</p>
          </div>
          <Botanical variant="sprig" className="book-botanical" />
        </div>
      </section>

      <section className="book-main" aria-label="Appointment scheduler">
        <div className="container book-grid">
          <div className="scheduler-card">
            {url ? (
              <TebraScheduler url={url} />
            ) : (
              <div className="scheduler-pending" role="status">
                <span className="icon-circle icon-circle-lg">
                  <Calendar size={32} />
                </span>
                <h2 className="h3">Online scheduling is coming soon.</h2>
                {reviewMode ? (
                  <p>
                    <strong>Integration pending.</strong> The official Tebra scheduler will be embedded here once the
                    practice supplies its scheduling URL as <code>NEXT_PUBLIC_TEBRA_SCHEDULER_URL</code>. No calendar,
                    availability or confirmation is simulated.
                  </p>
                ) : (
                  <p>Our online scheduler is being set up. Please check back soon.</p>
                )}
              </div>
            )}
          </div>

          <aside className="book-aside" aria-label="Before you choose a time">
            <h2 className="h3">Before you choose a time</h2>
            <ul className="book-facts">
              <li>
                <Video size={22} />
                <span>Consultations take place virtually.</span>
              </li>
              <li>
                <MapPin size={22} />
                <span>Care is offered in {site.serviceAreaSentence}.</span>
              </li>
              <li>
                <Check size={22} />
                <span>Your appointment is a request until the practice approves it.</span>
              </li>
            </ul>
            <ButtonLink href="/how-it-works#prepare" variant="text">
              How to prepare
            </ButtonLink>
            <div className="book-portal">
              <Lock size={22} />
              <div>
                <h3>Already a patient?</h3>
                <p>{portalBlurb}</p>
                <PortalLink className="text-link">Patient Portal</PortalLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="book-faq-title">
        <div className="container narrow">
          <h2 id="book-faq-title" className="center">
            Scheduling questions.
          </h2>
          <FaqList items={faqsFor("book")} />
        </div>
      </section>
    </>
  );
}
