import { Block } from "payload"
import { ProductDetail1 } from "./layouts/ProductDetail1/config"
import { ProductDetail2 } from "./layouts/ProductDetail2/config"
import { ProductDetail3 } from "./layouts/ProductDetail3/config"
export const ProductDetailPage: Block = {
  slug: "productDetailPageLayout",
  interfaceName: "ProductDetailPage",
  fields: [
    {
      name: "ProductDetailPage",
      type: "blocks",
      blocks: [ProductDetail1, ProductDetail2, ProductDetail3],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
