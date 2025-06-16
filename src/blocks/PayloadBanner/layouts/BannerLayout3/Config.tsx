import { Block } from "payload"
import { button } from "@/fields/button"
import { findImageByFilename } from "@lib/util/findImageByFilename"

export const BannerLayout3: Block = {
  slug: "bannerLayout3",
  interfaceName: "BannerLayout3",
  admin: { group: "Banner Layout" },
  labels: {
    singular: "BannerLayout3",
    plural: "BannerLayout3",
  },
  fields: [
    {
      name: "backgroundImage",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "BannerLayout3_hero"),
    },
    {
      name: "eyebrowText",
      label: "Label",
      type: "text",
      defaultValue: "JEWELRY",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
      defaultValue: "DISCOVER SPARKLE WITH STYLE",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      defaultValue:
        "Whether casual or formal, find the perfect jewelry for every occasion with us.",
    },

    // ✅ Reusable button group
    button(),

    {
      name: "textColor",
      label: "Text Color (Tailwind Class)",
      type: "text",
      defaultValue: "text-white",
    },
    {
      name: "overlayOpacity",
      label: "Overlay Opacity (0 to 1)",
      type: "number",
      min: 0,
      max: 1,
      defaultValue: 0.3,
    },
  ],
}
