"use client"

import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"

interface RTLWrapperProps {
  children: React.ReactNode
}

export function RTLWrapper({ children }: RTLWrapperProps) {
  const locale = useLocale()
  const pathname = usePathname()
  
  // Extract locale from pathname as fallback
  const pathLocale = pathname.split('/')[1] || 'en'
  const currentLocale = locale || pathLocale
  
  // RTL languages
  const rtlLanguages = ['ar']
  const isRTL = rtlLanguages.includes(currentLocale)

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "rtl" : "ltr"}>
      {children}
    </div>
  )
} 