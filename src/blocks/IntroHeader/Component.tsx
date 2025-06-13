import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { AboutUs1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  IntroHeader: AboutUs1
}

export const IntroHeader: React.FC<Props> = async ({
  region,
  IntroHeader,
}) => {
  const block = IntroHeader
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}