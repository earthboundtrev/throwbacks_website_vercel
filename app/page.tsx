import AboutSection from "@/app/components/AboutSection"
import EventsSection from "@/app/components/EventsSection"
import JoinTextClubSection from "@/app/components/JoinTextClubSection"
import HeroSection from "@/app/components/HeroSection"
import ContactSection from "@/app/components/ContactSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <JoinTextClubSection />
      {/* <EventsSection /> */}
      <ContactSection />
    </main>
  )
}

