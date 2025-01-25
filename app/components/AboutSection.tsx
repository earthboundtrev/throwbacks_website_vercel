import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#FF6B00]/10 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg">
              Welcome to Throwbacks Arcade! Step into a time machine where the golden age of 
              gaming comes alive with the familiar beeps, boops, and flashing lights of 
              classic arcade cabinets.
            </p>
            <p>
              Established in 2024 in the heart of our community, we're bringing the magic 
              of 80s arcade culture to rural life. Our carefully curated collection of 
              authentic arcade games and pinball machines creates the perfect blend of 
              nostalgia and fun.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              To create an authentic retro gaming experience that brings our community 
              together through the timeless joy of arcade games.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Preserve classic arcade culture</li>
              <li>Create lasting memories</li>
              <li>Build community connections</li>
              <li>Share the magic of retro gaming</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

