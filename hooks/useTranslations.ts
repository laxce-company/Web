"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import enTranslations from '@/messages/en.json'
import arTranslations from '@/messages/ar.json'

export function useTranslations() {
  const { currentLanguage } = useLanguage()
  
  // Import translations from JSON files
  const translations = {
    en: enTranslations,
    ar: arTranslations,
    // Add other languages as needed
    tr: enTranslations, // Fallback to English for now
    zh: enTranslations, // Fallback to English for now
    es: enTranslations, // Fallback to English for now
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback to English
        value = translations.en
        for (const fallbackKey of keys) {
          value = value?.[fallbackKey]
        }
        break
      }
    }
    
    return value || key
  }

  return { t, currentLanguage }
} 