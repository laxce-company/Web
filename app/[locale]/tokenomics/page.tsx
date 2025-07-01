"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Copy, Eye, Vote, Coins, Shield, Star, Users, PieChart, TrendingUp, Clock, CheckCircle, BarChart3, Zap, Lock, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AbstractLines } from "@/components/abstract-lines"
import { useTranslations } from "next-intl"
import { RTLWrapper } from "@/components/rtl-wrapper"
import { useState } from "react"

export default function TokenomicsPage() {
  const t = useTranslations()
  const [copiedAddress, setCopiedAddress] = useState(false)
  
  const contractAddress = "0x13abd6192cB32bdE8a921285105F378695f951d9"

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  const handleViewContract = () => {
    window.open(`https://etherscan.io/address/${contractAddress}`, '_blank')
  }

  const tokenDistribution = [
    {
      category: t('tokenomics.distribution.public.title'),
      percentage: 40,
      amount: t('tokenomics.distribution.public.amount'),
      description: t('tokenomics.distribution.public.description'),
      color: "#0B6BAB",
      icon: <Users className="w-6 h-6" />
    },
    {
      category: t('tokenomics.distribution.private.title'),
      percentage: 20,
      amount: t('tokenomics.distribution.private.amount'),
      description: t('tokenomics.distribution.private.description'),
      color: "#0BAB9B",
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: t('tokenomics.distribution.reserve.title'),
      percentage: 15,
      amount: t('tokenomics.distribution.reserve.amount'),
      description: t('tokenomics.distribution.reserve.description'),
      color: "#06A0B5",
      icon: <Lock className="w-6 h-6" />
    },
    {
      category: t('tokenomics.distribution.rewards.title'),
      percentage: 15,
      amount: t('tokenomics.distribution.rewards.amount'),
      description: t('tokenomics.distribution.rewards.description'),
      color: "#0891B2",
      icon: <Star className="w-6 h-6" />
    },
    {
      category: t('tokenomics.distribution.teamAdvisors.title'),
      percentage: 10,
      amount: t('tokenomics.distribution.teamAdvisors.amount'),
      description: t('tokenomics.distribution.teamAdvisors.description'),
      color: "#0E7490",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const tokenUtilities = [
    {
      title: t('tokenomics.utilities.governance.title'),
      description: t('tokenomics.utilities.governance.description'),
      icon: <Vote className="w-8 h-8" />
    },
    {
      title: t('tokenomics.utilities.staking.title'),
      description: t('tokenomics.utilities.staking.description'),
      icon: <Coins className="w-8 h-8" />
    },
    {
      title: t('tokenomics.utilities.transactionFees.title'),
      description: t('tokenomics.utilities.transactionFees.description'),
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: t('tokenomics.utilities.exclusiveAccess.title'),
      description: t('tokenomics.utilities.exclusiveAccess.description'),
      icon: <Star className="w-8 h-8" />
    }
  ]

  const vestingSchedules = [
    {
      category: t('tokenomics.vesting.schedules.public.category'),
      cliff: t('tokenomics.vesting.schedules.public.cliff'),
      vesting: t('tokenomics.vesting.schedules.public.vesting'),
      description: t('tokenomics.vesting.schedules.public.description')
    },
    {
      category: t('tokenomics.vesting.schedules.private.category'),
      cliff: t('tokenomics.vesting.schedules.private.cliff'),
      vesting: t('tokenomics.vesting.schedules.private.vesting'),
      description: t('tokenomics.vesting.schedules.private.description')
    },
    {
      category: t('tokenomics.vesting.schedules.reserve.category'),
      cliff: t('tokenomics.vesting.schedules.reserve.cliff'),
      vesting: t('tokenomics.vesting.schedules.reserve.vesting'),
      description: t('tokenomics.vesting.schedules.reserve.description')
    },
    {
      category: t('tokenomics.vesting.schedules.rewards.category'),
      cliff: t('tokenomics.vesting.schedules.rewards.cliff'),
      vesting: t('tokenomics.vesting.schedules.rewards.vesting'),
      description: t('tokenomics.vesting.schedules.rewards.description')
    },
    {
      category: t('tokenomics.vesting.schedules.teamAdvisors.category'),
      cliff: t('tokenomics.vesting.schedules.teamAdvisors.cliff'),
      vesting: t('tokenomics.vesting.schedules.teamAdvisors.vesting'),
      description: t('tokenomics.vesting.schedules.teamAdvisors.description')
    }
  ]

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
                {t('tokenomics.hero.badge')}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#0B6BAB] via-[#0BAB9B] to-[#0B6BAB] bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                {t('tokenomics.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-200 font-light max-w-3xl mx-auto">
                {t('tokenomics.hero.subtitle')}
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#0BAB9B] mb-2">
                      {t('tokenomics.overview.totalSupply.value')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t('tokenomics.overview.totalSupply.label')}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#0B6BAB] mb-2">
                      {t('tokenomics.overview.tokenSymbol.value')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t('tokenomics.overview.tokenSymbol.label')}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {t('tokenomics.overview.initialNetwork.value')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t('tokenomics.overview.initialNetwork.label')}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      {t('tokenomics.overview.tokenModel.value')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t('tokenomics.overview.tokenModel.label')}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Token Details */}
        <section className="py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('tokenomics.tokenDetails.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('tokenomics.tokenDetails.subtitle')}
                </p>
              </div>
              
              <div className="space-y-8">
                <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center shadow-lg shadow-[#0B6BAB]/25">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                          {t('tokenomics.tokenDetails.tokenAndNetwork.title')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {t('tokenomics.tokenDetails.tokenAndNetwork.description')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center shadow-lg shadow-[#0B6BAB]/25">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                          {t('tokenomics.tokenDetails.tokenSupply.title')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {t('tokenomics.tokenDetails.tokenSupply.description')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center shadow-lg shadow-[#0B6BAB]/25">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                          {t('tokenomics.tokenDetails.contractAddress.title')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {t('tokenomics.tokenDetails.contractAddress.description')}
                        </p>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center justify-between">
                                                         <code className="text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                               {contractAddress}
                             </code>
                            <div className="flex space-x-2 ml-4 rtl:ml-0 rtl:mr-4 rtl:space-x-reverse">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B] hover:text-white"
                                onClick={handleCopyAddress}
                              >
                                <Copy className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                                {copiedAddress ? "Copied!" : t('tokenomics.tokenDetails.contractAddress.copy')}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B] hover:text-white"
                                onClick={handleViewContract}
                              >
                                <Eye className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                                {t('tokenomics.tokenDetails.contractAddress.view')}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Token Distribution */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('tokenomics.distribution.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('tokenomics.distribution.subtitle')}
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Pie Chart Visualization */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] p-1 shadow-2xl shadow-[#0B6BAB]/25">
                      <div className="w-full h-full rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <PieChart className="w-16 h-16 text-[#0BAB9B] mx-auto mb-4" />
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">500M</div>
                          <div className="text-gray-600 dark:text-gray-400">{t('tokenomics.distribution.totalSupply')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Distribution Details */}
                <div className="space-y-4">
                  {tokenDistribution.map((item, index) => (
                    <Card
                      key={index}
                      className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: item.color }} />
                            <div>
                              <span className="font-medium text-gray-900 dark:text-white">{item.category}</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                          </div>
                          <div className="text-right rtl:text-left">
                            <div className="font-bold text-[#0BAB9B]">{item.percentage}%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{item.amount}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Utilities */}
        <section className="py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('tokenomics.utilities.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('tokenomics.utilities.subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {tokenUtilities.map((utility, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:border-[#0BAB9B]/50">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] text-white shadow-lg">
                          {utility.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {utility.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {utility.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vesting Schedule */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('tokenomics.vesting.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('tokenomics.vesting.subtitle')}
                </p>
              </div>
              
              <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">
                            {t('tokenomics.vesting.headers.category')}
                          </th>
                          <th className="px-6 py-4 text-left font-semibold">
                            {t('tokenomics.vesting.headers.cliffPeriod')}
                          </th>
                          <th className="px-6 py-4 text-left font-semibold">
                            {t('tokenomics.vesting.headers.vestingPeriod')}
                          </th>
                          <th className="px-6 py-4 text-left font-semibold">
                            {t('tokenomics.vesting.headers.description')}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {vestingSchedules.map((schedule, index) => (
                          <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                              {schedule.category}
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                              {schedule.cliff}
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                              {schedule.vesting}
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                              {schedule.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
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
                {t('tokenomics.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t('tokenomics.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-8 py-4 rounded-2xl shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300 hover:scale-105">
                  <a href="/Laxce Tokenomics 1.0.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    {t('tokenomics.cta.downloadPDF')}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-[#0BAB9B] text-[#0BAB9B] hover:bg-[#0BAB9B]/10 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                  <a href="/Laxce Tokenomics 1.0.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('tokenomics.cta.viewOnline')}
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

