import React from "react"
import ProductCardSkeleton from "../skeleton-product-card"

type Props = { ids?: string[] }

const SkeletonProductGrid = ({ ids }: Props) => {
  const items = Array(ids?.length || 8).fill(null)
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {items.map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </section>
  )
}

export default SkeletonProductGrid
