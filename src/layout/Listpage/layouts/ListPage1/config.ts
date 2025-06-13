import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/config"
import { ThreecolumnLayout } from "@/blocks/ProductsCollection/layouts/ThreecolumnLayout/config"
import { ListPageBlocks } from "@/fields/listPageBlocks"
import type { Block } from "payload"

export const ListPage1: Block = {
  slug: "listPage1",
  interfaceName: "ListPage1",
  admin: { group: "List Page" },
  fields: [
    ListPageBlocks({
      overrides: {
        blocks: [FaqLayout2, ThreecolumnLayout],
        defaultValue: [
          {
            blockType: "faqLayout2", // Make sure this matches the slug in FaqLayout2 config
          },
          { blockType: "threecolumnLayout" },
        ],
      },
    }),
  ],
}
