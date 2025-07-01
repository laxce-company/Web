import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { RTLWrapper } from "@/components/rtl-wrapper"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ["latin"] })

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    { locale: 'tr' },
    { locale: 'zh' },
    { locale: 'es' }
  ]
}

export const metadata: Metadata = {
  title: "Laxce - The Future of Decentralized Finance",
  description:
    "Experience seamless crypto trading with our next-generation wallet featuring built-in DEX, cross-chain capabilities, and uncompromising security.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider defaultTheme="dark" storageKey="laxce-ui-theme">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <RTLWrapper>
              <Navigation />
              <main className="pt-20">{children}</main>
              <Footer />
            </RTLWrapper>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
