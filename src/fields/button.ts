import type { Field, GroupField } from "payload"

import deepMerge from "@/utilities/deepMerge"

type ButtonType = (options?: {
  disableLabel?: boolean
  overrides?: Partial<GroupField>
}) => Field

export const button: ButtonType = ({
  disableLabel = false,
  overrides = {},
} = {}) => {
  const buttonResult: GroupField = {
    name: "button",
    type: "group",
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "type",
            type: "radio",
            admin: {
              layout: "horizontal",
              width: "50%",
            },
            defaultValue: "custom",
            options: [  
              {
                label: "Custom URL",
                value: "custom",
              },
              {
                label: "Internal link",
                value: "reference",
              },
            ],
          },
          {
            name: "newTab",
            type: "checkbox",
            admin: {
              style: {
                alignSelf: "flex-end",
              },
              width: "50%",
            },
            label: "Open in new tab",
          },
        ],
      },
    ],
  }

  const buttonTypes: Field[] = [
    {
      name: "reference",
      type: "relationship",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "reference",
      },
      label: "Document to link to",
      relationTo: ["pages"],
      required: true,
    },
    {
      name: "url",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "custom",
      },
      defaultValue: "/",
      label: "Custom URL",
      required: true,
    },
  ]

  if (!disableLabel) {
    buttonTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: "50%",
      },
    }))

    buttonResult.fields.push({
      type: "row",
      fields: [
        ...buttonTypes,
        {
          name: "label",
          type: "text",
          admin: {
            width: "50%",
          },
          defaultValue: "Button Label",
          label: "Label",
          required: true,
        },
      ],
    })
  } else {
    buttonResult.fields = [...buttonResult.fields, ...buttonTypes]
  }

  return deepMerge(buttonResult, overrides)
}
