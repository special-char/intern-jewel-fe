import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const ShowcaseSection2: Block = {
  slug: "showcaseLayout2",
  admin: { group: "Showcase Section" },
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_showcaseLayout2.png",
  interfaceName: "ShowcaseSection2",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "homelayout2_showcaseImage2.jpg"),
    },
    {
      name: "showcaseTagline",
      type: "text",
      required: true,
      defaultValue: "COLLECTION",
    },
    {
      name: "showcaseHeading",
      type: "text",
      required: true,
      defaultValue: "Minimal Me",
    },
    {
      name: "showcaseDescription",
      type: "text",
      required: true,
      defaultValue:
        "Introducing our new minimalist collection. Suitable for the active yet elegant.",
    },
    button(),
  ],
}
