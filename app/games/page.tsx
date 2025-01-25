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
    badges: ["8-Bit Classic", "High Score Challenge"],
    longDescription:
      "Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts that pursue him.",
  },
  {
    name: "Space Invaders",
    image: "/placeholder.svg?height=400&width=300",
    description: "Defend Earth from waves of descending alien invaders.",
    year: 1978,
    badges: ["Retro Shooter", "Alien Invasion"],
    longDescription:
      "Space Invaders is a fixed shooter in which the player controls a laser cannon by moving it horizontally across the bottom of the screen and firing at descending aliens. The aim is to defeat five rows of eleven aliens that move horizontally back and forth across the screen as they advance toward the bottom of the screen.",
  },
  {
    name: "Donkey Kong",
    image: "/placeholder.svg?height=400&width=300",
    description: "Help Mario rescue the princess from the giant ape.",
    year: 1981,
    badges: ["Platform Classic", "Nintendo Original"],
    longDescription:
      "Donkey Kong is an arcade platform game. The game is divided into four different single-screen stages. Each represents 25 meters of the structure Donkey Kong has climbed, one stage being 25 meters higher than the previous. The objective is to guide Mario to the top of the structure and rescue the Lady.",
  },
  {
    name: "Galaga",
    image: "/placeholder.svg?height=400&width=300",
    description: "Shoot down swarms of alien ships in this space shooter.",
    year: 1981,
    badges: ["Space Shooter", "Formation Attack"],
    longDescription:
      "Galaga is a fixed shooter game in which the player controls a spaceship at the bottom of the screen. The objective of Galaga is to score as many points as possible by destroying insect-like aliens.",
  },
  {
    name: "Frogger",
    image: "/placeholder.svg?height=400&width=300",
    description: "Guide a frog across a busy highway and a treacherous river.",
    year: 1981,
    badges: ["Arcade Classic", "Timing Challenge"],
    longDescription:
      "The object of the game is to direct frogs to their homes one by one by crossing a busy highway and navigating a river full of hazards. The game starts with three, five, or seven frogs, depending on the settings used by the operator.",
  },
  {
    name: "Asteroids",
    image: "/placeholder.svg?height=400&width=300",
    description: "Pilot a spaceship and shoot asteroids while avoiding collisions.",
    year: 1979,
    badges: ["Vector Graphics", "Space Adventure"],
    longDescription:
      "The object of Asteroids is to destroy asteroids and saucers. The player controls a triangular ship that can rotate left and right, fire shots straight forward, and thrust forward. As the game progresses, large asteroids break into smaller asteroids when shot.",
  },
]

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState(null)

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
              <div className="flex flex-wrap gap-2 mb-4">
                {game.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-secondary hover:bg-secondary/80 text-white"
                onClick={() => setSelectedGame(game)}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedGame && (
        <div className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="bg-card text-card-foreground max-w-2xl w-full neon-border pixel-corners">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">{selectedGame.name}</CardTitle>
              <CardDescription className="text-muted-foreground">Released: {selectedGame.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={selectedGame.image || "/placeholder.svg"}
                alt={selectedGame.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="mb-4 text-muted-foreground">{selectedGame.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {selectedGame.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-secondary hover:bg-secondary/80 text-white"
                onClick={() => setSelectedGame(null)}
              >
                Close
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

