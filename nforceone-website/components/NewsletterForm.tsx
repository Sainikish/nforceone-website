"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { newsletterForm } from "@/lib/content/site";
import { cn } from "@/lib/cn";

export function NewsletterForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className="text-sm font-semibold text-white">
        {newsletterForm.heading}
      </p>
      <div className="mt-3 flex gap-2">
        <input
          type="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          className="w-full min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40"
        />
        <button
          type="submit"
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-100",
            submitted && "bg-brand-400 text-white"
          )}
        >
          {submitted ? <Icon name="check-circle" className="h-4 w-4" /> : newsletterForm.submitLabel}
        </button>
      </div>
    </form>
  );
}
