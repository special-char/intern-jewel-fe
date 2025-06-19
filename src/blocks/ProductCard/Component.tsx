import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { ProductCardLayout1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  productCard: ProductCardLayout1
}

export const ProductCardSection = async ({
  region,
  productCard,
}: Props) => {
  const block = productCard
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }

  return null
}

