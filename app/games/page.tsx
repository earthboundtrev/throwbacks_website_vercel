"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const IMAGE_CDN_URL = 'https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev';

const ImagePaths = {
  AREA51: 'area51.png',
  ASTEROIDS: 'asteroids.png',
  BIG_BUCK_HUNT: 'big-buck-hunt.png',
  BURGER_TIME: 'burger-time.png',
  CENTIPEDE: 'centipede.png',
  DEFENDER: 'defender.png',
  DONKEY_KONG: 'donkey-kong.png',
  DONKEY_KONG_JR: 'donkey-kong-junior.png',
  FROGGER: 'frogger.png',
  GALAGA: 'galaga.png',
  GAUNTLET: 'gauntlet.jpg',
  JOUST: 'joust.png',
  MARVEL_VS_SF: 'marvel-superheroes-vs-street-fighter.jpg',
  MAXIMUM_FORCE: 'maximum-force.jpg',
  MORTAL_KOMBAT: 'mortal-kombat.png',
  MORTAL_KOMBAT_2: 'mortal-kombat-2.png',
  MORTAL_KOMBAT_4: 'mortal-4-kombat.png',
  MS_PACMAN: 'ms-pac-man.png',
  NBA_JAM: 'nba-jam.png',
  NBA_HANGTIME: 'nba-maximum-hangtime.png',
  NFL_BLITZ: 'nfl-blitz.png',
  PACMAN: 'pac-man.png',
  PHOENIX: 'phoenix.png',
  QBERT: 'q-bert.png',
  RALLYX: 'rally-x.png',
  ROBOTRON: 'robotron.png',
  SEGA_SILVERSTRIPE: 'sega_silverstripe.png',
  SPACE_INVADERS: 'space-invaders.png',
  SUPER_BIKES_2: 'super-bikes-2.png',
  TEMPEST: 'tempest.png',
  TERMINATOR_SALVATION: 'terminator-salvation.png',
  TIME_PILOT: 'time-pilot.png',
  ULTIMATE_MK3: 'ultimate-mortal-kombat-III.jpg',
  RETURN_OF_JEDI: 'return-of-the-jedi.png',
  SF2_CHAMPION: 'street-fighter-II-champion-edition.png',
  SF2_TURBO: 'street-fighter-II-turbo.jpg',
  // Pinball machines
  BATMAN_DK: 'batman-dark-knight.png',
  DIRTY_HARRY: 'dirty-harry-pinball.png',
  DND: 'dnd.png',
  GOT: 'game_of_thrones.png',
  GODZILLA: 'godzilla.jpg',
  GUNS_N_ROSES: 'guns-n-roses.png',
  INDIANA_JONES: 'indiana-jones-pinball.jpg',
  IRON_MAN: 'iron-man-pinball.jpg',
  JAWS: 'jaws-pinball.png',
  JURASSIC_PARK: 'jurassic-park-pinball.png',
  LED_ZEPPELIN: 'led-zeppelin-pinball.jpg',
  MEDIEVAL_MADNESS: 'medieval-madness-pinball.png',
  STAR_WARS: 'star-wars-pinball.jpg',
  TERMINATOR_2: 'terminator-2-judgement-day.png',
  ADDAMS_FAMILY: 'the-adams-family-pinball.png',
  MUNSTERS: 'the-munsters-pinball.jpg',
  THEATRE_MAGIC: 'theatre-of-magic-pinball.jpg',
  BEATLES: 'the-beatles-pinball.jpg',
  XMEN: 'x-men-pinball.jpg',
} as const;

function getImageUrl(imagePath: string): string {
  return `${IMAGE_CDN_URL}/${imagePath}`;
}

