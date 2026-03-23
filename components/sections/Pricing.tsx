"use client"

import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Gem, Sparkles, Check } from "lucide-react"
import { pricingPlans } from "@/data/site-data"

const rolePills = {
  premium: {
    name: "Premium",
    className: "border-cyan-200/50 bg-gradient-to-r from-cyan-300/30 via-sky-300/20 to-cyan-200/30 text-cyan-50",
    dotClass: "bg-cyan-200",
  },
  ambassador: {
    name: "Ambassador",
    className: "border-slate-200/55 bg-gradient-to-r from-slate-300/35 via-zinc-200/25 to-slate-100/35 text-slate-50",
    dotClass: "bg-slate-100",
  },
  donator: {
    name: "Donator",
    className: "border-pink-200/55 bg-gradient-to-r from-pink-300/30 via-rose-200/20 to-pink-200/30 text-pink-50",
    dotClass: "bg-pink-200",
  },
}

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
          {/* Premium Plan */}
          <Card className="pricing-card bg-card/80 border-border/50 relative overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
                <Gem className="w-5 h-5" />
                {pricingPlans.premium.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{pricingPlans.premium.price}</span>
                <span className="text-muted-foreground ml-2">{pricingPlans.premium.period}</span>
              </div>
              <CardDescription className="mt-2">{pricingPlans.premium.description}</CardDescription>
              <div className="mt-4">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${rolePills.premium.className}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${rolePills.premium.dotClass}`} />
                  <span>{rolePills.premium.name}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                {pricingPlans.premium.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://discord.gg/xrGqpSkuDE" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  {pricingPlans.premium.buttonText}
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Ambassador Plan */}
          <Card className="pricing-card bg-gradient-to-b from-primary/10 to-card border-primary/50 relative overflow-hidden md:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                {pricingPlans.ambassador.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{pricingPlans.ambassador.price}</span>
                <span className="text-muted-foreground ml-2">{pricingPlans.ambassador.period}</span>
              </div>
              <CardDescription className="mt-2">{pricingPlans.ambassador.description}</CardDescription>
              <div className="mt-4">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${rolePills.ambassador.className}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${rolePills.ambassador.dotClass}`} />
                  <span>{rolePills.ambassador.name}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                {pricingPlans.ambassador.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className={feature === pricingPlans.ambassador.highlightedFeature ? "font-semibold text-primary" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="https://discord.gg/xrGqpSkuDE" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  {pricingPlans.ambassador.buttonText}
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Donator Plan */}
          <Card className="pricing-card bg-card/80 border-border/50 relative overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
                <Crown className="w-5 h-5" />
                {pricingPlans.donator.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{pricingPlans.donator.price}</span>
                <span className="text-muted-foreground ml-2">{pricingPlans.donator.period}</span>
              </div>
              <CardDescription className="mt-2">{pricingPlans.donator.description}</CardDescription>
              <div className="mt-4">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${rolePills.donator.className}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${rolePills.donator.dotClass}`} />
                  <span>{rolePills.donator.name}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                {pricingPlans.donator.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className={feature === pricingPlans.donator.highlightedFeature ? "font-semibold text-primary" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="https://discord.gg/xrGqpSkuDE" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  {pricingPlans.donator.buttonText}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * For buying, contact us in server: {" "}
          <a href="https://discord.gg/xrGqpSkuDE" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
            https://discord.gg/xrGqpSkuDE
          </a>
        </p>
      </div>
    </section>
  )
})

Pricing.displayName = "Pricing"
