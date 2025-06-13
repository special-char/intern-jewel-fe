import { Block } from "payload"
import { ProductCategoryLayout1 } from "./layouts/ProductCategoryLayout1/config"
export const AccordianLayout: Block = {
  slug: "accordianLayout",
  interfaceName: "AccordianLayout",
  fields: [
    {
      name: "AccordianLayout",
      type: "blocks",
      blocks: [ProductCategoryLayout1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
