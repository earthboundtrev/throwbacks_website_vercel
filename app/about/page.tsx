import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">About Throwbacks Arcade</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Story</h2>
          <p className="mb-4 text-muted-foreground">
            Throwbacks Arcade was born from a passion for 80s gaming culture and a desire to preserve the magic of
            classic arcade games. Founded in 2010, we've created a space where gamers of all ages can experience the
            golden age of arcades, complete with authentic cabinets, neon lights, and the unmistakable sounds of 8-bit
            adventures.
          </p>
          <p className="mb-4 text-muted-foreground">
            Our mission is to provide a nostalgic yet exciting gaming experience that bridges generations. We believe in
            the power of classic games to bring people together, spark creativity, and remind us of the simple joys of
            friendly competition.
          </p>
          <p className="text-muted-foreground">
            At Throwbacks Arcade, we're not just about playing games – we're about creating memories, fostering a
            community, and keeping the spirit of the 80s arcade scene alive in the modern world.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Throwbacks Arcade Interior"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl neon-border pixel-corners"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-card text-card-foreground neon-border pixel-corners">
            <CardHeader>
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl mb-2 text-primary">{member.name}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">{member.role}</CardDescription>
              <p className="text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

