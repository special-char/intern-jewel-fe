import { link } from "@/fields/link"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const HeaderLayout3: Block = {
  slug: "header3",
  interfaceName: "HeaderLayout3",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_headerLayout3.png",
  fields: [
    {
      name: "desktopLogo",
      type: "upload",
      relationTo: "media",
      required: true,
      defaultValue: async ({ req }) => findImageByFilename(req, "Logo.svg"),
    },
    {
      name: "mobileLogo",
      type: "upload",
      relationTo: "media",
      required: true,
      defaultValue: async ({ req }) => findImageByFilename(req, "Logo.svg"),
    },
    {
      name: "contactNumber",
      type: "text",
      label: "Contact Number",
      required: true,
      defaultValue: "+1 (234) 567 890",
    },
    {
      name: "tree",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Heading",
          required: true,
          defaultValue: "Products",
        },
        {
          name: "parent",
          type: "array",
          required: true,
          maxRows: 4,
          defaultValue: [
            {
              link: { label: "Homepage" },
              sub: [
                { link: { label: "Homepage v1" } },
                { link: { label: "Homepage v2" } },
                { link: { label: "Homepage v3" } },
              ],
            },
            {
              link: { label: "Shop" },
              sub: [
                { link: { label: "Shop v1" } },
                { link: { label: "Shop v2" } },
                { link: { label: "Shop v3" } },
                { link: { label: "Shop v4" } },
              ],
            },
            {
              link: { label: "Products" },
              sub: [
                { link: { label: "Product Details v1" } },
                { link: { label: "Product Details v2" } },
                { link: { label: "Product Details v3" } },
                { link: { label: "Product Categories" } },
              ],
            },
            {
              link: { label: "Other Pages" },
              sub: [
                { link: { label: "About Us" } },
                { link: { label: "Contact Us" } },
                { link: { label: "FAQ" } },
              ],
            },
          ],
          fields: [
            link(),
            {
              name: "sub",
              type: "array",
              maxRows: 4,
              fields: [link()],
            },
          ],
        },
      ],
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "headerLayout3_productThumbnail.avif"),
    },
    {
      name: "menu",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Heading",
          required: true,
          defaultValue: "Categories",
        },
        {
          name: "categories",
          type: "relationship",
          relationTo: "product_categories",
          hasMany: true,
        },
        {
          name: "category",
          label: "additional categories",
          type: "array",
          required: true,
          maxRows: 5,
          defaultValue: async ({ req }) => {
            const categoryData = [
              {
                imageFile: "headerlayout3_categoryImage1.jpeg",
                link: { label: "Watch" },
              },
              {
                imageFile: "headerlayout3_categoryImage2.jpeg",
                link: { label: "Ring" },
              },
              {
                imageFile: "headerlayout3_categoryImage3.jpeg",
                link: { label: "Earrings" },
              },
              {
                imageFile: "headerlayout3_categoryImage4.jpeg",
                link: { label: "Necklace" },
              },
              {
                imageFile: "headerlayout3_categoryImage5.jpeg",
                link: { label: "Bracelet" },
              },
            ]

            const categoryImages = await Promise.all(
              categoryData.map(async (category) => {
                const category_thumbnail = await findImageByFilename(
                  req,
                  category.imageFile
                )
                return {
                  category_thumbnail,
                  link: category.link,
                }
              })
            )

            return categoryImages
          },
          fields: [
            {
              name: "category_thumbnail",
              type: "upload",
              relationTo: "media",
            },
            link(),
          ],
        },
      ],
    },
  ],
}
