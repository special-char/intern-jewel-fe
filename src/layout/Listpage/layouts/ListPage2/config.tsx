import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ListPage2: Block = {
  slug: "listPage2",
  interfaceName: "ListPage2",
  admin: { group: "List Layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
