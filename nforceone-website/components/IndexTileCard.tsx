import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/types";

export function IndexTileCard({
  href,
  icon,
  title,
  teaser,
  disabled = false,
  delay = 0,
}: {
  href: string;
  icon: IconName;
  title: string;
  teaser: string;
  disabled?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {teaser}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
          {disabled ? "Get in touch" : "Learn more"}
          <Icon
            name="arrow-right"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}