const games = [
  {
    name: "Asteroids",
    image: getImageUrl(ImagePaths.ASTEROIDS),
    description: "Pilot a spaceship and shoot asteroids while avoiding collisions.",
    year: 1979,
  },
  {
    name: "Area 51",
    image: getImageUrl(ImagePaths.AREA51),
    description: "Light gun rail shooter featuring government conspiracies and aliens.",
    year: 1995,
  },
  {
    name: "Big Buck Hunt",
    image: getImageUrl(ImagePaths.BIG_BUCK_HUNT),
    description: "Classic light gun hunting arcade game.",
    year: 2001,
  },
  {
    name: "Burger Time",
    image: getImageUrl(ImagePaths.BURGER_TIME),
    description: "Time-bending arcade adventure.",
    year: 1982,
  },
  {
    name: "Centipede",
    image: getImageUrl(ImagePaths.CENTIPEDE),
    description: "Shoot segments of a descending centipede in this classic shooter.",
    year: 1981,
  },
  {
    name: "Defender",
    image: getImageUrl(ImagePaths.DEFENDER),
    description: "Defend humanity from waves of alien invaders in this side-scrolling shooter.",
    year: 1981,
  },
  {
    name: "Donkey Kong",
    image: getImageUrl(ImagePaths.DONKEY_KONG),
    description: "Help Mario rescue the princess from the giant ape.",
    year: 1981,
  },
  {
    name: "Donkey Kong Junior",
    image: getImageUrl(ImagePaths.DONKEY_KONG_JR),
    description: "Help Junior rescue his father Donkey Kong from Mario.",
    year: 1982,
  },
  {
    name: "Frogger",
    image: getImageUrl(ImagePaths.FROGGER),
    description: "Guide a frog across a busy highway and a treacherous river.",
    year: 1981,
  },
  {
    name: "Galaga",
    image: getImageUrl(ImagePaths.GALAGA),
    description: "Shoot down swarms of alien ships in this space shooter.",
    year: 1981,
  },
  {
    name: "Gauntlet",
    image: getImageUrl(ImagePaths.GAUNTLET),
    description: "Fantasy-themed dungeon crawler with multiplayer action.",
    year: 1985,
  },
  {
    name: "Joust",
    image: getImageUrl(ImagePaths.JOUST),
    description: "Battle other knights while riding flying ostriches.",
    year: 1982,
  },
  {
    name: "Marvel Super Heroes vs Street Fighter",
    image: getImageUrl(ImagePaths.MARVEL_VS_SF),
    description: "Crossover fighting game featuring Marvel and Street Fighter characters.",
    year: 1997,
  },
  {
    name: "Maximum Force",
    image: getImageUrl(ImagePaths.MAXIMUM_FORCE),
    description: "Light gun shooter with multiple mission scenarios.",
    year: 1997,
  },
  {
    name: "Mortal Kombat",
    image: getImageUrl(ImagePaths.MORTAL_KOMBAT),
    description: "Iconic fighting game known for its brutal combat and fatalities.",
    year: 1992,
  },
  {
    name: "Mortal Kombat II",
    image: getImageUrl(ImagePaths.MORTAL_KOMBAT_2),
    description: "Sequel to the original Mortal Kombat with expanded roster and features.",
    year: 1993,
  },
  {
    name: "Mortal Kombat 4",
    image: getImageUrl(ImagePaths.MORTAL_KOMBAT_4),
    description: "Third installment in the Mortal Kombat series with new combo system.",
    year: 1995,
  },
  {
    name: "Ms. Pac-Man",
    image: getImageUrl(ImagePaths.MS_PACMAN),
    description: "Navigate mazes and avoid ghosts in this Pac-Man sequel.",
    year: 1981,
  },
  {
    name: "NBA Jam",
    image: getImageUrl(ImagePaths.NBA_JAM),
    description: "Over-the-top arcade basketball action.",
    year: 1993,
  },
  {
    name: "NBA Maximum Hangtime",
    image: getImageUrl(ImagePaths.NBA_HANGTIME),
    description: "Enhanced version of NBA Jam with create-a-player features.",
    year: 1996,
  },
  {
    name: "NFL Blitz",
    image: getImageUrl(ImagePaths.NFL_BLITZ),
    description: "Arcade-style American football with exaggerated styles of play.",
    year: 1999,
  },
  {
    name: "Pac-Man",
    image: getImageUrl(ImagePaths.PACMAN),
    description: "Navigate through a maze, eating dots and avoiding ghosts.",
    year: 1980,
  },
  {
    name: "Phoenix",
    image: getImageUrl(ImagePaths.PHOENIX),
    description: "Space shooter featuring birds and motherships.",
    year: 1980,
  },
  {
    name: "Q*bert",
    image: getImageUrl(ImagePaths.QBERT),
    description: "Jump on cubes to change their color while avoiding enemies.",
    year: 1982,
  },
  {
    name: "Rally-X",
    image: getImageUrl(ImagePaths.RALLYX),
    description: "Drive through a maze collecting flags while avoiding enemies.",
    year: 1980,
  },
  {
    name: "Robotron",
    image: getImageUrl(ImagePaths.ROBOTRON),
    description: "Save the last human family from evil robots in this twin-stick shooter.",
    year: 1982,
  },
  {
    name: "Sega Silverstripe",
    image: getImageUrl(ImagePaths.SEGA_SILVERSTRIPE),
    description: "High-speed racing game with futuristic vehicles.",
    year: 1995,
  },
  {
    name: "Space Invaders",
    image: getImageUrl(ImagePaths.SPACE_INVADERS),
    description: "Defend Earth from waves of descending alien invaders.",
    year: 1978,
  },
  {
    name: "Super Bikes 2",
    image: getImageUrl(ImagePaths.SUPER_BIKES_2),
    description: "Motorcycle racing game with realistic physics.",
    year: 2010,
  },
  {
    name: "Tempest",
    image: getImageUrl(ImagePaths.TEMPEST),
    description: "Vector graphics shooter on a three-dimensional surface.",
    year: 1981,
  },
  {
    name: "Terminator Salvation",
    image: getImageUrl(ImagePaths.TERMINATOR_SALVATION),
    description: "Light gun shooter based on the Terminator franchise.",
    year: 2010,
  },
  {
    name: "Time Pilot",
    image: getImageUrl(ImagePaths.TIME_PILOT),
    description: "Time-traveling aerial combat game.",
    year: 1982,
  },
  {
    name: "Ultimate Mortal Kombat 3",
    image: getImageUrl(ImagePaths.ULTIMATE_MK3),
    description: "Enhanced version of Mortal Kombat 3 with additional characters and features.",
    year: 1995,
  },
  {
    name: "Return of the Jedi",
    image: getImageUrl(ImagePaths.RETURN_OF_JEDI),
    description: "Star Wars arcade game based on Episode VI.",
    year: 1984,
  },
  {
    name: "Street Fighter II Champion Edition",
    image: getImageUrl(ImagePaths.SF2_CHAMPION),
    description: "Updated version of Street Fighter II with playable boss characters.",
    year: 1992,
  },
  {
    name: "Street Fighter II Turbo",
    image: getImageUrl(ImagePaths.SF2_TURBO),
    description: "Enhanced version of Street Fighter II with increased game speed and new moves.",
    year: 1993,
  },
].sort((a, b) => a.name.localeCompare(b.name))

