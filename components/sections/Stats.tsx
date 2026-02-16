"use client"

import { forwardRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Sparkles } from "lucide-react"

const iconMap = {
  Sparkles,
  Users,
  Trophy,
}

const statIcons = ["Sparkles", "Users", "Trophy"] as const

export const Stats = forwardRef<HTMLDivElement>((_, ref) => {
  const stats = [
    { label: "Crics to Collect", counterClass: "counter-crics", defaultValue: "500+", icon: "Sparkles" },
    { label: "Active Players", counterClass: "counter-players", defaultValue: "128", icon: "Users" },
    { label: "Crics Caught", counterClass: "counter-caught", defaultValue: "2,675", icon: "Trophy" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Trophy className="w-4 h-4 mr-1" />
            Live Stats
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-wide">
            Growing <span className="text-primary">Community</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <div 
                key={index}
                className="stat-item p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 animate-border-glow"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className={`${stat.counterClass} text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent mb-2 font-display`}>
                  {stat.defaultValue}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

Stats.displayName = "Stats"
