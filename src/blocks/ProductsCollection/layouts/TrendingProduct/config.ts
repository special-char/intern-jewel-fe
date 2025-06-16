import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical"
import { Block } from "payload"
import { button } from "@/fields/button"

export const TrendingProduct: Block = {
  slug: "trendingProduct",
  interfaceName: "TrendingProduct",
  admin: { group: "Products Collections" },

  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Trending Products",
    },
    {
      name: "subtext",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
      defaultValue: {
        root: {
          type: "root",
          format: "",
          indent: 0,
          version: 1,
          children: [
            {
              type: "paragraph",
              format: "",
              indent: 0,
              version: 1,
              children: [
                {
                  type: "text",
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Discover our handpicked selection of exquisite jewelry pieces, curated to elevate your style and capture the essence of sophistication.",
                  version: 1
                },
              ],
            },
          ],
        },
      },
    },
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      required: true,
      defaultValue: async ({ req }) => {
        const products = await req.payload.find({
          collection: "products",
          limit: 2,
        })
        return products.docs.map((product) => product.id)
      },
      validate: (val) => {
        if (!val || val.length !== 2) {
          return "You must select exactly two products."
        }
        return true
      }
    },
    button(),
  ],
}