import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/Icon";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20",
  secondary:
    "bg-white text-ink border border-line hover:border-brand-300 hover:text-brand-700",
  ghost: "text-ink hover:text-brand-700",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  type,
  onClick,
  ...rest
}: {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {showArrow && (
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={cn(classes, "group")} onClick={onClick}>
      {content}
    </button>
  );
}
