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
        { blockType: "promoProduct2" },
        { blockType: "threecolumnLayout" },
        { blockType: "trendingProduct" },
        {
          blockType: "assosiatedBrandLayout1",
        },
        {
          blockType: "faqLayout2",
        },
        {
          blockType: "paginationLayout",
        },
      ],
    }})
  ],
}
