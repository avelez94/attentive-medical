import Link from "next/link";
import { site } from "@/config/site";
import { faqsFor } from "@/content/faqs";
import { Botanical } from "@/components/Botanical";
import { ClosingCta } from "@/components/ClosingCta";
import { FaqList } from "@/components/FaqList";
import { Calendar, Chat, Document, Heart, Leaf, People, ArrowRight } from "@/components/Icons";
import { PricingSection } from "@/components/PricingSection";
import { ProviderPortrait } from "@/components/ProviderPortrait";
import { BookButton, ButtonLink, Eyebrow, Photo } from "@/components/ui";

const pillars = [
  {
    icon: Leaf,
    title: "Personalized care",
    text: "Recommendations shaped around your goals, your health history and your lifestyle.",
  },
  {
    icon: People,
    title: "Room for your questions",
    text: "Virtual visits where you can talk openly, ask anything and understand your options.",
  },
  {
    icon: Heart,
    title: "Whole person focus",
    text: "Care that considers your physical health, your well being and the life you live every day.",
  },
];

const steps = [
  {
    n: "01",
    icon: Calendar,
    title: "Request a time",
    text: "Choose an available time through our online scheduler to request your consultation.",
  },
  {
    n: "02",
    icon: Chat,
    title: "Meet virtually",
    text: "Talk with your provider about your health history, your goals and your questions.",
  },
  {
    n: "03",
    icon: Document,
    title: "Plan your next steps",
    text: "Discuss individualized recommendations, including whether GLP-1 treatment may be appropriate.",
  },
];

export default function HomePage() {
  const { provider } = site;
  return (
    <>
      {/* Hero */}
      <section className="hero hero-home" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title" className="display">
              <span className="nowrap">Your goals.</span> <span className="nowrap">Your pace.</span>{" "}
              <span className="hero-line-break">Attentive care.</span>
            </h1>
            <p className="lead hero-lead">
              Personalized medical weight management, including GLP-1 treatment options when appropriate.
            </p>
            <div className="hero-actions">
              <BookButton />
            </div>
            <p className="service-area">{site.serviceAreaLine}</p>
          </div>
          <div className="hero-media hero-media-home">
            <div className="hero-arch" aria-hidden="true" />
            <Photo slot="homeHeroMain" className="hero-photo-main" priority sizes="(max-width: 900px) 60vw, 420px" />
            <Photo slot="homeHeroSecondary" className="hero-photo-secondary" sizes="(max-width: 900px) 40vw, 260px" />
            <Botanical variant="sprig" className="hero-botanical" />
          </div>
        </div>
        <svg className="hero-flourish" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 70 C 220 30, 420 30, 640 52 S 1020 78, 1200 20" />
        </svg>
      </section>

      {/* Pillars */}
      <section className="pillars" aria-label="What to expect">
        <div className="container pillars-grid">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article className="pillar" key={title} data-reveal>
              <span className="icon-circle">
                <Icon size={30} />
              </span>
              <div>
                <h2 className="pillar-title">{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section approach" aria-labelledby="approach-title">
        <div className="container approach-grid">
          <div className="approach-copy" data-reveal>
            <Eyebrow line>Our approach</Eyebrow>
            <h2 id="approach-title">A thoughtful approach to your health.</h2>
            <p className="lead">
              Weight is personal, and so is the way we care for it. Before talking through any options, your provider takes
              time to understand your health history, your goals and your everyday life.
            </p>
            <p>
              You can expect clear explanations, honest answers and a plan built around what feels right for you. No
              pressure, and no one size fits all program.
            </p>
            <Link href="/weight-management" className="text-link arrow-link">
              Our approach to weight management <ArrowRight size={16} />
            </Link>
          </div>
          <div className="approach-media" data-reveal>
            <Photo slot="homeApproach" className="arch-photo" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section band band-oat steps-section" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-head center" data-reveal>
            <Eyebrow>Getting started</Eyebrow>
            <h2 id="steps-title">A little guidance. A clear next step.</h2>
          </div>
          <ol className="steps-row">
            {steps.map(({ n, title, text }) => (
              <li className="step" key={n} data-reveal>
                <span className="step-num" aria-hidden="true">
                  {n}
                </span>
                <h3 className="step-title">
                  <span className="sr-only">Step {Number(n)}: </span>
                  {title}
                </h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="fine-print center" data-reveal>
            Treatment recommendations depend on your individual clinical evaluation.
          </p>
          <div className="center" data-reveal>
            <ButtonLink href="/how-it-works" variant="text">
              See how it works
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* GLP-1 */}
      <section className="section glp" aria-labelledby="glp-title">
        <div className="container glp-grid">
          <div className="glp-copy" data-reveal>
            <Eyebrow line>GLP-1 care</Eyebrow>
            <h2 id="glp-title">Let&rsquo;s talk about GLP-1 care.</h2>
            <p className="lead">
              Understand your options, ask your questions and discuss whether treatment may fit your needs.
            </p>
            <ButtonLink href="/weight-management">Explore Weight Management</ButtonLink>
            <Botanical variant="stem" className="glp-botanical" />
          </div>
          <div className="glp-cards">
            <article className="info-card" data-reveal>
              <span className="icon-circle icon-circle-lg">
                <Document size={30} />
              </span>
              <div>
                <h3>An individual evaluation</h3>
                <p>
                  Your provider learns about your health history, lifestyle and goals to help determine whether GLP-1
                  treatment may be appropriate for you.
                </p>
              </div>
            </article>
            <article className="info-card" data-reveal>
              <span className="icon-circle icon-circle-lg">
                <People size={30} />
              </span>
              <div>
                <h3>A plan made together</h3>
                <p>
                  If treatment is a good fit, you will talk through your options and shape a personalized plan with your
                  provider. If it is not, you will understand why.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Provider */}
      <section className="section band band-oat provider-intro" aria-labelledby="provider-title">
        <div className="container provider-intro-grid">
          <div className="provider-intro-media" data-reveal>
            <Botanical variant="stem" className="provider-intro-botanical" />
            <ProviderPortrait className="portrait-arch" />
          </div>
          <div className="provider-intro-copy" data-reveal>
            <Eyebrow line>Meet your provider</Eyebrow>
            <h2 id="provider-title">Care with a personal connection.</h2>
            <p className="provider-name">
              {provider.name}, {provider.credentials}
            </p>
            <p className="provider-role">{provider.role}</p>
            <p>An attentive approach, with time to listen and answer your questions.</p>
            <Link href="/meet-your-provider" className="text-link arrow-link">
              Meet {provider.shortTitle} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* FAQs */}
      <section className="section faq-preview" aria-labelledby="faq-title">
        <div className="container narrow">
          <div className="section-head center" data-reveal>
            <h2 id="faq-title">A few things you may be wondering.</h2>
          </div>
          <div data-reveal>
            <FaqList items={faqsFor("home")} />
          </div>
          <div className="center faq-more" data-reveal>
            <ButtonLink href="/faqs" variant="text">
              View all questions
            </ButtonLink>
          </div>
        </div>
        <Botanical variant="stem" className="faq-botanical" />
      </section>

      <ClosingCta
        title={
          <>
            Your next chapter
            <br /> starts with a conversation.
          </>
        }
        photo="homeCta"
      />
    </>
  );
}
