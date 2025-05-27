"use client"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/lib/utils"
import { ChevronDownIcon, ChevronUpIcon, MinusIcon } from "lucide-react"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: "default" | "border_box"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className, {
      ["border border-primary bg-primary/5 py-2 px-4"]:
        variant === "border_box",
    })}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  variant?: "default" | "prefixicon" | "no_icon" | "chevronIcon" | "border_box"
}
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant = "default", ...props }, ref) => (
  // <AccordionPrimitive.Header className="flex">
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between w-full py-4 text-subtitle font-semibold group transition-all hover:underline",
      className,
      {
        ["justify-start text-left gap-10"]: variant === "prefixicon",
      }
    )}
    {...props}
  >
    <>
      {variant === "prefixicon" && (
        <div className="relative">
          <MinusIcon
            className={`h-5 w-5 transition-transform duration-300 text-primary`}
          />
          <MinusIcon className=" group-data-[state=open]:hidden absolute top-0 rotate-90 h-5 w-5 transition-transform duration-300 text-primary" />
        </div>
      )}
      <h3 className="text-body font-dmsans">{children}</h3>
      {(variant === "border_box" || variant === "default") && (
        <div className="relative">
          <MinusIcon className={`h-5 w-5 transition-transform duration-300`} />
          <MinusIcon className=" group-data-[state=open]:hidden absolute top-0 rotate-90 h-5 w-5 transition-transform duration-300" />
        </div>
      )}
      {variant === "chevronIcon" && (
        <div className="relative">
          <ChevronUpIcon className="h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=closed]:hidden" />
          <ChevronDownIcon className="h-5 w-5 shrink-0 group-data-[state=open]:hidden transition-transform duration-300" />
        </div>
      )}
    </>
  </AccordionPrimitive.Trigger>
  // </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    variant?: "default" | "prefixicon"
  }
>(({ className, children, variant = "default", ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    {/* <div /> */}
    <div
      className={cn(
        "pb-4 pt-0 ",
        className,

        {
          ["justify-start text-left ml-14"]: variant === "prefixicon",
        }
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
