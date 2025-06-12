import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const ShowcaseSection1: Block = {
  slug: "showcaseLayout1",
  interfaceName: "ShowcaseLayout1",
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
