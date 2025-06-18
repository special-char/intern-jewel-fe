import { AboutUs1 } from "@/layout/AboutUs/layouts/AboutUs1/config"
import { ContactUs1 } from "@/layout/ContactUs/Layout/ContactLayout1/Config"
import { HomeLayout1 } from "@/layout/HomeLayout/layouts/HomeLayout1/config"
import { HomeLayout2 } from "@/layout/HomeLayout/layouts/HomeLayout2/config"
import { HomeLayout3 } from "@/layout/HomeLayout/layouts/HomeLayout3/config"
import { ProductDetail1 } from "@/layout/ProductDetailPage/layouts/ProductDetail1/config"
import { ProductDetail1 } from "@/layout/ProductDetailPage/layouts/ProductDetail1/config"
import { ListPage1 } from "@/layout/Listpage/layouts/ListPage1/config"
import { ListPage2 } from "@/layout/Listpage/layouts/ListPage2/config"
import { ListPage3 } from "@/layout/Listpage/layouts/ListPage3/config"
import { ListPage4 } from "@/layout/Listpage/layouts/ListPage4/config"
import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"

type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}
export const defaultBlocks = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      HomeLayout1,
      HomeLayout2,
      HomeLayout3,
      AboutUs1,
      ContactUs1,
      ListPage1,
      ListPage2,
      ListPage3,
      ListPage4,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
