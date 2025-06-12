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
    <div className="relative z-10 w-full flex justify-center px-4">
      <div className="w-full mx-[5vw] my-[6vw] md:mx-24 md:my-24 bg-background px-6 md:px-12 py-8">
        <h2 className="text-heading4 text-center text-foreground w-full mb-8">
          {heading}
        </h2>
        <Accordion
          type={singleItemOpen ? "single" : "multiple"}
          collapsible={singleItemOpen || false}
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
    </div>
  )
}

// Main Component
export const FaqLayout2 = (props: FaqLayoutTypes) => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center relative">
      <div className="w-full relative">
        <ImageMedia
          resource={props.image as Media}
          imgClassName="object-cover"
          fill
        />

        {/* Foreground Content */}
        <AccordionFunction {...props} />
      </div>
    </section>
  )
}
