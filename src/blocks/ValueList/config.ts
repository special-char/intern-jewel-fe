import { Block } from "payload"
import { ValueListLayout1 } from "./layouts/ValueList1/config"

export const ValueListBlock: Block = {
  slug: "valueListBlock",
  admin: {
    group: "Content",
  },
  fields: [
    {
      name: "valueList",
      type: "blocks",
      blocks: [ValueListLayout1],
      maxRows: 1,
      required: true,
      defaultValue: [{ blockType: "valueListLayout1" }],
    },
  ],
}