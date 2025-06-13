import { button } from "@/fields/button"
import type { Block } from "payload"

export const ThreecolumnLayout: Block = {
  slug: "threecolumnLayout",
  interfaceName: "ThreecolumnLayout",
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
