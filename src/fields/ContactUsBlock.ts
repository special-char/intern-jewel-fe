import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"

import { ContactInformationBlock } from "@/blocks/ContactInformation/Config"
import { ContactSection } from "@/blocks/LetsConnect/Config"
import { ContactFormBlock } from "@/blocks/ContactForm/Config"

type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}

export const aboutUsBlock = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      ContactInformationBlock,
      ContactSection,
      ContactFormBlock,

      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
