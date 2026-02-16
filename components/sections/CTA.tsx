"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Gift, Bot, ArrowRight } from "lucide-react"
import { discordLinks } from "@/data/site-data"

export const CTA = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 animate-gradient-shift" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="hidden md:block absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
      <div className="hidden md:block absolute bottom-20 right-20 w-24 h-24 border border-primary/30 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}} />
      <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="hidden md:block absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto text-center relative z-10 cta-content">
        <div className="max-w-3xl mx-auto">
          <div className="relative inline-block mb-6">
            <Gift className="w-16 h-16 text-primary mx-auto animate-float" />
            <div className="absolute inset-0 w-16 h-16 mx-auto border-2 border-primary/30 rounded-full animate-ping" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-wide section-header">
            Ready to Build Your
            <span className="text-primary text-shimmer"> Dream Team?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of cricket fans. Start collecting, trading, and battling today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={discordLinks.invite} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 font-semibold group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Bot className="w-6 h-6 mr-2" />
                Add CricDex to Discord
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})

CTA.displayName = "CTA"
