import { Block } from "payload"

export const ListPage: Block = {
  slug: "listPage",
  interfaceName: "ListPage",
  fields: [
    {
      name: "ListPage",
      type: "blocks",
      blocks: [],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
