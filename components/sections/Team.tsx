"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { teamMembers } from "@/data/site-data"

export const Team = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="team" className="py-24 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Users className="w-4 h-4 mr-1" />
            Meet the Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-wide">
            The <span className="text-primary">Legends</span> Behind CricDex
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate team building the ultimate cricket experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card group relative p-4 md:p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] text-center"
            >
              <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-base md:text-lg font-display">{member.name}</h3>
              <p className="text-primary text-xs md:text-sm">{member.role}</p>
              <p className="text-muted-foreground text-xs mt-1">{member.discord}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Team.displayName = "Team"
