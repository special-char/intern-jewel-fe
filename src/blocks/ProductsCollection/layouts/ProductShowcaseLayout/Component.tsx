import React, { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { ProductShowcase } from "../../components/ProductShowcase"
import { ProductShowcase as ProductShowcaseType } from "@/payload-types"

export const ProductShowcaseLayout = (props: ProductShowcaseType) => {
  const { heading, products, promotion } = props
  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <ProductShowcase
        heading={heading}
        products={products}
        promotion={promotion}
        blockType={"design1"}
      />
    </Suspense>
  )
}
