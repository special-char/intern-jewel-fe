import { lexicalEditor } from "@payloadcms/richtext-lexical"
import type { CollectionConfig } from "payload"
import { anyone } from "@/access/anyone"
import { generatePreviewPath } from "@/utilities/generatePreviewPath"
import {
  revalidateDelete,
  revalidateProductPage,
} from "./hooks/revalidateProduct"
import { populatePublishedAt } from "@/hooks/populatePublishedAt"
import { OverviewField } from "@payloadcms/plugin-seo/fields"
import { PreviewField } from "@payloadcms/plugin-seo/fields"
import { MetaDescriptionField } from "@payloadcms/plugin-seo/fields"
import { MetaImageField } from "@payloadcms/plugin-seo/fields"
import { MetaTitleField } from "@payloadcms/plugin-seo/fields"
import { defaultBlocks } from "@/fields/defaultBlocks"
import { authenticated } from "@/access/authenticated"

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "product_handle",
    defaultColumns: ["product_title", "product_handle", "product_id"],
    livePreview: {
      url: ({ data, req }) => {
        console.log({ data })
        const path = generatePreviewPath({
          slug:
            typeof data?.product_handle === "string" ? data.product_handle : "",
          collection: "products",
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug:
          typeof data?.product_handle === "string" ? data.product_handle : "",
        collection: "products",
        req,
      }),
  },
  access: {
    read: anyone,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: "product_title",
      label: "Medusa Product Title",
      type: "text",
      required: true,
    },
    {
      name: "product_id",
      label: "Medusa Product id",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "product_handle",
      label: "Medusa Product Handle",
      type: "text",
      index: true,
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: ["draft", "proposed", "published", "rejected"],
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          name: "content",
          fields: [
            defaultBlocks({
              overrides: {
                name: "layout",
                admin: {
                  initCollapsed: true,
                },
              },
              // append: {
              //   blocks: [],
              // },
            }),
          ],
        },
        {
          label: "Detail",
          name: "details",
          fields: [
            {
              name: "additional_title",
              label: "Additional Title",
              type: "text",
            },
            {
              name: "additional_content",
              label: "Additional Content",
              type: "richText",
              editor: lexicalEditor({}),
            },
            {
              name: "additional_metadata",
              label: "Additional Metadata",
              type: "json",
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateProductPage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1000, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
