"use client"
import React from "react"
import useProductOptions from "@lib/hooks/useProductOptions"
import getProductComponent from "@lib/util/getProductComponent"

const ProductCard = ({
  product,
  blockType,
}: {
  product: any & { metadata?: any }
  blockType?: string
}) => {
  const { options, setOptions, queryParams, setQueryParams, variant } =
    useProductOptions(product)

  return (
    <>
      {React.createElement(getProductComponent(blockType!), {
        product,
        variant,
      })}
    </>
  )
}

export default ProductCard
