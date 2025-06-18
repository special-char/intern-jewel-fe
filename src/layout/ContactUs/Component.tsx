import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../../blocks/RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  ContacUs: any
}

export const ContacUs: React.FC<Props> = async ({ region, ContacUs }) => {
  const block = ContacUs
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
