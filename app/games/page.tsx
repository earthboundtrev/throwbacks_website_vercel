"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const games = [
  {
    name: "Asteroids",
    image: "/placeholder.svg?height=400&width=300",
    description: "Pilot a spaceship and shoot asteroids while avoiding collisions.",
    year: 1979,
  },
  {
    name: "Big Buck Hunt",
    image: "/placeholder.svg?height=400&width=300",
    description: "Classic light gun hunting arcade game.",
    year: 2001,
  },
  {
    name: "Bursts of Time",
    image: "/placeholder.svg?height=400&width=300",
    description: "Time-bending arcade adventure.",
    year: 1995,
  },
  {
    name: "Centipede",
    image: "/placeholder.svg?height=400&width=300",
    description: "Shoot segments of a descending centipede in this classic shooter.",
    year: 1981,
  },
  {
    name: "Defender",
    image: "/placeholder.svg?height=400&width=300",
    description: "Defend humanity from waves of alien invaders in this side-scrolling shooter.",
    year: 1981,
  },
  {
    name: "Donkey Kong",
    image: "/placeholder.svg?height=400&width=300",
    description: "Help Mario rescue the princess from the giant ape.",
    year: 1981,
  },
  {
    name: "Donkey Kong Junior",
    image: "/placeholder.svg?height=400&width=300",
    description: "Help Junior rescue his father Donkey Kong from Mario.",
    year: 1982,
  },
  {
    name: "Frogger",
    image: "/placeholder.svg?height=400&width=300",
    description: "Guide a frog across a busy highway and a treacherous river.",
    year: 1981,
  },
  {
    name: "Galaga",
    image: "/placeholder.svg?height=400&width=300",
    description: "Shoot down swarms of alien ships in this space shooter.",
    year: 1981,
  },
  {
    name: "Gauntlet",
    image: "/placeholder.svg?height=400&width=300",
    description: "Fantasy-themed dungeon crawler with multiplayer action.",
    year: 1985,
  },
  {
    name: "Joust",
    image: "/placeholder.svg?height=400&width=300",
    description: "Battle other knights while riding flying ostriches.",
    year: 1982,
  },
  {
    name: "Marvel Super Heroes vs Street Fighter",
    image: "/placeholder.svg?height=400&width=300",
    description: "Crossover fighting game featuring Marvel and Street Fighter characters.",
    year: 1997,
  },
  {
    name: "Missile Command",
    image: "/placeholder.svg?height=400&width=300",
    description: "Defend your cities from incoming missile attacks.",
    year: 1980,
  },
  {
    name: "Ms. Pac-Man",
    image: "/placeholder.svg?height=400&width=300",
    description: "Navigate mazes and avoid ghosts in this Pac-Man sequel.",
    year: 1981,
  },
  {
    name: "NBA Jam",
    image: "/placeholder.svg?height=400&width=300",
    description: "Over-the-top arcade basketball action.",
    year: 1993,
  },
  {
    name: "NBA Maximum Hangtime",
    image: "/placeholder.svg?height=400&width=300",
    description: "Enhanced version of NBA Jam with create-a-player features.",
    year: 1996,
  },
  {
    name: "NFL Blitz 2",
    image: "/placeholder.svg?height=400&width=300",
    description: "Arcade-style American football with exaggerated gameplay.",
    year: 1999,
  },
  {
    name: "Pac-Man",
    image: "/placeholder.svg?height=400&width=300",
    description: "Navigate through a maze, eating dots and avoiding ghosts.",
    year: 1980,
  },
  {
    name: "Q*bert",
    image: "/placeholder.svg?height=400&width=300",
    description: "Jump on cubes to change their color while avoiding enemies.",
    year: 1982,
  },
  {
    name: "Rally-X",
    image: "/placeholder.svg?height=400&width=300",
    description: "Drive through a maze collecting flags while avoiding enemies.",
    year: 1980,
  },
  {
    name: "Robotron",
    image: "/placeholder.svg?height=400&width=300",
    description: "Save the last human family from evil robots in this twin-stick shooter.",
    year: 1982,
  },
  {
    name: "Sega Silverstripe",
    image: "/placeholder.svg?height=400&width=300",
    description: "High-speed racing game with futuristic vehicles.",
    year: 1995,
  },
  {
    name: "Space Invaders",
    image: "/placeholder.svg?height=400&width=300",
    description: "Defend Earth from waves of descending alien invaders.",
    year: 1978,
  },
  {
    name: "Super Bikes 2",
    image: "/placeholder.svg?height=400&width=300",
    description: "Motorcycle racing game with realistic physics.",
    year: 2010,
  },
  {
    name: "Tempest",
    image: "/placeholder.svg?height=400&width=300",
    description: "Vector graphics shooter on a three-dimensional surface.",
    year: 1981,
  },
  {
    name: "Terminator Salvation",
    image: "/placeholder.svg?height=400&width=300",
    description: "Light gun shooter based on the Terminator franchise.",
    year: 2010,
  },
  {
    name: "Time Pilot",
    image: "/placeholder.svg?height=400&width=300",
    description: "Time-traveling aerial combat game.",
    year: 1982,
  },
].sort((a, b) => a.name.localeCompare(b.name))

