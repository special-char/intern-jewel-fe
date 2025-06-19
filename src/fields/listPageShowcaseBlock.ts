import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/config"
import { BannerLayout1 } from "@/blocks/PayloadBanner/layouts/BannerLayout1/config"

import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"

type PropsTypes = {
    overrides?: Partial<Field> | null
    append?: {
        blocks?: Block[] | null
    } | null
}

export const listPageShowcaseBlock = (props: PropsTypes = {}) => {
    const fields: Field = {
        name: "children",
        label: "Children",
        type: "blocks",
        blocks: [
            BannerLayout1,
            FaqLayout2, 
            ...(props?.append?.blocks ? props?.append?.blocks : []),
        ],
    }

    return deepMerge(fields, props?.overrides)
}