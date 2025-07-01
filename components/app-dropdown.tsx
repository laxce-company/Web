"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown, Smartphone, Globe, Monitor } from "lucide-react"
import Link from "next/link"
interface AppDropdownProps {
  variant?: "default" | "hero"
  className?: string
}

export function AppDropdown({ variant = "default", className = "" }: AppDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const appOptions = [
    {
      label: "APK Download",
      description: "Direct APK file for Android",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17V7h2v7.17l3.59-3.58L17 12l-7 7z"/>
        </svg>
      ),
      href: "#coming-soon",
      color: "from-orange-500 to-red-500"
    },
    {
      label: "Google Play",
      description: "Download from Google Play Store",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
      ),
      href: "#coming-soon",
      color: "from-green-500 to-emerald-500"
    },
    {
      label: "App Store",
      description: "Download from Apple App Store",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
        </svg>
      ),
      href: "#coming-soon",
      color: "from-blue-500 to-indigo-500"
    }
  ]

  const buttonClasses = variant === "hero" 
    ? "group relative bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-12 py-6 rounded-2xl text-lg font-semibold shadow-2xl shadow-[#0B6BAB]/25 hover:shadow-[#0B6BAB]/40 transition-all duration-300 hover:scale-105 btn-glow flex items-center gap-3"
    : "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-6 py-2 rounded-xl font-medium shadow-lg shadow-[#0B6BAB]/25 hover:scale-105 transition-all duration-200 flex items-center gap-2"

  const iconSize = variant === "hero" ? "w-6 h-6" : "w-4 h-4"
  const chevronSize = variant === "hero" ? "w-5 h-5" : "w-4 h-4"
  const dropdownWidth = variant === "hero" ? "w-96" : "w-80"

  return (
    <div className={`relative ${className} btn-group`} ref={dropdownRef}>
      <Button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={buttonClasses}
      >
        <Download className={`${iconSize} group-hover:animate-bounce`} />
        Get App
        <ChevronDown className={`${chevronSize} transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className={`absolute top-full ${variant === "hero" ? "left-1/2 transform -translate-x-1/2" : "right-0"} mt-2 ${dropdownWidth} bg-white dark:bg-[#0a0f1c] rounded-2xl shadow-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-md overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200`}>
          <div className="p-4">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-2">
              Choose Download Platform
            </div>
            <div className="space-y-2">
              {appOptions.map((option, index) => (
                <Link
                  key={index}
                  href={option.href}
                  className="flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 group"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color} text-white mr-3 group-hover:scale-110 transition-transform duration-200`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white group-hover:text-[#0B6BAB] dark:group-hover:text-[#0BAB9B] transition-colors duration-200">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {option.description}
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                    <Download className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 