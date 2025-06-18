import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { ContactInformationBlock } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  ContactInformation: ContactInformationBlock
}

export const ContactInformation: React.FC<Props> = async ({
  region,
  ContactInformation,
}) => {
  const block = ContactInformation
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
