import { Block } from "payload"
import { OutlineButton } from "./layouts/OutlineButton/config"
import { AnimatedButton } from "./layouts/AnimatedButton/config"
import { FilledButton } from "./layouts/FilledButton/config"
import { HoverButton } from "./layouts/HoverButton/config"

export const PayloadButton: Block = {
  slug: "payloadButton",
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [OutlineButton, AnimatedButton, FilledButton, HoverButton],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
