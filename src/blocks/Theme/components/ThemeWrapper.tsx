"use client"
import { Theme } from "@/payload-types"
import { useEffect } from "react"

interface ThemeWrapperProps {
  theme: Theme
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ theme }) => {
  const { theme: themeCode } = theme

  const getDarkTheme = (css: string): string => {
    const darkThemeMatch = css.match(/\.dark\s*{([^}]+)}/)
    return darkThemeMatch
      ? `@media(prefers-color-scheme: dark) {:root {${darkThemeMatch[1]}}}`
      : ""
  }

  useEffect(() => {
    if (themeCode) {
      const existingStyle = document.getElementById("theme-styles")
      if (!existingStyle) {
        const styleElement = document.createElement("style")
        styleElement.id = "theme-styles"
        styleElement.innerHTML = `${themeCode}\n${getDarkTheme(themeCode)}`
        document.head.appendChild(styleElement)
      }
    }
  }, [themeCode])

  return null
}
