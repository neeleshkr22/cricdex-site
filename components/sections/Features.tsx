"use client"

import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Swords, Gamepad2, Sparkles } from "lucide-react"
import { features } from "@/data/site-data"

const iconMap = {
  Trophy,
  Users,
  Swords,
  Gamepad2,
}

export const Features = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="features" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 section-header">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 animate-pulse-glow">
            <Sparkles className="w-4 h-4 mr-1" />
            Features & Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-wide">
            Everything You Need to
            <span className="text-primary text-shimmer"> Dominate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From collecting rare cricketers to battling friends, CricDex has all the features for the ultimate cricket gaming experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card 
                key={index}
                className="feature-card bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.shortDesc}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {feature.longDesc}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
})

Features.displayName = "Features"
