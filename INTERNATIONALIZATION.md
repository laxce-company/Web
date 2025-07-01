# Internationalization (i18n) Guide

## Overview

This project uses `next-intl` for internationalization support. The system supports multiple languages with automatic routing and translation management.

## Supported Languages

- **English (en)** - Default language
- **Arabic (ar)** - RTL support
- **Turkish (tr)**
- **Chinese (zh)**
- **Spanish (es)**

## File Structure

```
├── messages/
│   ├── en.json      # English translations
│   ├── ar.json      # Arabic translations
│   ├── tr.json      # Turkish translations
│   ├── zh.json      # Chinese translations
│   └── es.json      # Spanish translations
├── contexts/
│   └── LanguageContext.tsx  # Language state management
├── hooks/
│   └── useTranslations.ts   # Translation hook
├── i18n.ts                  # next-intl configuration
├── middleware.ts            # Internationalized routing
└── next.config.mjs          # Next.js configuration
```

## How It Works

### 1. Language Context
The `LanguageContext` manages the current language state and provides:
- `currentLanguage`: Current language code
- `changeLanguage()`: Function to change language
- `isRTL`: Boolean for RTL languages (Arabic)

### 2. Translation Hook
The `useTranslations` hook provides:
- `t(key)`: Function to get translated text
- `currentLanguage`: Current language code

### 3. URL Structure
Languages are handled via URL prefixes:
- English: `/` (default)
- Arabic: `/ar/`
- Turkish: `/tr/`
- Chinese: `/zh/`
- Spanish: `/es/`

## Usage

### In Components

```tsx
import { useTranslations } from '@/hooks/useTranslations'
import { useLanguage } from '@/contexts/LanguageContext'

export function MyComponent() {
  const { t } = useTranslations()
  const { currentLanguage, changeLanguage, isRTL } = useLanguage()

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.subtitle')}</p>
    </div>
  )
}
```

### Translation Keys

Translation keys use dot notation:
```json
{
  "home": {
    "hero": {
      "title": "The Future of DeFi is Here",
      "subtitle": "Experience seamless trading..."
    }
  }
}
```

Access with: `t('home.hero.title')`

## Adding New Languages

### 1. Create Translation File
Create a new file in `messages/` directory:
```json
// messages/fr.json
{
  "navigation": {
    "home": "Accueil",
    "about": "À propos",
    "wallet": "Portefeuille",
    "dex": "DEX",
    "roadmap": "Feuille de Route",
    "whitepaper": "Livre Blanc",
    "tokenomics": "Tokenomique"
  }
  // ... rest of translations
}
```

### 2. Update Configuration Files

#### i18n.ts
```ts
const locales = ['en', 'ar', 'tr', 'zh', 'es', 'fr'] // Add new locale
```

#### middleware.ts
```ts
export default createMiddleware({
  locales: ['en', 'ar', 'tr', 'zh', 'es', 'fr'], // Add new locale
  defaultLocale: 'en'
})

export const config = {
  matcher: ['/', '/(ar|tr|zh|es|fr)/:path*'] // Add new locale
}
```

#### LanguageContext.tsx
```tsx
// Add to rtlLanguages array if needed
const rtlLanguages = ['ar', 'he'] // Add Hebrew if needed
```

#### useTranslations.ts
```tsx
const translations = {
  en: { /* ... */ },
  ar: { /* ... */ },
  // ... other languages
  fr: { /* French translations */ }
}
```

### 3. Update Footer Language List
In `components/footer.tsx`:
```tsx
const languages = [
  { name: "English", code: "en", flag: "🇺🇸" },
  { name: "العربية", code: "ar", flag: "🇸🇦" },
  // ... other languages
  { name: "Français", code: "fr", flag: "🇫🇷" }, // Add new language
]
```

## RTL Support

For RTL languages (like Arabic), the system automatically:
- Sets `dir="rtl"` on components
- Provides `isRTL` boolean for conditional styling
- Handles text alignment and layout direction

## Best Practices

1. **Always use translation keys** instead of hardcoded text
2. **Use descriptive key names** that reflect the content structure
3. **Test all languages** when adding new features
4. **Consider text length** - some languages are longer than others
5. **Use fallbacks** - if a translation is missing, it falls back to English

## Testing

To test different languages:
1. Start the development server: `npm run dev`
2. Navigate to different language URLs:
   - English: `http://localhost:3000/`
   - Arabic: `http://localhost:3000/ar/`
   - Turkish: `http://localhost:3000/tr/`
   - Chinese: `http://localhost:3000/zh/`
   - Spanish: `http://localhost:3000/es/`
3. Use the language switcher in the footer to change languages

## Troubleshooting

### Common Issues

1. **Translation not showing**: Check if the key exists in the translation file
2. **RTL not working**: Ensure the language is added to `rtlLanguages` array
3. **Routing issues**: Verify the locale is added to middleware configuration
4. **Build errors**: Check that all translation files are valid JSON

### Debug Mode

Enable debug mode in `useTranslations.ts`:
```tsx
const t = (key: string) => {
  // ... existing code
  console.log(`Translation key: ${key}, value: ${value}`) // Add this line
  return value || key
}
``` 