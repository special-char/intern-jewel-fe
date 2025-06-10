import { Block } from "payload"
import { AboutUs1 } from "./layouts/AboutUs1/config"

export const AboutUs: Block = {
  slug: "aboutUs",
  interfaceName: "AboutUs",
  fields: [
    {
      name: "AboutUs",
      type: "blocks",
      blocks: [AboutUs1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
