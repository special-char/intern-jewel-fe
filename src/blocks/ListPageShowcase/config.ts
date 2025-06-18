import { Block } from "payload"
import ListPageShowcase2 from "./layouts/ListPageShowcase2/config"

export const ListPageShowcase: Block = {
  slug: "listPageShowcase",
  interfaceName: "ListPageShowcase",
  admin: { group: "ListShowcase Layouts" },
  fields: [
    {
      name: "ListPageShowcase",
      type: "blocks",
      blocks: [ListPageShowcase2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
