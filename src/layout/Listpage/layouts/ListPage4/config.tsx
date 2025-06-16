import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ListPage4: Block = {
  slug: "listPage4",
  interfaceName: "ListPage4",
  admin: { group: "List Layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
