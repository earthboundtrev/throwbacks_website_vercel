import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BackgroundDebug } from './components/BackgroundDebug'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Throwbacks Arcade - Step Back in Time to the Golden Age of Gaming",
  description:
    "Experience the nostalgia of 80s gaming at Throwbacks Arcade. Play classic games, join events, and relive the golden age of arcades.",
  icons: {
    icon: [
      {
        url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_logo_larger.jpg",
        href: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_logo_larger.jpg",
      },
    ],
    apple: [
      {
        url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_logo_larger.jpg",
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
      <body className={cn(
        "min-h-screen bg-black", // Fallback color
        "bg-background", // Your theme color
        "dark:bg-black", // Dark mode explicit
        inter.className
      )}>
        <BackgroundDebug />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

