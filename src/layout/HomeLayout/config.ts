import { Block } from "payload"
import { HomeLayout1 } from "./layouts/HomeLayout1/config"

export const HomeLayout: Block = {
  slug: "homeLayout",
  interfaceName: "HomeLayout",
  fields: [
    {
      name: "HomeLayout",
      type: "blocks",
      blocks: [HomeLayout1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
