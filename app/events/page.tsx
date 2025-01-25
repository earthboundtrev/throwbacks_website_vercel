import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Throwback Thursday",
    date: "Every Thursday",
    time: "4:00 PM - 9:00 PM",
    description:
      "Join us for our weekly Throwback Thursday! Only $10 admission with all 70 games on freeplay. Enjoy special deals on food and drinks including $8 Cheese Pizza, $3 Chips & Salsa, and beer specials.",
    image: "/events/throwback-thursday.jpg",
    isRegular: true,
  },
  {
    title: "Spirit Nights",
    date: "Select Wednesdays",
    time: "5:30 PM - 8:30 PM",
    description:
      "Support local schools during our Spirit Nights! $10.00 admission includes access to all games, with food available for purchase. Parent supervision required - this is not a drop-off event. Remember to mention your school's code!",
    image: "/events/spirit-night.jpg",
    isRegular: false,
  },
  {
    title: "Private Parties",
    date: "Available Daily",
    time: "2 Hour Sessions",
    description:
      "$300 for 2 hours for 20 guests. Each additional guest $10. Includes 1 free soda and popcorn per person. Bring your own cake/cupcakes or order from our menu. Guests can stay after during regular hours.",
    image: "/events/private-party.jpg",
    isRegular: true,
  },
  {
    title: "Open Business Hours Parties",
    date: "During Regular Hours",
    time: "Flexible Duration",
    description:
      "Minimum of 10 guests at $10.00 per person. Perfect for smaller groups! You may bring cake/cupcakes, but no outside food permitted. Enjoy all our arcade games during regular business hours.",
    image: "/events/business-hours-party.jpg",
    isRegular: true,
  },
  {
    title: "Office & Holiday Parties",
    date: "Available Upon Request",
    time: "Custom Scheduling",
    description:
      "Book your next office party or holiday celebration with us! Custom packages available to suit your group's needs. Contact us at ThrowbacksCulpeper@Gmail.com to set up dates and times.",
    image: "/events/office-party.jpg",
    isRegular: false,
  }
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-4 neon-text">Events & Parties</h1>
      <p className="text-center text-muted-foreground mb-8">Join us for special events or book your own party!</p>
      
      {/* Regular Events Section */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Regular Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {events
          .filter(event => event.isRegular)
          .map((event, index) => (
            <Card key={index} className="bg-card text-card-foreground neon-border pixel-corners">
              <CardHeader>
                <Image
                  src={event.image}
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
                <Button className="w-full bg-secondary hover:bg-secondary/80 text-white">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      {/* Special Events Section */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Special Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events
          .filter(event => !event.isRegular)
          .map((event, index) => (
            <Card key={index} className="bg-card text-card-foreground neon-border pixel-corners">
              <CardHeader>
                <Image
                  src={event.image}
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
                <Button className="w-full bg-secondary hover:bg-secondary/80 text-white">Inquire Now</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  )
}

