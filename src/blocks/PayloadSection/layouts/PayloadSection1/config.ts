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
      defaultValue: "Our Journey",
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
                  text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sequi! Saepe, nihil. Consequatur, suscipit commodi est sapiente, dignissimos distinctio ipsum ipsam et debitis eos nesciunt ea pariatur, reprehenderit architecto quod!"                
                },
              ],
            },
          ],
        },
      },
    },
  ],
}