import type { StaticImageData } from "next/image"
import React from "react"

import { cn } from "@/utilities/ui"
import RichText from "@/components/payload/RichText"
import type { ImageBlock as ImageBlockProps } from "@/payload-types"
import { Media } from "@/components/payload/Media"

type Props = ImageBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  aspectRatio?: string
}

export const ImageBlock: React.FC<Props> = (props) => {
  const {
    // captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
    aspectRatio = '16/6.7',
  } = props


  return (
    //<section>
    <section
      className={cn(
        "flex flex-col lg:flex-row lg:items-center px-16",
        enableGutter && "container",
        className
      )}
    >
      {(media || staticImage) && (
        <div
          className={cn(
            "relative w-full overflow-hidden", // Added my-0 to remove vertical margin
          )}
          style={{ aspectRatio: aspectRatio }}
        >
          <Media
            imgClassName={cn(
              "absolute inset-0 w-full h-full object-cover",
              "border border-border rounded-none",
              imgClassName
            )}
            resource={media}
            src={staticImage}
          />
        </div>
      )}
    </section>
  )
}
