import HeroSection from "./components/HeroSection"
import GamesSection from "./components/GamesSection"
import { AboutSection } from "./components/AboutSection"
import EventsSection from "./components/EventsSection"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <GamesSection />
      <AboutSection />
      <EventsSection />
    </div>
  )
}

