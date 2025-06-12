import React from "react"
import { BannerCarousel } from "../../components/BannerCarousel"
import { BannerSection } from "../../components/BannerSection"
import { BannerLayout2 as BannerLayoutType } from "@/payload-types"

export const BannerLayout2 = (props: BannerLayoutType) => {
  const { carousel, banner } = props
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
      <BannerCarousel carousel={carousel} />
      <BannerSection banner={banner} />
    </section>
  )
}
