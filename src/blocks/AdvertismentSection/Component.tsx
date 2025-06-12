import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  AdvertismentSection: any
}

export const AdvertismentSection: React.FC<Props> = async ({
  region,
  AdvertismentSection,
}) => {
  const block = AdvertismentSection
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
