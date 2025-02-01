import AboutSection from "@/app/components/AboutSection"
import EventsSection from "@/app/components/EventsSection"
import JoinTextClubSection from "@/app/components/JoinTextClubSection"
import HeroSection from "@/app/components/HeroSection"
import ContactSection from "@/app/components/ContactSection"
import { PlaySection } from "@/app/components/ui/play-section"
import { EatSection } from "@/app/components/ui/eat-section"
import { PartySection } from "@/app/components/ui/party-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <div className="space-y-16 py-16">
        <PlaySection />
        <EatSection />
        <PartySection />
      </div>
      <JoinTextClubSection />
      {/* <EventsSection /> */}
      <ContactSection />
    </main>
  )
}

