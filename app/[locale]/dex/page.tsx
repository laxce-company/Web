"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight,
  Download,
  Shield,
  Zap,
  Globe,
  Coins,
  Users,
  Lock,
  CheckCircle,
  Star,
  Smartphone
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AbstractLines } from "@/components/abstract-lines"
import { useTranslations } from "next-intl"
import { RTLWrapper } from "@/components/rtl-wrapper"

export default function DexPage() {
  const t = useTranslations()
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('dex.features.lightningFast.title'),
      description: t('dex.features.lightningFast.description')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('dex.features.secureTrading.title'),
      description: t('dex.features.secureTrading.description')
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: t('dex.features.tradingPairs.title'),
      description: t('dex.features.tradingPairs.description')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('dex.features.globalCommunity.title'),
      description: t('dex.features.globalCommunity.description')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('dex.features.crossChain.title'),
      description: t('dex.features.crossChain.description')
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('dex.features.advancedCharts.title'),
      description: t('dex.features.advancedCharts.description')
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('dex.benefits.highLiquidity.title'),
      description: t('dex.benefits.highLiquidity.description')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('dex.benefits.lowFees.title'),
      description: t('dex.benefits.lowFees.description')
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('dex.benefits.mobileTrading.title'),
      description: t('dex.benefits.mobileTrading.description')
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t('dex.benefits.nonCustodial.title'),
      description: t('dex.benefits.nonCustodial.description')
    }
  ]

  const tradingPairs = [
    { pair: "BTC/USDT", price: "$107,000", change: "+1.2%", volume: "$2T" },
    { pair: "ETH/USDT", price: "$2,456", change: "+0.8%", volume: "$296B" },
    { pair: "SOL/USDT", price: "$150.50", change: "+12.5%", volume: "$80B" },
    { pair: "ADA/USDT", price: "$0.5443", change: "-0.5%", volume: "$19B" }
  ]

  return (
    <RTLWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#1a1f2e] dark:to-[#0f141f] text-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
        <Navigation />
        <AbstractLines />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-4">
                {t('dex.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#0B6BAB] via-[#0BAB9B] to-[#0B6BAB] bg-clip-text text-transparent animate-gradient bg-300% leading-tight tracking-tight">
                {t('dex.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                {t('dex.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 rounded-2xl font-medium bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  {t('dex.cta.startTrading')}
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-2xl font-medium border-2 border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B] hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('dex.cta.viewMarkets')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Markets Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('dex.markets.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('dex.markets.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingPairs.map((pair, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{pair.pair}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t('dex.markets.volume')}: {pair.volume}</div>
                      </div>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                        pair.change.startsWith('+') 
                          ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                          : "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span>{pair.change}</span>
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {pair.price}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white py-2 rounded-xl font-medium shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300">
                      {t('dex.markets.tradeNow')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B6BAB]/5 to-[#0BAB9B]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('dex.features.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('dex.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('dex.benefits.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('dex.benefits.subtitle')}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] border-0 shadow-2xl shadow-[#0B6BAB]/25">
              <CardContent className="p-12 text-center text-white">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <BarChart3 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('dex.cta.ready')}
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  {t('dex.cta.joinTraders')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="px-8 py-4 rounded-2xl font-medium bg-white text-[#0B6BAB] hover:bg-gray-100 shadow-lg transition-all duration-300">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    {t('dex.cta.launchDex')}
                  </Button>
                  <Button className="px-8 py-4 rounded-2xl font-medium bg-white text-[#0B6BAB] hover:bg-gray-100 shadow-lg transition-all duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    {t('dex.cta.downloadApp')}
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t('dex.cta.noKyc')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>{t('dex.cta.rating')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>{t('dex.cta.nonCustodial')}</span>
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