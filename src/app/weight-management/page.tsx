import type { Metadata } from "next";
import { site, reviewMode } from "@/config/site";
import { faqsFor } from "@/content/faqs";
import { Botanical } from "@/components/Botanical";
import { ClosingCta } from "@/components/ClosingCta";
import { FaqList } from "@/components/FaqList";
import { Chat, Check, Clipboard, Close, Heart, Leaf, Person } from "@/components/Icons";
import { PricingSection } from "@/components/PricingSection";
import { BookButton, Breadcrumb, ButtonLink, Eyebrow, Photo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Weight Management",
  description:
    "A personalized, virtual approach to medical weight management. GLP-1 treatment may be discussed during an individual clinical evaluation.",
};

const principles = [
  {
    icon: Chat,
    title: "Start with a conversation",
    text: "Every plan begins by listening: to your history, your goals and what has or has not worked for you before.",
  },
  {
    icon: Person,
    title: "Look at the whole picture",
    text: "Recommendations consider your overall health and your daily life, not just a number on a scale.",
  },
  {
    icon: Leaf,
    title: "Move at your pace",
    text: "You will have time to ask questions and decide what feels right. There is no pressure to commit to anything.",
  },
];

const jumpLinks = [
  { href: "#approach", label: "Our approach" },
  { href: "#glp1", label: "GLP-1 treatment" },
  { href: "#details", label: "Program details" },
  { href: "#questions", label: "Questions" },
];

