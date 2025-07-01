"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Zap, Globe, Coins, Smartphone, TrendingUp, Layers, ArrowRight, ChevronDown, Building2, Users, Shield, Rocket, Database, Network } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AbstractLines } from "@/components/abstract-lines"
import { useTranslations } from "next-intl"
import { RTLWrapper } from "@/components/rtl-wrapper"

export default function RoadmapPage() {
  const t = useTranslations()
  const [selectedPhase, setSelectedPhase] = useState("all")

  const roadmapPhases = [
    {
      id: "q4-2024",
      phase: t('roadmap.phases.q4_2024.quarter'),
      title: t('roadmap.phases.q4_2024.title'),
      status: "completed",
      description: t('roadmap.phases.q4_2024.description'),
      achievements: [
        t('roadmap.phases.q4_2024.achievements.0'),
        t('roadmap.phases.q4_2024.achievements.1'),
        t('roadmap.phases.q4_2024.achievements.2'),
        t('roadmap.phases.q4_2024.achievements.3'),
        t('roadmap.phases.q4_2024.achievements.4'),
      ],
      icon: <Coins className="w-6 h-6" />,
    },
    {
      id: "q1-2025",
      phase: t('roadmap.phases.q1_2025.quarter'),
      title: t('roadmap.phases.q1_2025.title'),
      status: "completed",
      description: t('roadmap.phases.q1_2025.description'),
      achievements: [
        t('roadmap.phases.q1_2025.achievements.0'),
        t('roadmap.phases.q1_2025.achievements.1'),
        t('roadmap.phases.q1_2025.achievements.2'),
        t('roadmap.phases.q1_2025.achievements.3'),
        t('roadmap.phases.q1_2025.achievements.4'),
      ],
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      id: "q2-2025",
      phase: t('roadmap.phases.q2_2025.quarter'),
      title: t('roadmap.phases.q2_2025.title'),
      status: "completed",
      description: t('roadmap.phases.q2_2025.description'),
      achievements: [
        t('roadmap.phases.q2_2025.achievements.0'),
        t('roadmap.phases.q2_2025.achievements.1'),
        t('roadmap.phases.q2_2025.achievements.2'),
        t('roadmap.phases.q2_2025.achievements.3'),
        t('roadmap.phases.q2_2025.achievements.4'),
      ],
      icon: <Network className="w-6 h-6" />,
    },
    {
      id: "q3-2025",
      phase: t('roadmap.phases.q3_2025.quarter'),
      title: t('roadmap.phases.q3_2025.title'),
      status: "current",
      description: t('roadmap.phases.q3_2025.description'),
      achievements: [
        t('roadmap.phases.q3_2025.achievements.0'),
        t('roadmap.phases.q3_2025.achievements.1'),
        t('roadmap.phases.q3_2025.achievements.2'),
        t('roadmap.phases.q3_2025.achievements.3'),
        t('roadmap.phases.q3_2025.achievements.4'),
      ],
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      id: "q4-2025",
      phase: t('roadmap.phases.q4_2025.quarter'),
      title: t('roadmap.phases.q4_2025.title'),
      status: "upcoming",
      description: t('roadmap.phases.q4_2025.description'),
      achievements: [
        t('roadmap.phases.q4_2025.achievements.0'),
        t('roadmap.phases.q4_2025.achievements.1'),
        t('roadmap.phases.q4_2025.achievements.2'),
        t('roadmap.phases.q4_2025.achievements.3'),
        t('roadmap.phases.q4_2025.achievements.4'),
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: "q1-2026",
      phase: t('roadmap.phases.q1_2026.quarter'),
      title: t('roadmap.phases.q1_2026.title'),
      status: "upcoming",
      description: t('roadmap.phases.q1_2026.description'),
      achievements: [
        t('roadmap.phases.q1_2026.achievements.0'),
        t('roadmap.phases.q1_2026.achievements.1'),
        t('roadmap.phases.q1_2026.achievements.2'),
        t('roadmap.phases.q1_2026.achievements.3'),
        t('roadmap.phases.q1_2026.achievements.4'),
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "q2-2026",
      phase: t('roadmap.phases.q2_2026.quarter'),
      title: t('roadmap.phases.q2_2026.title'),
      status: "upcoming",
      description: t('roadmap.phases.q2_2026.description'),
      achievements: [
        t('roadmap.phases.q2_2026.achievements.0'),
        t('roadmap.phases.q2_2026.achievements.1'),
        t('roadmap.phases.q2_2026.achievements.2'),
        t('roadmap.phases.q2_2026.achievements.3'),
        t('roadmap.phases.q2_2026.achievements.4'),
      ],
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: "q3-2026",
      phase: t('roadmap.phases.q3_2026.quarter'),
      title: t('roadmap.phases.q3_2026.title'),
      status: "upcoming",
      description: t('roadmap.phases.q3_2026.description'),
      achievements: [
        t('roadmap.phases.q3_2026.achievements.0'),
        t('roadmap.phases.q3_2026.achievements.1'),
        t('roadmap.phases.q3_2026.achievements.2'),
        t('roadmap.phases.q3_2026.achievements.3'),
        t('roadmap.phases.q3_2026.achievements.4'),
      ],
      icon: <Shield className="w-6 h-6" />,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-[#0BAB9B] bg-[#0BAB9B]/20"
      case "current":
        return "text-[#0B6BAB] bg-[#0B6BAB]/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "current":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4 opacity-50" />
    }
  }

  return (
    <RTLWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0a0f1c] dark:via-[#1a1f2e] dark:to-[#0f141f] text-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
        <Navigation />
        <AbstractLines />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#0B6BAB]/20 to-[#0BAB9B]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#0BAB9B]/15 to-[#0B6BAB]/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-bounce" style={{ transform: "translate(-50%, -50%)" }} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230BAB9B%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-16">
            <Badge className="bg-gradient-to-r from-[#0BAB9B]/20 to-[#0B6BAB]/20 text-[#0BAB9B] border-[#0BAB9B]/30 mb-4">
              {t('roadmap.hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#0B6BAB] via-[#0BAB9B] to-[#0B6BAB] bg-clip-text text-transparent animate-gradient bg-300% leading-tight tracking-tight">
              {t('roadmap.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-200 font-light">
              {t('roadmap.hero.subtitle')}
            </p>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#0BAB9B]" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Phase Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {["all", "completed", "current", "upcoming"].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedPhase === filter ? "default" : "outline"}
                  onClick={() => setSelectedPhase(filter)}
                  className={
                    selectedPhase === filter
                      ? "bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white shadow-lg shadow-[#0B6BAB]/25"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 hover:border-[#0BAB9B]/50"
                  }
                >
                  {t(`roadmap.filters.${filter}`)}
                </Button>
              ))}
            </div>

            {/* Roadmap Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {roadmapPhases
                .filter((phase) => selectedPhase === "all" || phase.status === selectedPhase)
                .map((phase, index) => (
                  <Card
                    key={phase.id}
                    className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 hover:border-[#0BAB9B]/50 transition-all duration-500 hover:scale-105 card-hover"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="roadmap-card-header flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-[#0B6BAB] to-[#0BAB9B] shadow-lg shadow-[#0B6BAB]/25">
                            {phase.icon}
                          </div>
                          <div>
                            <div className="roadmap-card-badge flex items-center space-x-3 mb-2">
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{phase.phase}</span>
                              <Badge className={`${getStatusColor(phase.status)} border-0`}>
                                <div className="flex items-center space-x-1">
                                  {getStatusIcon(phase.status)}
                                  <span className="capitalize">{phase.status}</span>
                                </div>
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{phase.title}</h3>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6">{phase.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t('roadmap.keyAchievements')}:</h4>
                        <div className="roadmap-achievements">
                          {phase.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-3 mb-2">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  phase.status === "completed"
                                    ? "bg-[#0BAB9B]"
                                    : phase.status === "current"
                                      ? "bg-[#0B6BAB]"
                                      : "bg-gray-400 dark:bg-gray-500"
                                }`}
                              />
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Stats */}
      <section className="py-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="group">
              <div className="text-4xl font-bold text-[#0BAB9B] mb-2 group-hover:scale-110 transition-transform duration-300">{t('roadmap.stats.phasesCompleted.value')}</div>
              <div className="text-gray-600 dark:text-gray-300">{t('roadmap.stats.phasesCompleted.label')}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-[#0B6BAB] mb-2 group-hover:scale-110 transition-transform duration-300">{t('roadmap.stats.currentPhase.value')}</div>
              <div className="text-gray-600 dark:text-gray-300">{t('roadmap.stats.currentPhase.label')}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">{t('roadmap.stats.timeline.value')}</div>
              <div className="text-gray-600 dark:text-gray-300">{t('roadmap.stats.timeline.label')}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">{t('roadmap.stats.totalPhases.value')}</div>
              <div className="text-gray-600 dark:text-gray-300">{t('roadmap.stats.totalPhases.label')}</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('roadmap.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('roadmap.cta.subtitle')}
          </p>
          <Button className="bg-gradient-to-r from-[#0B6BAB] to-[#0BAB9B] hover:from-[#0B6BAB]/90 hover:to-[#0BAB9B]/90 text-white px-8 py-4 rounded-2xl shadow-lg shadow-[#0B6BAB]/25 transition-all duration-300 hover:scale-105">
            {t('roadmap.cta.joinCommunity')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
      </div>
    </RTLWrapper>
  )
}
