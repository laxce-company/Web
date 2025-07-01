'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  FileText, 
  Users, 
  Globe, 
  Calendar,
  Mail,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Info,
  Lock,
  DollarSign,
  Gavel,
  Scale,
  Zap,
  Eye,
  Handshake,
  Settings,
  UserCheck,
  XCircle,
  BookOpen,
  MessageSquare,
  Wallet,
  TrendingUp,
  GitBranch
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function TermsOfServicePage() {
  const t = useTranslations()

  const lastUpdated = "December 15, 2024"
  const effectiveDate = "January 1, 2025"

  // Define service features arrays using translation system
  const walletFeatures = [
    t("termsOfService.services.wallet.features.0"),
    t("termsOfService.services.wallet.features.1"),
    t("termsOfService.services.wallet.features.2"),
    t("termsOfService.services.wallet.features.3")
  ]

  const dexFeatures = [
    t("termsOfService.services.dex.features.0"),
    t("termsOfService.services.dex.features.1"),
    t("termsOfService.services.dex.features.2"),
    t("termsOfService.services.dex.features.3")
  ]

  const bridgeFeatures = [
    t("termsOfService.services.bridge.features.0"),
    t("termsOfService.services.bridge.features.1"),
    t("termsOfService.services.bridge.features.2"),
    t("termsOfService.services.bridge.features.3")
  ]

  // Define user obligations arrays using translation system
  const accountSecurityItems = [
    t("termsOfService.userObligations.accountSecurity.items.0"),
    t("termsOfService.userObligations.accountSecurity.items.1"),
    t("termsOfService.userObligations.accountSecurity.items.2"),
    t("termsOfService.userObligations.accountSecurity.items.3"),
    t("termsOfService.userObligations.accountSecurity.items.4")
  ]

  const legalComplianceItems = [
    t("termsOfService.userObligations.legalCompliance.items.0"),
    t("termsOfService.userObligations.legalCompliance.items.1"),
    t("termsOfService.userObligations.legalCompliance.items.2"),
    t("termsOfService.userObligations.legalCompliance.items.3"),
    t("termsOfService.userObligations.legalCompliance.items.4")
  ]

  const serviceUsageItems = [
    t("termsOfService.userObligations.serviceUsage.items.0"),
    t("termsOfService.userObligations.serviceUsage.items.1"),
    t("termsOfService.userObligations.serviceUsage.items.2"),
    t("termsOfService.userObligations.serviceUsage.items.3"),
    t("termsOfService.userObligations.serviceUsage.items.4")
  ]

  const financialResponsibilityItems = [
    t("termsOfService.userObligations.financialResponsibility.items.0"),
    t("termsOfService.userObligations.financialResponsibility.items.1"),
    t("termsOfService.userObligations.financialResponsibility.items.2"),
    t("termsOfService.userObligations.financialResponsibility.items.3"),
    t("termsOfService.userObligations.financialResponsibility.items.4")
  ]

  // Define prohibited activities array using translation system
  const prohibitedActivitiesList = [
    t("termsOfService.prohibitedActivities.activities.0"),
    t("termsOfService.prohibitedActivities.activities.1"),
    t("termsOfService.prohibitedActivities.activities.2"),
    t("termsOfService.prohibitedActivities.activities.3"),
    t("termsOfService.prohibitedActivities.activities.4"),
    t("termsOfService.prohibitedActivities.activities.5"),
    t("termsOfService.prohibitedActivities.activities.6"),
    t("termsOfService.prohibitedActivities.activities.7"),
    t("termsOfService.prohibitedActivities.activities.8"),
    t("termsOfService.prohibitedActivities.activities.9")
  ]

  // Define intellectual property arrays using translation system
  const ourRightsItems = [
    t("termsOfService.intellectualProperty.ourRights.items.0"),
    t("termsOfService.intellectualProperty.ourRights.items.1"),
    t("termsOfService.intellectualProperty.ourRights.items.2"),
    t("termsOfService.intellectualProperty.ourRights.items.3"),
    t("termsOfService.intellectualProperty.ourRights.items.4")
  ]

  const yourRightsItems = [
    t("termsOfService.intellectualProperty.yourRights.items.0"),
    t("termsOfService.intellectualProperty.yourRights.items.1"),
    t("termsOfService.intellectualProperty.yourRights.items.2"),
    t("termsOfService.intellectualProperty.yourRights.items.3"),
    t("termsOfService.intellectualProperty.yourRights.items.4")
  ]

  const usageLicenseItems = [
    t("termsOfService.intellectualProperty.usageLicense.items.0"),
    t("termsOfService.intellectualProperty.usageLicense.items.1"),
    t("termsOfService.intellectualProperty.usageLicense.items.2"),
    t("termsOfService.intellectualProperty.usageLicense.items.3"),
    t("termsOfService.intellectualProperty.usageLicense.items.4")
  ]

  // Define liability limitation arrays using translation system
  const serviceAvailabilityItems = [
    t("termsOfService.liability.serviceAvailability.items.0"),
    t("termsOfService.liability.serviceAvailability.items.1"),
    t("termsOfService.liability.serviceAvailability.items.2"),
    t("termsOfService.liability.serviceAvailability.items.3")
  ]

  const financialLossesItems = [
    t("termsOfService.liability.financialLosses.items.0"),
    t("termsOfService.liability.financialLosses.items.1"),
    t("termsOfService.liability.financialLosses.items.2"),
    t("termsOfService.liability.financialLosses.items.3")
  ]

  const securityIncidentsItems = [
    t("termsOfService.liability.securityIncidents.items.0"),
    t("termsOfService.liability.securityIncidents.items.1"),
    t("termsOfService.liability.securityIncidents.items.2"),
    t("termsOfService.liability.securityIncidents.items.3")
  ]

  // Define regulatory compliance arrays using translation system
  const kycAmlItems = [
    t("termsOfService.regulatoryCompliance.kycAml.items.0"),
    t("termsOfService.regulatoryCompliance.kycAml.items.1"),
    t("termsOfService.regulatoryCompliance.kycAml.items.2"),
    t("termsOfService.regulatoryCompliance.kycAml.items.3")
  ]

  const financialRegulationsItems = [
    t("termsOfService.regulatoryCompliance.financialRegulations.items.0"),
    t("termsOfService.regulatoryCompliance.financialRegulations.items.1"),
    t("termsOfService.regulatoryCompliance.financialRegulations.items.2"),
    t("termsOfService.regulatoryCompliance.financialRegulations.items.3")
  ]

  const dataProtectionItems = [
    t("termsOfService.regulatoryCompliance.dataProtection.items.0"),
    t("termsOfService.regulatoryCompliance.dataProtection.items.1"),
    t("termsOfService.regulatoryCompliance.dataProtection.items.2"),
    t("termsOfService.regulatoryCompliance.dataProtection.items.3")
  ]

  const taxComplianceItems = [
    t("termsOfService.regulatoryCompliance.taxCompliance.items.0"),
    t("termsOfService.regulatoryCompliance.taxCompliance.items.1"),
    t("termsOfService.regulatoryCompliance.taxCompliance.items.2"),
    t("termsOfService.regulatoryCompliance.taxCompliance.items.3")
  ]

  // Define account termination arrays using translation system
  const userTerminationItems = [
    t("termsOfService.accountTermination.userTermination.items.0"),
    t("termsOfService.accountTermination.userTermination.items.1"),
    t("termsOfService.accountTermination.userTermination.items.2"),
    t("termsOfService.accountTermination.userTermination.items.3")
  ]

  const serviceTerminationItems = [
    t("termsOfService.accountTermination.serviceTermination.items.0"),
    t("termsOfService.accountTermination.serviceTermination.items.1"),
    t("termsOfService.accountTermination.serviceTermination.items.2"),
    t("termsOfService.accountTermination.serviceTermination.items.3")
  ]

  // Define immediate suspension array using translation system
  const immediateSuspensionItems = [
    t("termsOfService.accountTermination.immediateSuspension.items.0"),
    t("termsOfService.accountTermination.immediateSuspension.items.1"),
    t("termsOfService.accountTermination.immediateSuspension.items.2"),
    t("termsOfService.accountTermination.immediateSuspension.items.3")
  ]

  const serviceDescription = [
    {
      service: "Laxce Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support",
      features: walletFeatures
    },
    {
      service: "Laxce DEX",
      description: "Decentralized exchange for token trading",
      features: dexFeatures
    },
    {
      service: "Laxce Bridge",
      description: "Cross-chain asset transfer service",
      features: bridgeFeatures
    }
  ]

  const userObligations = [
    {
      category: "Account Security",
      obligations: accountSecurityItems
    },
    {
      category: "Legal Compliance",
      obligations: legalComplianceItems
    },
    {
      category: "Service Usage",
      obligations: serviceUsageItems
    },
    {
      category: "Financial Responsibility",
      obligations: financialResponsibilityItems
    }
  ]

  const prohibitedActivities = prohibitedActivitiesList

  const intellectualProperty = [
    {
      category: "Our Rights",
      items: ourRightsItems
    },
    {
      category: "Your Rights",
      items: yourRightsItems
    },
    {
      category: "Usage License",
      items: usageLicenseItems
    }
  ]

  const liabilityLimitations = [
    {
      category: "Service Availability",
      description: "We strive for high availability but cannot guarantee uninterrupted service",
      limitations: serviceAvailabilityItems
    },
    {
      category: "Financial Losses",
      description: "Cryptocurrency trading involves significant risks",
      limitations: financialLossesItems
    },
    {
      category: "Security Incidents",
      description: "While we implement robust security measures",
      limitations: securityIncidentsItems
    }
  ]

  const disputeResolution = [
    {
      step: "1. Informal Resolution",
      description: "Contact our support team to resolve issues informally",
      timeframe: "30 days",
      contact: "support@laxce.com"
    },
    {
      step: "2. Mediation",
      description: "If informal resolution fails, we may offer mediation services",
      timeframe: "60 days",
      contact: "legal@laxce.com"
    },
    {
      step: "3. Arbitration",
      description: "Binding arbitration under applicable rules",
      timeframe: "90 days",
      contact: "legal@laxce.com"
    },
    {
      step: "4. Legal Action",
      description: "As a last resort, legal action may be pursued",
      timeframe: "As required by law",
      contact: "legal@laxce.com"
    }
  ]

  const regulatoryCompliance = [
    {
      regulation: "KYC/AML Requirements",
      description: "Know Your Customer and Anti-Money Laundering compliance",
      requirements: kycAmlItems
    },
    {
      regulation: "Financial Regulations",
      description: "Compliance with applicable financial services laws",
      requirements: financialRegulationsItems
    },
    {
      regulation: "Data Protection",
      description: "Compliance with privacy and data protection laws",
      requirements: dataProtectionItems
    },
    {
      regulation: "Tax Compliance",
      description: "Tax reporting and compliance requirements",
      requirements: taxComplianceItems
    }
  ]

  const terminationConditions = [
    {
      type: "User Termination",
      conditions: userTerminationItems
    },
    {
      type: "Service Termination",
      conditions: serviceTerminationItems
    },
    {
      type: "Immediate Suspension",
      conditions: immediateSuspensionItems
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#0f1a2e] dark:to-[#1a2332]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t("termsOfService.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("termsOfService.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("termsOfService.hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{t("termsOfService.hero.lastUpdated")}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{t("termsOfService.hero.effective")}</span>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <Card className="border-0 shadow-xl bg-red-50 dark:bg-red-900/20 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-800 dark:text-red-200 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3" />
                {t("termsOfService.legalNotice.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 dark:text-red-300">{t("termsOfService.legalNotice.description")}</p>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Info className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("termsOfService.quickNavigation.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="#services" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("termsOfService.quickNavigation.services")}</span>
                </a>
                <a href="#user-obligations" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <UserCheck className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("termsOfService.quickNavigation.userObligations")}</span>
                </a>
                <a href="#prohibited-activities" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <XCircle className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("termsOfService.quickNavigation.prohibitedActivities")}</span>
                </a>
                <a href="#liability" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Scale className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("termsOfService.quickNavigation.liability")}</span>
                </a>
                <a href="#intellectual-property" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <BookOpen className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("termsOfService.quickNavigation.intellectualProperty")}</span>
                </a>
                <a href="#dispute-resolution" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <MessageSquare className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  <span className="text-gray-700 dark:text-gray-300">{t("termsOfService.quickNavigation.disputeResolution")}</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.services.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.services.subtitle")}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Laxce Wallet */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Wallet className="w-8 h-8 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.services.wallet.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">{t("termsOfService.services.wallet.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {walletFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Laxce DEX */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.services.dex.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">{t("termsOfService.services.dex.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dexFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Laxce Bridge */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <GitBranch className="w-8 h-8 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.services.bridge.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">{t("termsOfService.services.bridge.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {bridgeFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Obligations Section */}
      <section id="user-obligations" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.userObligations.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.userObligations.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.userObligations.accountSecurity.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {accountSecurityItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Scale className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.userObligations.legalCompliance.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {legalComplianceItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.userObligations.serviceUsage.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceUsageItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <DollarSign className="w-5 h-5 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.userObligations.financialResponsibility.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {financialResponsibilityItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prohibited Activities Section */}
      <section id="prohibited-activities" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.prohibitedActivities.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.prohibitedActivities.subtitle")}
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                {t("termsOfService.prohibitedActivities.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prohibitedActivitiesList.map((activity: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section id="intellectual-property" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.intellectualProperty.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.intellectualProperty.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.intellectualProperty.ourRights.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ourRightsItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Users className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.intellectualProperty.yourRights.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {yourRightsItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0BAB9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.intellectualProperty.usageLicense.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usageLicenseItems.map((item: string, index: number) => (
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

      {/* Liability Limitations Section */}
      <section id="liability" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.liability.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.liability.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.liability.serviceAvailability.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("termsOfService.liability.serviceAvailability.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceAvailabilityItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.liability.financialLosses.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("termsOfService.liability.financialLosses.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {financialLossesItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-[#0BAB9B]" />
                  {t("termsOfService.liability.securityIncidents.title")}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{t("termsOfService.liability.securityIncidents.description")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {securityIncidentsItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dispute Resolution Section */}
      <section id="dispute-resolution" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.disputeResolution.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.disputeResolution.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0BAB9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{t("termsOfService.disputeResolution.steps.informal.number")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("termsOfService.disputeResolution.steps.informal.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{t("termsOfService.disputeResolution.steps.informal.description")}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.informal.timeframe")}</span>
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.informal.contact")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0BAB9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{t("termsOfService.disputeResolution.steps.mediation.number")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("termsOfService.disputeResolution.steps.mediation.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{t("termsOfService.disputeResolution.steps.mediation.description")}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.mediation.timeframe")}</span>
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.mediation.contact")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0BAB9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{t("termsOfService.disputeResolution.steps.arbitration.number")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("termsOfService.disputeResolution.steps.arbitration.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{t("termsOfService.disputeResolution.steps.arbitration.description")}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.arbitration.timeframe")}</span>
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.arbitration.contact")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0BAB9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{t("termsOfService.disputeResolution.steps.legal.number")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("termsOfService.disputeResolution.steps.legal.title")}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{t("termsOfService.disputeResolution.steps.legal.description")}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.legal.timeframe")}</span>
                      <span className="text-gray-600 dark:text-gray-400">{t("termsOfService.disputeResolution.steps.legal.contact")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Account Termination Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("termsOfService.accountTermination.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("termsOfService.accountTermination.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{t("termsOfService.accountTermination.userTermination.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {userTerminationItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{t("termsOfService.accountTermination.serviceTermination.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceTerminationItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{t("termsOfService.accountTermination.immediateSuspension.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {immediateSuspensionItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t("termsOfService.contact.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("termsOfService.contact.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#0BAB9B] hover:bg-gray-100">
              <Mail className="w-5 h-5 mr-2" />
              {t("termsOfService.contact.contactLegal")}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0BAB9B]" asChild>
              <Link href="/privacy-policy">
                <Shield className="w-5 h-5 mr-2" />
                {t("termsOfService.contact.viewPrivacyPolicy")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0BAB9B]" asChild>
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t("termsOfService.contact.backToHome")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 