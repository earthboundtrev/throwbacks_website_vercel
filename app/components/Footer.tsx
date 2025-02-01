import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGamepad } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background p-6 border-t">
      <div className="container mx-auto">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Company Name - Left Column */}
          <div className="mb-8 md:mb-0">
            <p className="text-sm">© 2025 Throwbacks Arcade</p>
          </div>

          {/* Quick Links - Center Column */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-sm font-semibold mb-4 text-center">Quick Links</h3>
            <div className="flex flex-col items-center space-y-2">
              <Link href="/" className="text-sm hover:text-primary">
                Home
              </Link>
              <Link href="/how-to-play" className="text-sm hover:text-primary">
                How to Play
              </Link>
              <Link href="/games" className="text-sm hover:text-primary">
                Games
              </Link>
              <Link href="/menu" className="text-sm hover:text-primary">
                Menu
              </Link>
              <Link href="/party" className="text-sm hover:text-primary">
                Party
              </Link>
              <Link href="/events" className="text-sm hover:text-primary">
                Events
              </Link>
            </div>
          </div>

          {/* External Links - Right Column */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-sm font-semibold mb-4 text-center md:text-left">External Links</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61556280427238"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary flex items-center space-x-2"
              >
                <FaFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a 
                href="http://www.vacoinop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary flex items-center space-x-2"
              >
                <FaGamepad className="w-5 h-5" />
                <span>Virginia Coin-Op</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

