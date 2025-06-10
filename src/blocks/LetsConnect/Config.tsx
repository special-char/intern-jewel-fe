import type { Block } from "payload"

export const ContactSection: Block = {
  slug: "contactSection",
  interfaceName: "ContactSectionBlockProps",
  labels: {
    singular: "Contact Section",
    plural: "Contact Sections",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
      required: false,
    },
    {
      name: "className",
      label: "Custom CSS Class",
      type: "text",
      required: false,
    },
    {
      name: "socialLinks",
      label: "Social Links",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Social Link",
        plural: "Social Links",
      },
      fields: [
        {
          name: "name",
          label: "Platform Name",
          type: "text",
          required: true,
        },
        {
          name: "url",
          label: "URL",
          type: "text",
          required: true,
        },
        {
          name: "icon",
          label: "Icon",
          type: "select",
          required: true,
          options: [
            { label: "Instagram", value: "instagram" },
            { label: "Twitter", value: "twitter" },
            { label: "Facebook", value: "facebook" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "YouTube", value: "youtube" },
            { label: "Mail", value: "mail" },
            { label: "Phone", value: "phone" },
            { label: "Location", value: "mapPin" },
          ],
        },
        {
          name: "color",
          label: "Background Color (Hex or CSS color)",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}

// TypeScript interfaces for frontend usage
export interface SocialLink {
  name: string
  url: string
  icon: string // to be mapped to LucideIcon in the component
  color: string
}

export interface ContactSectionBlockProps {
  title: string
  subtitle?: string
  className?: string
  socialLinks: SocialLink[]
}
