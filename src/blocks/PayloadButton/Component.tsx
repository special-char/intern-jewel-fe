import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { HomeLayout1 } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  layout: HomeLayout1
}

export const PayloadButton: React.FC<Props> = async ({ region, layout }) => {
  const buttonData = layout
  const hasChildren =
    buttonData && Array.isArray(buttonData) && buttonData.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={buttonData} region={region} />
  }
  return null
}
