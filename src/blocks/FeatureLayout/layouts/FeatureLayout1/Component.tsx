import {  FeatureLayout1 as FeatureLayoutType, Media } from "@/payload-types"
import Thumbnail from "@modules/products/components/thumbnail"
import React from "react"

export const FeatureLayout1 = (props: FeatureLayoutType) => {
  const { features } = props
  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 gap-10">
      {features.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
            <Thumbnail
              thumbnail={(item.featureIcon as Media)?.url || ""}
              size="square"
              className="object-cover bg-transparent w-10"
            />

          <div>
            <h2 className="text-caption font-dmsans font-semibold line-clamp-1">
              {item.title}
            </h2>
            <p className="line-clamp-1">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
