"use client"

import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/cyberd3fyn",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    { icon: Twitter, href: "https://x.com/cyberd3fyn", label: "Twitter", color: "hover:text-blue-300" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/cyberd3fyn/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    { icon: Youtube, href: "https://www.youtube.com/@CyberD3FYN", label: "YouTube", color: "hover:text-red-400" },
  ]

  return (
    <div className="text-center space-y-8">
      <div className="space-y-2">
        <p className="text-xs tracking-[0.2em] text-neon-cyan uppercase font-mono font-semibold">Connect With Us</p>
        <h3 className="text-2xl sm:text-3xl font-light">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple font-semibold">
            Check Our Socials
          </span>
          <br />
          <span className="text-cyber-light font-light text-lg">for the latest updates</span>
        </h3>
      </div>

      <div className="flex justify-center gap-6 sm:gap-8 mt-8">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`group relative text-cyber-muted transition-all duration-300 ${social.color}`}
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 rounded-lg blur-xl transition-all duration-300 -inset-2"></div>

              {/* Icon with scale animation */}
              <Icon className="relative w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
