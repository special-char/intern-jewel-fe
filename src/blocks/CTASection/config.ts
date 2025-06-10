import { Block } from "payload"
import { CTASectionLayout1 } from "./layouts/CTASection1/config"

export const CTASection: Block = {
  slug: "ctaSection",
  admin: {
    group: "CTA Section",
  },
  fields: [
    {
      name: "CTASection",
      type: "blocks",
      blocks: [CTASectionLayout1],
      defaultValue: [{blockType: "ctaSectionLayout1"}],
      maxRows: 1,
      required: true,
    },
  ],
}