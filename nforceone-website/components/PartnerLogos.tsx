import { Reveal } from "@/components/Reveal";

/**
 * The source page only exposes a "Recognized & Trusted by Leading
 * Technology Providers" heading with no logo/name data in the crawl.
 * Rendered as neutral placeholder marks pending real partner logos.
 */
export function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Reveal key={i} delay={i * 50}>
          <div className="flex h-16 items-center justify-center rounded-xl border border-line bg-surface text-xs font-medium uppercase tracking-wider text-ink-muted/60">
            Partner logo
          </div>
        </Reveal>
      ))}
    </div>
  );
}
