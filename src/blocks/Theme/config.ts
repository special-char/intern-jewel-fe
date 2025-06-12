import { GlobalConfig } from "payload"
import { anyone } from "@/access/anyone"

export const Theme: GlobalConfig = {
  slug: "theme",
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "theme",
      type: "code",
      label: "Theme",
      admin: {
        language: "css",
      },
    },
  ],
}
