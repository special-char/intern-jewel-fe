import { Block } from "payload"

export interface ContactSupportData {
  title: string
  description: string
  email: string
  phone: string
  hours: string
}

export interface ShowroomData {
  title: string
  description: string
  address: string
  staffDescription: string
}

export interface ContactInformationProps {
  heading?: string
  customerSupport?: ContactSupportData
  showroom?: ShowroomData
  className?: string
}

export const ContactInformationBlock: Block = {
  slug: "contactInformation",
  labels: {
    singular: "Contact Information",
    plural: "Contact Information Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      required: false,
    },
    {
      name: "customerSupport",
      type: "group",
      label: "Customer Support",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "email",
          type: "email",
        },
        {
          name: "phone",
          type: "text",
        },
        {
          name: "hours",
          type: "textarea",
        },
      ],
    },
    {
      name: "showroom",
      type: "group",
      label: "Showroom",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "address",
          type: "text",
        },
        {
          name: "staffDescription",
          type: "textarea",
        },
      ],
    },
  ],
}
