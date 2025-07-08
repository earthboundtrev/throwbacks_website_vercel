import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGamepad, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background p-6 border-t">
      <div className="container mx-auto">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Hours and Copyright - Left Column */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-sm font-semibold mb-4">Store Hours</h3>
            <div className="text-sm space-y-1 mb-6">
              <p>Monday - Tuesday: Closed</p>
              <p>Wednesday: 4:00 PM - 9:00 PM</p>
              <p>Thursday: 4:00 PM - 9:00 PM</p>
              <p>Friday: 12:00 PM - 11:00 PM</p>
              <p>Saturday: 12:00 PM - 11:00 PM</p>
              <p>Sunday: 12:00 PM - 7:00 PM</p>
            </div>
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
                Parties
              </Link>
              <Link href="/events" className="text-sm hover:text-primary">
                Events
              </Link>
              <Link href="/about" className="text-sm hover:text-primary">
                About
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
                href="https://www.instagram.com/throwbacksculpeper/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary flex items-center space-x-2"
              >
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
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

