import { FeatureLayout1 as FeatureLayoutType, Media } from "@/payload-types"
import Image from "next/image"
import React from "react"

export const FeatureLayout1 = (props: FeatureLayoutType) => {
  const { features } = props

  const renderImage = (image: Media | null) => {
    if (!image || !image.url) {
      return (
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-xs">Icon</span>
        </div>
      )
    }

    return (
      <div className="relative w-10 h-10">
        <Image
          src={image.url}
          alt={image.alt || "Feature icon"}
          fill
          className="object-contain"
        />
      </div>
    )
  }

  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 gap-10">
      {features.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          {renderImage(item.featureIcon as Media)}
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
