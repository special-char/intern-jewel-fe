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
    singular: "Contact Form Block",
    plural: "Contact Form Blocks",
  },
  fields: [
    {
      name: "eyebrow",
      label: "contact us label",
      type: "text",
      required: false,
      defaultValue: "CONTACT US",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: false,
      defaultValue: "Get in Touch",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
      defaultValue:
        "At Axels, we value your feedback, inquiries, and any assistance you may need. Our dedicated team is ready to provide you with the support you require.\n\nWhether you have questions about our jewelry collections, need assistance with an order, or simply want to share your thoughts, please don't hesitate to reach out to us.",
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
          type: "email",
          label: "Email Label",
          required: false,
          defaultValue: "you@example.com",
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
          defaultValue: "SUBMIT",
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
