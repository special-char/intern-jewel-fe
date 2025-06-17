import { threecolumnLayout1 } from "@/blocks/ProductsCollection/layouts/ThreeColumnLayout1/config"
import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ListPage1: Block = {
  slug: "listPage1",
  interfaceName: "ListPage1",
  admin: { group: "List Layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [
          threecolumnLayout1
        ],
      },
    }),
  ],
}
