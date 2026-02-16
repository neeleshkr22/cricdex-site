"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { navLinks, discordLinks } from "@/data/site-data"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Image 
              src="/logo.png" 
              alt="Cricdex" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent font-display glitch-text">
            CricDex
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-muted-foreground hover:text-primary transition-colors underline-animation"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <a href={discordLinks.bot} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold magnetic transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Add to Discord
            </Button>
          </a>
          <button 
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a href={discordLinks.bot} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Add to Discord
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
