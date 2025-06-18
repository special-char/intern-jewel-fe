import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ProductDetail2: Block = {
  slug: "productDetail2",
  interfaceName: "ProductDetail2",
  admin: { group: "Product detail layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
