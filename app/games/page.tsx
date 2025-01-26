"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const games = [
  {
    name: "Pac-Man",
    image: "/placeholder.svg?height=400&width=300",
    description: "Navigate through a maze, eating dots and avoiding ghosts.",
    year: 1980,
  },
  {
    name: "Space Invaders",
    image: "/placeholder.svg?height=400&width=300",
    description: "Defend Earth from waves of descending alien invaders.",
    year: 1978,
  },
  {
    name: "Donkey Kong",
    image: "/placeholder.svg?height=400&width=300",
    description: "Help Mario rescue the princess from the giant ape.",
    year: 1981,
  },
  {
    name: "Galaga",
    image: "/placeholder.svg?height=400&width=300",
    description: "Shoot down swarms of alien ships in this space shooter.",
    year: 1981,
  },
  {
    name: "Frogger",
    image: "/placeholder.svg?height=400&width=300",
    description: "Guide a frog across a busy highway and a treacherous river.",
    year: 1981,
  },
  {
    name: "Asteroids",
    image: "/placeholder.svg?height=400&width=300",
    description: "Pilot a spaceship and shoot asteroids while avoiding collisions.",
    year: 1979,
  },
]

export default function GamesPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">Our Arcade Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <Card
            key={index}
            className="bg-card text-card-foreground neon-border pixel-corners hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                width={300}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl mb-2 text-primary">{game.name}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">Released: {game.year}</CardDescription>
              <p className="mb-4 text-muted-foreground">{game.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

