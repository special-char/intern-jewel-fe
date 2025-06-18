import { Block } from "payload"
import { ContactInformationBlock } from "./layouts/contactInformation1/Config"

export const ContactInformation: Block = {
  slug: "ContactInformation",
  labels: {
    singular: "Contact Information Layout",
    plural: "Contact Information Layouts",
  },
  fields: [
    {
      name: "blocks",
      type: "blocks",
      blocks: [ContactInformationBlock],
      label: "Contact Information Sections",
      required: true,
    },
  ],
}
