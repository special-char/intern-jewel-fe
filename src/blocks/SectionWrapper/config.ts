import { Block } from "payload"
import { SectionWrapperLayout1 } from "./layouts/SectionWrapper1/config"

export const SectionWrapperBanner: Block = {
  slug: "sectionWrapperBanner",
  admin: {
    group: "Banner",
  },
  fields: [
    {
      name: "SectionWrapper",
      type: "blocks",
      blocks: [SectionWrapperLayout1],
      maxRows: 1,
      required: true,
      defaultValue: [{ blockType: "sectionWrapperLayout1" }],
    },
  ],
}