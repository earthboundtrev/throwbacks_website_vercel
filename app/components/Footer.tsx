import Link from "next/link"
import { Facebook, Twitter, Instagram, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 neon-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-primary">Throwbacks Arcade</h3>
            <p className="text-muted-foreground">123 Retro Lane, Pixelville, PX 12345</p>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 mr-2 text-secondary" />
              <Link href="#" className="text-accent hover:text-accent/80">
                View on Map
              </Link>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Throwbacks Arcade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

