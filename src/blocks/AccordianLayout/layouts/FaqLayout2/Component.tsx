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

// Inner Accordion Component
const AccordionFunction = ({
  heading,
  accordian,
  singleItemOpen,
}: FaqLayoutTypes) => {
  return (
    <div className="flex flex-col gap-12 w-full bg-white z-10 relative px-12 py-8">
      <h2 className="text-heading4 text-center  text-foreground w-full">
        {heading}
      </h2>
      <Accordion
        type={singleItemOpen ? "single" : "multiple"}
        collapsible={singleItemOpen ? true : undefined}
      >
        {accordian.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            variant="border_box"
            className="w-full mb-6 border border-border"
          >
            <AccordionTrigger
              variant="prefixicon"
              className="w-full text-foreground"
            >
              <span className="text-large-semi text-foreground">
                {item.title}
              </span>
            </AccordionTrigger>
            <AccordionContent variant="prefixicon" className="w-full">
              <div className="text-xl-regular text-foreground">
                <RichText
                  data={item.content as SerializedEditorState}
                  enableGutter={false}
                  enableProse={false}
                />
              </div>
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
    <section className="bg-background min-h-screen flex items-center relative mx-container ">
      {/* Background Image */}
      <ImageMedia
        resource={props.image as Media}
        imgClassName="object-cover"
        fill
      />
      {/* Foreground Content */}
      <AccordionFunction {...props} />
    </section>
  )
}
