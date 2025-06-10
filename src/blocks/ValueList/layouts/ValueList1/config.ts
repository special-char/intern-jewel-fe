import { Block } from "payload"

export const ValueListLayout1: Block = {
  slug: "valueListLayout1",
  interfaceName: "ValueListBlock",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-valuelist.png", // Replace with actual image if desired
  admin: {
    group: "Banner Layout",
  },
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Trusted Craftsmanship",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue:
            "We use only ethically sourced materials to ensure beauty with integrity.",
        },
      ],
    },
  ],
}