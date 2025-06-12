import { anyone } from "@/access/anyone"
import { authenticated } from "@/access/authenticated"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import type { CollectionConfig } from "payload"

export const ProductCategories: CollectionConfig = {
  slug: "product_categories",
  admin: {
    useAsTitle: "category_handle",
  },
  access: {
    read: anyone,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: "category_id",
      type: "text",
      required: true,
    },
    {
      name: "category_handle",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "category_title",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "category_media",
      type: "upload",
      relationTo: "media",
      hasMany: false,
    },
    {
      name: "additional_title",
      type: "text",
    },
    {
      name: "additional_content",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      name: "additional_metadata",
      type: "json",
    },
    {
      name: "status",
      type: "select",
      options: ["active", "inactive"],
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "visibility",
      type: "select",
      options: ["public", "internal"],
      required: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
}
