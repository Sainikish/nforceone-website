import { Icon } from "@/components/Icon";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { partnerBand, partnerCapabilities } from "@/lib/content/site";

export function PartnerCTA() {
  return (
    <section
      id="consultation"
      className="scroll-mt-24 border-t border-line bg-surface py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {partnerBand.heading}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
              {partnerBand.text}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {partnerCapabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-2.5 text-sm text-ink"
                >
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-ink/5 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
