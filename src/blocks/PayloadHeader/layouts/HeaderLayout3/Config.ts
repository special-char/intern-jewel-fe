import type { Block } from "payload"

interface Media {
  id?: string
  url?: string
  filename?: string
}
export interface MegaMenuItem {
  title: string
  image?: string | Media
  href: string
}

export interface NavigationItem {
  title: string
  href?: string
  megaMenu?: MegaMenuItem[]
}

export interface HeaderProps {
  logo?: {
    text?: string
    image?: string
    href?: string
  }
  navigation?: NavigationItem[]
  searchPlaceholder?: string
  phoneNumber?: string
  cartCount?: number
  onSearch?: (query: string) => void
  onCartClick?: () => void
}

export const HeaderLayout3: Block = {
  slug: "headerLayout3",
  interfaceName: "HeaderLayout3",
  labels: {
    singular: "Header",
    plural: "Headers",
  },
  fields: [
    {
      name: "logo",
      type: "group",
      fields: [
        { name: "text", type: "text" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "navigation",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "href", type: "text" },
        {
          name: "megaMenu",
          type: "array",
          fields: [
            { name: "title", type: "text", required: true },
            { name: "image", type: "upload", relationTo: "media" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
    {
      name: "searchPlaceholder",
      type: "text",
      defaultValue: "Search product...",
    },
    {
      name: "phoneNumber",
      type: "text",
      defaultValue: "(+123) 456 7890",
    },
  ],
}
