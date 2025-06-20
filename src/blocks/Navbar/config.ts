import { Block } from "payload"
import { Navbarlayout1 } from "./layout/Navbarlayout1/config"

export const Navbar: Block = {
  slug: "navbar",
  interfaceName: "Navbar",
  admin: {
    group: "Navigation",
  },
  fields: [
    {
      name: "Navbar",
      type: "blocks",
      blocks: [Navbarlayout1],
      maxRows: 1,
      required: true,
    },
  ],
}
