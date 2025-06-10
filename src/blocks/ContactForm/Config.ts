import type { Block } from "payload"

export interface FormBlockProps {
  eyebrow?: string
  title?: string
  description?: string
  formAction?: string
  formSettings?: {
    nameLabel?: string
    emailLabel?: string
    messageLabel?: string
    submitLabel?: string
  }
  region?: {
    id: string
  }
  disableInnerContainer?: boolean
}

export const ContactFormBlock: Block = {
  slug: "contactFormBlock",
  interfaceName: "ContactFormBlock",
  labels: {
    singular: "Form Block",
    plural: "Form Blocks",
  },
  fields: [
    {
      name: "eyebrow",
      label: "Eyebrow Text",
      type: "text",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "formAction",
      label: "Form Action URL",
      type: "text",
    },
    {
      name: "formSettings",
      type: "group",
      label: "Form Labels",
      fields: [
        {
          name: "nameLabel",
          type: "text",
          label: "Name Label",
        },
        {
          name: "emailLabel",
          type: "text",
          label: "Email Label",
        },
        {
          name: "messageLabel",
          type: "text",
          label: "Message Label",
        },
        {
          name: "submitLabel",
          type: "text",
          label: "Submit Button Label",
        },
      ],
    },
    {
      name: "disableInnerContainer",
      label: "Disable Inner Container",
      type: "checkbox",
      defaultValue: false,
    },
  ],
}
