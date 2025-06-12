import React from "react"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { BannerLayout1 as BannerLayoutType, Media } from "@/payload-types"
import { Button } from "@lib/components/ui/button"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export const BannerLayout1 = (props: BannerLayoutType) => {
  const { BannerImage1, BannerImage2, title, description, button, link } = props

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card">
      <div className="flex flex-col gap-8 justify-center">
        <h1 className="text-banner font-playfair whitespace-pre-line">
          {title}
        </h1>
        <p>{description}</p>
        <Button variant="animated" className="w-max" size="lg">
          <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
          <LocalizedClientLink
            href={button?.url || ""}
            className="relative z-10 duration-300 ease-out group-hover:text-secondary-foreground"
          >
            {button?.label}
          </LocalizedClientLink>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 items-end">
        <div className="aspect-3/4 overflow-hidden relative">
          <ImageMedia
            resource={BannerImage1 as Media}
            imgClassName="object-cover"
            fill
          />
        </div>
        <div>
          <div className="aspect-3/4 overflow-hidden relative">
            <ImageMedia
              resource={BannerImage2 as Media}
              imgClassName="object-cover"
              fill
            />
          </div>
          <Button
            variant="link"
            size="link"
            href={link?.url || ""}
            className="text-center w-full py-2"
          >
            {link?.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
