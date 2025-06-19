import { Block } from "payload";
import { ProductCardLayout1 } from "./layouts/ProductCardLayout1/config";

export const ProductCard: Block = {
  slug: "productCard",
  admin: {
    group: "Product Card",
  },
  fields: [
    {
      name: "productCard",
      type: "blocks",
      blocks: [ProductCardLayout1],
      defaultValue: [{ blockType: "product-card" }],
      maxRows: 1,
      required: true,
    },
  ],
};
