"use client"

import Image from "next/image"
import { footerLinks } from "@/data/site-data"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Image 
                src="/logo.png" 
                alt="Cricdex" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent font-display group-hover:animate-pulse">
              CricDex
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:text-primary transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <span className="inline-block hover:text-primary transition-colors">
            © 2026 CricDex. Made with 🏏 for cricket fans worldwide.
          </span>
        </div>
      </div>
    </footer>
  )
}
