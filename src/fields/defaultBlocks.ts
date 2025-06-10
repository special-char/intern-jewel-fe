import { AboutUs1 } from "@/layout/AboutUs/layouts/AboutUs1/config"
import { HomeLayout1 } from "@/layout/HomeLayout/layouts/HomeLayout1/config"
import { HomeLayout2 } from "@/layout/HomeLayout/layouts/HomeLayout2/config"
import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"

type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}
export const defaultBlocks = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      HomeLayout1,
      HomeLayout2,
      AboutUs1,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
