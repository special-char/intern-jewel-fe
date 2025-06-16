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
          blockType: "imageBlock",
        },
        {
          blockType: "payloadSectionLayout1",
        },
        {
          blockType: "separate",
        },
        {
          blockType: "payloadSectionLayout1",
        },
        {
          blockType: "imageBlock",
        },
        {
          blockType: "valueListLayout1",
        },
        {
          blockType: "separate",
        },
        {
          blockType: "ctaSectionBlock",
        },
        {
          blockType: "separate",
        }
      ],
    }})
  ],
}