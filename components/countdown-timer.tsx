"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("2026-06-01T00:00:00").getTime()
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimerUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-lg blur-md"></div>
        <div className="relative bg-cyber-darker/80 backdrop-blur-md border border-neon-cyan/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-blue">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-xs sm:text-sm uppercase tracking-widest font-mono text-cyber-muted">{label}</span>
    </div>
  )

  return (
    <div className="space-y-4">
      <p className="text-center text-sm uppercase tracking-wider text-cyber-muted font-mono mb-6">Time Until Launch</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <TimerUnit value={timeLeft.days} label="Days" />
        <TimerUnit value={timeLeft.hours} label="Hours" />
        <TimerUnit value={timeLeft.minutes} label="Minutes" />
        <TimerUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}
