"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Award, 
  TrendingUp, 
  Lock, 
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations()
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("about.values.security.title"),
      description: t("about.values.security.description")
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description")
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("about.values.userCentric.title"),
      description: t("about.values.userCentric.description")
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("about.values.globalAccess.title"),
      description: t("about.values.globalAccess.description")
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: t("about.values.transparency.title"),
      description: t("about.values.transparency.description")
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("about.values.growth.title"),
      description: t("about.values.growth.description")
    }
  ]

  const milestones = [
    {
      year: t("about.journey.milestones.2023.year"),
      title: t("about.journey.milestones.2023.title"),
      description: t("about.journey.milestones.2023.description")
    },
    {
      year: t("about.journey.milestones.2024Q1.year"),
      title: t("about.journey.milestones.2024Q1.title"),
      description: t("about.journey.milestones.2024Q1.description")
    },
    {
      year: t("about.journey.milestones.2024Q2.year"),
      title: t("about.journey.milestones.2024Q2.title"),
      description: t("about.journey.milestones.2024Q2.description")
    },
    {
      year: t("about.journey.milestones.2024Q3.year"),
      title: t("about.journey.milestones.2024Q3.title"),
      description: t("about.journey.milestones.2024Q3.description")
    },
    {
      year: t("about.journey.milestones.2024Q4.year"),
      title: t("about.journey.milestones.2024Q4.title"),
      description: t("about.journey.milestones.2024Q4.description")
    },
    {
      year: t("about.journey.milestones.2025.year"),
      title: t("about.journey.milestones.2025.title"),
      description: t("about.journey.milestones.2025.description")
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#0f1a2e] dark:to-[#1a2332]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t("about.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("about.hero.title").split(" ").slice(0, -1).join(" ")}
              <span className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent"> {t("about.hero.title").split(" ").slice(-1)[0]}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">{t("about.mission.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("about.mission.description")}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0BAB9B] to-[#0B6BAB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">{t("about.vision.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("about.vision.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("about.values.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("about.journey.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("about.journey.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] text-white px-3 py-1 rounded-full">
                      {milestone.year}
                    </Badge>
                    <Award className="w-6 h-6 text-[#0BAB9B]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mt-4">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t("about.company.title")}</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-[#0BAB9B]" />
                  <span>{t("about.company.founded")}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#0BAB9B]" />
                  <span>{t("about.company.team")}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-[#0BAB9B]" />
                  <span>{t("about.company.members")}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-[#0BAB9B]" />
                  <span>{t("about.company.countries")}</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("about.company.contact.title")}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#0BAB9B]" />
                    <a href="mailto:contact@laxce.com" className="text-[#0BAB9B] hover:underline">
                      {t("about.company.contact.email")}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="w-5 h-5 text-[#0BAB9B]" />
                    <a href="https://laxce.com" className="text-[#0BAB9B] hover:underline">
                      {t("about.company.contact.website")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{t("about.whyChoose.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0BAB9B] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("about.whyChoose.security.title")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.whyChoose.security.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0BAB9B] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("about.whyChoose.interface.title")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.whyChoose.interface.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0BAB9B] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("about.whyChoose.multiChain.title")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.whyChoose.multiChain.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0BAB9B] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("about.whyChoose.support.title")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.whyChoose.support.description")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t("about.cta.title")}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("about.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#0B6BAB] hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <Link href="/wallet">
                {t("about.cta.exploreWallet")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild
              variant="outline"
              className="border-white bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] bg-clip-text text-transparent hover:bg-white hover:text-[#0B6BAB] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/dex">
                {t("about.cta.tryDex")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 