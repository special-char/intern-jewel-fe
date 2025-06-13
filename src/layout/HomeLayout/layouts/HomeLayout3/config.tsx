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
          blockType: "banner2",
        },
        {
          blockType: "assosiatedBrandLayout2",
        }, 
       
       
        { blockType: "threecolumnLayout" },
        {
          blockType: "showcaseLayout2",
        },
        { blockType: "offerLayout1" },
        { blockType: "promoProduct" },
        {blockType: "categoryLayout1"},
        {
          blockType: "featureLayout2",
        },
        {
          blockType: "advertismentSection2",
        },

        {
          blockType: "faqLayout2",
        },
      ],
    }})
  ],
}
