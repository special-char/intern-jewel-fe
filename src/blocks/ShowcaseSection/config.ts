import { Block } from "payload"
import { ShowcaseSection1 } from "./layouts/ShowcaseSection1/config"
import { ShowcaseSection2 } from "./layouts/ShowcaseSection2/config"

export const ShowcaseSection: Block = {
  slug: "showcaseSection",
  interfaceName: "ShowcaseSection",
  fields: [
    {
      name: "ShowcaseSection",
      type: "blocks",
      blocks: [ShowcaseSection1, ShowcaseSection2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
