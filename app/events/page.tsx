"use client"
import { useState } from "react"
import Image from "next/image"
import ContactSection from "@/app/components/ContactSection"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-4 neon-text">Our Events</h1>
      <p className="text-center text-muted-foreground mb-8">
        Check out our upcoming events! Follow us on our{" "}
        <a 
          href="https://www.facebook.com/profile.php?id=61556280427238"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Facebook
        </a>
        {" "}and{" "}
        <a 
          href="https://www.instagram.com/throwbacksculpeper/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Instagram
        </a>
        {" "}accounts for the latest arcade happenings!
      </p>
      <ContactSection />
    </div>
  )
}

