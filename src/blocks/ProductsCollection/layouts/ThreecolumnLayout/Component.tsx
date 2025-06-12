import React, { Suspense } from "react"
import { ThreeColumnGrid } from "../../components/ThreeColumnGrid"
import { ThreecolumnLayout as ThreecolumnLayoutTypes } from "@/payload-types"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"

export const ThreecolumnLayout = (props: ThreecolumnLayoutTypes) => {
  const { title, products, button } = props
  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <ThreeColumnGrid
        title={title}
        products={products}
        blockType={"design3"}
        button={button}
      />
    </Suspense>
  )
}
