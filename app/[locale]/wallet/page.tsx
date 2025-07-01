"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Wallet, 
  Send, 
  ArrowDownToLine, 
  ArrowUpDown, 
  History, 
  Settings, 
  Copy, 
  Square, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  Coins, 
  Shield, 
  Zap, 
  ArrowRight,
  Download,
  Upload,
  RefreshCw,
  Star,
  Lock,
  Unlock,
  Smartphone,
  Languages,
  CheckCircle,
  Globe,
  BarChart3
} from "lucide-react"
import { AbstractLines } from "@/components/abstract-lines"
import { useTranslations } from "next-intl"
import { RTLWrapper } from "@/components/rtl-wrapper"

export default function WalletPage() {
  const t = useTranslations()
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [isConnected, setIsConnected] = useState(false)

  const walletData = {
    address: "0x13abd6192cB32bdE8a921285105F378695f951d9",
    balance: {
      LAX: 1250.50,
      USD: 1875.75,
      change24h: 5.2
    },
    assets: [
      {
        symbol: "LAX",
        name: "Laxce Token",
        balance: 1250.50,
        value: 1875.75,
        change24h: 5.2,
        icon: <Coins className="w-6 h-6" />
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        balance: 0.85,
        value: 2125.00,
        change24h: -2.1,
        icon: <Zap className="w-6 h-6" />
      },
      {
        symbol: "USDC",
        name: "USD Coin",
        balance: 500.00,
        value: 500.00,
        change24h: 0.0,
        icon: <Shield className="w-6 h-6" />
      }
    ],
    recentTransactions: [
      {
        type: "send",
        symbol: "LAX",
        amount: -50.00,
        value: -75.00,
        address: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
        time: "2 hours ago",
        status: "completed"
      },
      {
        type: "receive",
        symbol: "ETH",
        amount: 0.1,
        value: 250.00,
        address: "0x8ba1f109551bD432803012645Hac136c772c3c8",
        time: "1 day ago",
        status: "completed"
      },
      {
        type: "swap",
        symbol: "LAX",
        amount: 100.00,
        value: 150.00,
        address: "DEX Swap",
        time: "3 days ago",
        status: "completed"
      }
    ]
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: <Wallet className="w-4 h-4" /> },
    { id: "send", label: "Send", icon: <Send className="w-4 h-4" /> },
    { id: "receive", label: "Receive", icon: <ArrowDownToLine className="w-4 h-4" /> },
    { id: "swap", label: "Swap", icon: <ArrowUpDown className="w-4 h-4" /> },
    { id: "history", label: "History", icon: <History className="w-4 h-4" /> }
  ]

  const copyAddress = () => {
    navigator.clipboard.writeText(walletData.address)
    // You can add a toast notification here
  }

  const features = [
    {
      icon: <Send className="w-8 h-8" />,
      title: t('wallet.features.send.title'),
      description: t('wallet.features.send.description')
    },
    {
      icon: <ArrowDownToLine className="w-8 h-8" />,
      title: t('wallet.features.receive.title'),
      description: t('wallet.features.receive.description')
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: t('wallet.features.cryptocurrencies.title'),
      description: t('wallet.features.cryptocurrencies.description')
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: t('wallet.features.languages.title'),
      description: t('wallet.features.languages.description')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('wallet.features.currencies.title'),
      description: t('wallet.features.currencies.description')
    },
    {
      icon: <History className="w-8 h-8" />,
      title: t('wallet.features.history.title'),
      description: t('wallet.features.history.description')
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: t('wallet.features.multiWallet.title'),
      description: t('wallet.features.multiWallet.description')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('wallet.features.blockchains.title'),
      description: t('wallet.features.blockchains.description')
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('wallet.benefits.security.title'),
      description: t('wallet.benefits.security.description')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('wallet.benefits.speed.title'),
      description: t('wallet.benefits.speed.description')
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('wallet.benefits.crossPlatform.title'),
      description: t('wallet.benefits.crossPlatform.description')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('wallet.benefits.global.title'),
      description: t('wallet.benefits.global.description')
    }
  ]

  return (
    <RTLWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#1a1f2e] dark:to-[#0f141f] text-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
        <AbstractLines />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-4">
                {t('wallet.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#0B6BAB] via-[#0BAB9B] to-[#0B6BAB] bg-clip-text text-transparent animate-gradient bg-300% leading-tight tracking-tight">
                {t('wallet.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                {t('wallet.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 rounded-2xl font-medium bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  {t('wallet.cta.downloadNow')}
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-2xl font-medium border-2 border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B] hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('wallet.cta.learnMore')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('wallet.features.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('wallet.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B6BAB]/5 to-[#0BAB9B]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('wallet.benefits.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('wallet.benefits.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] border-0 shadow-2xl shadow-[#0B6BAB]/25">
              <CardContent className="p-12 text-center text-white">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('wallet.cta.ready')}
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  {t('wallet.cta.downloadToday')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="px-8 py-4 rounded-2xl font-medium bg-white text-[#0B6BAB] hover:bg-gray-100 shadow-lg transition-all duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    {t('wallet.cta.downloadIOS')}
                  </Button>
                  <Button className="px-8 py-4 rounded-2xl font-medium bg-white text-[#0B6BAB] hover:bg-gray-100 shadow-lg transition-all duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    {t('wallet.cta.downloadAndroid')}
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t('wallet.cta.freeDownload')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>{t('wallet.cta.rating')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>{t('wallet.cta.bankSecurity')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </RTLWrapper>
  )
} 