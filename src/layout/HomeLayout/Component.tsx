import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../../blocks/RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  HomeLayout: any
}

export const HomeLayout: React.FC<Props> = async ({ region, HomeLayout }) => {
  const block = HomeLayout
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
