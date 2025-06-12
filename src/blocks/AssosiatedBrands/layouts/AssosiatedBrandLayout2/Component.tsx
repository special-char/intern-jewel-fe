import { BrandLayout2, Media } from "@/payload-types"
import Image from "next/image"
import React from "react"

export const AssosiatedBrandLayout2 = (props: BrandLayout2) => {
  const { brands } = props
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 md:gap-6 gap-12 place-items-center mx-container py-16 my-10 bg-card">
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
    </div>
  )
}
