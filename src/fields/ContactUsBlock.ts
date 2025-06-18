import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"

import { ContactFormBlock } from "@/blocks/ContactForm/layouts/contactForm1/Config"
import { ContactInformationBlock } from "@/blocks/ContactInformation/layouts/contactInformation1/Config"
import { LetsConnectBlock } from "@/blocks/LetsConnect/layouts/LetsConnect1/Config"

type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}

export const contactUsBlock = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      ContactInformationBlock,
      LetsConnectBlock,
      ContactFormBlock,

      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
