import { Block } from "payload"
import { ProductInfoLayout1 } from "./layouts/ProductInfoLayout1/config"
import { ProductInfoLayout2 } from "./layouts/ProductInfoLayout2/config"
import { ProductInfoLayout3 } from "./layouts/ProductInfoLayout3/config"

export const PayloadSectionBanner: Block = {
    slug: "productinfo",
    admin: {
        group: "ProductInfo", // not defined
    },
    fields: [
        {
            name: "ProductInfo",
            type: "blocks",
            blocks: [ProductInfoLayout1, ProductInfoLayout2, ProductInfoLayout3],
            maxRows: 1,
            required: true,
            defaultValue: [{ blockType: "productinfolayout1" }],
        },
    ],
}