export default function WeightManagementPage() {
  const { program, operations } = site;

  const details = [
    {
      key: "options",
      icon: Clipboard,
      title: "Treatment options",
      items: program.treatmentOptions,
      fallback: null as string | null,
      pending: "Practice to confirm which treatment options are offered.",
    },
    {
      key: "inclusions",
      icon: Heart,
      title: "What is included",
      items: program.inclusions,
      fallback: null as string | null,
      pending: "Practice to confirm what the program includes.",
    },
    {
      key: "followup",
      icon: Chat,
      title: "Follow up care",
      items: [] as string[],
      fallback: operations.followUpArrangements ?? "Follow up timing is discussed with your provider as part of your plan.",
      pending: operations.followUpArrangements ? null : "Practice to confirm how follow up visits are arranged.",
    },
  ].filter((d) => reviewMode || d.items.length > 0 || d.fallback);

  return (
    <>
      <section className="hero page-hero" aria-labelledby="wm-title">
        <div className="container">
          <Breadcrumb current="Weight Management" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Medical weight management</Eyebrow>
            <h1 id="wm-title">
              Weight care that
              <br /> starts with you.
            </h1>
            <p className="lead hero-lead">
              Your health history, your goals, your everyday life. A personalized, virtual approach to medical weight
              management.
            </p>
            <div className="hero-actions">
              <BookButton />
            </div>
            <p className="service-area">{site.serviceAreaLine}</p>
          </div>
          <div className="hero-media hero-media-home">
            <div className="hero-arch" aria-hidden="true" />
            <Photo slot="wmHeroMain" className="hero-photo-main" priority sizes="(max-width: 900px) 60vw, 420px" />
            <Photo slot="wmHeroSecondary" className="hero-photo-secondary" sizes="(max-width: 900px) 40vw, 260px" />
          </div>
        </div>
      </section>

      <nav className="jump-nav" aria-label="On this page">
        <div className="container">
          <ul>
            {jumpLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <Eyebrow line>Our approach</Eyebrow>
            <h2 id="approach-title">Thoughtful care, explained plainly.</h2>
            <p className="lead">
              Medical weight management here means working with a {site.provider.role.toLowerCase()} to understand your
              health and discuss options that may help, at a pace that suits you.
            </p>
          </div>
          <div className="principles">
            {principles.map(({ icon: Icon, title, text }) => (
              <article className="principle" key={title} data-reveal>
                <span className="icon-circle">
                  <Icon size={28} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band band-cream focus" aria-labelledby="focus-title">
        <div className="container">
          <div className="section-head center" data-reveal>
            <h2 id="focus-title">A focused practice.</h2>
            <p className="lead">Knowing what we do, and what we do not, helps you find the right care.</p>
          </div>
          <div className="focus-grid">
            <div className="focus-card" data-reveal>
              <h3>What we focus on</h3>
              <ul className="check-list">
                <li>
                  <Check size={18} />
                  Virtual medical weight management
                </li>
                <li>
                  <Check size={18} />
                  Individual evaluation of your health history and goals
                </li>
                <li>
                  <Check size={18} />
                  Discussion of GLP-1 treatment when clinically appropriate
                </li>
                <li>
                  <Check size={18} />
                  Personalized plans made together with you
                </li>
              </ul>
            </div>
            <div className="focus-card focus-card-muted" data-reveal>
              <h3>What we do not provide</h3>
              <ul className="check-list check-list-x">
                <li>
                  <Close size={18} />
                  Primary care. Please keep seeing your primary care clinician for general health needs.
                </li>
                <li>
                  <Close size={18} />
                  Emergency or urgent care. In an emergency, call 911.
                </li>
                <li>
                  <Close size={18} />
                  In person visits. All care is virtual.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section glp1" id="glp1" aria-labelledby="glp1-title">
        <div className="container glp1-grid">
          <div className="glp1-media" data-reveal>
            <Photo slot="wmDetail" className="glp1-photo" sizes="(max-width: 900px) 100vw, 44vw" />
            <Botanical variant="stem" className="glp1-botanical" />
          </div>
          <div data-reveal>
            <Eyebrow line>GLP-1 treatment</Eyebrow>
            <h2 id="glp1-title">Where GLP-1 treatment fits.</h2>
            <p className="lead">
              GLP-1 medications are one option that may be discussed during your individual clinical evaluation.
            </p>
            <p>
              Whether treatment is appropriate depends on your health history, your current health and your goals. Your
              provider will explain the considerations clearly so you can make an informed decision together.
            </p>
            <ul className="note-list">
              <li>GLP-1 treatment is not right for everyone.</li>
              <li>A consultation does not guarantee a prescription.</li>
              <li>Any treatment decision follows an individual evaluation.</li>
            </ul>
          </div>
        </div>
      </section>

      {details.length > 0 && (
        <section className="section band band-oat details" id="details" aria-labelledby="details-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <Eyebrow line>Program details</Eyebrow>
              <h2 id="details-title">What your care can include.</h2>
            </div>
            <div className="details-grid">
              {details.map(({ key, icon: Icon, title, items, fallback, pending }) => (
                <article className="detail-card" key={key} data-reveal>
                  <span className="icon-circle">
                    <Icon size={26} />
                  </span>
                  <h3>{title}</h3>
                  {items.length > 0 ? (
                    <ul className="check-list">
                      {items.map((i) => (
                        <li key={i}>
                          <Check size={18} />
                          {i}
                        </li>
                      ))}
                    </ul>
                  ) : fallback ? (
                    <p>{fallback}</p>
                  ) : null}
                  {reviewMode && pending && (items.length === 0 || key === "followup") && (
                    <p className="review-note review-note-inline">
                      <strong>Pending practice confirmation</strong>
                      <span>{pending}</span>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <PricingSection />

      <section className="section" id="questions" aria-labelledby="wm-faq-title">
        <div className="container faq-split">
          <div data-reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 id="wm-faq-title">Good questions to ask.</h2>
            <p>Curious about something else? Bring it to your consultation, or browse all of our answers.</p>
            <ButtonLink href="/faqs" variant="text">
              All FAQs
            </ButtonLink>
          </div>
          <div data-reveal>
            <FaqList items={faqsFor("weight-management")} />
          </div>
        </div>
      </section>

      <ClosingCta
        title={
          <>
            Let&rsquo;s talk about
            <br /> what feels right for you.
          </>
        }
        text="Your consultation is a conversation, with no pressure and plenty of room for questions."
      />
    </>
  );
}
