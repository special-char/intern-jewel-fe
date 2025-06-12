import React, { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { ProductPromo } from "../../components/ProductPromo"
import { PromoProductLayout as PromoProductLayoutType } from "@/payload-types"

export const PromoProductLayout = (props: PromoProductLayoutType) => {
  const { heading, products, promotion } = props
  console.log(heading,products,promotion,"heading")
  
  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <ProductPromo
        heading={heading}
        products={products}
        promotion={promotion}
        blockType="design2"
      />
    </Suspense>
  )
}
