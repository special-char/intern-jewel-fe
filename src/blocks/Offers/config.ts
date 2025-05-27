import { Block } from "payload"
import { OfferLayout1 } from "./layouts/OfferLayout1/config"

export const Offers: Block = {
  slug: "offers",
  interfaceName: "Offers",
  admin: {
    group: "Separators",
  },
  fields: [
    {
      name: "Offers",
      type: "blocks",
      blocks: [OfferLayout1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
