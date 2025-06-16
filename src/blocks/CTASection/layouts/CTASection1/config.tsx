import { Block } from "payload"
import { button } from "@/fields/button"

export const CTASectionLayout1: Block = {
  slug: "ctaSectionBlock",
  interfaceName: "CTASectionBlock",
  admin: {
    group: "CTAsection",
  },
  fields: [
    {
      name: "title",
      type: "textarea",
      required: true,
      defaultValue: "let work with Us!",
    },
    button({
      overrides: {
        name: "button",
        label: "Primary Button",
      },
    }),
  ],
}