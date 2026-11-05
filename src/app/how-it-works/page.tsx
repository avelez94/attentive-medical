import type { Metadata } from "next";
import { site, portalBlurb, bookingConfirmation } from "@/config/site";
import { faqsFor } from "@/content/faqs";
import { Botanical } from "@/components/Botanical";
import { ClosingCta } from "@/components/ClosingCta";
import { FaqList } from "@/components/FaqList";
import { Calendar, Chat, Clipboard, Document, Person } from "@/components/Icons";
import { PrepChecklist } from "@/components/PrepChecklist";
import { BookButton, Breadcrumb, ButtonLink, Eyebrow, Photo, PortalLink, ReviewNote } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Request a consultation, meet virtually and discuss individualized next steps. A clear path to personalized medical weight management.",
};

const glance = [
  { n: "01", title: "Connect", text: "Request your consultation online.", href: "#step-1" },
  { n: "02", title: "Explore", text: "Have a conversation about your health, goals and options.", href: "#step-2" },
  { n: "03", title: "Plan", text: "Discuss your next steps, including whether GLP-1 treatment may be appropriate.", href: "#step-3" },
];

const journey = [
  {
    id: "step-1",
    n: "01",
    icon: Calendar,
    title: "Request your consultation.",
    text: `Choose an available time in the online scheduler on our booking page. ${bookingConfirmation}`,
    photo: "hiwStepBook" as const,
  },
  {
    id: "step-2",
    n: "02",
    icon: Chat,
    title: "Have a conversation.",
    text: "Meet virtually to discuss your health history, your goals and your questions. Bring anything you have been wondering about.",
    photo: "hiwStepMeet" as const,
  },
  {
    id: "step-3",
    n: "03",
    icon: Document,
    title: "Discuss your next steps.",
    text: "Review recommendations tailored to your individual evaluation, including whether GLP-1 treatment may be appropriate.",
    photo: "hiwStepPlan" as const,
  },
];

