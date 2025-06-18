import { Media } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

interface ListBannerLayout1 {
  image: Media
  listBannerTagline: string
  listBannerHeading: string
  listBannerDescription: string
  button: {
    label: string
    url: string
  }
}

export const ListBanner1Component = (props: ListBannerLayout1) => {
  const {
    image,
    listBannerTagline,
    listBannerHeading,
    listBannerDescription,
    button,
  } = props

  return (
    <section>
      <div className="relative aspect-4/3 lg:aspect-2/1 text-secondary">
        <ImageMedia
          resource={image}
          imgClassName="object-cover"
          fill
        />
        <div className="absolute inset-0 flex items-center justify-start p-4 md:p-10">
          <div className="bg-white/80 dark:bg-black/60 p-4 md:p-6 rounded-md max-w-[500px]">
            {listBannerTagline && (
              <p className="text-sm uppercase tracking-widest mb-2">
                {listBannerTagline}
              </p>
            )}
            <h2 className="text-heading4 font-bold mb-2">{listBannerHeading}</h2>
            <p className="text-body font-dmsans mb-4 text-sm md:text-base">
              {listBannerDescription}
            </p>
            <Button variant={"animated"} className="w-max" size={"lg"}>
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
    </section>
  )
}

