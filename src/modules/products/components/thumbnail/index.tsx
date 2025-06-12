import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"
import clsx from "clsx"

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?:
    | "small"
    | "medium"
    | "large"
    | "full"
    | "square"
    | "portrait"
    | "video"
    | "wide-banner"
    | "standard"
  isFeatured?: boolean
  className?: string
  "data-testid"?: string
  imageClassName?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size,
  isFeatured,
  className,
  imageClassName,
  "data-testid": dataTestid,
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <Container
      className={clx(
        "relative w-full rounded-none overflow-hidden p-4 group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 shadow-none",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/16]": !isFeatured && size !== "square",
          "aspect-square": size === "square",
          "aspect-3/4": size === "portrait",
          "aspect-16/9": size === "video",
          "aspect-2/1": size === "wide-banner",
          "aspect-4/3": size === "standard",
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
    >
      <ImageOrPlaceholder
        image={initialImage}
        size={size}
        imageClassName={imageClassName}
      />
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
  imageClassName,
}: Pick<ThumbnailProps, "size"> & {
  image?: string
  imageClassName?: string
}) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className={clsx(
        "absolute inset-0 object-cover object-center",
        imageClassName
      )}
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-gray-200">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