const fits = [
  {
    icon: Person,
    title: "Individual evaluation",
    text: "Your health history, goals and overall wellness are considered.",
  },
  {
    icon: Chat,
    title: "Clear explanations",
    text: "Get straightforward information about your options, so you can make an informed decision.",
  },
  {
    icon: Clipboard,
    title: "Follow up planning",
    text: "Discuss next steps and what ongoing care would involve with your provider.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hiw-title">
        <div className="container">
          <Breadcrumb current="How It Works" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Your path to care</Eyebrow>
            <h1 id="hiw-title">
              A clear path.
              <br /> A personal approach.
            </h1>
            <p className="lead hero-lead">
              Explore medical weight management with guidance centered on your health, your questions and your goals.
            </p>
            <div className="hero-actions">
              <BookButton />
            </div>
            <p className="service-area">{site.serviceAreaLine}</p>
          </div>
          <div className="hero-media hero-media-wide">
            <div className="hero-arch hero-arch-soft" aria-hidden="true" />
            <Photo slot="hiwHeroMain" className="hero-photo-wide" priority sizes="(max-width: 900px) 90vw, 560px" />
            <Photo slot="hiwHeroSecondary" className="hero-photo-corner" sizes="(max-width: 900px) 40vw, 240px" />
            <Botanical variant="sprig" className="hero-botanical hero-botanical-left" />
          </div>
        </div>
      </section>

      <section className="band band-oat glance" aria-labelledby="glance-title">
        <div className="container">
          <Eyebrow>
            <span id="glance-title">Our process at a glance</span>
          </Eyebrow>
          <ol className="glance-row">
            {glance.map((g) => (
              <li key={g.n} data-reveal>
                <a href={g.href} className="glance-item">
                  <span className="glance-num" aria-hidden="true">
                    {g.n}
                  </span>
                  <span className="glance-text">
                    <span className="glance-title">{g.title}</span>
                    <span className="glance-desc">{g.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <Eyebrow>The care journey</Eyebrow>
            <h2 id="journey-title">Here&rsquo;s how we begin.</h2>
          </div>
          <ol className="journey-list">
            {journey.map(({ id, n, icon: Icon, title, text, photo }) => (
              <li className="journey-step" id={id} key={id} data-reveal>
                <div className="journey-marker" aria-hidden="true">
                  <span className="journey-num">{n}</span>
                </div>
                <div className="journey-body">
                  <span className="icon-circle">
                    <Icon size={28} />
                  </span>
                  <div>
                    <h3>
                      <span className="sr-only">Step {Number(n)}: </span>
                      {title}
                    </h3>
                    <p>{text}</p>
                  </div>
                </div>
                <Photo slot={photo} className="journey-photo" sizes="(max-width: 900px) 100vw, 420px" />
              </li>
            ))}
          </ol>
          <div className="center journey-cta" data-reveal>
            <ButtonLink href="/weight-management">Explore Weight Management</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section band band-oat prep" id="prepare" aria-labelledby="prep-title">
        <div className="container prep-grid">
          <div data-reveal>
            <h2 id="prep-title">
              A little preparation
              <br /> goes a long way.
            </h2>
            <p>Being prepared helps you get the most out of your consultation. Tap each item as you get ready.</p>
          </div>
          <div className="prep-list-wrap" data-reveal>
            <PrepChecklist
              items={[
                "A quiet, private space",
                "A reliable internet connection",
                "Your current medication list",
                "Questions you would like to ask",
              ]}
            />
            <p className="fine-print">Follow any additional instructions provided with your appointment.</p>
            <ReviewNote>
              Confirm the video platform, any intake forms, and anything else patients should prepare. Labs are not
              mentioned until the practice confirms them.
            </ReviewNote>
          </div>
          <Botanical variant="stem" className="prep-botanical" />
        </div>
      </section>

      <section className="section fits" aria-labelledby="fits-title">
        <div className="container fits-grid">
          <div className="fits-copy" data-reveal>
            <h2 id="fits-title">
              Where GLP-1 care
              <br /> fits in.
            </h2>
            <p className="lead">
              Medication is a clinical decision. Your consultation is a chance to understand your options and discuss what
              may be appropriate for you.
            </p>
          </div>
          <div data-reveal>
            <ul className="fits-list">
              {fits.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="icon-circle">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="fine-print">A consultation does not guarantee a prescription.</p>
          </div>
        </div>
      </section>

      <section className="section ongoing" aria-labelledby="ongoing-title">
        <div className="container ongoing-grid">
          <Photo slot="hiwOngoing" className="ongoing-photo" sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="ongoing-copy" data-reveal>
            <Eyebrow>Ongoing care</Eyebrow>
            <h2 id="ongoing-title">Keep the conversation going.</h2>
            <p className="lead">
              Discuss follow up timing, how to ask questions, and what ongoing care would involve with your provider.
            </p>
            <p>{portalBlurb}</p>
            <PortalLink className="text-link arrow-link">Visit the Patient Portal</PortalLink>
            <ReviewNote>
              Confirm how follow up visits are arranged, typical timing, and whether messaging between visits is
              included.
            </ReviewNote>
          </div>
          <Botanical variant="sprig" className="ongoing-botanical" />
        </div>
      </section>

      <section className="section band band-cream hiw-faq" aria-labelledby="hiw-faq-title">
        <div className="container faq-split">
          <div data-reveal>
            <Eyebrow>Common questions</Eyebrow>
            <h2 id="hiw-faq-title">Before you book.</h2>
            <ButtonLink href="/faqs" variant="text">
              All FAQs
            </ButtonLink>
          </div>
          <div data-reveal>
            <FaqList items={faqsFor("how-it-works")} />
          </div>
        </div>
      </section>

      <ClosingCta title={<>Ready for a conversation about your goals?</>} />
    </>
  );
}
