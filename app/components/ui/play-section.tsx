import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PlaySection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video">
            <Image
              src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_afternoon.jpg"
              alt="Arcade gaming experience"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-center">Game On</h2>
              <p className="text-muted-foreground text-lg">
                Step into gaming paradise with over 70 classic arcade cabinets and pinball 
                machines, all set to free play mode. Experience the golden age of gaming without the heavy quarters wearing down your pockets. Play all day with a{" "}
                <Link href="/how-to-play" className="text-primary hover:underline">
                  single entry pass
                </Link>
                . Need a gaming break? Kick back and catch the big game or nostalgic reruns on our TVs showcasing everything from today's sports to yesterday's classics.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/games">
                <Button 
                  className="text-2xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners"
                >
                  See Games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 