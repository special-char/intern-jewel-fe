import { Block } from "payload"
import { FeatureLayout1 } from "./layouts/FeatureLayout1/config"
import { FeatureLayout2 } from "./layouts/FeatureLayout2/config"

export const FeatureLayout: Block = {
  slug: "featureLayout",
  interfaceName: "FeatureLayout",
  admin: { group: "Separators" },
  fields: [
    {
      name: "FeatureLayout",
      type: "blocks",
      blocks: [FeatureLayout1, FeatureLayout2],
      maxRows: 1,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
