import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const ShowcaseSection3: Block = {
  slug: "showcaseLayout3",
  interfaceName: "ShowcaseLayout3",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_showcaseLayout1.png",
  admin: { group: "Showcase Section" },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "homelayout1_showcaseImage1.jpeg"),
    },
    {
      name: "showcaseHeading",
      type: "text",
      required: true,
      defaultValue: "NEW ARRIVAL",
    },
    {
      name: "showcaseDescription",
      type: "text",
      required: true,
      defaultValue:
        "We offer a timeless adornment for those who seek both beauty and grace in meaning.",
    },
    button(),
  ],
}
