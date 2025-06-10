import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical"
import type { Block, PayloadRequest } from "payload"

export const FaqLayout2: Block = {
  slug: "faqLayout2",
  interfaceName: "FaqLayout2",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_faq.png",
  admin: { group: "Accordian Layouts" },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Frequently Asked Questions",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description: "Background image for FAQ layout",
      },
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "faqLayout2_default_bg.jpg"),
    },
    {
      name: "singleItemOpen",
      type: "checkbox",
      label: "Single Item Open",
      defaultValue: false,
      admin: {
        description: "Check this to allow only one accordion item to be open at a time (others will automatically collapse)",
      },
    },
    {
      name: "accordian",
      type: "array",
      required: true,
      fields: [
        {
          name: "id",
          label: "ID",
          type: "text",
          required: true,
          admin: {
            position: "sidebar",
            description: "Provide a unique ID for each FAQ item",
          },
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
      ],
      defaultValue: () => {
        const baseQuestions = [
          {
            id: "1",
            title: "Do you offer international shipping?",
            content:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: "2",
            title: "Do you offer personalized messages for special times?",
            content:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: "3",
            title: "Do you offer customization options for jewelry?",
            content:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: "4",
            title: "What payment methods do you accept?",
            content:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ]

        return baseQuestions.map((faq) => ({
          id: faq.id,
          title: faq.title,
          content: {
            root: {
              type: "root",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: faq.content,
                    },
                  ],
                },
              ],
            },
          },
        }))
      },
    },
  ],
}

async function findImageByFilename(req: PayloadRequest, filename: string) {
  const mediaCollection = await req.payload.find({
    collection: "media",
    where: {
      filename: {
        equals: filename,
      },
    },
    limit: 1,
  })

  return mediaCollection?.docs?.[0]?.id || null
}