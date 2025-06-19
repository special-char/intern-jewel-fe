"use client"
import { createContext, useContext, useEffect, useState } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: string
}

type ThemeContextType = {
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "default",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<string>(defaultTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
