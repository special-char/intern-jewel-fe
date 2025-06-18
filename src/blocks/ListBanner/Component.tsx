import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { ListBanner as ListBannerType } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  ListBanner: ListBannerType
}

export const ListBanner: React.FC<Props> = async ({
  region,
  ListBanner,
}) => {
  const block = ListBanner
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
