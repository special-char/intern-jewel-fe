import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const ListPage3: Block = {
  slug: "listPage3",
  interfaceName: "ListPage3",
  admin: { group: "List Layout" },
  fields: [
    layoutBlocks({
      overrides: {
        defaultValue: [],
      },
    }),
  ],
}
