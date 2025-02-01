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
              <h2 className="text-4xl font-bold">Game On</h2>
              <p className="text-muted-foreground text-lg">
                Step into gaming paradise with over 70 classic arcade cabinets and pinball 
                machines, all set to free play mode. Experience the golden age of gaming without 
                spending a single quarter.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/games">
                <Button size="lg">
                  Check out the Arcade
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 