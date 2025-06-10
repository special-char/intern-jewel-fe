import { Block } from "payload"

export const IntroHeaderLayout1: Block = {
  slug: "introHeaderBlock",
  interfaceName: "IntroHeaderBlock",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-introheader.png", // Replace with actual thumbnail if needed
  admin: {
    group: "Introheader",
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: false,
      defaultValue: "OUR STORY",
    },
    {
      name: "title",
      type: "textarea",
      required: true,
      defaultValue: "Jewels That Speak for You",
    },
    {
      name: "subtitle",
      type: "richText",
      required: false,
    },
  ],
}