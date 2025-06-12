import { Media, OfferLayout1 as OfferLayoutType } from "@/payload-types"
import { Button } from "@lib/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import React from "react"

export const OfferLayout1 = (props: OfferLayoutType) => {
  const { offers } = props
  if (!offers || offers.length === 0) return null

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 hover:cursor-pointer">
      {offers.map((offer) => (
        <div
          key={offer?.id}
          className="relative aspect-2/1 overflow-hidden group"
        >
          <ImageMedia
            resource={offer?.image as Media}
            imgClassName="object-cover"
            fill
          />
          <div className="absolute inset-0 flex flex-col h-full justify-center gap-10 p-10 ">
            <span className="flex gap-2 flex-col">
              <h2 className="text-heading5 transition-colors duration-300 text-secondary group-hover:text-primary">
                {offer?.title}
              </h2>
              <h3 className="text-grey-60 text-body font-dmsans">
                {offer?.description}
              </h3>
            </span>
            <Button
              variant="link"
              size="link"
              href={offer?.button?.url || ""}
              className="w-max"
            >
              {offer?.button?.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}
    </section>
  )
}
