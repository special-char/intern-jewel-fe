import { Media, ShowcaseLayout3 } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

export const ShowcaseSection3 = (props: ShowcaseLayout3) => {
  const { image, showcaseHeading, showcaseDescription, button } = props

  return (
    <section className="relative w-full h-[90vh] text-foreground overflow-hidden">
      {/* Background Image */}
      <ImageMedia resource={image as Media} imgClassName="object-cover" fill />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Gradient overlay for small screens */}
      <div className="block lg:hidden absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/40 to-black" />

      {/* Text Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-spacing md:px-[2.5rem]">
        {/* SVG Logo */}
        <div
          className="w-12 h-12 md:w-16 md:h-16 mb-spacing bg-no-repeat bg-contain bg-center opacity-80 filter invert"
          style={{ backgroundImage: "url('/images/test.svg')" }}
        />

        {/* Heading */}
        {showcaseHeading && (
          <h1 className="text-banner text-white mb-spacing mt-15 mb-6 ">
            {showcaseHeading}
          </h1>
        )}

        {/* Description */}
        {showcaseDescription && (
          <p className="max-w-xxl mb-6 text-body text-muted mb-spacing">
            {showcaseDescription}
          </p>
        )}

        {/* Button */}
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
