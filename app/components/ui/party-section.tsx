import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PartySection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video md:order-first">
            <Image
              src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_party.jpg"
              alt="Arcade party space"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-center">Party Time</h2>
              <p className="text-muted-foreground text-lg">
                Create unforgettable memories in our dedicated party space! Our 2-hour VIP room 
                packages include 20 guest passes, a private gaming area, and the flexibility to 
                bring your own refreshments. Perfect for birthdays, team events, or any special occasion!
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/party">
                <Button 
                  className="text-2xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 