import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ChipGrid } from "@/components/ChipGrid";
import { ImpactBand } from "@/components/ImpactBand";
import { Accordion } from "@/components/Accordion";
import { allServices, serviceBySlug } from "@/lib/content/services";
import { sharedFaq } from "@/lib/content/site";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.heroHeadline}
        subtext={service.heroSubtext}
        icon={service.icon}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
        cta={{ label: "Get a free consultation", href: "#consultation" }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={service.why.heading} className="mx-auto max-w-3xl text-center" align="center" />
          <div className="mx-auto mt-6 max-w-3xl space-y-4">
            {service.why.paragraphs.map((p, i) => (
              <p key={i} className="text-center text-lg leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {service.typesSection && (
        <section className="border-t border-line bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="What we cover"
              title={service.typesSection.heading}
              align="center"
              className="mx-auto"
            />
            <div className="mt-12">
              <FeatureGrid items={service.typesSection.items} columns={4} />
            </div>
          </Container>
        </section>
      )}

      {service.platformsSection && (
        <section className="border-t border-line py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Platforms"
              title={service.platformsSection.heading}
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 flex justify-center">
              <ChipGrid items={service.platformsSection.items} icon="app-window" />
            </div>
          </Container>
        </section>
      )}

      {service.toolsSection && (
        <section className="border-t border-line bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Tools & technologies"
              title={service.toolsSection.heading}
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 flex justify-center">
              <ChipGrid items={service.toolsSection.items} icon="wrench" />
            </div>
          </Container>
        </section>
      )}

      {service.impact && (
        <ImpactBand heading={service.impact.heading} text={service.impact.text} />
      )}

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={sharedFaq} />
          </div>
        </Container>
      </section>
    </>
  );
}
