import React, { Suspense } from "react"
import { ThreecolumnLayout as ThreecolumnLayoutTypes } from "@/payload-types"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { PaginationGrid } from "../../components/PaginationGrid"

export const PaginationLayout = (props: ThreecolumnLayoutTypes) => {
  const { title, products, button, cardDesign } = props
  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <PaginationGrid
        title={title}
        products={products}
        blockType={cardDesign}
        button={button}
      />
    </Suspense>
  )
}
