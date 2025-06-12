import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical"
import type { Block } from "payload"

export const FaqLayout: Block = {
  slug: "faqLayout",
  interfaceName: "FaqLayout",
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
      name: "accordian",
      type: "array",
      required: true,
      defaultValue: () => {
        const baseQuestion = {
          title: "Do you offer international shipping?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }

        const faqData = Array(8)
          .fill(null)
          .map((_, index) => ({
            title: baseQuestion.title,
            content: baseQuestion.content,
          }))

        return faqData.map((faq) => ({
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
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "richText",
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),

          required: true,
        },
      ],
    },
  ],
}
