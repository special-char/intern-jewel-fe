import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { ValueListBlock } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  valueList: ValueListBlock
}

export const ValueListComponent: React.FC<Props> = async ({
  region,
  valueList,
}) => {
  const block = valueList
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}