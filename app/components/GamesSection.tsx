'use client';

import { useState } from 'react'
import Image from 'next/image'

export default function GamesSection() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section id="games" className="py-16 bg-gradient-to-b from-[#FF6B00]/10 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 font-['Press_Start_2P']">Our Games</h2>
        
        <div className="flex justify-center">
          <div 
            className="bg-secondary/30 p-4 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 neon-border"
            onClick={() => setIsImageOpen(true)}
          >
            <Image
              src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/faraway_picture_of_games.jpg"
              alt="Faraway Games"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {isImageOpen && (
          <div 
            className="fixed inset-0 bg-background/75 flex items-center justify-center z-50"
            onClick={() => setIsImageOpen(false)}
          >
            <div className="max-w-[90vw] max-h-[90vh]">
              <Image
                src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/faraway_picture_of_games.jpg"
                alt="Faraway Games"
                width={1200}
                height={675}
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

