import type { Block } from "payload"

import { BannerLayout1 } from "@/blocks/PayloadBanner/layouts/BannerLayout1/config"
import { ShowcaseSection2 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection2/config"
import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/config"

const ListPageShowcase2: Block = {
    slug: "listPageShowcase2",
    interfaceName: "ListPageShowcase2",
    labels: {
        singular: "List Page Showcase 2",
        plural: "List Page Showcases 2",
    },
    admin: {
        group: "List Pages",
    },
    fields: [
        {
            name: "categories",
            label: "Category List",
            type: "array",
            required: false,
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                },
            ],
        },
        {
            name: "children",
            label: "Showcase Content",
            type: "blocks",
            required: false,
            blocks: [
                BannerLayout1,
                ShowcaseSection2,
                FaqLayout2,
            ],
            defaultValue: [
                {
                    blockType: "showcaseLayout2",
                },
                {
                    blockType: "bannerLayout1",
                },
                {
                    blockType: "faqLayout2",
                },
            ],
        },
    ],
}

export default ListPageShowcase2
