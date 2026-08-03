"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/content/site";
import {
  servicesIndex,
  serviceCategories,
} from "@/lib/content/services-index";
import { industriesIndex } from "@/lib/content/industries-index";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<
    "services" | "industries" | null
  >(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <Container className="flex h-24 items-center justify-between py-3">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src={site.logo}
            alt={site.name}
            width={222}
            height={152}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-white",
              pathname === "/" ? "text-brand-500" : "text-white/70"
            )}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-white",
              pathname === "/about" ? "text-brand-500" : "text-white/70"
            )}
          >
            About Us
          </Link>

          <div className="group relative">
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Services
              <Icon name="chevron-down" className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-6 rounded-2xl border border-line bg-white p-6 shadow-xl shadow-ink/5">
                {serviceCategories.map((category) => (
                  <div key={category}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {category}
                    </p>
                    <ul className="space-y-2.5">
                      {servicesIndex
                        .filter((s) => s.category === category)
                        .map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="text-sm text-ink-muted hover:text-brand-700"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/industries"
              className="flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Industries
              <Icon name="chevron-down" className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 rounded-2xl border border-line bg-white p-6 shadow-xl shadow-ink/5">
                {industriesIndex.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={ind.hasPage ? `/industries/${ind.slug}` : "/contact"}
                    className="text-sm text-ink-muted hover:text-brand-700"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-brand-500" : "text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" size="sm">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "x" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <Link
              href="/"
              className="rounded-lg px-1 py-3 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-lg px-1 py-3 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            <MobileSection
              label="Services"
              href="/services"
              open={mobileSection === "services"}
              onToggle={() =>
                setMobileSection((v) => (v === "services" ? null : "services"))
              }
            >
              {servicesIndex.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block py-1.5 text-sm text-white/70"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </MobileSection>

            <MobileSection
              label="Industries"
              href="/industries"
              open={mobileSection === "industries"}
              onToggle={() =>
                setMobileSection((v) =>
                  v === "industries" ? null : "industries"
                )
              }
            >
              {industriesIndex.map((ind) => (
                <Link
                  key={ind.slug}
                  href={ind.hasPage ? `/industries/${ind.slug}` : "/contact"}
                  className="block py-1.5 text-sm text-white/70"
                  onClick={() => setMobileOpen(false)}
                >
                  {ind.title}
                </Link>
              ))}
            </MobileSection>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-1 py-3 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2">
              <Button href="/contact" showArrow>
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function MobileSection({
  label,
  href,
  open,
  onToggle,
  children,
}: {
  label: string;
  href: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10 py-1">
      <div className="flex items-center justify-between">
        <Link href={href} className="py-3 text-sm font-medium text-white">
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`Toggle ${label}`}
          className="p-3 text-white/70"
        >
          <Icon
            name="chevron-down"
            className={cn(
              "h-4 w-4 transition-transform",
              open && "rotate-180"
            )}
          />
        </button>
      </div>
      {open && (
        <div className="max-h-64 overflow-y-auto pb-2 pl-1">{children}</div>
      )}
    </div>
  );
}
