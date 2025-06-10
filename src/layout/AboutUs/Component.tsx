import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../../blocks/RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  AboutUs: any
}

export const AboutUs: React.FC<Props> = async ({ region, AboutUs }) => {
  const block = AboutUs
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
