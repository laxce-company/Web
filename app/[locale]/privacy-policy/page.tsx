"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Calendar,
  Mail,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Info,
  User,
  Database,
  Smartphone,
  CreditCard,
  Target,
  Brain,
  Settings,
  Gavel,
  FileText,
  Cookie,
  Monitor,
  MousePointer,
  Megaphone,
  Share2,
  Server,
  Building,
  Landmark,
  Network,
  MapPin,
  Baby,
  AlertCircle,
  PhoneCall
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function PrivacyPolicyPage() {
  const t = useTranslations()

  // Define data collection arrays - using translation system
  const personalInfoItems = [
    t("privacyPolicy.dataCollection.personalInfo.item1"),
    t("privacyPolicy.dataCollection.personalInfo.item2"),
    t("privacyPolicy.dataCollection.personalInfo.item3"),
    t("privacyPolicy.dataCollection.personalInfo.item4"),
    t("privacyPolicy.dataCollection.personalInfo.item5"),
  ]

  const technicalInfoItems = [
    t("privacyPolicy.dataCollection.technicalInfo.item1"),
    t("privacyPolicy.dataCollection.technicalInfo.item2"),
    t("privacyPolicy.dataCollection.technicalInfo.item3"),
    t("privacyPolicy.dataCollection.technicalInfo.item4"),
    t("privacyPolicy.dataCollection.technicalInfo.item5"),
  ]

  const walletInfoItems = [
    t("privacyPolicy.dataCollection.walletInfo.item1"),
    t("privacyPolicy.dataCollection.walletInfo.item2"),
    t("privacyPolicy.dataCollection.walletInfo.item3"),
    t("privacyPolicy.dataCollection.walletInfo.item4"),
    t("privacyPolicy.dataCollection.walletInfo.item5"),
  ]

  const financialInfoItems = [
    t("privacyPolicy.dataCollection.financialInfo.item1"),
    t("privacyPolicy.dataCollection.financialInfo.item2"),
    t("privacyPolicy.dataCollection.financialInfo.item3"),
    t("privacyPolicy.dataCollection.financialInfo.item4"),
    t("privacyPolicy.dataCollection.financialInfo.item5"),
  ]

  const advertisingDataItems = [
    t("privacyPolicy.dataCollection.advertisingData.item1"),
    t("privacyPolicy.dataCollection.advertisingData.item2"),
    t("privacyPolicy.dataCollection.advertisingData.item3"),
    t("privacyPolicy.dataCollection.advertisingData.item4"),
    t("privacyPolicy.dataCollection.advertisingData.item5"),
  ]

  const aiDataItems = [
    t("privacyPolicy.dataCollection.aiData.item1"),
    t("privacyPolicy.dataCollection.aiData.item2"),
    t("privacyPolicy.dataCollection.aiData.item3"),
    t("privacyPolicy.dataCollection.aiData.item4"),
    t("privacyPolicy.dataCollection.aiData.item5"),
  ]

  // Define cookie management arrays using translation system
  const browserSettingsItems = [
    t("privacyPolicy.cookies.management.browserSettings.items.0"),
    t("privacyPolicy.cookies.management.browserSettings.items.1"),
    t("privacyPolicy.cookies.management.browserSettings.items.2"),
    t("privacyPolicy.cookies.management.browserSettings.items.3")
  ]

  const ourControlsItems = [
    t("privacyPolicy.cookies.management.ourControls.items.0"),
    t("privacyPolicy.cookies.management.ourControls.items.1"),
    t("privacyPolicy.cookies.management.ourControls.items.2"),
    t("privacyPolicy.cookies.management.ourControls.items.3")
  ]

  // Define advertising arrays using translation system
  const personalizedItems = [
    t("privacyPolicy.advertising.personalized.items.0"),
    t("privacyPolicy.advertising.personalized.items.1"),
    t("privacyPolicy.advertising.personalized.items.2"),
    t("privacyPolicy.advertising.personalized.items.3")
  ]

  const thirdPartyItems = [
    t("privacyPolicy.advertising.thirdParty.items.0"),
    t("privacyPolicy.advertising.thirdParty.items.1"),
    t("privacyPolicy.advertising.thirdParty.items.2"),
    t("privacyPolicy.advertising.thirdParty.items.3")
  ]

  const controlsItems = [
    t("privacyPolicy.advertising.controls.items.0"),
    t("privacyPolicy.advertising.controls.items.1"),
    t("privacyPolicy.advertising.controls.items.2"),
    t("privacyPolicy.advertising.controls.items.3")
  ]

  // Define AI arrays using translation system
  const aiFeaturesItems = [
    t("privacyPolicy.ai.features.items.0"),
    t("privacyPolicy.ai.features.items.1"),
    t("privacyPolicy.ai.features.items.2"),
    t("privacyPolicy.ai.features.items.3"),
    t("privacyPolicy.ai.features.items.4")
  ]

  const aiAnalysisItems = [
    t("privacyPolicy.ai.analysis.items.0"),
    t("privacyPolicy.ai.analysis.items.1"),
    t("privacyPolicy.ai.analysis.items.2"),
    t("privacyPolicy.ai.analysis.items.3"),
    t("privacyPolicy.ai.analysis.items.4")
  ]

  const aiControlsItems = [
    t("privacyPolicy.ai.controls.items.0"),
    t("privacyPolicy.ai.controls.items.1"),
    t("privacyPolicy.ai.controls.items.2"),
    t("privacyPolicy.ai.controls.items.3"),
    t("privacyPolicy.ai.controls.items.4")
  ]

  const aiAnonymizationItems = [
    t("privacyPolicy.ai.anonymization.items.0"),
    t("privacyPolicy.ai.anonymization.items.1"),
    t("privacyPolicy.ai.anonymization.items.2"),
    t("privacyPolicy.ai.anonymization.items.3"),
    t("privacyPolicy.ai.anonymization.items.4")
  ]

  // Define AI consent management arrays using translation system
  const aiYourControlsItems = [
    t("privacyPolicy.ai.consentManagement.yourControls.items.0"),
    t("privacyPolicy.ai.consentManagement.yourControls.items.1"),
    t("privacyPolicy.ai.consentManagement.yourControls.items.2"),
    t("privacyPolicy.ai.consentManagement.yourControls.items.3")
  ]

  const aiTransparencyItems = [
    t("privacyPolicy.ai.consentManagement.transparency.items.0"),
    t("privacyPolicy.ai.consentManagement.transparency.items.1"),
    t("privacyPolicy.ai.consentManagement.transparency.items.2"),
    t("privacyPolicy.ai.consentManagement.transparency.items.3")
  ]

  // Define security practices arrays using translation system
  const securityPracticesItems = [
    t("privacyPolicy.security.practices.items.0"),
    t("privacyPolicy.security.practices.items.1"),
    t("privacyPolicy.security.practices.items.2"),
    t("privacyPolicy.security.practices.items.3"),
    t("privacyPolicy.security.practices.items.4"),
    t("privacyPolicy.security.practices.items.5"),
    t("privacyPolicy.security.practices.items.6"),
    t("privacyPolicy.security.practices.items.7"),
    t("privacyPolicy.security.practices.items.8"),
    t("privacyPolicy.security.practices.items.9")
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#0f1a2e] dark:to-[#1a2332]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t("privacyPolicy.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("privacyPolicy.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("privacyPolicy.hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{t("privacyPolicy.hero.lastUpdated")}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{t("privacyPolicy.hero.effective")}</span>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {t("privacyPolicy.badges.gdpr")}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {t("privacyPolicy.badges.ccpa")}
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                {t("privacyPolicy.badges.iso")}
              </Badge>
            </div>
          </div>

          {/* Quick Navigation */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Info className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("privacyPolicy.quickNavigation.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="#data-collection" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Database className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.quickNavigation.dataCollection")}</span>
                </a>
                <a href="#data-usage" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.quickNavigation.dataUsage")}</span>
                </a>
                <a href="#data-sharing" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Share2 className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.quickNavigation.dataSharing")}</span>
                </a>
                <a href="#user-rights" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <User className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.quickNavigation.yourRights")}</span>
                </a>
                <a href="#cookies" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Cookie className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.quickNavigation.cookies")}</span>
                </a>
                <a href="#retention" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Calendar className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.quickNavigation.dataRetention")}</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Collection Section */}
      <section id="data-collection" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.dataCollection.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.dataCollection.subtitle")}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Personal Information */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <User className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataCollection.personalInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {personalInfoItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Information */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Smartphone className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataCollection.technicalInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {technicalInfoItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Wallet Information */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataCollection.walletInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {walletInfoItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Financial Information */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <CreditCard className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataCollection.financialInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {financialInfoItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Advertising & Marketing Data */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataCollection.advertisingData.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {advertisingDataItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* AI & Analytics Data */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataCollection.aiData.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {aiDataItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section id="data-usage" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.dataUsage.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.dataUsage.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataUsage.purposes.serviceProvision.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataUsage.purposes.serviceProvision.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataUsage.purposes.security.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataUsage.purposes.security.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataUsage.purposes.communication.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataUsage.purposes.communication.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataUsage.purposes.improvement.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataUsage.purposes.improvement.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Gavel className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataUsage.purposes.compliance.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataUsage.purposes.compliance.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.dataUsage.purposes.legalBasis.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataUsage.purposes.legalBasis.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section id="data-sharing" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.dataSharing.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.dataSharing.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Server className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataSharing.entities.serviceProviders.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataSharing.entities.serviceProviders.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Gavel className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataSharing.entities.legalRequirements.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataSharing.entities.legalRequirements.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataSharing.entities.security.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataSharing.entities.security.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataSharing.entities.businessTransfers.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataSharing.entities.businessTransfers.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Landmark className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataSharing.entities.regulatory.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataSharing.entities.regulatory.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Network className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataSharing.entities.blockchain.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataSharing.entities.blockchain.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Rights Section */}
      <section id="user-rights" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.userRights.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.userRights.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Eye className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.access.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.access.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.correction.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.correction.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.deletion.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.deletion.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Share2 className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.portability.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.portability.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <AlertCircle className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.objection.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.objection.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <ArrowLeft className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.withdrawal.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.withdrawal.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.restriction.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.restriction.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <PhoneCall className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.userRights.rights.complaint.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.userRights.rights.complaint.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section id="cookies" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.cookies.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.cookies.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.cookies.types.essential.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.purpose")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.essential.purpose")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.examples")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.essential.examples")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.storage")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.essential.storage")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Monitor className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.cookies.types.analytics.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.purpose")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.analytics.purpose")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.examples")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.analytics.examples")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.storage")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.analytics.storage")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.cookies.types.functional.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.purpose")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.functional.purpose")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.examples")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.functional.examples")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.storage")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.functional.storage")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Megaphone className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.cookies.types.marketing.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.purpose")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.marketing.purpose")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.examples")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.marketing.examples")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.storage")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.marketing.storage")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.cookies.types.advertising.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.purpose")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.advertising.purpose")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.examples")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.advertising.examples")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("common.storage")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.cookies.types.advertising.storage")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cookie Management */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Settings className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("privacyPolicy.cookies.management.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t("privacyPolicy.cookies.management.browserSettings.title")}</h4>
                  <ul className="space-y-2">
                    {browserSettingsItems.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0BAB9B] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t("privacyPolicy.cookies.management.ourControls.title")}</h4>
                  <ul className="space-y-2">
                    {ourControlsItems.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0BAB9B] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advertising & Marketing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.advertising.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.advertising.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.advertising.personalized.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.advertising.personalized.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {personalizedItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.advertising.personalized.consent")}</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.advertising.thirdParty.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.advertising.thirdParty.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {thirdPartyItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.advertising.thirdParty.consent")}</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.advertising.controls.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.advertising.controls.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {controlsItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.advertising.controls.consent")}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI & Data Access Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.ai.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.ai.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.ai.features.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.ai.features.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {aiFeaturesItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.ai.features.consent")}</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Database className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.ai.analysis.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.ai.analysis.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {aiAnalysisItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.ai.analysis.consent")}</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.ai.controls.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.ai.controls.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {aiControlsItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.ai.controls.consent")}</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.ai.anonymization.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("privacyPolicy.ai.anonymization.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {aiAnonymizationItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.ai.anonymization.consent")}</Badge>
              </CardContent>
            </Card>
          </div>

          {/* AI Consent Management */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Lock className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("privacyPolicy.ai.consentManagement.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t("privacyPolicy.ai.consentManagement.yourControls.title")}</h4>
                  <ul className="space-y-2">
                    {aiYourControlsItems.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0BAB9B] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t("privacyPolicy.ai.consentManagement.transparency.title")}</h4>
                  <ul className="space-y-2">
                    {aiTransparencyItems.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0BAB9B] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Retention Section */}
      <section id="retention" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.dataRetention.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.dataRetention.subtitle")}
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("privacyPolicy.dataRetention.periods.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("privacyPolicy.dataRetention.periods.account.category")}</h4>
                    <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.dataRetention.periods.account.period")}</Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{t("privacyPolicy.dataRetention.periods.account.reason")}</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("privacyPolicy.dataRetention.periods.transaction.category")}</h4>
                    <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.dataRetention.periods.transaction.period")}</Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{t("privacyPolicy.dataRetention.periods.transaction.reason")}</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("privacyPolicy.dataRetention.periods.kyc.category")}</h4>
                    <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.dataRetention.periods.kyc.period")}</Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{t("privacyPolicy.dataRetention.periods.kyc.reason")}</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("privacyPolicy.dataRetention.periods.logs.category")}</h4>
                    <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.dataRetention.periods.logs.period")}</Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{t("privacyPolicy.dataRetention.periods.logs.reason")}</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("privacyPolicy.dataRetention.periods.marketing.category")}</h4>
                    <Badge className="bg-[#0BAB9B] text-white">{t("privacyPolicy.dataRetention.periods.marketing.period")}</Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{t("privacyPolicy.dataRetention.periods.marketing.reason")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* International Transfers Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.internationalTransfers.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.internationalTransfers.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.internationalTransfers.regions.eu.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.internationalTransfers.regions.eu.safeguards")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.internationalTransfers.regions.us.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.internationalTransfers.regions.us.safeguards")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.internationalTransfers.regions.asiaPacific.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.internationalTransfers.regions.asiaPacific.safeguards")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("privacyPolicy.internationalTransfers.regions.other.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.internationalTransfers.regions.other.safeguards")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Children's Privacy Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.childrenPrivacy.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.childrenPrivacy.subtitle")}
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Baby className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.childrenPrivacy.ageRequirement.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.childrenPrivacy.ageRequirement.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.childrenPrivacy.policy.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.childrenPrivacy.policy.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-[#0BAB9B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.childrenPrivacy.parentalRights.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.childrenPrivacy.parentalRights.description")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Breach Notification Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.dataBreach.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.dataBreach.subtitle")}
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0BAB9B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataBreach.timeframe.title")}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataBreach.timeframe.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0BAB9B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataBreach.process.title")}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataBreach.process.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0BAB9B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("privacyPolicy.dataBreach.measures.title")}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{t("privacyPolicy.dataBreach.measures.description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("privacyPolicy.security.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("privacyPolicy.security.subtitle")}
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Lock className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("privacyPolicy.security.practices.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {securityPracticesItems.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Updates Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t("privacyPolicy.contact.title")}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("privacyPolicy.contact.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#0B6BAB] hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <a href="mailto:privacy@laxce.com">
                <Mail className="w-5 h-5 mr-2" />
                {t("privacyPolicy.contact.contactPrivacyTeam")}
              </a>
            </Button>
            <Button asChild
              variant="outline"
              className="border-white bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent hover:bg-white hover:text-[#0B6BAB] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t("privacyPolicy.contact.backToHome")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 