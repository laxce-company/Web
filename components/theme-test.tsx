"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeTest() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Theme Test Component
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 dark:text-gray-300">
            Current Theme: <strong>{theme}</strong>
          </span>
          <Button
            onClick={toggleTheme}
            size="sm"
            variant="outline"
            className="flex items-center space-x-2"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span>Toggle Theme</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Light Mode Colors</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-white text-gray-900 p-2 rounded">White background</div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded">Gray background</div>
              <div className="bg-blue-100 text-blue-900 p-2 rounded">Blue background</div>
            </div>
          </div>
          
          <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded">
            <h3 className="font-semibold text-white mb-2">Dark Mode Colors</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-800 text-white p-2 rounded">Dark background</div>
              <div className="bg-gray-700 text-gray-300 p-2 rounded">Gray background</div>
              <div className="bg-blue-900 text-blue-100 p-2 rounded">Blue background</div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>This component helps test if the theme switching is working properly.</p>
          <p>If you see different colors when clicking the toggle button, the theme system is working!</p>
        </div>
      </div>
    </div>
  )
} 