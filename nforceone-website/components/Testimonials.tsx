import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

const placeholderReviews = [
  {
    quote:
      "Placeholder review — swap in a real client quote here once testimonial copy is available.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Placeholder review — swap in a real client quote here once testimonial copy is available.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Placeholder review — swap in a real client quote here once testimonial copy is available.",
    name: "Client Name",
    role: "Role, Company",
  },
];

/**
 * The source page only exposes a "Reviews" heading — the actual quotes are
 * rendered client-side by a carousel the crawler couldn't read. These cards
 * are explicit placeholders to swap for real testimonial copy later.
 */
export function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {placeholderReviews.map((review, i) => (
        <Reveal key={i} delay={i * 80}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.02]">
            <div className="flex gap-1 text-brand-500">
              {Array.from({ length: 5 }).map((_, starIdx) => (
                <Icon key={starIdx} name="sparkles" className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink-muted">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                {review.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{review.name}</p>
                <p className="text-xs text-ink-muted">{review.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
