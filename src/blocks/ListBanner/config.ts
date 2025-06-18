import { Block } from "payload"
import { ListBanner1 } from "./layouts/ListBanner1/config"

export const ListBanner: Block = {
  slug: "listBanner",
  interfaceName: "ListBanner",
  fields: [
    {
      name: "ListBanner",
      type: "blocks",
      blocks: [ListBanner1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
