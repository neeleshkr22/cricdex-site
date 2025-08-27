"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Zap, Star, ArrowRight, Bot, Gamepad2, Palette, Bell, RefreshCcw } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export default function CricdexLanding() {
  const [open, setOpen] = useState(false)

  const premiumFeatures = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Exclusive Legends Pack",
      description: "Unlock legendary cricketers not available to free users.",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: "Faster Spawns",
      description: "Enjoy quicker player spawns and get new cricketers faster.",
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-500" />,
      title: "Custom Profile Themes",
      description: "Personalize your profile with exclusive premium themes.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-blue-500" />,
      title: "Reduced Trade Cooldowns",
      description: "Trade your players more frequently with shorter cooldown times.",
    },
    {
      icon: <Bell className="w-6 h-6 text-green-500" />,
      title: "Trade Alerts",
      description: "Receive instant notifications when rare players become available.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Cricdex</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add to Discord</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-card via-background to-card">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
            <Bot className="w-4 h-4 mr-1" />
            Discord Bot
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Collect & Trade <span className="text-primary">Cricket Cards</span> Like Never Before
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Join thousands of cricket fans in the ultimate card collecting experience. Claim legendary players, trade
            with friends, and build your dream cricket team on Discord.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/zKzqsr39"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Start Playing Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="border-border bg-transparent"
              onClick={() => setOpen(true)}
            >
              Get Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-yellow-50 via-white to-yellow-100 border border-yellow-200 shadow-2xl rounded-2xl px-6 py-6">
          <DialogHeader className="text-center space-y-2">
            <DialogTitle className=" font-mono flex justify-center text-2xl font-extrabold bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow">
              Premium Features
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Unlock exclusive benefits and take your cricket card journey to the next level.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 mt-5">
            {premiumFeatures.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-yellow-100 hover:shadow-md transition"
              >
                <div className="p-1.5 rounded-md bg-yellow-100">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-base text-yellow-800">{f.title}</h3>
                  <p className="text-muted-foreground text-xs">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button className="font-mono w-full text-base font-semibold bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-white shadow-md hover:from-yellow-600 hover:via-amber-500 hover:to-yellow-700">
              Upgrade Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>


      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cricdex?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of cricket card collecting with innovative features designed for the modern fan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Collect Legendary Players</CardTitle>
                <CardDescription>
                  Discover and claim cards of your favorite cricket stars from past and present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rare and common card tiers</li>
                  <li>• Real player statistics</li>
                  <li>• Limited edition releases</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Trade with Friends</CardTitle>
                <CardDescription>
                  Build your dream team by trading cards with other collectors in your server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure trading system</li>
                  <li>• Fair value calculations</li>
                  <li>• Trade history tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Dynamic Spawning</CardTitle>
                <CardDescription>
                  Cards appear randomly in your Discord channels - be quick to claim them!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Random spawn timing</li>
                  <li>• Channel-specific spawns</li>
                  <li>• First-come, first-served</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1K+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2.5K+</div>
              <div className="text-muted-foreground">Unique Cards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
              <div className="text-muted-foreground">Cards Traded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Players Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Cricdex has completely changed how our cricket community interacts. The trading system is amazing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">R</span>
                  </div>
                  <div>
                    <div className="font-medium">Rohit_Captain</div>
                    <div className="text-sm text-muted-foreground">Server Admin</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally got my hands on a rare Kohli card! The spawn system keeps everyone engaged."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">V</span>
                  </div>
                  <div>
                    <div className="font-medium">ViratFan18</div>
                    <div className="text-sm text-muted-foreground">Collector</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Love the competitive aspect! Building my dream team one trade at a time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary">M</span>
                  </div>
                  <div>
                    <div className="font-medium">MSDhoni_07</div>
                    <div className="text-sm text-muted-foreground">Pro Trader</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Collection?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of cricket fans and start building your ultimate team today. Add Cricdex to your Discord
            server in just one click!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Bot className="w-5 h-5 mr-2" />
            Add Cricdex to Discord
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Cricdex</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Commands
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Cricdex. Made with ❤️ for cricket fans worldwide.
          </div>
        </div>
      </footer>
    </div>
  )
}
