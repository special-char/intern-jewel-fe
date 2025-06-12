import { FeatureLayout2 as FeatureLayoutType, Media } from "@/payload-types"
import Thumbnail from "@modules/products/components/thumbnail"
import React from "react"

export const FeatureLayout2 = (props: FeatureLayoutType) => {
  const { features } = props
  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 gap-10">
      {features.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-2">
          {/* <div className="relative aspect-square w-14 bg-card overflow-hidden rounded-full"> */}
          <Thumbnail
            thumbnail={(item.featureIcon as Media)?.url || ""}
            size="square"
            className="object-contain w-14 overflow-hidden bg-transparent"
          />
          {/* </div> */}

          <div>
            <p className="text-caption font-semibold text-center line-clamp-1">
              {item.title}
            </p>
            <p className="text-center line-clamp-2">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
