import type { Block } from "payload"
import { link } from "@/fields/link"

export const CategoryLayout2: Block = {
    slug: "category2",
    admin: { group: "Category ShowCase" },
    interfaceName: "CategoryLayout2",
    fields: [
        {
            name: "categories",
            type: "array",
            label: "Categories",
            required: true,
            maxRows: 6,
            fields: [
                {
                    name: "thumbnail",
                    type: "upload",
                    relationTo: "media",
                    label: "Thumbnail Image",
                    required: true,
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    label: "Image",
                    required: true,
                },
                link(),
                {
                    name: "text",
                    type: "text",
                    label: "Category Text",
                    required: true,
                },
            ],
        },
    ],
}