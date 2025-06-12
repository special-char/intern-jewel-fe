import { Block } from "payload"
import { CategoryLayout1 } from "./layouts/CategoryLayout1/config"

export const CategoryShowcase: Block = {
  slug: "categoryShowcase",
  interfaceName: "CategoryShowcase",
  admin :{group : "Category Layouts"},
  fields: [
    {
      name: "CategoryShowcase",
      type: "blocks",
      blocks: [CategoryLayout1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
