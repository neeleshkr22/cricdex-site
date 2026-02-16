"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { PageLoader } from "@/components/PageLoader"
import { Header, Hero, Features, Commands, Stats, Pricing, Team, CTA, Footer } from "@/components/sections"

gsap.registerPlugin(ScrollTrigger)

export default function CricdexLanding() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const commandsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Page loading animation - fast reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation - header slides down
      gsap.fromTo(
        "header",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.5 }
      )

      // Floating particles animation
      gsap.utils.toArray(".particle").forEach((particle: any) => {
        gsap.to(particle, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
      })

      // Hero animations with stagger
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } })
      heroTl
        .fromTo(".hero-badge", { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
        .fromTo(".hero-logo", { opacity: 0, scale: 0.5, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.8 }, "-=0.3")
        .fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-buttons", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      
      // Logo floating animation
      gsap.to(".hero-logo", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })

      // Glow pulse animation
      gsap.to(".glow-effect", {
        opacity: 0.6,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })

      // Section headers reveal animation
      gsap.utils.toArray(".section-header").forEach((header: any) => {
        gsap.fromTo(header, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
            }
          }
        )
      })

      // Features section with rotation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 80, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      )

      // Command image reveal
      gsap.fromTo(
        ".command-image",
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: commandsRef.current,
            start: "top 70%",
          }
        }
      )

      // Commands section
      gsap.fromTo(
        ".command-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: commandsRef.current,
            start: "top 80%",
          }
        }
      )

      // Stats counter animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        }
      )

      // Animated number counting
      const animateCounter = (selector: string, end: number, suffix: string) => {
        const el = document.querySelector(selector) as HTMLElement
        if (el) {
          const counter = { value: 0 }
          ScrollTrigger.create({
            trigger: statsRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(counter, {
                value: end,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.floor(counter.value).toLocaleString() + suffix
                }
              })
            }
          })
        }
      }

      animateCounter(".counter-crics", 500, "+")
      animateCounter(".counter-players", 128, "")
      animateCounter(".counter-caught", 2675, "")

      // Team cards animation
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          }
        }
      )

      // Pricing cards
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
          }
        }
      )

      // CTA section
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {isLoading && <PageLoader />}
      <Header />
      <Hero ref={heroRef} />
      <Features ref={featuresRef} />
      <Commands ref={commandsRef} />
      <Stats ref={statsRef} />
      <Pricing ref={pricingRef} />
      <Team ref={teamRef} />
      <CTA ref={ctaRef} />
      <Footer />
    </div>
  )
}
