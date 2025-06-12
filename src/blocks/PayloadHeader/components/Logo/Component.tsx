import { Media } from "@/payload-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import React from "react"

type Props = {
  desktopLogo: Media
  mobileLogo: Media
}

export const Logo = ({ desktopLogo, mobileLogo }: Props) => {
  return (
    <LocalizedClientLink
      prefetch
      className="h-full flex items-center hover:opacity-60 duration-300"
      href="/"
      title="Yogateria Logo"
    >
      <div className="relative w-32 aspect-4/1 max-xl:hidden">
        <Image
          loading="lazy"
          src={desktopLogo?.url || ""}
          alt={desktopLogo?.alt || "Yogateria Logo"}
          title={desktopLogo?.alt || "Yogateria Logo"}
          fill
          className="object-contain"
          sizes="(max-width: 425px) 50vw, 15vw"
        />
      </div>
      <div className="relative aspect-4/1 max-xl:w-32 max-[375px]:w-32 max-[320px]:w-24 xl:hidden">
        <Image
          loading="lazy"
          src={mobileLogo?.url || ""}
          alt={mobileLogo?.alt || "Yogateria Logo"}
          title={mobileLogo?.alt || "Yogateria Logo"}
          fill
          className="object-contain"
          sizes="(max-width: 1280px) 18vw, (max-width: 1440) 9vw"
        />
      </div>
    </LocalizedClientLink>
  )
}
