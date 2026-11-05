import type { Metadata } from "next";
import { site, portalBlurb, reviewMode } from "@/config/site";
import { Botanical } from "@/components/Botanical";
import { Calendar, Lock, Mail, MapPin, Phone, Video } from "@/components/Icons";
import { BookButton, Breadcrumb, Eyebrow, Photo, PortalLink, ReviewNote } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Attentive Medical Care & Wellness. New patients can request a consultation online. Current patients can message their provider securely through the Tebra patient portal.",
};

export default function ContactPage() {
  const { contact, integrations } = site;
  const hasDirectContact = Boolean(contact.phone || contact.email);

  return (
    <>
      <section className="hero page-hero contact-hero" aria-labelledby="contact-title">
        <div className="container">
          <Breadcrumb current="Contact" />
        </div>
        <div className="container contact-hero-grid">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 id="contact-title">We&rsquo;re glad you&rsquo;re here.</h1>
            <p className="lead">
              Whether you are ready to book, already a patient, or simply have a general question, here is the best way to
              reach us.
            </p>
          </div>
          <Photo slot="contactDesk" className="contact-hero-photo" priority sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
      </section>

      <section className="section contact-paths" aria-label="Ways to reach us">
        <div className="container contact-cards">
          <article className="contact-card" data-reveal>
            <span className="icon-circle">
              <Calendar size={28} />
            </span>
            <h2 className="h3">New patients</h2>
            <p>Choose an available time online to request your first consultation.</p>
            <BookButton className="btn-sm" />
          </article>

          <article className="contact-card contact-card-feature" id="patient-portal" data-reveal>
            <span className="icon-circle">
              <Lock size={28} />
            </span>
            <h2 className="h3">Current patients</h2>
            <p>{portalBlurb}</p>
            <p className="fine-print">
              Please send medical questions, medication questions and health updates through the portal, not by email or
              phone message.
            </p>
            {integrations.portalUrl ? (
              <PortalLink className="btn btn-primary btn-sm">Open Patient Portal</PortalLink>
            ) : reviewMode ? (
              <ReviewNote title="Integration pending">
                Add the Tebra patient portal URL as <code>NEXT_PUBLIC_TEBRA_PORTAL_URL</code>. Every Patient Portal link on
                the site will then open Tebra in a new tab.
              </ReviewNote>
            ) : (
              <p className="fine-print">Patient portal access details will be shared with you by the practice.</p>
            )}
          </article>

          <article className="contact-card" data-reveal>
            <span className="icon-circle">
              <Mail size={28} />
            </span>
            <h2 className="h3">General questions</h2>
            <p>For general, nonmedical questions about the practice or scheduling.</p>
            {hasDirectContact && (
              <ul className="contact-list">
                {contact.phone && (
                  <li>
                    <Phone size={18} />
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
                  </li>
                )}
                {contact.email && (
                  <li>
                    <Mail size={18} />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                )}
              </ul>
            )}
            {contact.hours && <p className="fine-print">{contact.hours}</p>}
            <ReviewNote>
              {hasDirectContact
                ? "Confirm these contact details before launch."
                : "Supply the verified practice phone number and email address. No contact details are shown until they are confirmed."}
            </ReviewNote>
          </article>
        </div>
      </section>

      <section className="section band band-oat how-care" aria-labelledby="how-care-title">
        <div className="container how-care-grid">
          <div data-reveal>
            <Eyebrow line>How care is provided</Eyebrow>
            <h2 id="how-care-title">Virtual care, close to home.</h2>
            <p className="lead">
              Every visit takes place virtually. There is no walk in clinic, so you can meet with your provider from a
              private space that is comfortable for you.
            </p>
          </div>
          <div className="how-care-facts" data-reveal>
            <div className="fact">
              <Video size={26} />
              <div>
                <h3>Virtual visits only</h3>
                <p>Instructions for joining are shared with your appointment.</p>
              </div>
            </div>
            <div className="fact">
              <MapPin size={26} />
              <div>
                <h3>Where care is offered</h3>
                <p>{site.serviceAreaSentence}</p>
              </div>
            </div>
            {contact.mailingAddress && (
              <div className="fact">
                <Mail size={26} />
                <div>
                  <h3>Mailing address</h3>
                  <p>
                    {contact.mailingAddress.line1}
                    {contact.mailingAddress.line2 && (
                      <>
                        <br />
                        {contact.mailingAddress.line2}
                      </>
                    )}
                    <br />
                    {contact.mailingAddress.city}, {contact.mailingAddress.state} {contact.mailingAddress.zip}
                  </p>
                  <p className="fine-print">For mail and administrative purposes only. This is not a clinic location.</p>
                </div>
              </div>
            )}
            <ReviewNote>Confirm whether a mailing or administrative address should be listed.</ReviewNote>
          </div>
          <Botanical variant="stem" className="how-care-botanical" />
        </div>
      </section>

      <section className="section privacy-note" aria-labelledby="privacy-title">
        <div className="container narrow center" data-reveal>
          <h2 id="privacy-title" className="h3">
            Protecting your privacy
          </h2>
          <p>
            To keep your health information secure, please do not share medical histories, symptoms or medication details
            through email or this website. The patient portal is the secure place for those conversations.
          </p>
          <p className="emergency">
            <strong>In an emergency, call 911</strong> or go to the nearest emergency room.
          </p>
        </div>
      </section>
    </>
  );
}
