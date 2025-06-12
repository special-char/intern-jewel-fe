import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { HomeLayout1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  Offers: HomeLayout1
}

export const Offers: React.FC<Props> = async ({ region, Offers }) => {
  const block = Offers
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
