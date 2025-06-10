import { aboutUsBlock } from "@/fields/aboutUsBlock"
import type { Block } from "payload"

export const AboutUs1: Block = {
  slug: "aboutUs1",
  interfaceName: "AboutUs1",
  admin: { group: "About Us" },
  fields: [
    aboutUsBlock({overrides : {
      defaultValue: [
        {
          blockType: "introHeaderBlock",
        },
        {
          blockType: "section-wrapper-layout-1",
        },
        {
          blockType: "value-list-layout-1",
        },
        {
          blockType: "ctaSectionBlock",
        },
        {
          blockType: "mediaBlock",
        }
      ],
    }})
  ],
}
