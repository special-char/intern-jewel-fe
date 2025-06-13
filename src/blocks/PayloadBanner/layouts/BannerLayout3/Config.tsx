import { Block } from "payload"
import { button } from "@/fields/button"

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
    },
    {
      name: "eyebrowText",
      label: "Label",
      type: "text",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
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
