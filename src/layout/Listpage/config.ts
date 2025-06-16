import { Block } from "payload"
import { ListPage1 } from "./layouts/ListPage1/config"
import { ListPage2 } from "./layouts/ListPage2/config"
import { ListPage3 } from "./layouts/ListPage3/config"
import { ListPage4 } from "./layouts/ListPage4/config"

export const ListPage: Block = {
  slug: "listPage",
  interfaceName: "ListPage",
  fields: [
    {
      name: "ListPage",
      type: "blocks",
      blocks: [ListPage1, ListPage2, ListPage3, ListPage4],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
