import { Block } from "payload"

export const Navbarlayout1: Block = {
  slug: "navbarlayout1",
  fields: [
    {
      name: "menus",
      label: "Menus",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "label",
          label: "Menu Label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Menu Link",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
