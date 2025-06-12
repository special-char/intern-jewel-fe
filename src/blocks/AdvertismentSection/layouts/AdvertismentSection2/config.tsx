import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const AdvertismentSection2: Block = {
  slug: "advertismentSection2",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_advertismentLayout2.png",
  admin: { group: "Advertisment Layouts" },
  interfaceName: "AdvertismentSection2",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "homelayout2_advertismentImage.jpg"),
    },
    {
      name: "adTagline",
      type: "text",
      required: true,
      defaultValue: "FLASH SALE",
    },
    {
      name: "adHeading",
      type: "text",
      required: true,
      defaultValue: "Simple Engagement Ring",
    },
    {
      name: "adDescription",
      type: "text",
      required: true,
      defaultValue:
        "Embrace the beauty of understated elegance with our simple engagement ring, a timeless symbol of love and commitment.",
    },
    button(),
  ],
}
