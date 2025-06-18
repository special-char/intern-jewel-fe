// src/blocks/ContactForm.ts

import { Block } from "payload"
import { ContactFormBlock } from "./layouts/contactForm1/Config"

export const ContactForm: Block = {
  slug: "ContactFormComponent",
  labels: {
    singular: "Contact Form Layout",
    plural: "Contact Form Layouts",
  },
  fields: [
    {
      name: "blocks",
      type: "blocks",
      blocks: [ContactFormBlock],
      label: "Form Sections",
      required: true,
    },
  ],
}
