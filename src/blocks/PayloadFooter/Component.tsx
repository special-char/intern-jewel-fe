import React from "react"
import { HttpTypes } from "@medusajs/types"
import { RenderBlocks } from "../RenderBlocks"
import { getCachedGlobal } from "@/utilities/getGlobals"
import { Footer } from "@/payload-types"

type Props = {
  region?: HttpTypes.StoreRegion
}

export const PayloadFooter: React.FC<Props> = async ({ region }) => {
  const footerData = (await getCachedGlobal("footer", 1)()) as Footer

  const hasChildren =
    footerData.layout &&
    Array.isArray(footerData.layout) &&
    footerData.layout.length > 0

  if (hasChildren) {
    return <RenderBlocks blocks={footerData.layout as any} region={region!} />
  }
}
