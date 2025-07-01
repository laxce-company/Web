"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Database, 
  Network, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Globe, 
  Users, 
  Cpu, 
  Server, 
  Key, 
  FileText, 
  ArrowRight,
  Download,
  ExternalLink,
  Award,
  Star,
  Clock,
  BarChart3,
  Smartphone,
  Monitor,
  FileCheck,
  TrendingUp
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AbstractLines } from "@/components/abstract-lines"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function SecurityPage() {
  const t = useTranslations()
  const [selectedFeature, setSelectedFeature] = useState("all")

  const securityFeatures = [
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: t('security.features.biometric.title'),
      description: t('security.features.biometric.description'),
      details: [
        t('security.features.biometric.features.0'),
        t('security.features.biometric.features.1'),
        t('security.features.biometric.features.2'),
        t('security.features.biometric.features.3')
      ],
      status: "active"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('security.features.privacy.title'),
      description: t('security.features.privacy.description'),
      details: [
        t('security.features.privacy.features.0'),
        t('security.features.privacy.features.1'),
        t('security.features.privacy.features.2'),
        t('security.features.privacy.features.3')
      ],
      status: "active"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('security.features.encryption.title'),
      description: t('security.features.encryption.description'),
      details: [
        t('security.features.encryption.features.0'),
        t('security.features.encryption.features.1'),
        t('security.features.encryption.features.2'),
        t('security.features.encryption.features.3')
      ],
      status: "active"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: t('security.features.multiSig.title'),
      description: t('security.features.multiSig.description'),
      details: [
        t('security.features.multiSig.features.0'),
        t('security.features.multiSig.features.1'),
        t('security.features.multiSig.features.2'),
        t('security.features.multiSig.features.3')
      ],
      status: "active"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: t('security.features.infrastructure.title'),
      description: t('security.features.infrastructure.description'),
      details: [
        t('security.features.infrastructure.features.0'),
        t('security.features.infrastructure.features.1'),
        t('security.features.infrastructure.features.2'),
        t('security.features.infrastructure.features.3')
      ],
      status: "active"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('security.features.audits.title'),
      description: t('security.features.audits.description'),
      details: [
        t('security.features.audits.features.0'),
        t('security.features.audits.features.1'),
        t('security.features.audits.features.2'),
        t('security.features.audits.features.3')
      ],
      status: "active"
    }
  ]

  const securityProtocols = [
    {
      title: t('security.protocols.keyGeneration.title'),
      description: t('security.protocols.keyGeneration.description'),
      icon: <Key className="w-6 h-6" />,
      features: [
        t('security.protocols.keyGeneration.features.0'),
        t('security.protocols.keyGeneration.features.1'),
        t('security.protocols.keyGeneration.features.2')
      ]
    },
    {
      title: t('security.protocols.transactionSigning.title'),
      description: t('security.protocols.transactionSigning.description'),
      icon: <FileText className="w-6 h-6" />,
      features: [
        t('security.protocols.transactionSigning.features.0'),
        t('security.protocols.transactionSigning.features.1'),
        t('security.protocols.transactionSigning.features.2')
      ]
    },
    {
      title: t('security.protocols.networkSecurity.title'),
      description: t('security.protocols.networkSecurity.description'),
      icon: <Globe className="w-6 h-6" />,
      features: [
        t('security.protocols.networkSecurity.features.0'),
        t('security.protocols.networkSecurity.features.1'),
        t('security.protocols.networkSecurity.features.2')
      ]
    },
    {
      title: t('security.protocols.dataProtection.title'),
      description: t('security.protocols.dataProtection.description'),
      icon: <Shield className="w-6 h-6" />,
      features: [
        t('security.protocols.dataProtection.features.0'),
        t('security.protocols.dataProtection.features.1'),
        t('security.protocols.dataProtection.features.2')
      ]
    }
  ]

  const complianceStandards = [
    {
      standard: t('security.compliance.soc2.title'),
      description: t('security.compliance.soc2.description'),
      status: t('security.compliance.soc2.status'),
      icon: <Award className="w-6 h-6" />
    },
    {
      standard: t('security.compliance.iso27001.title'),
      description: t('security.compliance.iso27001.description'),
      status: t('security.compliance.iso27001.status'),
      icon: <Award className="w-6 h-6" />
    },
    {
      standard: t('security.compliance.gdpr.title'),
      description: t('security.compliance.gdpr.description'),
      status: t('security.compliance.gdpr.status'),
      icon: <Award className="w-6 h-6" />
    },
    {
      standard: t('security.compliance.ccpa.title'),
      description: t('security.compliance.ccpa.description'),
      status: t('security.compliance.ccpa.status'),
      icon: <Award className="w-6 h-6" />
    }
  ]

  const securityStats = [
    { label: t('security.stats.audits.label'), value: t('security.stats.audits.value'), icon: <CheckCircle className="w-6 h-6" /> },
    { label: t('security.stats.uptime.label'), value: t('security.stats.uptime.value'), icon: <Clock className="w-6 h-6" /> },
    { label: t('security.stats.bounties.label'), value: t('security.stats.bounties.value'), icon: <Award className="w-6 h-6" /> },
    { label: t('security.stats.researchers.label'), value: t('security.stats.researchers.value'), icon: <Users className="w-6 h-6" /> }
  ]

  const incidentResponse = [
    {
      phase: t('security.incidentResponse.detection.title'),
      description: t('security.incidentResponse.detection.description'),
      timeframe: t('security.incidentResponse.detection.time'),
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      phase: t('security.incidentResponse.response.title'),
      description: t('security.incidentResponse.response.description'),
      timeframe: t('security.incidentResponse.response.time'),
      icon: <Zap className="w-6 h-6" />
    },
    {
      phase: t('security.incidentResponse.investigation.title'),
      description: t('security.incidentResponse.investigation.description'),
      timeframe: t('security.incidentResponse.investigation.time'),
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      phase: t('security.incidentResponse.resolution.title'),
      description: t('security.incidentResponse.resolution.description'),
      timeframe: t('security.incidentResponse.resolution.time'),
      icon: <FileCheck className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="relative">
        <AbstractLines />
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6 bg-[#0BAB9B]/20 text-[#0BAB9B] border-[#0BAB9B]/30 px-4 py-2 text-sm font-medium">
                {t('security.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                {t('security.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {t('security.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-20 bg-gradient-to-r from-[#0B6BAB]/5 to-[#0BAB9B]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {securityStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('security.features.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('security.features.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                        {feature.description}
                      </p>
                                             <div className="space-y-3">
                        {(feature.details as string[]).map((detail: string, i: number) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-[#0BAB9B] flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <Badge className="bg-[#0BAB9B]/20 text-[#0BAB9B] border-[#0BAB9B]/30">
                          {feature.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Protocols */}
        <section className="py-20 bg-gradient-to-r from-[#0B6BAB]/5 to-[#0BAB9B]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('security.protocols.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('security.protocols.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {securityProtocols.map((protocol, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white">
                          {protocol.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                            {protocol.title}
                          </CardTitle>
                          <p className="text-gray-600 dark:text-gray-300">{protocol.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                                         <CardContent>
                       <div className="space-y-3">
                         {(protocol.features as string[]).map((feature: string, i: number) => (
                           <div key={i} className="flex items-center space-x-3">
                             <div className="w-2 h-2 rounded-full bg-[#0BAB9B]" />
                             <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                           </div>
                         ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('security.compliance.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('security.compliance.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {complianceStandards.map((standard, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white">
                            {standard.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {standard.standard}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {standard.description}
                            </p>
                          </div>
                        </div>
                        <Badge className={`${
                          standard.status === t('security.compliance.soc2.status') || standard.status === t('security.compliance.iso27001.status')
                            ? "bg-[#0BAB9B]/20 text-[#0BAB9B] border-[#0BAB9B]/30"
                            : "bg-[#0B6BAB]/20 text-[#0B6BAB] border-[#0B6BAB]/30"
                        }`}>
                          {standard.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-20 bg-gradient-to-r from-[#0B6BAB]/5 to-[#0BAB9B]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('security.incidentResponse.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('security.incidentResponse.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {incidentResponse.map((response, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] flex items-center justify-center text-white">
                        {response.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {response.phase}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {response.description}
                      </p>
                      <Badge className="bg-[#0B6BAB]/20 text-[#0B6BAB] border-[#0B6BAB]/30">
                        {response.timeframe}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('security.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('security.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#0B6BAB] hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                <Smartphone className="w-5 h-5 mr-2" />
                {t('security.cta.downloadMobile')}
              </Button>
              <Button className="bg-white text-[#0B6BAB] hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                <Monitor className="w-5 h-5 mr-2" />
                {t('security.cta.useWebApp')}
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B6BAB] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                <Link href="/about">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('security.cta.learnMore')}
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>{t('security.cta.securityRating')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>{t('security.cta.zeroIncidents')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>{t('security.cta.uptime')}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 