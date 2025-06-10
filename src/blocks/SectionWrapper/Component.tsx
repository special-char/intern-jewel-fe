import React from "react"
import { HttpTypes } from "@medusajs/types"
import SectionWrapper from "./layouts/SectionWrapper1/Component"
import { RenderBlocks } from "../RenderBlocks"

type Props = {
  region: HttpTypes.StoreRegion
  block: {
    title?: React.ReactNode
    subtitle?: React.ReactNode
    children?: any[]
  }
}

export const SectionWrapperComponent: React.FC<Props> = async ({
  block,
  region,
}) => {
  if (!block || (!block.title && !block.subtitle && !block.children?.length)) {
    return null
  }

  return (
    <SectionWrapper title={block.title} subtitle={block.subtitle}>
      <RenderBlocks blocks={block.children || []} region={region} />
    </SectionWrapper>
  )
}