"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"

const NeonSign = () => (
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_logo_larger.jpg"
      alt="Throwbacks Logo"
      width={200}
      height={80}
      className="h-12 w-auto"
    />
  </Link>
)

const NavItem = ({ href, children, onClick }: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link href={href} className="text-lg hover:text-primary transition-colors" onClick={onClick}>
    {children}
  </Link>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when pathname changes (i.e., when navigation occurs)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="bg-background p-4 md:p-6 sticky top-0 z-50 neon-border">
      <div className="container mx-auto flex justify-between items-center">
        <NeonSign />
        <nav className="hidden md:flex space-x-6">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/how-to-play">How to Play</NavItem>
          <NavItem href="/games">Games</NavItem>
          <NavItem href="/menu">Menu</NavItem>
          <NavItem href="/party">Parties</NavItem>
          <NavItem href="/events">Events</NavItem>
          {/* <NavItem href="/about">About</NavItem> */}
          {/* <NavItem href="/contact">Contact</NavItem> */}
        </nav>
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/how-to-play">How to Play</NavItem>
          <NavItem href="/games">Games</NavItem>
          <NavItem href="/menu">Menu</NavItem>
          <NavItem href="/party">Parties</NavItem>
          <NavItem href="/events">Events</NavItem>
          {/* <NavItem href="/about">About</NavItem> */}
          {/* <NavItem href="/contact">Contact</NavItem> */}
        </nav>
      )}
    </header>
  )
}

