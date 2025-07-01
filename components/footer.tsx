"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Github, MessageCircle, Send, Globe, Shield, FileText, ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "next/navigation"

export function Footer() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const locale = useLocale()
  const t = useTranslations()
  const router = useRouter()
  const pathname = usePathname()

  // Extract locale from pathname as fallback
  const pathLocale = pathname.split('/')[1] || 'en'
  const currentLocale = locale || pathLocale
  
  // Validate current locale
  const validLocales = ['en', 'ar', 'tr', 'zh', 'es']
  const finalLocale = validLocales.includes(currentLocale) ? currentLocale : 'en'

  // RTL languages
  const rtlLanguages = ['ar']
  const isRTL = rtlLanguages.includes(finalLocale)

  const languages = [
    { name: "English", code: "en", flag: "🇺🇸" },
    { name: "العربية", code: "ar", flag: "🇸🇦" },
    { name: "Türkçe", code: "tr", flag: "🇹🇷" },
    { name: "中文", code: "zh", flag: "🇨🇳" },
    { name: "Español", code: "es", flag: "🇪🇸" },
  ]

  const selectedLanguage = languages.find(lang => lang.code === finalLocale)?.name || "English"

  // Move arrays inside component to recalculate when language changes
  const productLinks = useMemo(() => [
    { name: t('footer.links.wallet'), href: "/wallet", description: t('footer.links.walletDescription') },
    { name: t('footer.links.dex'), href: "/dex", description: t('footer.links.dexDescription') },
    { name: t('footer.links.bridge'), href: "#", description: t('footer.links.bridgeDescription') },
    { name: t('footer.links.staking'), href: "#", description: t('footer.links.stakingDescription') },
  ], [t])

  const resourceLinks = useMemo(() => [
    { name: t('footer.links.roadmap'), href: "/roadmap", icon: <FileText className="w-4 h-4" /> },
    { name: t('footer.links.whitepaper'), href: "/whitepaper", icon: <FileText className="w-4 h-4" /> },
    { name: t('footer.links.tokenomics'), href: "/tokenomics", icon: <FileText className="w-4 h-4" /> },
    { name: t('footer.links.documentation'), href: "#", icon: <FileText className="w-4 h-4" /> },
  ], [t])

  const companyLinks = useMemo(() => [
    { name: t('footer.links.aboutUs'), href: "/about" },
    { name: t('footer.links.careers'), href: "#" },
    { name: t('footer.links.pressKit'), href: "#" },
    { name: t('footer.links.contact'), href: "#" },
  ], [t])

  const legalLinks = useMemo(() => [
    { name: t('footer.links.privacyPolicy'), href: "/privacy-policy" },
    { name: t('footer.links.termsOfService'), href: "/terms-of-service" },
    { name: t('footer.links.security'), href: "/security" },
    { name: t('footer.links.audits'), href: "#" },
  ], [t])

  const socialLinks = useMemo(() => [
    { 
      name: t('footer.links.discord'), 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
        </svg>
      ), 
      href: "https://discord.gg/D6u5uERy", 
      color: "hover:text-indigo-400" 
    },
    { 
      name: t('footer.links.twitter'), 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "https://x.com/LAXCECRYPTO", 
      color: "hover:text-blue-400" 
    },
    { 
      name: t('footer.links.telegram'), 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ), 
      href: "https://t.me/Laxce_L2", 
      color: "hover:text-blue-500" 
    },
    { 
      name: t('footer.links.medium'), 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ), 
      href: "https://medium.com/@LaxceCrypto", 
      color: "hover:text-gray-300" 
    },
  ], [t])

  const handleLanguageChange = (languageCode: string) => {
    // Remove current locale from pathname if it exists
    let cleanPath = pathname
    const localeRegex = /^\/(en|ar|tr|zh|es)($|\/)/
    if (localeRegex.test(pathname)) {
      cleanPath = pathname.replace(localeRegex, '$2')
    }
    // Ensure clean path starts with /
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath
    }
    // Build new path with selected language
    const newPathname = `/${languageCode}${cleanPath === '/' ? '' : cleanPath}`
    
    router.push(newPathname)
    setIsLanguageOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen])

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0f1c] dark:to-[#0f141f] border-t border-gray-200/50 dark:border-white/10 transition-all duration-300 footer-container">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image src="/logo-3.png" alt="Laxce Logo" width={48} height={48} priority />
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Laxce</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {t('footer.description')}
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="mt-6 relative" ref={dropdownRef}>
                <Button 
                  variant="outline" 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-[#0BAB9B] hover:border-[#0BAB9B] transition-all duration-200 language-dropdown"
                >
                  <Globe className="w-4 h-4" />
                  <span>{selectedLanguage}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </Button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="py-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language.code)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                            selectedLanguage === language.name 
                              ? 'text-[#0BAB9B] bg-[#0BAB9B]/10' 
                              : 'text-gray-600 dark:text-gray-300'
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium">{language.name}</span>
                          {selectedLanguage === language.name && (
                            <div className="ml-auto w-2 h-2 rounded-full bg-[#0BAB9B]"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">{t('footer.products')}</h4>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex flex-col space-y-1 text-gray-600 dark:text-gray-400 hover:text-[#0BAB9B] transition-colors duration-200"
                    >
                      <span className="font-medium">{link.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">{t('footer.resources')}</h4>
              <ul className="space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-[#0BAB9B] transition-colors duration-200"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Legal */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">{t('footer.company')}</h4>
              <ul className="space-y-4 mb-8">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#0BAB9B] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">{t('footer.legal')}</h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#0BAB9B] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-gray-200/50 dark:border-white/10 bg-gray-100/50 dark:bg-black/50 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-600 dark:text-gray-400">{t('footer.copyright')}</p>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-[#0BAB9B]" />
                <span className="text-gray-600 dark:text-gray-400">{t('footer.secureByDesign')}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">{t('footer.madeBy')} <span className="text-transparent bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text">○</span> {t('footer.laxceTeam')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Removed copyright and download links as requested */}
    </footer>
  )
}

