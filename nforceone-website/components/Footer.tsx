import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Container } from "@/components/Container";
import { NewsletterForm } from "@/components/NewsletterForm";
import { site, contact } from "@/lib/content/site";
import { servicesIndex } from "@/lib/content/services-index";
import { industriesIndex } from "@/lib/content/industries-index";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const featuredServices = servicesIndex.slice(0, 6);
  const featuredIndustries = industriesIndex.filter((i) => i.hasPage).slice(0, 6);

  return (
    <footer className="bg-ink text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center" aria-label={site.name}>
              <Image
                src={site.logo}
                alt={site.name}
                width={222}
                height={152}
                className="h-12 w-auto rounded-lg"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NForceOne on LinkedIn"
              className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <Icon name="linkedin" className="h-4.5 w-4.5" />
            </a>
            <div className="mt-8 max-w-xs">
              <NewsletterForm />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-3">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Industries</p>
            <ul className="mt-4 space-y-3">
              {featuredIndustries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
                >
                  View all industries
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-white">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              {contact.offices.map((office) => (
                <li key={office.label} className="flex items-start gap-2">
                  <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    <span className="block font-medium text-white/80">
                      {office.label}
                    </span>
                    {office.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
