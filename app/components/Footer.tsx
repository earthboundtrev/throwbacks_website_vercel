import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGamepad, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background p-6 border-t">
      <div className="container mx-auto">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Hours and Copyright - Left Column */}
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Regular Store Hours */}
              <div>
                <h3 className="text-sm font-semibold mb-4">Store Hours</h3>
                <div className="text-sm space-y-1">
                  <p>Monday - Tuesday: Closed</p>
                  <p>Wednesday: 5:00 PM - 9:00 PM</p>
                  <p>Thursday: 5:00 PM - 9:00 PM</p>
                  <p>Friday: 4:00 PM - 11:00 PM</p>
                  <p>Saturday: 12:00 PM - 11:00 PM</p>
                  <p>Sunday: 12:00 PM - 7:00 PM</p>
                </div>
              </div>
              
              {/* Thanksgiving Holiday Hours - Commented out for future December hours scaffolding */}
              {/* <div className="md:border-l md:pl-6 md:border-border">
                <h3 className="text-sm font-semibold mb-4 text-primary">Thanksgiving Holiday Hours</h3>
                <div className="text-sm space-y-1">
                  <p>Wednesday, Nov 26: 12:00 PM - 11:00 PM</p>
                  <p>Thursday, Nov 27 (Thanksgiving): Closed</p>
                  <p>Friday, Nov 28: 12:00 PM - 11:00 PM</p>
                  <p>Saturday, Nov 29: 12:00 PM - 12:00 AM <span className="text-primary">('80s Prom Party)</span></p>
                  <p>Sunday, Nov 30: 12:00 PM - 7:00 PM</p>
                </div>
              </div> */}

              {/* Holiday Hours */}
              <div className="md:border-l md:pl-6 md:border-border">
                <h3 className="text-sm font-semibold mb-4 text-primary">Holiday Hours</h3>
                <div className="text-sm space-y-1">
                  <p>Friday December 19th noon-11pm</p>
                  <p></p>
                  <p>Saturday December 20th noon-12pm</p>
                  <p></p>
                  <p>(Ugly Christmas Sweater Party 8-11 w/DJ Paid Cash)</p>
                  <p></p>
                  <p>Sunday December 21st noon-8pm</p>
                  <p></p>
                  <p>Monday December 22nd noon-10pm</p>
                  <p></p>
                  <p>Tuesday December 23rd noon-10pm</p>
                  <p></p>
                  <p>Wednesday December 24th (Christmas Eve) 1pm-6pm</p>
                  <p></p>
                  <p>Thursday December 25th (Christmas closed)</p>
                  <p></p>
                  <p>Friday December 26th noon-11pm</p>
                  <p></p>
                  <p>Saturday December 27th noon-11pm</p>
                  <p></p>
                  <p>Sunday December 28th noon-8pm</p>
                  <p></p>
                  <p>Monday December 29th noon-9pm</p>
                  <p></p>
                  <p>Tuesday December 30th noon-9pm</p>
                  <p></p>
                  <p>Wednesday December 31st NYE OPEN noon-1am (NYE party 7pm to 1am) with DJ Paid Cash.</p>
                  <p></p>
                  <p>Thursday January 1st OPEN (New Year's Day) noon-10pm</p>
                  <p></p>
                  <p>Friday January 2nd noon-11pm</p>
                  <p></p>
                  <p>Saturday January 3rd noon-11pm</p>
                  <p></p>
                  <p>Sunday January 4th noon-8pm</p>
                  <p></p>
                  <p>Monday January 5th noon-8pm</p>
                </div>
              </div>
            </div>
            <p className="text-sm mt-6 hidden md:block">© 2025 Throwbacks Arcade</p>
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
                href="https://www.tiktok.com/@throwbacks_arcade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary flex items-center space-x-2"
              >
                <FaTiktok className="w-5 h-5" />
                <span>TikTok</span>
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
        {/* Copyright - Bottom on mobile, hidden on desktop (shown in left column) */}
        <p className="text-sm mt-6 text-center md:hidden">© 2025 Throwbacks Arcade</p>
      </div>
    </footer>
  )
}

