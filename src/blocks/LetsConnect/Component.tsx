import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { LetsConnectBlock } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  LetsConnect: LetsConnectBlock
}

export const LetsConnect: React.FC<Props> = async ({ region, LetsConnect }) => {
  const block = LetsConnect
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
