import { Media, ShowcaseLayout3 } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

export const ShowcaseSection3 = (props: ShowcaseLayout3) => {
  const {
    image,
    showcaseHeading,
    showcaseDescription,
    button,
  } = props

  return (
    <section className="relative w-full h-[90vh] text-white overflow-hidden">
      {/* Background Image */}
      <ImageMedia
        resource={image as Media}
        imgClassName="object-cover"
        fill
      />

      {/* Base overlay for mild dark tint */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Gradient overlay only on small & medium screens */}
      <div className="block lg:hidden absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/40 to-black" />

      {/* Text Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 md:px-10">
        {showcaseHeading && (
          <h1 className="text-10xl md:text-6xl font-serif mb-4">
            {showcaseHeading}
          </h1>
        )}
        {showcaseDescription && (
          <p className="max-w-xl text-base md:text-lg text-white/90 mb-6">
            {showcaseDescription}
          </p>
        )}
        {button?.label && (
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-white text-white hover:bg-white hover:text-black transition"
          >
            <LocalizedClientLink href={button.url || ""}>
              {button.label}
            </LocalizedClientLink>
          </Button>
        )}
      </div>
    </section>
  )
}
