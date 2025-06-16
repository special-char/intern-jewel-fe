import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"

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
    blocks: [...(props?.append?.blocks ? props?.append?.blocks : [])],
  }

  return deepMerge(fields, props?.overrides)
}
