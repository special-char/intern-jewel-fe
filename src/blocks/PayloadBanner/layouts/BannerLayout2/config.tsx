import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const BannerLayout2: Block = {
  slug: "banner2",
  admin: { group: "Banner Layout" },
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_bannerlayout2.png",
  interfaceName: "BannerLayout2",
  fields: [
    {
      name: "carousel",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 5,
      defaultValue: async ({ req }) => {
        const image1 = await findImageByFilename(
          req,
          "homelayout2_carouselBannerImage1.jpeg"
        )
        const image2 = await findImageByFilename(
          req,
          "homelayout2_carouselBannerImage2.jpeg"
        )

        return [
          { image: image1, label: "COLLECTIONS", desc: "Simplicity With Love" },
          {
            image: image2,
            label: "COLLECTIONS",
            desc: "Discover Your Perfect Style",
          },
        ]
      },
      fields: [
        { name: "image", type: "upload", relationTo: "media" },
        {
          name: "label",
          type: "text",
          required: true,
          defaultValue: "COLLECTIONS",
        },
        {
          name: "desc",
          type: "textarea",
          required: false,
          defaultValue: "Simplicity With Love",
        },
        button(),
      ],
    },
    {
      name: "banner",
      type: "group",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          defaultValue: async ({ req }) =>
            findImageByFilename(req, "homelayout2_bannerimage.jpeg"),
        },
        {
          name: "label",
          type: "textarea",
          required: true,
          defaultValue: "Golden Memory",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue:
            "Indulge in the opulence of Golden Memory, a mesmerizing jewelry collection fit for a queen. Embrace your inner allure with exquisite designs exclusive in our store to your heart content.",
        },
        button(),
      ],
    },
  ],
}
