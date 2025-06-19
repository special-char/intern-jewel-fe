import { Block } from "payload"

import { ListPageHeaderLayout1 } from "./layouts/ListPageHeaderLayout1/config"

export const ListPageHeaderBlock: Block = {
  slug: "listIntroHeader",
  admin: {
    group: "list Intro Header",
  },
  fields: [
    {
      name: "IntroHeader",
      type: "blocks",
      blocks: [ListPageHeaderLayout1],
      defaultValue: [{blockType: "ListPageHeaderLayout1"}],
      maxRows: 1,
      required: true,
    },
  ],
}