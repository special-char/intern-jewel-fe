import { button } from "@/fields/button"
import type { Block } from "payload"

export const FourcolumnLayout: Block = {
  slug: "fourcolumnLayout",
  interfaceName: "FourcolumnLayout",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_fourColumnGrid.png",
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
          limit: 8,
        })
        return products.docs.map((product) => product.id)
      },
    },
    button(),
  ],
}
