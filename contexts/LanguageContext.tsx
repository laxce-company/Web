"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface LanguageContextType {
  currentLanguage: string
  changeLanguage: (language: string) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  // RTL languages
  const rtlLanguages = ['ar']

  const isRTL = rtlLanguages.includes(currentLanguage)

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language)
    // Store in localStorage for persistence
    localStorage.setItem('preferred-language', language)
    console.log(`Language changed to: ${language}`)
  }

  useEffect(() => {
    // Load preferred language from localStorage
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && ['en', 'ar', 'tr', 'zh', 'es'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 