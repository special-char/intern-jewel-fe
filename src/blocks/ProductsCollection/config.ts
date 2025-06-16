import { Block } from "payload"
import { ThreecolumnLayout } from "./layouts/ThreecolumnLayout/config"
import { FourcolumnLayout } from "./layouts/FourcolumnLayout/config"
import { PromoProductLayout } from "./layouts/PromoProductLayout/config"
import { ProductShowcaseLayout } from "./layouts/ProductShowcaseLayout/config"
import { TrendingProduct } from "./layouts/TrendingProduct/config"

export const ProductsCollection: Block = {
  slug: "productsCollection",
  interfaceName: "ProductsCollection",
  fields: [
    {
      name: "productsCollection",
      type: "blocks",
      blocks: [
        ThreecolumnLayout,
        FourcolumnLayout,
        ProductShowcaseLayout,
        PromoProductLayout,
        TrendingProduct,
      ],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
