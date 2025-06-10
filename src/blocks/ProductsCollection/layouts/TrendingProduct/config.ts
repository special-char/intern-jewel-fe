import { Block } from "payload"
import { button } from "@/fields/button"

export const TrendingProduct: Block = {
  slug: "trendingProduct",
  interfaceName: "TrendingProduct",
  admin: { group: "Products Collections" },

  fields: [
    {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Products Collection",
        },
        {
          name: "products",
          type: "relationship",
          relationTo: "products",
          hasMany: true,
          defaultValue: async ({ req }) => {
            const products = await req.payload.find({
              collection: "products",
              limit: 6,
            })
            return products.docs.map((product) => product.id)
          },
        },
        button(),
    {
      name: "subtext",
      type: "richText",
      required: true,
    },
  ],
}
