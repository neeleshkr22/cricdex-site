"use client"

import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Shield, Check } from "lucide-react"
import { pricingPlans } from "@/data/site-data"

export const Pricing = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="pricing" className="py-24 px-4 bg-gradient-to-b from-transparent via-card/50 to-transparent relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Crown className="w-4 h-4 mr-1" />
            Choose Your Plan
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-wide">
            Unlock <span className="text-primary">Premium</span> Power
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take your CricDex experience to the next level with exclusive premium features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="pricing-card bg-card/80 border-border/50 relative overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-muted-foreground">{pricingPlans.basic.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{pricingPlans.basic.price}</span>
                <span className="text-muted-foreground ml-2">{pricingPlans.basic.period}</span>
              </div>
              <CardDescription className="mt-2">{pricingPlans.basic.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                {pricingPlans.basic.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                {pricingPlans.basic.buttonText}
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="pricing-card bg-gradient-to-b from-primary/10 to-card border-primary/50 relative overflow-hidden md:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Crown className="w-5 h-5" />
                {pricingPlans.pro.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{pricingPlans.pro.price}</span>
                <span className="text-muted-foreground ml-2">{pricingPlans.pro.period}</span>
              </div>
              <CardDescription className="mt-2">{pricingPlans.pro.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                {pricingPlans.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className={feature === pricingPlans.pro.highlightedFeature ? "font-semibold text-primary" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {pricingPlans.pro.buttonText}
              </Button>
            </CardContent>
          </Card>

          {/* Lifetime Plan */}
          <Card className="pricing-card bg-card/80 border-border/50 relative overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {pricingPlans.lifetime.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{pricingPlans.lifetime.price}</span>
                <span className="text-muted-foreground ml-2">{pricingPlans.lifetime.period}</span>
              </div>
              <CardDescription className="mt-2">{pricingPlans.lifetime.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                {pricingPlans.lifetime.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className={feature === pricingPlans.lifetime.highlightedFeature ? "font-semibold text-primary" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                {pricingPlans.lifetime.buttonText}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
})

Pricing.displayName = "Pricing"
