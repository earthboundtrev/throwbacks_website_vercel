import React from 'react'

export default function GamesSection() {
  return (
    <section id="games" className="py-16 bg-gradient-to-b from-background via-[#FF6B00]/10 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Our Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Game Card 1 */}
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
            <div className="aspect-video bg-gray-700 rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Adventure Quest</h3>
            <p className="text-gray-400 mb-4">An epic journey through mystical lands. Battle monsters, solve puzzles, and become a legendary hero.</p>
            <button className="bg-[#FF6B00] text-white px-4 py-2 rounded hover:bg-[#FF6B00]/80 transition-colors">
              Learn More
            </button>
          </div>

          {/* Game Card 2 */}
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
            <div className="aspect-video bg-gray-700 rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Space Explorers</h3>
            <p className="text-gray-400 mb-4">Venture into the unknown depths of space. Discover new planets, trade resources, and build your galactic empire.</p>
            <button className="bg-[#FF6B00] text-white px-4 py-2 rounded hover:bg-[#FF6B00]/80 transition-colors">
              Learn More
            </button>
          </div>

          {/* Game Card 3 */}
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
            <div className="aspect-video bg-gray-700 rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Racing Legends</h3>
            <p className="text-gray-400 mb-4">Experience high-speed thrills in this action-packed racing game. Customize your vehicles and compete globally.</p>
            <button className="bg-[#FF6B00] text-white px-4 py-2 rounded hover:bg-[#FF6B00]/80 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

