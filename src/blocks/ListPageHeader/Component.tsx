import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import {  HomeLayout1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  ListPageHeader: HomeLayout1
}

export const ListPageHeader: React.FC<Props> = async ({
  region,
  ListPageHeader,
}) => {
  const block = ListPageHeader
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}