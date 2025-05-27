import { Block } from "payload"
import { AdvertismentSection1 } from "./layouts/AdvertismentSection1/config"
import { AdvertismentSection2 } from "./layouts/AdvertismentSection2/config"

export const AdvertismentSection: Block = {
  slug: "advertismentSection",
  interfaceName: "AdvertismentSection",
  fields: [
    {
      name: "AdvertismentSection",
      type: "blocks",
      blocks: [AdvertismentSection1, AdvertismentSection2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
