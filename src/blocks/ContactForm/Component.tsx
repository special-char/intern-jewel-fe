import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { ContactFormBlock } from "@/payload-types"

type Props = {
  region: HttpTypes.StoreRegion
  ContactForm: ContactFormBlock
}

export const ContactForm: React.FC<Props> = async ({ region, ContactForm }) => {
  const block = ContactForm
  const hasChildren = block && Array.isArray(block) && block.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={block} region={region} />
  }
  return null
}
