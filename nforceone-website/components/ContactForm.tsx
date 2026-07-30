"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { consultationForm } from "@/lib/content/site";

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-10 text-center ${className ?? ""}`}
      >
        <Icon name="check-circle" className="h-10 w-10 text-brand-600" />
        <p className="text-lg font-semibold text-ink">Thanks — we got it.</p>
        <p className="text-sm text-ink-muted">
          A solutions expert will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="text-xl font-bold text-ink">{consultationForm.heading}</h3>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {consultationForm.fields.map((field) => (
          <div
            key={field.name}
            className={field.type === "textarea" ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              {field.label}
              {field.required && <span className="text-brand-600"> *</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={4}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            )}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto" showArrow>
        {consultationForm.submitLabel}
      </Button>
    </form>
  );
}
