import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const CategoryLayout1: Block = {
  slug: "categoryLayout1",
  admin: { group: "Category ShowCase" },
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_categoryLayout.png",
  interfaceName: "CategoryLayout1",
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Section Heading",
      defaultValue: "Explore Our Categories",
      required: true,
    },
    {
      name: "categories",
      type: "array",
      label: "Categories",
      required: true,
      maxRows: 5,
      defaultValue: async ({ req }) => {
        const categoryData = [
          {
            name: "BRACELETS",
            tagline: "Perfect for every occasion",
            imageFile: "homelayout1_categoryImage1.jpeg",
          },

          {
            name: "RINGS",
            tagline: "Perfect for every occasion",
            imageFile: "homelayout1_categoryImage2.jpeg",
          },
          {
            name: "EARRINGS",
            tagline: "Perfect for every occasion",
            imageFile: "homelayout1_categoryImage3.jpeg",
          },

          {
            name: "NECKLACES",
            tagline: "Statement pieces",
            imageFile: "homelayout1_categoryImage4.jpeg",
          },
          {
            name: "WATCHES",
            tagline: "Elegant designs",
            imageFile: "homelayout1_categoryImage5.jpeg",
          },
        ]

        const categories = await Promise.all(
          categoryData.map(async (category) => {
            const image = await findImageByFilename(req, category.imageFile)
            return {
              name: category.name,
              tagline: category.tagline,
              image,
            }
          })
        )

        return categories
      },
      fields: [
        {
          name: "name",
          type: "text",
          label: "Category Name",
          required: true,
        },
        {
          name: "tagline",
          type: "text",
          label: "Tagline",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Category Image",
          required: true,
        },
        button(),
      ],
    },
  ],
}
