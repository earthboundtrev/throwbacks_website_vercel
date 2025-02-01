import { Metadata } from "next"
import Link from "next/link"
import Image from 'next/image'

export const metadata: Metadata = {
  title: "How to Play - Throwbacks Arcade",
  description: "Learn what to expect when visiting Throwbacks Arcade - from tickets and entry to games and amenities.",
}

export default function HowToPlayPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl mb-12 text-center neon-text-orange">How to Play</h1>

      <div className="space-y-16">
        {/* Tickets Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-secondary/30 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 neon-border">
              <Image
                src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/busy_throwbacks.jpg"
                alt="A busy day at the arcade"
                width={800}
                height={450}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl mb-4 neon-text-orange">Join the Fun</h2>
            <p className="text-lg">
              Your gateway to retro gaming paradise is just $15 per person! Once you've got your arcade pass, 
              you'll have unlimited access to our entire collection of classic cabinets and pinball machines, 
              free to play all day long. No need to book ahead – just drop by with your friends and grab your 
              passes at the door. It's gaming like it used to be: simple, social, and simply awesome.
            </p>
          </div>
        </section>

        {/* How to Play Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl mb-4 neon-text-orange">Press Start</h2>
            <p className="text-lg">
              Experience gaming the way it was meant to be – pure, unlimited fun without the need 
              for quarters! We've preserved the authentic arcade experience but removed the constant 
              hunt for loose change. Our carefully curated collection of classic arcade cabinets 
              and pinball machines awaits your discovery, each one ready to transport you back to 
              the golden age of gaming. Ready to explore our treasure trove of retro entertainment?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-secondary/30 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 neon-border">
              <Image
                src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/faraway_picture_of_games.jpg"
                alt="Some of Throwbacks arcade and pinball gaming collection!"
                width={800}
                height={450}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link 
            href="/games" 
            className="bg-primary hover:bg-primary/80 text-black font-bold py-2 px-6 rounded pixel-corners inline-block"
          >
            Explore our games
          </Link>
        </div>
      </div>
    </div>
  )
} 