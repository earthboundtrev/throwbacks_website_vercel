import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EatSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-center">Fuel Up</h2>
              <p className="text-muted-foreground text-lg">
                Step into our kitchen where classic arcade fare meet modern flavors! From our 
                crispy chicken sandwiches and cheesy quesadillas to golden onion rings and 
                fresh-baked pretzels, we're serving up the perfect fuel for your gaming adventures. 
                Pair your meal with an ice-cold craft beer or your favorite soft drink, all made 
                with the same love and attention to detail that we put into our arcade experience.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/menu">
                <Button 
                  className="text-2xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners"
                >
                  See Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video order-1 md:order-2">
            <Image
              src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/pizza_and_chips.jpg"
              alt="Arcade food and drinks"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 