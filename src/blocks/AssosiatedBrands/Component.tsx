import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { HomeLayout1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  assosiatedBrands: HomeLayout1
}

export const AssosiatedBrands: React.FC<Props> = async ({
  region,
  assosiatedBrands,
}) => {
  const block = assosiatedBrands

  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
