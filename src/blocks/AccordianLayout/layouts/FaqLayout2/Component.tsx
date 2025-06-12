import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components/ui/accordion"
import RichText from "@components/payload/RichText"
import { FaqLayout2 as FaqLayoutTypes, Media } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { SerializedEditorState } from "node_modules/lexical/LexicalEditorState"

const AccordionFunction = ({
  heading,
  accordian,
  singleItemOpen,
}: FaqLayoutTypes) => {
  return (
    <div className="bg-card flex flex-col gap-2 p-4 sm:p-10">
      <h2 className="text-heading4 text-center text-foreground">{heading}</h2>
      <Accordion
        type={singleItemOpen ? "single" : "multiple"}
        collapsible={singleItemOpen || false}
        className="flex flex-col gap-4 p-4"
      >
        {accordian.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            variant="border_box"
          >
            <AccordionTrigger variant="prefixicon">
              {item.title}
            </AccordionTrigger>
            <AccordionContent variant="prefixicon">
              <RichText
                data={item.content as SerializedEditorState}
                enableGutter={false}
                enableProse={false}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

// Main Component
export const FaqLayout2 = (props: FaqLayoutTypes) => {
  return (
    <section className="bg-background">
      <div className="w-full relative">
        <ImageMedia
          resource={props.image as Media}
          imgClassName="object-cover"
          fill
        />

        {/* Foreground Content */}
        <div className="relative z-10 sm:p-20">
          <AccordionFunction {...props} />
        </div>
      </div>
    </section>
  )
}
