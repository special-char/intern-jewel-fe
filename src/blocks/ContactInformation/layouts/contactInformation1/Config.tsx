import type { Block } from "payload"

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
}

export const ContactInformationBlock: Block = {
  slug: "contactInformationBlock",
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
      defaultValue: "Contact Information",
    },
    {
      name: "customerSupport",
      type: "group",
      label: "Customer Support",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          defaultValue: "Customer Support",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          defaultValue:
            "If you have any questions, concerns, or need assistance with your order, our customer support team is here to help.",
        },
        {
          name: "email",
          type: "email",
          label: "Support Email",
          defaultValue: "support@axelsjewelry.com",
        },
        {
          name: "phone",
          type: "text",
          label: "Support Phone",
          defaultValue: "1-800-123-4567",
        },
        {
          name: "hours",
          type: "textarea",
          label: "Working Hours",
          defaultValue:
            "Our team is available during our regular business hours, Monday through Friday from 9:00 AM to 6:00 PM (EST).",
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
          label: "Title",
          defaultValue: "Visit Our Showroom",
        },
        {
          name: "description",
          type: "textarea",
          label: "Intro Description",
          defaultValue:
            "If you're in the area, we invite you to visit our showroom",
        },
        {
          name: "address",
          type: "text",
          label: "Address",
          defaultValue: "[123 Main Street, City, State, ZIP]",
        },
        {
          name: "staffDescription",
          type: "textarea",
          label: "Staff/Personalized Service Text",
          defaultValue:
            "Our knowledgeable staff will be delighted to assist you in person, showcase our collections, and provide personalized recommendations.",
        },
      ],
    },
  ],
}
