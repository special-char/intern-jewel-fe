import { Block } from "payload"
import { FaqLayout } from "./layouts/FaqLayout/config"
import { FaqLayout2 } from "./layouts/FaqLayout2/config"
export const AccordianLayout: Block = {
  slug: "accordianLayout",
  interfaceName: "AccordianLayout",
  fields: [
    {
      name: "AccordianLayout",
      type: "blocks",
      blocks: [FaqLayout, FaqLayout2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
