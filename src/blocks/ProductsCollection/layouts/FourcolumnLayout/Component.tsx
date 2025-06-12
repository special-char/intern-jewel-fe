import React, { Suspense } from "react"
import { FourcolumnLayout as FourcolumnLayoutType } from "@/payload-types"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { FourColumnGrid } from "../../components/FourColumnGrid"

export const FourcolumnLayout = (props: FourcolumnLayoutType) => {
  const { title, products, button } = props

  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <FourColumnGrid
        title={title}
        products={products}
        blockType={"design2"}
        button={button}
      />
    </Suspense>
  )
}
