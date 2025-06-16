import { Block } from "payload"
import { ContactUs1 } from "./Layout/ContactLayout1/Config"

export const ContactUs: Block = {
  slug: "contactUs",
  interfaceName: "ContactUs",
  fields: [
    {
      name: "ContactUs",
      type: "blocks",
      blocks: [ContactUs1],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
