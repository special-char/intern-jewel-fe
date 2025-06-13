import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  ProductCategoryLayout: any
}

export const ProductCategoryLayout: React.FC<Props> = async ({
  region,
  ProductCategoryLayout,
}) => {
  const block = ProductCategoryLayout
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
