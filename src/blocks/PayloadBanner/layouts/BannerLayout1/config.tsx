import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const BannerLayout1: Block = {
  slug: "bannerLayout1",
  interfaceName: "BannerLayout1",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-bannerlayout1.png",
  admin: { group: "Banner Layout" },
  fields: [
    {
      name: "BannerImage1",
      type: "upload",
      relationTo: "media",
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "homelayout1_bannerImage1.jpeg"),
    },
    {
      name: "BannerImage2",
      type: "upload",
      relationTo: "media",
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "homelayout1_bannerImage2.jpg"),
    },
    {
      name: "title",
      type: "textarea",
      required: true,
      defaultValue: "Live in Glamour",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue:
        "Reach the perfect glamour style with our exclusive jewelry collections.",
    },
    button(),

    button({
      overrides: {
        label: "link",
        name: "link",
      },
    }),
  ],
}
