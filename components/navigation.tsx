"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Home, Map, FileText, Coins, Download, Moon, Sun, ChevronDown, Globe, Wallet, BarChart3, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"
import { AppDropdown } from "@/components/app-dropdown"
import { useTranslations, useLocale } from "next-intl"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const t = useTranslations()
  const locale = useLocale()

  useEffect(() => {
    setMounted(true)
    console.log("Navigation mounted, current theme:", theme)
  }, [theme])

  const handleThemeToggle = () => {
    console.log("Theme toggle clicked, current theme:", theme)
    toggleTheme()
    console.log("Theme toggle executed")
  }

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    // Remove locale from pathname for comparison
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    return pathWithoutLocale === path
  }

  // Helper function to create localized links
  const createLocalizedLink = (path: string) => {
    return `/${locale}${path}`
  }

  const ecosystemItems = [
    { href: "/roadmap", label: t('navigation.roadmap'), icon: <Map className="w-4 h-4" /> },
    { href: "/whitepaper", label: t('navigation.whitepaper'), icon: <FileText className="w-4 h-4" /> },
    { href: "/tokenomics", label: t('navigation.tokenomics'), icon: <Coins className="w-4 h-4" /> },
  ]

  const appOptions = [
    {
      label: "APK Download",
      description: "Direct APK file download",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
        </svg>
      ),
      href: "#coming-soon",
      color: "from-blue-500 to-indigo-500"
    }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 dark:bg-[#0a0f1c]/95 border-b border-gray-200/50 dark:border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image src="/logo-3.png" alt="Laxce Logo" width={48} height={48} priority />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Laxce</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 nav-desktop">
            {/* Home */}
            <Link
              href={createLocalizedLink("/")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                isActivePath("/")
                  ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg shadow-[#0B6BAB]/25"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <span className="font-medium">{t('navigation.home')}</span>
              <Home className="w-4 h-4" />
            </Link>

            {/* Wallet */}
            <Link
              href={createLocalizedLink("/wallet")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                isActivePath("/wallet")
                  ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg shadow-[#0B6BAB]/25"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <span className="font-medium">{t('navigation.wallet')}</span>
              <Wallet className="w-4 h-4" />
            </Link>

            {/* DEX */}
            <Link
              href={createLocalizedLink("/dex")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                isActivePath("/dex")
                  ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg shadow-[#0B6BAB]/25"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <span className="font-medium">{t('navigation.dex')}</span>
              <BarChart3 className="w-4 h-4" />
            </Link>

            {/* Ecosystem Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  ecosystemItems.some(item => isActivePath(item.href))
                    ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg shadow-[#0B6BAB]/25"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                onMouseEnter={() => setEcosystemOpen(true)}
              >
                <span className="font-medium">{t('navigation.ecosystem')}</span>
                <Globe className="w-4 h-4" />
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${ecosystemOpen ? 'rotate-180' : ''}`} />
              </Button>

              {/* Dropdown Menu */}
              {ecosystemOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseLeave={() => setEcosystemOpen(false)}
                >
                  {ecosystemItems.map((item) => (
                    <Link
                      key={item.href}
                      href={createLocalizedLink(item.href)}
                      className={`flex items-center space-x-3 px-4 py-3 transition-all duration-200 ${
                        isActivePath(item.href)
                          ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                      }`}
                      onClick={() => setEcosystemOpen(false)}
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.icon}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 header-actions">
            {/* Theme Toggle - Always visible */}
            <Button
              onClick={handleThemeToggle}
              size="icon"
              variant="ghost"
              className="rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            
            {/* Get App Dropdown */}
            <AppDropdown />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3 mobile-menu-actions">
            {/* Get App Button */}
            <Button className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-4 py-2 rounded-xl font-medium shadow-lg shadow-[#0B6BAB]/25 flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">App</span>
            </Button>
            
            {/* Theme Toggle - Always visible on mobile */}
            <Button
              onClick={handleThemeToggle}
              size="icon"
              variant="ghost"
              className="rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/50 dark:border-white/10 bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-md transition-all duration-300 nav-mobile">
            <nav className="space-y-2">
              {/* Home */}
              <Link
                href={createLocalizedLink("/")}
                className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActivePath("/")
                    ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{t('navigation.home')}</span>
                <Home className="w-4 h-4" />
              </Link>

              {/* Wallet */}
              <Link
                href={createLocalizedLink("/wallet")}
                className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActivePath("/wallet")
                    ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{t('navigation.wallet')}</span>
                <Wallet className="w-4 h-4" />
              </Link>

              {/* DEX */}
              <Link
                href={createLocalizedLink("/dex")}
                className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActivePath("/dex")
                    ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{t('navigation.dex')}</span>
                <BarChart3 className="w-4 h-4" />
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  pathname === "/about"
                    ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{t('navigation.about')}</span>
                <Users className="w-4 h-4" />
              </Link>

              {/* Ecosystem Section */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {t('navigation.ecosystem')}
                </div>
                {ecosystemItems.map((item) => (
                  <Link
                    key={item.href}
                    href={createLocalizedLink(item.href)}
                    className={`flex items-center justify-between space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ml-4 ${
                      isActivePath(item.href)
                        ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-white/10">
              <div className="space-y-3">
                {appOptions.map((option, index) => (
                  <Link
                    key={index}
                    href={option.href}
                    className="flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color} text-white mr-3`}>
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {option.label}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {option.description}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
