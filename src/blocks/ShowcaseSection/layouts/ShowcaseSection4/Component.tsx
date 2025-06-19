import { Media } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"
import { ShowcaseLayout4 } from "@/payload-types" // or the correct path

export const ShowcaseSection4 = (props: ShowcaseLayout4) => {
  const {
    image,
    showcaseHeading,
    showcaseDescription,
    button,
  } = props

  return (

    <>
      <div className="relative aspect-4/3 lg:aspect-[4/1.4] text-secondary">
        <ImageMedia
          resource={image as Media}
          imgClassName="object-cover"
          fill
        />
        <div className="absolute inset-0 flex max-lg:flex-col justify-between items-start lg:items-end h-full p-4 md:p-10">
          <div className="flex flex-col gap-4 lg:gap-6 pl-6 lg:max-w-[400px]">
            <h1 className="text-heading3">{showcaseHeading}</h1>
            <h3 className="line-clamp-3 text-caption text-justify text-LG">
              {showcaseDescription}
            </h3>
            <Button variant={"animated"} className="w-max text-lg" size={"xl"}>
              <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
              <LocalizedClientLink
                href={button.url || ""}
                className={
                  "relative z-10 duration-300 ease-out group-hover:text-secondary-foreground"
                }
              >
                {button.label}
              </LocalizedClientLink>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}