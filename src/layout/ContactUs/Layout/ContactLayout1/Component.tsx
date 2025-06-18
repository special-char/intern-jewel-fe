import { RenderBlocks } from "@/blocks/RenderBlocks"
import { HttpTypes } from "@medusajs/types"
import React from "react"
import type { ContactUs1 } from "@/payload-types"
type Props = {
  region: HttpTypes.StoreRegion
  children: ContactUs1
}

export const ContactUs = (props: Props) => {
  const { children, region } = props
  const block = children
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