const pinballGames = [
  {
    name: "Batman",
    image: "/placeholder.svg?height=400&width=300",
    description: "DC Comics themed pinball machine featuring the Dark Knight.",
    year: 1991,
  },
  {
    name: "Dirty Harry",
    image: "/placeholder.svg?height=400&width=300",
    description: "Based on the classic Clint Eastwood film series.",
    year: 1995,
  },
  {
    name: "Game of Thrones",
    image: "/placeholder.svg?height=400&width=300",
    description: "Based on the hit HBO series with multiple game modes.",
    year: 2015,
  },
  {
    name: "Indiana Jones",
    image: "/placeholder.svg?height=400&width=300",
    description: "Adventure themed pinball featuring the famous archaeologist.",
    year: 1993,
  },
  {
    name: "Iron Man",
    image: "/placeholder.svg?height=400&width=300",
    description: "Marvel Comics themed machine featuring Tony Stark.",
    year: 2010,
  },
  {
    name: "James",
    image: "/placeholder.svg?height=400&width=300",
    description: "Classic pinball adventure.",
    year: 1989,
  },
  {
    name: "Jurassic Park",
    image: "/placeholder.svg?height=400&width=300",
    description: "Dinosaur themed pinball based on the blockbuster movie.",
    year: 1993,
  },
  {
    name: "Led Zeppelin",
    image: "/placeholder.svg?height=400&width=300",
    description: "Rock and roll themed pinball featuring the legendary band.",
    year: 2020,
  },
  {
    name: "Medieval Madness",
    image: "/placeholder.svg?height=400&width=300",
    description: "Fantasy themed pinball with castle destruction features.",
    year: 1997,
  },
  {
    name: "Star Wars",
    image: "/placeholder.svg?height=400&width=300",
    description: "Based on the original Star Wars trilogy.",
    year: 1992,
  },
  {
    name: "Terminator 2: Judgment Day",
    image: "/placeholder.svg?height=400&width=300",
    description: "Based on the sci-fi action movie sequel.",
    year: 1991,
  },
  {
    name: "The Addams Family",
    image: "/placeholder.svg?height=400&width=300",
    description: "Gothic family themed pinball machine.",
    year: 1992,
  },
  {
    name: "The Munsters",
    image: "/placeholder.svg?height=400&width=300",
    description: "Classic TV show themed pinball machine.",
    year: 1989,
  },
  {
    name: "Theatre of Magic",
    image: "/placeholder.svg?height=400&width=300",
    description: "Magic show themed pinball with innovative features.",
    year: 1995,
  },
].sort((a, b) => a.name.localeCompare(b.name))

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [selectedPinball, setSelectedPinball] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<'videogames' | 'pinball'>('videogames')

  const toggleGame = (gameName: string) => {
    setSelectedGame(selectedGame === gameName ? null : gameName)
    setSelectedPinball(null)
    setActiveSection('videogames')
  }

  const togglePinball = (pinballName: string) => {
    setSelectedPinball(selectedPinball === pinballName ? null : pinballName)
    setSelectedGame(null)
    setActiveSection('pinball')
  }

  const scrollToSection = (section: 'videogames' | 'pinball') => {
    const element = document.getElementById(`${section}-section`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8 neon-text">Our Arcade Collection</h1>
      
      <div className="text-2xl text-center mb-12">
        <span 
          onClick={() => scrollToSection('videogames')}
          className="neon-text-orange cursor-pointer hover:opacity-80 transition-opacity"
        >
          Videogames
        </span>
        <span className="mx-4">|</span>
        <span 
          onClick={() => scrollToSection('pinball')}
          className="neon-text-purple cursor-pointer hover:opacity-80 transition-opacity"
        >
          Pinball
        </span>
      </div>
      
      <div className="space-y-16">
        {/* Videogames Section */}
        <div className="flex flex-col lg:flex-row gap-8" id="videogames-section">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-[#FF6B00] neon-text-orange">Videogames</h2>
            <ul className="space-y-2">
              {games.map((game) => (
                <li 
                  key={game.name}
                  onClick={() => toggleGame(game.name)}
                  className={`cursor-pointer hover:text-[#FF6B00] transition-colors duration-200 text-lg ${
                    selectedGame === game.name ? 'text-[#FF6B00]' : ''
                  }`}
                >
                  {game.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3">
            {selectedGame && (
              <Card className="bg-card text-card-foreground neon-border pixel-corners">
                <CardHeader>
                  <Image
                    src={games.find(g => g.name === selectedGame)?.image || "/placeholder.svg"}
                    alt={selectedGame}
                    width={300}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl mb-2 text-primary">{selectedGame}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    Released: {games.find(g => g.name === selectedGame)?.year}
                  </CardDescription>
                  <p className="mb-4 text-muted-foreground">
                    {games.find(g => g.name === selectedGame)?.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Mid-page Back to Top Button */}
        <div className="text-center pt-8">
          <button
            onClick={scrollToTop}
            className="px-6 py-3 text-lg font-semibold neon-border pixel-corners bg-[#2A0E61] hover:bg-[#3A1661] text-white transition-colors duration-200"
          >
            Back to Top
          </button>
        </div>

        {/* Pinball Section */}
        <div className="flex flex-col lg:flex-row gap-8" id="pinball-section">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-[#9D00FF] neon-text-purple">Pinball</h2>
            <ul className="space-y-2">
              {pinballGames.map((pinball) => (
                <li 
                  key={pinball.name}
                  onClick={() => togglePinball(pinball.name)}
                  className={`cursor-pointer hover:text-[#9D00FF] transition-colors duration-200 text-lg ${
                    selectedPinball === pinball.name ? 'text-[#9D00FF]' : ''
                  }`}
                >
                  {pinball.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3">
            {selectedPinball && (
              <Card className="bg-card text-card-foreground neon-border pixel-corners">
                <CardHeader>
                  <Image
                    src={pinballGames.find(p => p.name === selectedPinball)?.image || "/placeholder.svg"}
                    alt={selectedPinball}
                    width={300}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl mb-2 text-primary">{selectedPinball}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    Released: {pinballGames.find(p => p.name === selectedPinball)?.year}
                  </CardDescription>
                  <p className="mb-4 text-muted-foreground">
                    {pinballGames.find(p => p.name === selectedPinball)?.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Bottom Back to Top Button */}
        <div className="text-center pt-8">
          <button
            onClick={scrollToTop}
            className="px-6 py-3 text-lg font-semibold neon-border pixel-corners bg-[#2A0E61] hover:bg-[#3A1661] text-white transition-colors duration-200"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  )
}

