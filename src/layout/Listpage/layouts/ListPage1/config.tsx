import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ListPage1: Block = {
  slug: "listPage1",
  interfaceName: "ListPage1",
  admin: { group: "List Layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
