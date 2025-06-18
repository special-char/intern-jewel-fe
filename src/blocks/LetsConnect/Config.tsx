import { Block } from "payload"
import { LetsConnectBlock } from "./layouts/LetsConnect1/Config"

export const ContactInformation: Block = {
  slug: "LetsConnect",
  labels: {
    singular: "Lets Connect Layout",
    plural: "Lets Connect Layouts",
  },
  fields: [
    {
      name: "blocks",
      type: "blocks",
      blocks: [LetsConnectBlock],
      label: "Contact Information Sections",
      required: true,
    },
  ],
}
