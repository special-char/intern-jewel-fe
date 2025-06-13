import { Block } from "payload"

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
    },
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      required: true,
      validate: (val) => {
        if (!val || val.length !== 2) {
          return "You must select exactly two products."
        }
        return true
      },
      defaultValue: async ({ req }) => {
        const products = await req.payload.find({
          collection: "products",
          limit: 2,
        })
        return products.docs.map((product) => product.id)
      },
    },
  ],
}
