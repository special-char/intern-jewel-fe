import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const AssosiatedBrandsLayout1: Block = {
  slug: "assosiatedBrandLayout1",
  interfaceName: "BrandLayout1",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_assosiatedBrandLayout1.png",
  admin: { group: "Assosiated Brands" },
  fields: [
    {
      name: "brands",
      type: "array",
      required: true,
      maxRows: 6,
      defaultValue: async ({ req }) => {
        const brandData = [
          { imageFile: "homelayout1_brandImage1.svg" },
          { imageFile: "homelayout1_brandImage2.svg" },
          { imageFile: "homelayout1_brandImage3.svg" },
          { imageFile: "homelayout1_brandImage4.svg" },
          { imageFile: "homelayout1_brandImage5.svg" },
          { imageFile: "homelayout1_brandImage6.svg" },
        ]

        const brands = await Promise.all(
          brandData.map(async (brand) => {
            const images = await findImageByFilename(req, brand.imageFile)
            return {
              images,
            }
          })
        )

        return brands
      },
      fields: [
        {
          name: "images",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
}
