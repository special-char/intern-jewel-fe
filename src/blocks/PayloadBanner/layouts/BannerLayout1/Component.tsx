import React from "react"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { BannerLayout1 as BannerLayoutType, Media } from "@/payload-types"
import { Button } from "@lib/components/ui/button"
import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { Block } from "payload/types"
import Image from "next/image"

interface BannerLayout1Props {
  BannerImage1?: Media | string | null
  BannerImage2?: Media | string | null
  title?: string
  description?: string
  button?: {
    reference?: {
      id: string
      relationTo: string
    }
    url?: string
    label: string
  }
  link?: {
    reference?: {
      id: string
      relationTo: string
    }
    url?: string
    label: string
  }
}

export const BannerLayout1Component: React.FC<{ block: Block & BannerLayout1Props }> = ({ block }) => {
  const { BannerImage1, BannerImage2, title, description, button, link } = block

  const renderImage = (image: Media | string | null | undefined, alt: string) => {
    if (!image) return null
    
    if (typeof image === "string") {
      return (
        <div className="relative w-full h-full">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
      )
    }

    if ("url" in image && image.url) {
      return (
        <div className="relative w-full h-full">
          <Image src={image.url} alt={image.alt || alt} fill className="object-cover" />
        </div>
      )
    }

    return null
  }

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
        <div className="relative aspect-[4/3]">
          {renderImage(BannerImage1, "Banner Image 1") || (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
        </div>
        <div>
          <div className="relative aspect-[4/3]">
            {renderImage(BannerImage2, "Banner Image 2") || (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image not available</span>
              </div>
            )}
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
