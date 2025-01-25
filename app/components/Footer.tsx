import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGamepad } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background p-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Throwbacks Arcade. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
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
                className="text-sm hover:text-primary flex items-center space-x-2 mt-2"
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

