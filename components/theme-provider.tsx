"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "laxce-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get theme from localStorage
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme
      if (storedTheme && (storedTheme === "dark" || storedTheme === "light")) {
        console.log("Found stored theme:", storedTheme)
        setTheme(storedTheme)
      } else {
        console.log("No stored theme found, using default:", defaultTheme)
      }
    } catch (error) {
      console.warn("Failed to get theme from localStorage:", error)
    }
  }, [storageKey, defaultTheme])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    
    console.log("Applying theme:", theme)
    
    // Remove existing classes
    root.classList.remove("light", "dark")

    // Add new theme class
    if (theme === "dark") {
      root.classList.add("dark")
      root.style.colorScheme = "dark"
    } else {
      root.classList.add("light")
      root.style.colorScheme = "light"
    }

    // Save to localStorage
    try {
      localStorage.setItem(storageKey, theme)
      console.log("Theme saved to localStorage:", theme)
    } catch (error) {
      console.warn("Failed to save theme to localStorage:", error)
    }
  }, [theme, storageKey, mounted])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log("setTheme called with:", newTheme)
      setTheme(newTheme)
    },
    toggleTheme: () => {
      console.log("toggleTheme called, current theme:", theme)
      setTheme(prevTheme => {
        const newTheme = prevTheme === "dark" ? "light" : "dark"
        console.log("Switching from", prevTheme, "to", newTheme)
        return newTheme
      })
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
