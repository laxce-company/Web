"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Download,
  CheckCircle,
  ChevronDown,
  Star,
  TrendingUp,
  Users,
  Lock,
  Sparkles,
  PlayCircle,
  Award,
  Target,
  Rocket,
  Coins,
  BarChart3,
  Cpu,
  Wifi,
  Package,
  Wallet,
  ArrowUpRight,
  Eye,
  Fingerprint,
  Database,
  Network,
  SmartphoneIcon,
  Monitor,
  Tablet,
  Globe2,
  ShieldCheck,
  Building2,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { AbstractLines } from "@/components/abstract-lines"
import { AppDropdown } from "@/components/app-dropdown"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

const roadmapItems = [
  { phase: "Q1 2024", title: "Wallet Launch", status: "completed", progress: 100, description: "Core wallet functionality" },
  { phase: "Q2 2024", title: "DEX Integration", status: "completed", progress: 100, description: "Built-in trading engine" },
  { phase: "Q3 2024", title: "Cross-Chain Bridge", status: "current", progress: 75, description: "Multi-chain support" },
  { phase: "Q4 2024", title: "Token Launch", status: "upcoming", progress: 0, description: "LAXCE token release" },
  { phase: "Q1 2025", title: "Advanced Trading", status: "upcoming", progress: 0, description: "Futures & options" },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const t = useTranslations('home')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  // Data for different sections - now using translations
  const stats = [
    { icon: <Users />, number: t('stats.count1'), label: t('stats.label1'), growth: t('stats.growth1') },
    { icon: <TrendingUp />, number: t('stats.count2'), label: t('stats.label2'), growth: t('stats.growth2') },
    { icon: <ShieldCheck />, number: t('stats.count3'), label: t('stats.label3'), growth: t('stats.growth3') },
    { icon: <Sparkles />, number: t('stats.count4'), label: t('stats.label4'), growth: t('stats.growth4') },
  ]

  const features = [
    {
      icon: <Wallet />,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
      gradient: "from-blue-400 to-purple-500",
      stats: t('features.secure.badge'),
    },
    {
      icon: <BarChart3 />,
      title: t('features.fees.title'),
      description: t('features.fees.description'),
      gradient: "from-green-400 to-emerald-500",
      stats: t('features.fees.badge'),
    },
    {
      icon: <Globe2 />,
      title: t('features.chains.title'),
      description: t('features.chains.description'),
      gradient: "from-orange-400 to-red-500",
      stats: t('features.chains.badge'),
    },
    {
      icon: <Zap />,
      title: t('features.staking.title'),
      description: t('features.staking.description'),
      gradient: "from-yellow-400 to-pink-500",
      stats: t('features.speed.badge'),
    },
  ]

  const howItWorks = [
    {
      step: t('howItWorks.step1.number'),
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: <Download className="w-8 h-8" />,
    },
    {
      step: t('howItWorks.step2.number'), 
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: <Wallet className="w-8 h-8" />,
    },
    {
      step: t('howItWorks.step3.number'),
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      step: t('howItWorks.step4.number'),
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      icon: <Globe2 className="w-8 h-8" />,
    },
  ]

  const securityFeatures = [
    {
      icon: <Fingerprint />,
      title: t('security.biometric.title'),
      description: t('security.biometric.description'),
    },
    {
      icon: <Eye />,
      title: t('security.privacy.title'), 
      description: t('security.privacy.description'),
    },
    {
      icon: <Database />,
      title: t('security.encryption.title'),
      description: t('security.encryption.description'),
    },
    {
      icon: <Network />,
      title: t('security.multiSig.title'),
      description: t('security.multiSig.description'),
    },
  ]

  const supportedChains = [
    { name: t('supportedChains.chains.bitcoin'), icon: "BTC", color: "from-orange-500 to-yellow-500" },
    { name: t('supportedChains.chains.ethereum'), icon: "ETH", color: "from-purple-500 to-blue-500" },
    { name: t('supportedChains.chains.bsc'), icon: "BSC", color: "from-yellow-500 to-yellow-500" },
    { name: t('supportedChains.chains.polygon'), icon: "MATIC", color: "from-purple-400 to-pink-500" },
    { name: t('supportedChains.chains.solana'), icon: "Sol", color: "from-green-500 to-purple-500" },
    { name: t('supportedChains.chains.xrp'), icon: "XRP", color: "from-gray-500 to-gray-500" },
  ]

  const testimonials = [
    {
      name: t('testimonials.reviews.0.name'),
      role: t('testimonials.reviews.0.role'),
      avatar: "/placeholder-user.jpg",
      content: t('testimonials.reviews.0.content'),
      rating: 5,
    },
    {
      name: t('testimonials.reviews.1.name'),
      role: t('testimonials.reviews.1.role'),
      avatar: "/placeholder-user.jpg",
      content: t('testimonials.reviews.1.content'),
      rating: 5,
    },
    {
      name: t('testimonials.reviews.2.name'),
      role: t('testimonials.reviews.2.role'),
      avatar: "/placeholder-user.jpg",
      content: t('testimonials.reviews.2.content'),
      rating: 5,
    },
  ]

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#1a1f2e] dark:to-[#0f141f] text-gray-900 dark:text-white transition-all duration-500 overflow-hidden" suppressHydrationWarning dir={isRTL ? 'rtl' : 'ltr'}>
      <AbstractLines />
      
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden hero-section`}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#0B6BAB]/20 to-[#0BAB9B]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#0BAB9B]/15 to-[#0B6BAB]/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-bounce" style={{ transform: "translate(-50%, -50%)" }} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230BAB9B%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>
        
        <div className={`container mx-auto px-6 relative z-10 ${isRTL ? 'text-right' : 'text-center'}`}>
          <div className="flex flex-col items-center justify-center">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6 hero-badge">
              🚀 All-in-One DeFi Platform
            </Badge>
            
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#0B6BAB] via-[#0BAB9B] to-[#0B6BAB] bg-clip-text text-transparent animate-gradient bg-300% leading-tight tracking-tight hero-title ${isRTL ? 'text-center' : 'text-center'}`}>
              {t('hero.title')}
              <br />
              <span className="text-4xl md:text-6xl">Wallet & DEX</span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-200 font-light hero-description ${isRTL ? 'text-center' : 'text-center'}`}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center hero-buttons">
              <div className="relative">
                <AppDropdown variant="hero" />
              </div>
              <Button asChild className="bg-white/10 backdrop-blur-sm border border-white/20 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent hover:bg-white/20 px-8 py-4 rounded-xl font-medium shadow-lg">
                <Link href="/whitepaper">
                  {t('hero.learnMore')}
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20 stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-[#0B6BAB]/10 to-[#0BAB9B]/10 flex items-center justify-center text-[#0BAB9B] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-[#0BAB9B] font-semibold">{stat.growth}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6">
              {t('features.badge')}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 feature-card">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <Badge className="bg-[#0BAB9B]/10 text-[#0BAB9B] border-[#0BAB9B]/30">
                      {feature.stats}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-[#0f141f] dark:to-[#1a1f2e] how-it-works-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6">
              {t('howItWorks.badge')}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Four simple steps to start your DeFi journey with Laxce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 step-card">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 security-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6">
              {t('security.badge')}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent">
              {t('security.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('security.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 security-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-[#0B6BAB]/10 to-[#0BAB9B]/10 flex items-center justify-center text-[#0BAB9B] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-[#0f141f] dark:to-[#1a1f2e] chains-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6">
              {t('supportedChains.badge')}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent">
              {t('supportedChains.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('supportedChains.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {supportedChains.map((chain, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 chain-card">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${chain.color} flex items-center justify-center text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {chain.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    {chain.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 testimonials-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6">
              {t('testimonials.badge')}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who trust Laxce for their DeFi needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 testimonial-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] cta-section">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppDropdown variant="hero" />
            <Button asChild className="bg-white text-[#0B6BAB] hover:bg-white/90 px-8 py-4 rounded-xl font-medium shadow-lg">
              <Link href="/about">
                {t('hero.learnMore')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
