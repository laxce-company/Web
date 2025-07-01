"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, FileText, Shield, Globe, Zap, Building, Users, TrendingUp, BookOpen, CheckCircle, Home, Briefcase, Palette, Copyright, DollarSign, Network, Smartphone, BarChart3 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AbstractLines } from "@/components/abstract-lines"
import { useTranslations } from "next-intl"
import { RTLWrapper } from "@/components/rtl-wrapper"

export default function WhitepaperPage() {
  const t = useTranslations()

  return (
    <RTLWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#1a1f2e] dark:to-[#0f141f] text-gray-900 dark:text-white">
        <Navigation />
        <AbstractLines />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#0B6BAB]/20 to-[#0BAB9B]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#0BAB9B]/15 to-[#0B6BAB]/15 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-6 text-lg px-6 py-2">
                {t('whitepaper.hero.badge')}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#0B6BAB] via-[#0BAB9B] to-[#0B6BAB] bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                {t('whitepaper.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-200 font-light max-w-3xl mx-auto">
                {t('whitepaper.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button asChild className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-8 py-4 rounded-2xl shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300 hover:scale-105">
                  <a href="/Laxce Whitepaper 1.0.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    {t('whitepaper.hero.downloadPDF')}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B]/10 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                  <a href="/Laxce Whitepaper 1.0.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('whitepaper.hero.viewOnline')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {t('whitepaper.introduction.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('whitepaper.introduction.content')}
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mr-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {t('whitepaper.problemStatement.title')}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('whitepaper.problemStatement.subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg mx-auto w-fit mb-6">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('whitepaper.problemStatement.scalability.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('whitepaper.problemStatement.scalability.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg mx-auto w-fit mb-6">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('whitepaper.problemStatement.latency.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('whitepaper.problemStatement.latency.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-lg mx-auto w-fit mb-6">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('whitepaper.problemStatement.regulatory.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('whitepaper.problemStatement.regulatory.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mr-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {t('whitepaper.mission.title')}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('whitepaper.mission.content')}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mr-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {t('whitepaper.vision.title')}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('whitepaper.vision.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RWA Tokenization */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mr-4">
                    <Building className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {t('whitepaper.rwaTokenization.title')}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                  {t('whitepaper.rwaTokenization.subtitle')}
                </p>
              </div>
              
              {/* Asset Types */}
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mx-auto w-fit mb-4">
                      <Home className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {t('whitepaper.rwaTokenization.assets.realEstate.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('whitepaper.rwaTokenization.assets.realEstate.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mx-auto w-fit mb-4">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {t('whitepaper.rwaTokenization.assets.commodities.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('whitepaper.rwaTokenization.assets.commodities.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mx-auto w-fit mb-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {t('whitepaper.rwaTokenization.assets.art.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('whitepaper.rwaTokenization.assets.art.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg mx-auto w-fit mb-4">
                      <Copyright className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {t('whitepaper.rwaTokenization.assets.intellectualProperty.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('whitepaper.rwaTokenization.assets.intellectualProperty.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Importance */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {t('whitepaper.rwaTokenization.importance.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t('whitepaper.rwaTokenization.importance.liquidity.title')}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('whitepaper.rwaTokenization.importance.liquidity.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t('whitepaper.rwaTokenization.importance.fractional.title')}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('whitepaper.rwaTokenization.importance.fractional.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t('whitepaper.rwaTokenization.importance.transparency.title')}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('whitepaper.rwaTokenization.importance.transparency.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t('whitepaper.rwaTokenization.importance.management.title')}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('whitepaper.rwaTokenization.importance.management.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#0BAB9B]/10 to-[#0B6BAB]/10 rounded-full blur-3xl" style={{ transform: "translate(-50%, -50%)" }} />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('whitepaper.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t('whitepaper.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-8 py-4 rounded-2xl shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300 hover:scale-105">
                  <a href="/Laxce Whitepaper 1.0.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    {t('whitepaper.cta.downloadPDF')}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B]/10 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                  <a href="/Laxce Whitepaper 1.0.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('whitepaper.cta.viewOnline')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RTLWrapper>
  )
}
