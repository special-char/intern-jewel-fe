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
      required: false,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: false,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
    },
    {
      name: "formAction",
      label: "Form Action URL",
      type: "text",
      required: false,
      defaultValue: "/default-action-url",
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
          required: false,
          defaultValue: "Name",
        },
        {
          name: "emailLabel",
          type: "text",
          label: "Email Label",
          required: false,
          defaultValue: "Email Address",
        },
        {
          name: "messageLabel",
          type: "text",
          label: "Message Label",
          required: false,
          defaultValue: "Message",
        },
        {
          name: "submitLabel",
          type: "text",
          label: "Submit Button Label",
          required: false,
          defaultValue: "Submit",
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
