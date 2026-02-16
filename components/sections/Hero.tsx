"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Gamepad2, Crown, ArrowRight } from "lucide-react"
import { discordLinks } from "@/data/site-data"

export const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl glow-effect" />
      
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <Badge className="hero-badge mb-6 bg-primary/10 text-primary border-primary/30 px-4 py-2">
          <Bot className="w-4 h-4 mr-2" />
          The Ultimate Cricket Discord Bot
        </Badge>
        
        {/* Logo */}
        <div className="hero-logo flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image 
              src="/logo.png" 
              alt="CricDex Logo" 
              fill 
              className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            />
          </div>
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display tracking-wide">
          Collect, Trade & Battle
          <br />
          <span className="text-shimmer">
            Cricket Legends
          </span>
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Build your dream cricket team, stake your players in epic battles, 
          and dominate the leaderboards. The ultimate gaming experience for cricket fans.
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <a href={discordLinks.invite} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-semibold group animate-pulse-glow hover:animate-none transition-all duration-300 hover:scale-105">
              <Gamepad2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Playing Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
          <a href="#pricing">
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 hover:border-primary">
              <Crown className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Premium
            </Button>
          </a>
        </div>
      </div>

      {/* Floating particles - hidden on mobile */}
      <div className="particle hidden md:block absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60" />
      <div className="particle hidden md:block absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full opacity-50" />
      <div className="particle hidden md:block absolute bottom-20 left-1/4 w-2 h-2 bg-primary rounded-full opacity-70" />
      <div className="particle hidden md:block absolute top-1/3 right-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm" />
      <div className="particle hidden md:block absolute bottom-1/3 left-20 w-3 h-3 bg-yellow-400/40 rounded-full blur-sm" />
      <div className="particle hidden md:block absolute top-1/2 right-10 w-2 h-2 bg-primary rounded-full opacity-40" />
      
      {/* Animated gradient orbs - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
})

Hero.displayName = "Hero"
