import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components/ui/accordion"
import { FaqLayout as FaqLayoutTypes } from "@/payload-types"
import RichText from "@components/payload/RichText"
import React from "react"

export const FaqLayout = (props: FaqLayoutTypes) => {
  const { heading, accordian } = props

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-heading4 text-center">{heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {accordian.map((item) => {
          return (
            <Accordion type="single" collapsible key={item.id}>
              <AccordionItem value="item-1" variant="border_box">
                <AccordionTrigger variant="prefixicon">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent variant="prefixicon">
                  <RichText
                    data={item.content}
                    enableGutter={false}
                    enableProse={false}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        })}
      </div>
    </section>
  )
}
