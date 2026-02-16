"use client"

import Image from "next/image"

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500">
      <div className="relative">
        <div className="w-24 h-24 relative animate-pulse">
          <Image src="/logo.png" alt="Loading" fill className="object-contain" />
        </div>
        <div className="absolute inset-0 w-24 h-24 border-4 border-primary/30 rounded-full animate-spin-slow" />
        <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-primary rounded-full animate-spin" />
        <div className="mt-8 text-center">
          <span className="text-primary font-display text-xl animate-pulse">Loading...</span>
        </div>
      </div>
    </div>
  )
}
