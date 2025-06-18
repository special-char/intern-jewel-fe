import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../../blocks/RenderBlocks"
// import { ProductDetailPage } from './config';

type Props = {
  region: HttpTypes.StoreRegion
  ProductDetailPage: any
}

export const ProductDetailPage: React.FC<Props> = async ({
  region,
  ProductDetailPage,
}) => {
  const block = ProductDetailPage
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
