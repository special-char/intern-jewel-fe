import { Block } from "payload"
import { ListPage1 } from "./layouts/ListPage1/config"

export const ListPage: Block = {
  slug: "listPage",
  interfaceName: "ListPage",
  fields: [
    {
      name: "ListPage",
      type: "blocks",
      blocks: [ListPage1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
