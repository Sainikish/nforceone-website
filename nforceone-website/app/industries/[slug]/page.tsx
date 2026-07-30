import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { allIndustries, industryBySlug } from "@/lib/content/industries";

export function generateStaticParams() {
  return allIndustries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug[slug];
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.metaDescription,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industryBySlug[slug];
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow={industry.heroEyebrow}
        title={industry.heroHeadline}
        subtext={industry.heroSubtext}
        icon={industry.icon}
        image={industry.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title, href: `/industries/${industry.slug}` },
        ]}
        cta={{ label: "Get a free consultation", href: "#consultation" }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Solutions"
            title={`Our Solutions for ${industry.title}`}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <FeatureGrid items={industry.solutions} columns={4} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {industry.itServicesBand.heading}
              </h2>
              <p className="mt-4 text-lg text-white/70">
                {industry.itServicesBand.text}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-line bg-surface p-10 text-center">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                {industry.costBand.heading}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-ink-muted">
                {industry.costBand.text}
              </p>
              <Button href="#consultation" size="lg" showArrow>
                Get a free consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
