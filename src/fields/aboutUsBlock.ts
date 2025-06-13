import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"
import { MediaBlock } from "@/blocks/MediaBlock/config"
import { CTASectionLayout1 } from "@/blocks/CTASection/layouts/CTASection1/config"
import { IntroHeaderLayout1 } from "@/blocks/IntroHeader/layouts/IntroHeader1/config"
import { SectionWrapperLayout1 } from "@/blocks/SectionWrapper/layouts/SectionWrapper1/config"
import { ValueListLayout1 } from "@/blocks/ValueList/layouts/ValueList1/config"
import { ImageBlock } from "@/blocks/ImageBlock/config"
import { SeparateBlock } from "@/blocks/Separator/config"


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
      CTASectionLayout1,
      IntroHeaderLayout1,
      SectionWrapperLayout1,
      ValueListLayout1,
      MediaBlock,
      ImageBlock,
      SeparateBlock,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
