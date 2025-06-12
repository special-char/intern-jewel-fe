import React, { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { PromoProduct2, PromoProductLayout } from "@/payload-types"
import { ProductPromo2 } from "../../components/ProductPromo2"


export const PromoProductLayout2 = (props: PromoProduct2) => {
  const { heading, products, promotion } = props
  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <ProductPromo2
        heading={heading}
        products={products}
        promotion={promotion}
        blockType="design2"
      />
    </Suspense>
  )
}
