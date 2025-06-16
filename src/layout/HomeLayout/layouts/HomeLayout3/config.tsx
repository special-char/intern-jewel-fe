import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const HomeLayout3: Block = {
  slug: "homeLayout3",
  interfaceName: "HomeLayout3",
  admin: { group: "Home Layout" },
  fields: [
    layoutBlocks({overrides : {
      defaultValue: [
        {
          blockType: "bannerLayout3",
        },
        {
          blockType: "category2",
        }, 
       
       
        { blockType: "threecolumnLayout" },
        {
          blockType: "showcaseLayout3",
        },
        { blockType: "offerLayout1" },
        { blockType: "threecolumnLayout" },
        { blockType: "trendingProduct" },
        {
          blockType: "advertismentSection1",
        },
        {
          blockType: "faqLayout2",
        },
      ],
    }})
  ],
}
