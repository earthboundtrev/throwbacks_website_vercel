import AboutSection from "@/app/components/AboutSection"
import EventsSection from "@/app/components/EventsSection"
import GamesSection from "@/app/components/GamesSection"
import HeroSection from "@/app/components/HeroSection"
import ContactSection from "@/app/components/ContactSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GamesSection />
      {/* <EventsSection /> */}
      <ContactSection />
    </main>
  )
}

