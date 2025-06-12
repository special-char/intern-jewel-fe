import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const PromoProductLayout2: Block = {
  slug: "promoProduct2",
  interfaceName: "PromoProduct2",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_promoProducts.png",
  admin: { group: "Products Collections" },
  fields: [
    {
      name: "heading",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          defaultValue: "Best Seller",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue:
            "Take a look at our best selling products that we haveprovided for your beauty and jewelry needs.",
        },
        button(),
      ],
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
          limit: 4,
        })
        return products.docs.map((product) => product.id)
      },
    },
    {
      name: "promotion",
      type: "group",
      fields: [
        {
          name: "promotionImage",
          type: "upload",
          relationTo: "media",
          defaultValue: async ({ req }) =>
            findImageByFilename(req, "homelayout2_promotionImage.jpg"),
        },
        {
          name: "promoTagline",
          type: "text",
          required: true,
          defaultValue: "S A L E",
        },
        {
          name: "promoHeading",
          type: "text",
          required: true,
          defaultValue: "Wedding Edition",
        },
        button(),
      ],
    },
  ],
}
