import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactSection from "@/app/components/ContactSection"

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "John's passion for retro gaming led him to create Throwbacks Arcade. With 20 years of experience in the gaming industry, he's dedicated to preserving the golden age of arcades.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jane Smith",
    role: "Head of Game Restoration",
    bio: "Jane is our expert in bringing old arcade cabinets back to life. Her technical skills ensure that every game in our arcade runs just like it did in the 80s.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mike Johnson",
    role: "Event Coordinator",
    bio: "Mike is the mastermind behind our exciting events. His creativity and love for the 80s culture make every visit to Throwbacks Arcade a unique experience.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-center mb-12">
        <Image
          src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_logo_larger.jpg"
          alt="Throwbacks Arcade Logo"
          width={800}
          height={320}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg">
              Welcome to Throwbacks Arcade! Step into a time machine where the golden age of 
              gaming comes alive with the familiar beeps, boops, and flashing lights of 
              classic arcade cabinets and pinball machines. We're taking you back to when gaming was all about community, 
              when arcades were the place to gather with friends, and when things were simply... fun.
            </p>
            <p className="text-muted-foreground">
              Established in July 2024 in beautiful downtown Culpeper, we're bringing the magic 
              of 80s and 90s arcade culture to our community. Our carefully curated collection of 
              authentic arcade games and pinball machines creates the perfect blend of 
              nostalgia and fun.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold neon-text">Our Mission</h2>
          <p className="text-muted-foreground">
            We aim to create an authentic retro gaming experience that brings our community 
            together through the timeless joy of arcade games by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Preserving classic arcade culture</li>
            <li>Creating lasting memories</li>
            <li>Building community connections</li>
            <li>Sharing the magic of retro gaming</li>
          </ul>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

