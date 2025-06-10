import { Block } from "payload"
import { SectionWrapperBlock } from "./layouts/SectionWrapper1/config"

export const SectionWrapperBanner: Block = {
  slug: "sectionWrapperBanner",
  admin: {
    group: "Banner",
  },
  fields: [
    {
      name: "wrapper",
      type: "blocks",
      blocks: [SectionWrapperBlock],
      maxRows: 1,
      required: true,
      defaultValue: [{ blockType: "section-wrapper" }],
    },
  ],
}