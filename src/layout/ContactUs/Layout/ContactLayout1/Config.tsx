import { contactUsBlock } from "@/fields/ContactUsBlock"
import type { Block } from "payload"

export const ContactUs1: Block = {
  slug: "contactUs1",
  interfaceName: "ContactUs1",
  admin: { group: "Contact Us" },
  fields: [
    contactUsBlock({
      overrides: {
        defaultValue: [
          {
            blockType: "ContactFormComponent",
          },
        ],
      },
    }),
  ],
}
