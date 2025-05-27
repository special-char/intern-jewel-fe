import React from "react"
import { getCachedGlobal } from "@/utilities/getGlobals"
import { Header, HeaderLayout1, HeaderLayout2 } from "@/payload-types"
import { PayLoadHeader } from "./components/PayloadHeader/PayLoadHeader"

export const PayLoadNavbar: React.FC = async () => {
  const headerData = (await getCachedGlobal("header", 1)()) as Header
  const hasChildren =
    headerData.layout &&
    Array.isArray(headerData.layout) &&
    headerData.layout.length > 0

  if (hasChildren) {
    return <PayLoadHeader blocks={headerData.layout as HeaderLayout1[] | HeaderLayout2[]} />
  }
  return null
}
