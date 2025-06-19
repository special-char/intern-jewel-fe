import {
    FixedToolbarFeature,
    InlineToolbarFeature,
    lexicalEditor,
  } from "@payloadcms/richtext-lexical"
  import { Block } from "payload"

  
  export const ListPageHeaderLayout1: Block = {
    slug: "listPageHeaderLayout1",
    interfaceName: "ListPageHeaderLayout1",
    admin: { group: "List Page Header" },
  
    fields: [
      {
        name: "heading",
        type: "text",
        required: true,
        defaultValue: "Discover Our Products",
      },
      {
        name: "subtext",
        type: "richText",
        required: true,
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ];
          },
        }),
        defaultValue: {
          root: {
            type: "root",
            format: "",
            indent: 0,
            version: 1,
            children: [
              {
                type: "paragraph",
                format: "",
                indent: 0,
                version: 1,
                children: [
                  {
                    type: "text",
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Whether casual or formal, find the perfect jewelry for every occasion with us.",
                    version: 1
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  }