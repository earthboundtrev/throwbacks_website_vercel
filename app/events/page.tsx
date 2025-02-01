"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Family Night",
    date: "Every Wednesday",
    time: "5:00 PM - 9:00 PM",
    description:
      "Join us for Family Night every Wednesday! Only $8 admission with all 70+ games on freeplay. A perfect evening of arcade fun for the whole family. Special food and drink options available.",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/family_nite.jpg",
    isRegular: true,
  },
  {
    title: "Throwback Thursday",
    date: "Every Thursday",
    time: "4:00 PM - 9:00 PM",
    description:
      "Join us for our weekly Throwback Thursday! Only $10 admission with all 70 games on freeplay. Enjoy special deals on food and drinks including $8 Cheese Pizza, $3 Chips & Salsa, and beer specials.",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwback_thursday.jpg",
    isRegular: true,
  },
  {
    title: "Spirit Nights",
    date: "Select Wednesdays",
    time: "5:30 PM - 8:30 PM",
    description:
      "Support local schools during our Spirit Nights! $10.00 admission includes access to all games, with food available for purchase. Parent supervision required - this is not a drop-off event. Remember to mention your school's code!",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/spirit_night_1-29.jpg",
    isRegular: false,
  },
  {
    title: "Private Parties",
    date: "Available Daily",
    time: "2 Hour Sessions",
    description:
      "$300 for 2 hours for 20 guests. Each additional guest $10. Includes 1 free soda and popcorn per person. Bring your own cake/cupcakes or order from our menu. Guests can stay after during regular hours.",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/birthday_parties.jpg",
    isRegular: true,
  }
]

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-4 neon-text">Events</h1>
      <p className="text-center text-muted-foreground mb-8">Join us for special events!</p>
      
      {/* Regular Events Section */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Regular Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {events
          .filter(event => event.isRegular)
          .map((event, index) => (
            <Card key={index} className="bg-card text-card-foreground neon-border pixel-corners">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 cursor-pointer"
                     onClick={() => setSelectedImage(event.image)}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl mb-2 text-primary">{event.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-2">{event.date}</CardDescription>
                <CardDescription className="text-muted-foreground mb-4">{event.time}</CardDescription>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
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
              <CardHeader className="p-0">
                <div className="relative w-full h-48 cursor-pointer"
                     onClick={() => setSelectedImage(event.image)}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl mb-2 text-primary">{event.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-2">{event.date}</CardDescription>
                <CardDescription className="text-muted-foreground mb-4">{event.time}</CardDescription>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-[90vw] max-h-[90vh] relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200"
              aria-label="Close modal"
            >
              ✕
            </button>
            <Image 
              src={selectedImage} 
              alt="Enlarged view"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

