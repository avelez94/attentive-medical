import type { Metadata } from "next";
import { site } from "@/config/site";
import { Botanical } from "@/components/Botanical";
import { ClosingCta } from "@/components/ClosingCta";
import { Heart, Laptop, Leaf, People } from "@/components/Icons";
import { ProviderPortrait } from "@/components/ProviderPortrait";
import { BookButton, Breadcrumb, Eyebrow, Photo, ReviewNote } from "@/components/ui";

const { provider } = site;

export const metadata: Metadata = {
  title: "Meet Your Provider",
  description: `${provider.name}, ${provider.credentials}, is a ${provider.role.toLowerCase()} offering personalized virtual medical weight management.`,
};

const values = [
  { icon: Leaf, title: "Individualized care", text: "Tailored to your goals, health history and lifestyle." },
  { icon: Laptop, title: "Virtual visits", text: "Convenient care from the comfort of home." },
  { icon: People, title: "A collaborative approach", text: "Your goals and preferences, paired with clinical expertise." },
];

const philosophy = [
  {
    icon: Heart,
    title: "Listen first",
    text: "Time to understand your health history, your concerns and what matters most to you.",
  },
  {
    icon: Leaf,
    title: "Decide together",
    text: "Your options explained clearly, so the plan you choose feels right for your goals and your life.",
  },
  {
    icon: People,
    title: "Keep it personal",
    text: "Care is never one size fits all. Recommendations are shaped around your individual needs.",
  },
];

const firstVisit = [
  {
    n: "01",
    title: "Your health history",
    text: "A review of your medical history, current health and any relevant factors, to get a complete picture.",
  },
  {
    n: "02",
    title: "Your goals and questions",
    text: "Time to share what you hope to achieve and to ask about treatment options, including GLP-1 medications when clinically appropriate.",
  },
  {
    n: "03",
    title: "Your next steps",
    text: "Together, you will discuss a personalized plan and next steps based on your individual needs.",
  },
];

export default function ProviderPage() {
  return (
    <>
      <section className="hero page-hero provider-hero" aria-labelledby="provider-title">
        <div className="container">
          <Breadcrumb current="Meet Your Provider" />
        </div>
        <div className="container hero-grid provider-hero-grid">
          <div className="hero-copy">
            <Eyebrow>Meet your provider</Eyebrow>
            <h1 id="provider-title">
              A real connection.
              <br /> Attentive care.
            </h1>
            <p className="provider-hero-name">
              {provider.name}, {provider.credentials}
            </p>
            <p className="provider-role">{provider.role}</p>
            <p className="lead hero-lead">
              Personalized weight management begins with someone who takes the time to listen.
            </p>
            <BookButton />
          </div>
          <div className="provider-hero-media">
            <div className="provider-hero-arch" aria-hidden="true" />
            <ProviderPortrait className="portrait-hero" priority />
            <p className="provider-hero-note" aria-hidden="true">
              Your questions
              <br /> are welcome here.
            </p>
            <Botanical variant="sprig" className="provider-hero-botanical" />
          </div>
        </div>
        <ReviewNote title="Portrait pending">
          This is the only portrait location on this page. Replace the placeholder with Dr. Crawford&rsquo;s actual photograph
          by setting <code>provider.portrait</code> in <code>src/config/site.ts</code>.
        </ReviewNote>
      </section>

      <section className="band band-oat values" aria-label="What to expect">
        <div className="container values-grid">
          {values.map(({ icon: Icon, title, text }) => (
            <div className="value" key={title} data-reveal>
              <span className="icon-circle">
                <Icon size={28} />
              </span>
              <div>
                <h2 className="value-title">{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bio" aria-labelledby="bio-title">
        <div className="container bio-grid">
          <div className="bio-copy" data-reveal>
            <h2 id="bio-title">
              Get to know
              <br /> {provider.shortTitle}.
            </h2>
            <p className="lead">
              {provider.name} is a Doctor of Nursing Practice and a board certified {provider.role}.
            </p>
            <p>
              Her approach centers on listening, understanding your concerns and building a relationship grounded in trust
              and respect.
            </p>
            <p>
              At {site.name}, the focus is personalized medical weight management, with room for your questions, your
              preferences and your goals.
            </p>
            <ReviewNote>
              Add any confirmed biography details supplied by the practice. No schools, affiliations, awards, dates or
              personal stories have been added.
            </ReviewNote>
          </div>
          <figure className="bio-media" data-reveal>
            <Botanical variant="sprig" className="bio-botanical" />
            <Photo slot="providerWorkspace" className="bio-photo" sizes="(max-width: 900px) 100vw, 46vw" />
          </figure>
        </div>
      </section>

      <section className="section band band-cream credentials" aria-labelledby="cred-title">
        <div className="container credentials-grid">
          <div data-reveal>
            <Eyebrow line>Education and credentials</Eyebrow>
            <h2 id="cred-title" className="h2">
              Doctoral preparation.
              <br /> Board certification.
            </h2>
          </div>
          <div data-reveal>
            <dl className="cred-list">
              {provider.credentialsList.map((c) => (
                <div className="cred-item" key={c.detail}>
                  <dt>{c.detail}</dt>
                  <dd>{c.label}</dd>
                </div>
              ))}
              {provider.education.map((e) => (
                <div className="cred-item" key={e.degree + e.school}>
                  <dt>{e.degree}</dt>
                  <dd>
                    {e.school}
                    {e.year ? `, ${e.year}` : ""}
                  </dd>
                </div>
              ))}
            </dl>
            <ReviewNote>
              Confirm credentials, and supply schools, certifying body and state licensure details to list here.
            </ReviewNote>
          </div>
        </div>
      </section>

      <section className="section philosophy" aria-labelledby="philosophy-title">
        <div className="container">
          <div className="section-head center" data-reveal>
            <Eyebrow>Her philosophy</Eyebrow>
            <h2 id="philosophy-title">Your story comes first.</h2>
          </div>
          <div className="philosophy-grid">
            {philosophy.map(({ icon: Icon, title, text }) => (
              <article className="philosophy-item" key={title} data-reveal>
                <span className="icon-circle icon-circle-lg">
                  <Icon size={30} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section first-visit" aria-labelledby="visit-title">
        <div className="container first-visit-grid">
          <div className="first-visit-intro" data-reveal>
            <Eyebrow line>Your visit</Eyebrow>
            <h2 id="visit-title">What our first conversation can look like.</h2>
            <p className="lead">A thoughtful start to your care.</p>
            <Photo slot="providerVisit" className="first-visit-photo" sizes="(max-width: 900px) 100vw, 44vw" />
          </div>
          <div data-reveal>
            <ol className="numbered-list">
              {firstVisit.map((v) => (
                <li key={v.n}>
                  <span className="numbered-num" aria-hidden="true">
                    {v.n}
                  </span>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="fine-print">
              Treatment options, including GLP-1 medications, depend on an individual clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="heard" aria-labelledby="heard-title" data-reveal>
        <Botanical variant="branch" className="heard-botanical heard-botanical-left" />
        <div className="container center">
          <Eyebrow>A personal connection</Eyebrow>
          <h2 id="heard-title">You deserve to feel heard.</h2>
          <p className="lead">
            An open conversation. Clear explanations.
            <br /> Care shaped around you.
          </p>
        </div>
        <Botanical variant="branch" className="heard-botanical heard-botanical-right" />
      </section>

      <ClosingCta layout="card" eyebrow="Ready to get started?" title={<>Let&rsquo;s take the next step, together.</>} />
    </>
  );
}
