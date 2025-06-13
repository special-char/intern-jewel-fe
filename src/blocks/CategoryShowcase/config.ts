import { Block } from "payload"
import { CategoryLayout1 } from "./layouts/CategoryLayout1/config"
import { CategoryLayout2 } from "./layouts/CategoryLayout2/config"

export const CategoryShowcase: Block = {
  slug: "categoryShowcase",
  interfaceName: "CategoryShowcase",
  admin: { group: "Category Layouts" },
  fields: [
    {
      name: "CategoryShowcase",
      type: "blocks",
      blocks: [CategoryLayout1, CategoryLayout2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
