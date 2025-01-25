import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "80s Night Fever",
    date: "Every Friday",
    time: "7:00 PM - 11:00 PM",
    description:
      "Dress up in your best 80s outfit and enjoy special discounts on all games! Dance to classic 80s hits and compete in themed mini-tournaments.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "High Score Tournament",
    date: "Last Saturday of the month",
    time: "2:00 PM - 6:00 PM",
    description:
      "Compete for the top spot on our leaderboards and win exclusive prizes! Each month features a different classic game. Sign up early as spots are limited.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Retro Game Developer Meetup",
    date: "First Tuesday of the month",
    time: "6:30 PM - 8:30 PM",
    description:
      "Meet local game developers and learn about creating games in retro style. Share your projects, get feedback, and network with like-minded enthusiasts.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Family Fun Day",
    date: "Every Sunday",
    time: "12:00 PM - 4:00 PM",
    description:
      "Bring the whole family for an afternoon of arcade fun! Special package deals and kid-friendly tournaments. Introduce your children to the classics!",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Midnight Madness",
    date: "First Friday of the month",
    time: "11:00 PM - 3:00 AM",
    description:
      "Late-night gaming session for the night owls! Enjoy discounted play, energy drinks, and intense competition as you battle for high scores into the early hours.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Cosplay Contest",
    date: "Quarterly (Mar, Jun, Sep, Dec)",
    time: "5:00 PM - 9:00 PM",
    description:
      "Dress up as your favorite retro game character and compete for prizes! Showcase your costume, participate in themed photo shoots, and enjoy game discounts.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="bg-card text-card-foreground neon-border pixel-corners">
            <CardHeader>
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl mb-2 text-primary">{event.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-2">{event.date}</CardDescription>
              <CardDescription className="text-muted-foreground mb-4">{event.time}</CardDescription>
              <p className="text-muted-foreground">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary hover:bg-secondary/80 text-white">Sign Up</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

