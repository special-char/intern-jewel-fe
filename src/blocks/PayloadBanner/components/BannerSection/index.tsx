import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight } from "lucide-react"
import { Button } from "@lib/components/ui/button"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export const BannerSection = ({ banner }: any) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden text-secondary">
      <ImageMedia resource={banner?.image} fill imgClassName="object-cover" />

      <div className="absolute inset-0 flex flex-col justify-between p-10">
        <p className="font-medium tracking-widest">SHOP</p>

        <div className="flex flex-col gap-4">
          <h1 className="text-heading2 whitespace-pre-line">{banner?.label}</h1>
          <p className="line-clamp-4">{banner?.description}</p>
          <Button
            variant="link"
            size="link"
            href={banner?.button?.url}
            className="w-max"
          >
            {banner?.button?.label}
            <ArrowRight className="ml-2 h-4 w-4 text-secondary" />
          </Button>
        </div>
      </div>
    </div>
  )
}
