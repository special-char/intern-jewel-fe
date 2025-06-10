import { Block } from "payload"
import { IntroHeaderLayout1 } from "./layouts/IntroHeader1/config"

export const IntroHeaderBlock: Block = {
  slug: "introHeader",
  admin: {
    group: "Intro Header",
  },
  fields: [
    {
      name: "IntroHeader",
      type: "blocks",
      blocks: [IntroHeaderLayout1],
      defaultValue: [{blockType: "IntroHeaderLayout1"}],
      maxRows: 1,
      required: true,
    },
  ],
}