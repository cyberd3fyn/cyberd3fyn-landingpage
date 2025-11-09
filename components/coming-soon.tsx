"use client"

import { useState, useEffect } from "react"
import CountdownTimer from "@/components/countdown-timer"
import SocialLinks from "@/components/social-links"

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-black overflow-hidden relative">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Accent line */}
        <div className="mb-8 h-1 w-12 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full"></div>

        {/* Brand name with glitch effect */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
              CyberD3FYN
            </span>
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.3em] text-cyber-muted mt-3 uppercase font-mono">
            Define Discover defend{" "}
          </p>
        </div>

        {/* Main headline */}
        <div className="max-w-2xl mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6 text-cyber-light">
            <span className="font-semibold">Redefining Your Cybersecurity Journey</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
              Break the Limits.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-cyber-muted leading-relaxed">
            The future of cybersecurity education is almost here. Prepare yourself for a revolution that defies
            boundaries and reimagines what&#39;s possible.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="my-12 w-full max-w-md">
          <CountdownTimer />
        </div>

        {/* Social media links section */}
        <div className="w-full max-w-md mb-12">
          <SocialLinks />
        </div>

        {/* Footer accent */}
        <div className="mt-16 text-center text-cyber-muted text-sm font-mono">
          <p className="mt-4 text-xs opacity-70">© 2025 CyberD3FYN. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
