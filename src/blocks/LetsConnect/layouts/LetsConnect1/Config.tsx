import type { Block, TextFieldManyValidation, Validate } from "payload"

export const LetsConnectBlock: Block = {
  slug: "letsConnectBlock",
  interfaceName: "LetsConnectBlock",
  labels: {
    singular: "Let's Connect Block",
    plural: "Let's Connect Blocks",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "Let's Get in Touch!",
    },
    {
      name: "socialLinks",
      label: "Social Links",
      type: "array",
      minRows: 1,
      maxRows: 8,
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
          defaultValue: "Instagram",
        },
        {
          name: "url",
          label: "URL",
          type: "text",
          required: true,
          defaultValue: "https://www.instagram.com/",
          validate: (val: any) => {
            if (!val) return "URL is required"
            try {
              new URL(val)
              return true
            } catch {
              return "Please enter a valid URL"
            }
          },
        },
        {
          name: "icon",
          label: "Icon",
          type: "select",
          required: true,
          defaultValue: "instagram",
          options: [
            { label: "Instagram", value: "instagram" },
            { label: "Twitter/X", value: "twitter" },
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
          label: "Background Color",
          type: "text",
          required: true,
          defaultValue: "#D4AF37",
          admin: {
            description:
              "Enter a hex color code (e.g., #D4AF37) or CSS color name",
          },
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

export interface LetsConnectBlockProps {
  title: string
  socialLinks: SocialLink[]
}
