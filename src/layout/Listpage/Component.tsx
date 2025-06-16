import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../../blocks/RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  ListPage: any
}

export const ListPage: React.FC<Props> = async ({ region, ListPage }) => {
  const block = ListPage
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
