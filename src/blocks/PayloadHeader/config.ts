import { GlobalConfig } from "payload"
import { revalidateHeader } from "./hooks/revalidateHeader"
import { HeaderLayout1 } from "./layouts/HeaderLayout1/Config"
import { HeaderLayout2 } from "./layouts/HeaderLayout2/Config"
import { anyone } from "@/access/anyone"
import { HeaderLayout3 } from "./layouts/HeaderLayout3/Config"

export const PayLoadNavbar: GlobalConfig = {
  slug: "header",
  access: {
    read: anyone,
    update: anyone,
  },
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [HeaderLayout1, HeaderLayout2, HeaderLayout3],
      maxRows: 1,
      // required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
