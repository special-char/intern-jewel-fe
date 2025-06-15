import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { AboutUs1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  PayloadSection: AboutUs1
}

export const PayloadSectionComponent: React.FC<Props> = async ({
  region,
  PayloadSection,
}) => {
  const block = PayloadSection
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}