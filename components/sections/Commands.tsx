"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Terminal } from "lucide-react"
import { commands } from "@/data/site-data"

export const Commands = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="commands" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              <Terminal className="w-4 h-4 mr-1" />
              Quick Start Guide
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display tracking-wide">
              Easy Commands,
              <span className="text-primary"> Endless Fun</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Get started in seconds with intuitive slash commands. Whether you&apos;re claiming daily rewards or battling friends, everything is just a command away.
            </p>

            <div className="space-y-4">
              {commands.map((item, i) => (
                <div 
                  key={i}
                  className="command-item flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <code className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-mono text-sm">
                    {item.cmd}
                  </code>
                  <span className="text-muted-foreground text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="command-image relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] hover-lift">
              <Image 
                src="/catch.png" 
                alt="CricDex Catch Screen" 
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Commands.displayName = "Commands"
