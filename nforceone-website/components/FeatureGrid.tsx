import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import type { FeatureItem } from "@/lib/types";

export function FeatureGrid({
  items,
  columns = 4,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={cn("grid grid-cols-1 gap-6", colClass)}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 4) * 60}>
          <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
            {item.icon && (
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
            )}
            <h3 className="mt-4 text-base font-semibold text-ink">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
