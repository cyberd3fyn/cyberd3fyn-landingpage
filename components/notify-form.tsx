"use client"

import { useState, type FormEvent } from "react"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

export default function NotifyForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800))

    setSubmitted(true)
    setEmail("")
    setLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/30 to-neon-purple/30 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
        <div className="relative bg-cyber-darker/80 backdrop-blur-md border border-neon-cyan/50 rounded-lg p-6 text-center">
          <CheckCircle className="w-8 h-8 mx-auto mb-3 text-neon-cyan animate-pulse" />
          <p className="text-cyber-light font-medium">Thanks for joining the revolution!</p>
          <p className="text-cyber-muted text-sm mt-2">Check your email for exclusive updates.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        <div className="relative flex items-center">
          <Mail className="absolute left-4 w-5 h-5 text-neon-cyan/60 pointer-events-none" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={loading}
            className="w-full bg-cyber-darker/80 backdrop-blur-md border border-neon-cyan/30 rounded-lg pl-12 pr-12 py-3 sm:py-4 text-cyber-light placeholder-cyber-muted/50 font-mono text-sm focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !email}
            className="absolute right-2 p-2 text-neon-cyan hover:text-neon-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Subscribe"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin"></div>
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <p className="text-xs text-cyber-muted/60 text-center font-mono">We'll notify you when we launch</p>
    </form>
  )
}
