import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  AccordianLayout: any
}

export const AccordianLayout: React.FC<Props> = async ({
  region,
  AccordianLayout,
}) => {
  const block = AccordianLayout
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
