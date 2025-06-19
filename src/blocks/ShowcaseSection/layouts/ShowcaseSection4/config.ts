import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const ShowcaseSection4: Block = {
  slug: "showcaseLayout4",
  interfaceName: "ShowcaseLayout4",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_showcaseLayout1.png",
  admin: { group: "Showcase Section" },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "homelayout1_showcaseImage1.jpeg"),
    },
    {
      name: "showcaseHeading",
      type: "text",
      required: true,
      defaultValue: "Minimal Me",
      admin: {
        description: "Main heading text"
      }
    },
    {
      name: "showcaseDescription",
      type: "textarea",
      required: true,
      defaultValue: "Introducing our new minimalist collection. Suitable for the active yet elegant.",
      admin: {
        description: "Description text displayed below the heading"
      }
    },
    button(),
  ],
}
