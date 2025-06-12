import { Block } from "payload"
import { AssosiatedBrandsLayout1 } from "./layouts/AssosiatedBrandLayout1/config"
import { AssosiatedBrandsLayout2 } from "./layouts/AssosiatedBrandLayout2/config"

export const AssosiatedBrands: Block = {
  slug: "assosiatedBrands",
  interfaceName: "AssosiatedBrands",
  fields: [
    {
      name: "assosiatedBrands",
      type: "blocks",
      blocks: [AssosiatedBrandsLayout1, AssosiatedBrandsLayout2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
