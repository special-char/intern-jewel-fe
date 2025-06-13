import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"
import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/config"
// import { MediaBlock } from "@/blocks/MediaBlock/config"
// import { CTASectionLayout1 } from "@/blocks/CTASection/layouts/CTASection1/config"
// import { IntroHeaderLayout1 } from "@/blocks/IntroHeader/layouts/IntroHeader1/config"
// import { SectionWrapperLayout1 } from "@/blocks/SectionWrapper/layouts/SectionWrapper1/config"
// import { ValueListLayout1 } from "@/blocks/ValueList/layouts/ValueList1/config"

type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}

export const ListPageBlocks = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      FaqLayout2,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
