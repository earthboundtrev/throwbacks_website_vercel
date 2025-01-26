import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactSection from "./components/ContactSection"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Throwbacks Arcade - Step Back in Time to the Golden Age of Gaming",
  description:
    "Experience the nostalgia of 80s gaming at Throwbacks Arcade. Play classic games, join events, and relive the golden age of arcades.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/437947549_122142302060209347_1362648001893593001_n.jpg-5uY6ZzpUDRX1NUGkTSPfiSjZZNDTcm.jpeg",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/437947549_122142302060209347_1362648001893593001_n.jpg-5uY6ZzpUDRX1NUGkTSPfiSjZZNDTcm.jpeg",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/437947549_122142302060209347_1362648001893593001_n.jpg-5uY6ZzpUDRX1NUGkTSPfiSjZZNDTcm.jpeg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

