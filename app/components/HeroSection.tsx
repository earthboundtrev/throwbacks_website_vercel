"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const PixelArt = () => (
  <div className="absolute inset-0 z-0 opacity-20">
    <div
      className="w-full h-full bg-repeat"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B00' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
      }}
    ></div>
  </div>
)

export default function HeroSection() {
  const [glitchText, setGlitchText] = useState("Step Back in Time to the Golden Age of Gaming")

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchedText = glitchText
        .split("")
        .map((char) => (Math.random() > 0.9 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : char))
        .join("")
      setGlitchText(glitchedText)
    }, 100)

    return () => clearInterval(glitchInterval)
  }, [glitchText])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <PixelArt />
      <div className="container mx-auto text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 neon-text logo-gradient">{glitchText}</h2>
        <Button className="text-2xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners">
          Explore the Arcade
        </Button>
      </div>
    </section>
  )
}

