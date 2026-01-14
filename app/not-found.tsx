import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-text">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Game Over
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Looks like you've hit a glitch in the matrix! This page has been sent back to the 80s 
          and isn't available right now. Don't worry though - even the best arcade games had 
          their bugs!
        </p>
        <p className="text-muted-foreground mb-12">
          Why not step back to the main arcade and try again? We've got plenty of classic games 
          and fun waiting for you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button 
              className="text-xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners"
            >
              Return to Arcade
            </Button>
          </Link>
          <Link href="/games">
            <Button 
              className="text-xl py-6 px-8 bg-primary hover:bg-primary/80 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 pixel-corners"
            >
              Check Out Our Games
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
