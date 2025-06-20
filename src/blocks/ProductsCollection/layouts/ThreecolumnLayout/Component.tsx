import React, { Suspense } from "react"
import { ThreeColumnGrid } from "../../components/ThreeColumnGrid"
import { ThreecolumnLayout as ThreecolumnLayoutTypes } from "@/payload-types"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { PaginatedGrid } from "../../components/PaginatedGrid"

export const ThreecolumnLayout = (props: ThreecolumnLayoutTypes) => {
  const { title, products, button, cardDesign, enablePagination } = props
  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      {enablePagination ? (
        <PaginatedGrid
          title={title}
          products={products}
          blockType={cardDesign}
          button={button}
        />
      ) : (
        <ThreeColumnGrid
          title={title}
          products={products}
          blockType={cardDesign}
          button={button}
        />
      )}
    </Suspense>
  )
}
