import { anyone } from "@/access/anyone"
import { GlobalConfig } from "payload"
import { revalidateFooter } from "./hooks/revalidateFooter"
import { FooterLayout1 } from "./layouts/FooterLayout1/config"
import { FooterLayout2 } from "./layouts/FooterLayout2/config"
import { FooterLayout3 } from "./layouts/FooterLayout3/config"

export const PayloadFooter: GlobalConfig = {
  slug: "footer",
  access: {
    read: anyone,
    update: anyone,
  },
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [FooterLayout1, FooterLayout2, FooterLayout3],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
