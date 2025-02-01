import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import  ContactSection from "@/app/components/ContactSection"

export const metadata: Metadata = {
  title: "Party at Throwbacks Arcade",
  description: "Host your next party at Throwbacks Arcade! Perfect for birthdays, corporate events, and special occasions.",
}

export default function PartyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl mb-12 text-center neon-text-orange">Birthday Parties & Private Events</h1>

      <div className="space-y-16">
        {/* Private Parties Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video">
              <Image
                src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_party.jpg"
                alt="Private party space at Throwbacks Arcade"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl neon-text-orange">Private Parties</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Make your next celebration extraordinary with a private party at Throwbacks Arcade! 
                For just $300, you'll get:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>2 hours of exclusive access to our private party area</li>
                <li>20 guest passes included</li>
                <li>Additional guests welcome at $10 per person</li>
                <li>Freedom to bring your own cake and party decorations</li>
                <li>Option to stay and play after your party during regular business hours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open Hours Parties Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video">
              <Image
                src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/pinball_collection_facebook_header.jpg"
                alt="Group gaming at Throwbacks Arcade"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl neon-text-orange">Business Hours Parties</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Planning a smaller celebration? Join us during regular business hours! 
                Our business hours party option includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum of 10 guests</li>
                <li>$10 per person</li>
                <li>Bring your own cake</li>
                <li>Access to all arcade games and pinball machines</li>
                <li>Perfect for casual celebrations and group outings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl neon-text-orange">Ready to Book Your Party?</h2>
          <ContactSection />
        </section>
      </div>
    </div>
  )
} 