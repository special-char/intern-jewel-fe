import React, { Suspense } from "react"
import { ThreecolumnLayout1 as ThreecolumnLayoutTypes } from "@/payload-types"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { ThreeColumnGrid1 } from "../../components/ThreeColumnGrid1"

type ComponentProps = ThreecolumnLayoutTypes & {
  searchParams?: {
    page?: string
    sortBy?: string
  }
}

export const ThreecolumnLayout1 = (props: ComponentProps) => {
  const { 
    products, 
    productsPerPage = 6, 
    showPagination = true, 
    searchParams,
    title,
    button 
  } = props
  
  // Extract page from search params with fallback to 1
  const page = searchParams?.page ? parseInt(searchParams.page) : 1
  const sortBy = searchParams?.sortBy

  return (
    <Suspense fallback={<SkeletonProductGrid />}>
      <ThreeColumnGrid1
        title={title}
        products={products}
        blockType={"design1"}
        button={button}
        page={page}
        productsPerPage={productsPerPage}
        showPagination={showPagination}
        sortBy={sortBy}
      />
    </Suspense>
  )
}
