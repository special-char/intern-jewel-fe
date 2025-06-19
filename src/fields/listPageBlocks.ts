import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"
import { ListPage1 } from "@/layout/Listpage/layouts/ListPage1/config"
import { ListPage2 } from "@/layout/Listpage/layouts/ListPage2/config"
import { ListPage3 } from "@/layout/Listpage/layouts/ListPage3/config"
import { ListPage4 } from "@/layout/Listpage/layouts/ListPage4/config"
import { ShowcaseSection } from "@/blocks/ShowcaseSection/config"


type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}

export const listPageBlocks = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      ListPage1,
      ListPage2,
      ListPage3,
      ListPage4,
      ShowcaseSection,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
