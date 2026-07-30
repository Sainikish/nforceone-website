import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { contact } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NForceOne — offices in Texas and Hyderabad, remote support available worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contact.ctaHeading}
        subtext={`Email us at ${contact.email} to schedule a free consultation.`}
        icon="mail"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Schedule a free consultation", href: "#consultation" }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 rounded-3xl border border-line bg-brand-700 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {contact.expertHeading}
                </h2>
                <p className="mt-2 max-w-xl text-brand-100">
                  {contact.expertText}
                </p>
              </div>
              <Link
                href="#consultation"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                {contact.expertCta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title={contact.locationsHeading}
            description={contact.locationsText}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {contact.offices.map((office, i) => (
              <Reveal key={office.label} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-sm shadow-ink/[0.02]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name="map-pin" className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
                    {office.label}
                  </p>
                  <p className="mt-1 text-xl font-bold text-ink">
                    {office.name}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {office.address}
                  </p>
                  <a
                    href={`mailto:${office.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    <Icon name="mail" className="h-4 w-4" />
                    {office.email}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
