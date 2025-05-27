import { Media, ShowcaseSection2 as ShowcaseSectionType } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

export const ShowcaseSection2 = (props: ShowcaseSectionType) => {
  const {
    image,
    showcaseTagline,
    showcaseHeading,
    showcaseDescription,
    button,
  } = props

  return (
    <section>
      <div className="relative aspect-4/3 lg:aspect-2/1 text-secondary overflow-hidden">
        <ImageMedia
          resource={image as Media}
          imgClassName="object-cover"
          fill
        />
        <div className="absolute inset-0 flex flex-col items-end h-full p-4 md:p-10">
          <div className="flex flex-col justify-between h-full lg:max-w-[400px] ml-auto gap-4 lg:gap-6">
            <p className="text-spacing">{showcaseTagline}</p>
            <div className="flex flex-col gap-4">
              <h4 className="text-heading4">{showcaseHeading}</h4>
              <p className="line-clamp-3 text-body text-justify">
                {showcaseDescription}
              </p>
              <Button variant={"animated"} className="w-max group" size={"lg"}>
                <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
                <LocalizedClientLink
                  href={button.url || ""}
                  className="relative z-10 duration-300 ease-out group-hover:text-secondary-foreground"
                >
                  {button.label}
                </LocalizedClientLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
