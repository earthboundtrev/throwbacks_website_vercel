"use client"

import React from 'react'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const BackgroundImage = () => (
  <div className="absolute inset-0 z-0 opacity-20">
    <div
      className="w-full h-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/pinball_collection_facebook_header.jpg")`,
        filter: 'brightness(0.9)',
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
    <section className="relative py-20 bg-gradient-to-b from-background to-[#FF6B00]/10 overflow-hidden">
      <BackgroundImage />
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to<br className="md:hidden" /> Throwbacks Arcade
        </h1>
        <p className="text-xl mb-8">Step back in time to the golden age of gaming</p>
        <Link href="/games">
          <Button 
            className="text-2xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners"
            onClick={() => {
              // Ensure scroll to top when reaching the games page
              window.scrollTo(0, 0)
            }}
          >
            Explore the Arcade
          </Button>
        </Link>
      </div>
    </section>
  )
}

