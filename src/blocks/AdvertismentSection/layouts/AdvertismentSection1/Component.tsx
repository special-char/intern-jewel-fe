import {
  AdvertismentSection1 as AdvertismentSectionType,
  Media,
} from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { Thumb } from "@radix-ui/react-scroll-area"
import Image from "next/image"
import React from "react"

export const AdvertismentSection1 = (props: AdvertismentSectionType) => {
  const { image, adTagline, adHeading, adDescription, button } = props
  return (
    <section>
      <div className="relative w-full md:aspect-2/1 aspect-4/3">
        <ImageMedia
          resource={image as Media}
          fill
          imgClassName="object-cover"
          alt={adHeading || "Advertisement image"}
        />
        <div className="absolute inset-0 flex justify-center items-center p-4">
          <div className="bg-background p-6 max-w-[600px]">
            <div className="border border-primary p-8 flex flex-col gap-4 items-center">
              <p className="text-spacing text-primary font-semibold">
                {adTagline}
              </p>
              <p className="font-semibold text-subtitle">{adHeading}</p>
              <p className="text-justify">{adDescription}</p>
              <Button size={"lg"}>
                <LocalizedClientLink href={button.url!}>
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
