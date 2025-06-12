import { Block } from "payload"
import { HomeLayout1 } from "./layouts/HomeLayout1/config"
import { HomeLayout2 } from "./layouts/HomeLayout2/config"
import { HomeLayout3 } from "./layouts/HomeLayout3/config"

export const HomeLayout: Block = {
  slug: "homeLayout",
  interfaceName: "HomeLayout",
  fields: [
    {
      name: "HomeLayout",
      type: "blocks",
      blocks: [HomeLayout1, HomeLayout2, HomeLayout3],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
