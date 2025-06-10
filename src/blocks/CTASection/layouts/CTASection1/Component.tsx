import React from "react";
import { CTASectionBlock as CTASectionLayout1Type } from "@/payload-types";
import { AnimatedButton } from "@/blocks/PayloadButton/layouts/AnimatedButton/Component";

export const CTASectionLayout1 = (props: CTASectionLayout1Type) => {
  const { title, button } = props;

  if (!title && !button?.label && !button?.url) return null;

  return (
    <section className="py-0 px-6 text-center bg-card">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 py-16">
        {title && (
          <h3 className="text-3xl sm:text-4xl font-serif text-foreground">
            {title}
          </h3>
        )}

        {button?.label && (button.url || button.reference) && (
          <AnimatedButton
            className="text-base sm:text-xl px-8 py-4"
            button={{
              label: button.label,
              url:
                button.type === "custom" && button.url
                  ? button.url
                  : button.reference && typeof button.reference !== "number" && 'slug' in button.reference
                  ? `/${button.reference.slug}`
                  : "#",
              newTab: button.newTab,
            }}
          />
        )}

        <div className="border-t border-border w-full mt-12" />
      </div>
    </section>
  );
};
