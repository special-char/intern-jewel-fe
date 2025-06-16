import type { Block } from "payload"
import { link } from "@/fields/link"
import { findImageByFilename } from "@lib/util/findImageByFilename"

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
            maxRows: 5,
            defaultValue: async ({ req }) => {
                const categoryData = [
                    {
                        text: "WATCH",
                        thumbnailFile: "homelayout1_categoryImage5.jpeg",
                        imageFile: "homelayout3_categoryhoverimg1.png",
                        url: "/collections/watches",
                    },
                    {
                        text: "RING",
                        thumbnailFile: "homelayout1_categoryImage2.jpeg",
                        imageFile: "homelayout3_category_hoverimg2.png",
                        url: "/collections/rings",
                    },
                    {
                        text: "EARRINGS",
                        thumbnailFile: "homelayout1_categoryImage3.jpeg",
                        imageFile: "homelayout3_category_hoverimg3.png",
                        url: "/collections/earrings",
                    },
                    {
                        text: "NECKLACE",
                        thumbnailFile: "headerlayout1_categoryImage4.jpeg",
                        imageFile: "homelayout3_category_hoverimg4.png",
                        url: "/collections/necklaces",
                    },
                    {
                        text: "BRACELET",
                        thumbnailFile: "homelayout1_categoryImage1.jpeg",
                        imageFile: "homelayout3_category_hoverimg5.png",
                        url: "/collections/bracelets",
                    },
                ]

                const categories = await Promise.all(
                    categoryData.map(async (category) => {
                        const thumbnail = await findImageByFilename(req, category.thumbnailFile)
                        const image = await findImageByFilename(req, category.imageFile)

                        return {
                            text: category.text,
                            thumbnail,
                            image,
                            link: {
                                url: category.url,
                                label: category.text,
                            },
                        }
                    })
                )

                return categories
            },
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