const pinballGames = [
  {
    name: "Batman (Dark Knight)",
    image: getImageUrl(ImagePaths.BATMAN_DK),
    description: "DC Comics themed pinball machine featuring the Dark Knight.",
    year: 2008,
  },
  {
    name: "Dirty Harry",
    image: getImageUrl(ImagePaths.DIRTY_HARRY),
    description: "Based on the classic Clint Eastwood film series.",
    year: 1995,
  },
  {
    name: "Dungeons & Dragons",
    image: getImageUrl(ImagePaths.DND),
    description: "Fantasy adventure themed pinball based on the legendary tabletop RPG.",
    year: 2019,
  },
  {
    name: "Game of Thrones",
    image: getImageUrl(ImagePaths.GOT),
    description: "Based on the hit HBO series with multiple game modes.",
    year: 2015,
  },
  {
    name: "Godzilla",
    image: getImageUrl(ImagePaths.GODZILLA),
    description: "Monster-themed pinball featuring the King of Monsters.",
    year: 2022,
  },
  {
    name: "Guns N' Roses",
    image: getImageUrl(ImagePaths.GUNS_N_ROSES),
    description: "Rock themed pinball machine featuring the legendary band's greatest hits.",
    year: 1994,
  },
  {
    name: "Indiana Jones",
    image: getImageUrl(ImagePaths.INDIANA_JONES),
    description: "Adventure themed pinball featuring the famous archaeologist.",
    year: 1993,
  },
  {
    name: "Iron Man",
    image: getImageUrl(ImagePaths.IRON_MAN),
    description: "Marvel Comics themed machine featuring Tony Stark.",
    year: 2010,
  },
  {
    name: "Jaws",
    image: getImageUrl(ImagePaths.JAWS),
    description: "Based on the classic shark movie, featuring mechanical shark targets and ocean-themed gameplay.",
    year: 1988,
  },
  {
    name: "Jurassic Park",
    image: getImageUrl(ImagePaths.JURASSIC_PARK),
    description: "Dinosaur themed pinball based on the blockbuster movie.",
    year: 1993,
  },
  {
    name: "Led Zeppelin",
    image: getImageUrl(ImagePaths.LED_ZEPPELIN),
    description: "Rock and roll themed pinball featuring the legendary band.",
    year: 2020,
  },
  {
    name: "Medieval Madness",
    image: getImageUrl(ImagePaths.MEDIEVAL_MADNESS),
    description: "Fantasy themed pinball with castle destruction features.",
    year: 1997,
  },
  {
    name: "Star Wars",
    image: getImageUrl(ImagePaths.STAR_WARS),
    description: "Based on the original Star Wars trilogy.",
    year: 1992,
  },
  {
    name: "Terminator 2: Judgement Day",
    image: getImageUrl(ImagePaths.TERMINATOR_2),
    description: "Based on the sci-fi action movie sequel.",
    year: 1991,
  },
  {
    name: "The Addams Family",
    image: getImageUrl(ImagePaths.ADDAMS_FAMILY),
    description: "Gothic family themed pinball machine.",
    year: 1992,
  },
  {
    name: "The Munsters",
    image: getImageUrl(ImagePaths.MUNSTERS),
    description: "Classic TV show themed pinball machine.",
    year: 1989,
  },
  {
    name: "Theatre of Magic",
    image: getImageUrl(ImagePaths.THEATRE_MAGIC),
    description: "Magic show themed pinball with innovative features.",
    year: 1995,
  },
  {
    name: "The Beatles",
    image: getImageUrl(ImagePaths.BEATLES),
    description: "Celebration of the Fab Four featuring their iconic music and imagery.",
    year: 2018,
  },
  {
    name: "X-Men",
    image: getImageUrl(ImagePaths.XMEN),
    description: "Marvel Comics themed pinball featuring the mutant superhero team.",
    year: 2012,
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
          <Button
            onClick={scrollToTop}
            className="text-2xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners w-full sm:w-auto"
          >
            Back to Top
          </Button>
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
          <Button
            onClick={scrollToTop}
            className="text-2xl py-6 px-8 bg-[#2A0E61] hover:bg-[#3A1661] text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners w-full sm:w-auto"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  )
}

