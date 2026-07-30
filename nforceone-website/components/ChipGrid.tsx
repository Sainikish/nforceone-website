import { Icon } from "@/components/Icon";
import type { IconName } from "@/lib/types";

export function ChipGrid({
  items,
  icon = "check-circle",
}: {
  items: string[];
  icon?: IconName;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm shadow-ink/[0.02]"
        >
          <Icon name={icon} className="h-4 w-4 text-brand-600" />
          {item}
        </span>
      ))}
    </div>
  );
}
