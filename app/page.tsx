import AboutSection from "@/app/components/AboutSection"
import EventsSection from "@/app/components/EventsSection"
import GamesSection from "@/app/components/GamesSection"
import HeroSection from "@/app/components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <EventsSection />
    </main>
  )
}

