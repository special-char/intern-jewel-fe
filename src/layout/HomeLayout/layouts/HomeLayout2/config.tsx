import { layoutBlocks } from "@/fields/layoutBlocks"
import type { Block } from "payload"

export const HomeLayout2: Block = {
  slug: "homeLayout2",
  interfaceName: "HomeLayout2",
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
       
       
        { blockType: "fourcolumnLayout" },
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
          blockType: "faqLayout",
        },
      ],
    }})
  ],
}
