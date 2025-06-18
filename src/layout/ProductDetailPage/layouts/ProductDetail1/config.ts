import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ProductDetail1: Block = {
  slug: "productDetail1",
  interfaceName: "ProductDetail1",
  admin: { group: "Product detail layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
