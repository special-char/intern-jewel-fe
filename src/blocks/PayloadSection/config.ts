import { Block } from "payload"
import { PayloadSectionLayout1 } from "./layouts/PayloadSection1/config"

export const PayloadSectionBanner: Block = {
  slug: "payloadSectionBanner",
  admin: {
    group: "Banner",
  },
  fields: [
    {
      name: "PayloadSection",
      type: "blocks",
      blocks: [PayloadSectionLayout1],
      maxRows: 1,
      required: true,
      defaultValue: [{ blockType: "payloadSectionLayout1" }],
    },
  ],
}