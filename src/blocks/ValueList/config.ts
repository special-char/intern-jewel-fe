import { Block } from "payload"
import { ValueListBlock } from "./layouts/ValueList1/config"

export const ValueListBanner: Block = {
  slug: "valueListBanner",
  admin: {
    group: "Banner",
  },
  fields: [
    {
      name: "list",
      type: "blocks",
      blocks: [ValueListBlock],
      maxRows: 1,
      required: true,
      defaultValue: [{ blockType: "value-list" }],
    },
  ],
}