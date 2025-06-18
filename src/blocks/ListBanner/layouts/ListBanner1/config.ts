import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const ListBanner1: Block = {
  slug: "listBannerLayout1",
  interfaceName: "ListBannerLayout1",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_showcaseLayout1.png",
  admin: { group: "List Banner Section" },
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
      name: "listBannerTagline",
      type: "text",
      required: true,
      defaultValue: "NEW COLLECTION",
      admin: {
        description: "Displayed as uppercase text above the heading"
      }
    },
    {
      name: "listBannerHeading",
      type: "text",
      required: true,
      defaultValue: "Minimal Me",
      admin: {
        description: "Main heading text"
      }
    },
    {
      name: "listBannerDescription",
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
