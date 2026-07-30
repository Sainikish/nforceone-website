import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { careers, contact } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.intro,
};

const cultureAttributes = [
  {
    icon: "sparkles" as const,
    title: "Team happiness",
    description: "We put our people first.",
  },
  {
    icon: "clock" as const,
    title: "Work/life balance",
    description: "Work is important, but so is play.",
  },
  {
    icon: "trending-up" as const,
    title: "Professional development",
    description: "We grow careers as we grow.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={careers.heroHeadline}
        subtext={careers.intro}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Culture"
            title={careers.cultureHeading}
            description={careers.cultureText}
          />
          <div className="mt-12">
            <FeatureGrid items={cultureAttributes} columns={3} />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Join us" title={careers.openingsHeading} />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {careers.openings.map((role, i) => (
              <Reveal key={role} delay={i * 70}>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.02]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name="clipboard-check" className="h-5 w-5" />
                    </span>
                    <p className="text-base font-semibold text-ink">{role}</p>
                  </div>
                  <Button
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(
                      `Application: ${role}`
                    )}`}
                    variant="secondary"
                    size="sm"
                  >
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {careers.closingHeading}
              </h2>
              <div className="mt-8 flex justify-center">
                <Button href="#consultation" size="lg" showArrow>
                  Get in touch
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
