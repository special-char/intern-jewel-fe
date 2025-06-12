import { button } from "@/fields/button"
import { link } from "@/fields/link"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const OfferLayout1: Block = {
  slug: "offerLayout1",
  interfaceName: "OfferLayout1",
  admin: { group: "Offer Layouts" },
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_offerLayout1.png",

  fields: [
    {
      name: "offers",
      type: "array",
      required: true,
      maxRows: 2,
      defaultValue: async ({ req }) => {
        const offerData = [
          {
            imageFile: "homelayout2_offerImage1.jpg",
            title: "Luxe Abundance",
            description: "Get 20% off with our code: LUXE20.",
          },
          {
            imageFile: "homelayout2_offerImage2.jpg",
            title: "Sparkle in Love",
            description: "Make her say yes with our 50% off rings",
          },
        ]

        const offers = await Promise.all(
          offerData.map(async (offer) => {
            const image = await findImageByFilename(req, offer.imageFile)
            return {
              image,
              title: offer.title,
              description: offer.description,
            }
          })
        )

        return offers
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
        button(),
      ],
    },
  ],
}
