import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en', 'ar', 'tr', 'zh', 'es']
const defaultLocale = 'en'

export default getRequestConfig(async ({ locale }) => {
  // Handle undefined locale by falling back to default
  let finalLocale: string = locale || defaultLocale
  if (!locale) {
    finalLocale = defaultLocale
  } else if (!locales.includes(locale as any)) {
    notFound()
  }
  
  try {
    const messages = (await import(`./messages/${finalLocale}.json`)).default
    
    return {
      locale: finalLocale,
      messages
    }
  } catch (error) {
    // Try to fall back to default locale
    if (finalLocale !== defaultLocale) {
      try {
        const fallbackMessages = (await import(`./messages/${defaultLocale}.json`)).default
        return {
          locale: defaultLocale,
          messages: fallbackMessages
        }
      } catch (fallbackError) {
        notFound()
      }
    }
    notFound()
  }
}) 