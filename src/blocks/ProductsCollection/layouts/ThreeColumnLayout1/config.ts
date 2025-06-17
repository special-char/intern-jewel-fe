import type { Block } from "payload"

export const threecolumnLayout1: Block = {
  slug: "threecolumnLayout1",
  interfaceName: "ThreecolumnLayout1",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_threeColumnGrid.png",
  admin: { group: "Products Collections" },
  fields: [
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      defaultValue: async ({ req }) => {
        const products = await req.payload.find({
          collection: "products",
          limit: 2,
        })
        return products.docs.map((product) => product.id)
      },
    },
    {
      name: "productsPerPage",
      type: "number",
      defaultValue: 2,
      admin: {
        description: "Number of products to show per page",
      },
    },
    {
      name: "showPagination",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Show pagination controls",
      },
    },
  ],
}
