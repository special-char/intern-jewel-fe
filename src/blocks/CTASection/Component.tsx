import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { AboutUs1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  CTASection: AboutUs1
}

export const CTASection: React.FC<Props> = async ({
  region,
  CTASection,
}) => {
  const block = CTASection
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}