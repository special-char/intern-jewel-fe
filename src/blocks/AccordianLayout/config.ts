import { Block } from "payload"
import { FaqLayout } from "./layouts/FaqLayout/config"
export const AccordianLayout: Block = {
  slug: "accordianLayout",
  interfaceName: "AccordianLayout",
  fields: [
    {
      name: "AccordianLayout",
      type: "blocks",
      blocks: [FaqLayout],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
