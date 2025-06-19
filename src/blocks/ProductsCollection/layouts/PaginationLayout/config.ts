import { button } from "@/fields/button"
import type { Block } from "payload"

export const PaginationLayout: Block = {
  slug: "paginationLayout",
  interfaceName: "PaginationLayout",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_threeColumnGrid.png",
  admin: { group: "Products Collections" },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Products Collection",
    },
    {
      name: "cardDesign",
      type: "text",
      label: "Card Design",
      required: true,
      admin: {
        components: {
          Field: {
            path: "src/components/payload/ProductCardDesign/index.tsx",
          },
        },
      },
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
  ],
}
