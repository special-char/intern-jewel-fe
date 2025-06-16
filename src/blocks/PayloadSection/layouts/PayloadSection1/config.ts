import { Block } from "payload"

export const PayloadSectionLayout1: Block = {
  slug: "payloadSectionLayout1",
  interfaceName: "PayloadSectionBlock",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-sectionwrapper.png", // Replace with real image if needed
  admin: {
    group: "Banner Layout",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Why Choose Us?",
    },
    {
      name: "richTextContent",
      type: "richText",
      required: true,
      defaultValue: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "We are committed to providing the best service to our customers. Our team of experts works tirelessly to ensure your satisfaction.",
                },
              ],
            },
          ],
        },
      },
    },
  ],
}