import React from "react"
import { getCachedGlobal } from "@/utilities/getGlobals"
import {Theme } from "@/payload-types"
import { ThemeWrapper } from "./components/ThemeWrapper"

export const ToogleTheme: React.FC = async () => {
  const themeData = (await getCachedGlobal("theme", 1)()) as Theme  
  
 return (
    <ThemeWrapper theme={themeData}/>
 )
}
