import { RenderBlocks } from "@/blocks/RenderBlocks"
import { ProductDetail1 as ProductDetailType } from "@/payload-types"
import { HttpTypes } from "@medusajs/types"
import React from "react"

type Props = {
  region: HttpTypes.StoreRegion
  children: ProductDetailType
}

export const ProductDetail1 = (props: Props) => {
  const { children, region } = props

  const block = children
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
