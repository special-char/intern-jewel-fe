"use client"

import { useState } from "react"

export interface ProductCardProps {
  imageUrl: string
  category: string
  title: string
  price: string
  description: string
}

export const ProductCardLayout1 = (props: ProductCardProps) => {
  const { imageUrl, category, title, price, description } = props
  const [hovered, setHovered] = useState(false)

  if (!imageUrl && !title && !price && !description) return null

  return (
    <div
      className="w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] items-stretch overflow-hidden transition-all duration-300 ${
          hovered ? "shadow-[0px_7px_6px_0px_rgba(0,_0,_0,_0.1)]" : "shadow-[0_2px_8px_0_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Image Column */}
        <div className="product-image-container bg-card flex justify-center items-center p-4 sm:p-6 min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[320px]">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className={`max-h-[180px] sm:max-h-[220px] md:max-h-[240px] lg:max-h-64 w-auto object-contain transition-all duration-300 ${
              hovered ? "scale-105" : "scale-100"
            }`}
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Details Column */}
        <div className="flex flex-col justify-center px-4 sm:px-6 py-6 sm:py-8 min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[320px]">
          {category && (
            <p className="uppercase text-spacing text-primary mb-2 sm:mb-3">{category}</p>
          )}
          {title && (
            <p
              className={`text-subtitle font-semibold mb-2 sm:mb-3 transition-colors leading-tight ${
                hovered ? "text-primary" : "text-black"
              }`}
            >
              {title}
            </p>
          )}
          {price && (
            <div className="flex items-baseline space-x-2 mb-4 sm:mb-6">
              <span className="font-semibold text-foreground">${price}</span>
              <span className="font-semibold uppercase text-foreground">USD</span>
            </div>
          )}

          <div className="w-full h-px border-t border-border mb-4 sm:mb-6"></div>

          {description && (
            <div className="text-muted-foreground leading-relaxed">{description}</div>
          )}
        </div>
      </div>
    </div>
  )
}
