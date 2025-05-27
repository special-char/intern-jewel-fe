import { BrandLayout1, Media } from "@/payload-types"
import Image from "next/image"
import React from "react"

export const AssosiatedBrandLayout1 = (props: BrandLayout1) => {
  const { brands } = props
  return (
    <section className="grid grid-cols-3 lg:grid-cols-6 md:gap-6 gap-12 md:place-items-center">
      {brands.map((item) => {
        return (
          <div className="relative aspect-16/9 w-[60%]" key={item.id}>
            <Image
              src={(item.images as Media)?.url || ""}
              fill
              className="object-contain"
              alt={(item.images as Media)?.alt}
            />
          </div>
        )
      })}
    </section>
  )
}
