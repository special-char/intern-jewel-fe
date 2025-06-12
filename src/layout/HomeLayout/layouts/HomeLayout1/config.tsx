import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const HomeLayout1: Block = {
  slug: "homeLayout1",
  interfaceName: "HomeLayout1",
  admin: { group: "Home Layout" },
  fields: [
    layoutBlocks({overrides : {
      defaultValue: [
        {
          blockType: "bannerLayout1",
        },
        {
          blockType: "featureLayout1",
        },
        { blockType: "offerLayout1" },
        { blockType: "threecolumnLayout" },
        {
          blockType: "showcaseLayout1",
        },
        { blockType: "productShowcase" },
        {
          blockType: "advertismentSection1",
        },
        {
          blockType: "faqLayout",
        },
        {
          blockType: "assosiatedBrandLayout1",
        },
      ],
    }})
  ],
}
