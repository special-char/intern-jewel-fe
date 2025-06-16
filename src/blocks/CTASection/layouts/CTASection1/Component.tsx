import React from "react";
import { CTASectionBlock as CTASectionLayout1Type } from "@/payload-types";
import { AnimatedButton } from "@/blocks/PayloadButton/layouts/AnimatedButton/Component";
import { Button } from "@lib/components/ui/button";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export const CTASectionLayout1 = (props: CTASectionLayout1Type) => {
  const { title, button } = props;

  if (!title && !button?.label && !button?.url) return null;

  return (
    <section className="py-0 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {title && (
          <h3 className="text-foreground">
            {title}
          </h3>
        )}

        {button?.label && (button.url || button.reference) && (
          <Button variant={"animated"} className="w-max group" size={"lg"}>
          <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
          <LocalizedClientLink
            href={button.url || ""}
            className="relative z-10 duration-300 ease-out group-hover:text-secondary-foreground"
          >
            {button.label}
          </LocalizedClientLink>
        </Button>
        )}
      </div>
    </section>
  );
};