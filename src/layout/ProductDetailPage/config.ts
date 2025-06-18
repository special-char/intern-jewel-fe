import { Block } from "payload"
import { ProductDetail1 } from "./layouts/ProductDetail1/config"

export const ProductDetailPage: Block = {
  slug: "productDetailPageLayout",
  interfaceName: "ProductDetailPage",
  fields: [
    {
      name: "ProductDetailPage",
      type: "blocks",
      blocks: [ProductDetail1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
