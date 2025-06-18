import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ProductDetail3: Block = {
  slug: "productDetail3",
  interfaceName: "ProductDetail3",
  admin: { group: "Product detail layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
