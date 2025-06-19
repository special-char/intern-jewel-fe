import type { Block } from "payload"
import { listPageShowcaseBlock } from "@/fields/listPageShowcaseBlock"

const ListPageShowcase2: Block = {
  slug: "listPageShowcase2",
  interfaceName: "ListPageShowcase2",
  labels: {
    singular: "List Page Showcase 2",
    plural: "List Page Showcases 2",
  },
  admin: {
    group: "List Pages",
  },
  fields: [
    {
      name: "categories",
      label: "Category List",
      type: "array",
      required: false,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
    listPageShowcaseBlock({
      overrides: {
        defaultValue: [
          { blockType: "bannerLayout1" },
          { blockType: "faqLayout2" },
        ],
      },
    }),
  ],
}

export default ListPageShowcase2