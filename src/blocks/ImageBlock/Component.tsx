// import type { StaticImageData } from "next/image"

// import { cn } from "@/utilities/ui"
// import React from "react"
// import RichText from "@/components/payload/RichText"

// import type { ImageBlock as ImageBlockProps } from "@/payload-types"

// import { Media } from "@/components/payload/Media"

// type Props = ImageBlockProps & {
//   breakout?: boolean
//   captionClassName?: string
//   className?: string
//   enableGutter?: boolean
//   imgClassName?: string
//   staticImage?: StaticImageData
//   disableInnerContainer?: boolean
// }

// export const ImageBlock: React.FC<Props> = (props) => {
//   const {
//     captionClassName,
//     className,
//     enableGutter = true,
//     imgClassName,
//     media,
//     staticImage,
//     disableInnerContainer,
//     aspectRatio = '1280/568',
//   } = props

//   let caption
//   if (media && typeof media === "object") caption = media.caption

//   return (
//     <div
//       className={cn(
//         "",
//         {
//           container: enableGutter,
//         },
//         className
//       )}
//     >
//       {(media || staticImage) && (
//         <div className="relative w-full" style={{ aspectRatio: aspectRatio || '1280/568' }}>
//           <Media
//             imgClassName={cn(
//               "border border-border rounded-[0.0rem] w-full h-full object-cover",
//               imgClassName
//             )}
//             resource={media}
//             src={staticImage}
//           />
//         </div>
//       )}
//     </div>
//   )
// }
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
}

export const ImageBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props

  let caption
  if (media && typeof media === "object") caption = media.caption

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
            "relative w-full overflow-hidden", // relative container
            "md:aspect-[4/3] aspect-[5/4] lg:aspect-[16/9]"
          )}
        >
          <Media
            imgClassName={cn(
              "absolute inset-0 w-full h-full object-cover", // ✅ key fix here
              "border border-border rounded-none",
              imgClassName
            )}
            resource={media}
            src={staticImage}
          />
        </div>
      )}

      {/* {caption && (
        <div className={cn("mt-4 lg:mt-0 lg:ml-6", captionClassName)}>
          <RichText content={caption} />
        </div>
      )} */}
    </section>
  )
}
