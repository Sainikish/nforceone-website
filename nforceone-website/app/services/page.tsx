import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { IndexTileCard } from "@/components/IndexTileCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  servicesIndex,
  serviceCategories,
  servicesIndexIntro,
} from "@/lib/content/services-index";

export const metadata: Metadata = {
  title: "Services",
  description: servicesIndexIntro.heroSubtext,
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesIndexIntro.heroEyebrow}
        title={servicesIndexIntro.heroHeadline}
        subtext={servicesIndexIntro.heroSubtext}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Overview"
            title={servicesIndexIntro.sectionHeading}
            description={servicesIndexIntro.sectionText}
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      {serviceCategories.map((category) => (
        <section
          key={category}
          className="border-t border-line py-16 first:border-t-0 sm:py-20"
        >
          <Container>
            <h2 className="text-2xl font-bold text-ink">{category}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesIndex
                .filter((s) => s.category === category)
                .map((service, i) => (
                  <IndexTileCard
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    icon={service.icon}
                    title={service.title}
                    teaser={service.teaser}
                    delay={(i % 3) * 60}
                  />
                ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-line bg-ink py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {servicesIndexIntro.whyHeading}
              </h2>
              <p className="mt-4 text-lg text-white/70">
                {servicesIndexIntro.whyText}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="#consultation" size="lg" showArrow>
                  {servicesIndexIntro.whyCta}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
