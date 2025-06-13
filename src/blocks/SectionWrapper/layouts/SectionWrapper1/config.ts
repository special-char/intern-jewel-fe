import { Block } from "payload"

export const SectionWrapperLayout1: Block = {
  slug: "sectionWrapperLayout1",
  interfaceName: "SectionWrapperBlock",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-sectionwrapper.png", // Replace with real image if needed
  admin: {
    group: "Banner Layout",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: false,
      defaultValue: "Why Choose Us?",
    },
    {
      name: "children",
      type: "blocks",
      required: false,
      blocks: [
        {
          slug: "richText",
          labels: { singular: "Rich Text", plural: "Rich Texts" },
          fields: [{ name: "content", type: "richText" }],
        },
        // {
        //   slug: "imageMedia",
        //   labels: { singular: "Image", plural: "Images" },
        //   fields: [
        //     { name: "url", type: "text" },
        //     { name: "alt", type: "text" },
        //   ],
        // },
      ],
    },
  ],
}