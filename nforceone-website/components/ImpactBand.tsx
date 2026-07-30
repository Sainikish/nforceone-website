import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function ImpactBand({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <section className="bg-brand-700 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              {heading}
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
              {text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
