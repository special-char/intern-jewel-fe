import React from "react"
import { HttpTypes } from "@medusajs/types"
import ValueList from "./layouts/ValueList1/Component"

type Props = {
  region: HttpTypes.StoreRegion
  block: {
    items: Array<{
      title: string
      description: string
    }>
  }
}

export const ValueListComponent: React.FC<Props> = async ({ block }) => {
  if (!block?.items || block.items.length === 0) {
    return null
  }

  return <ValueList items={block.items} />
}