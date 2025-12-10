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
        {" "}and{" "}
        <a 
          href="https://www.tiktok.com/@throwbacks_arcade"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          TikTok
        </a>
        {" "}accounts for the latest arcade happenings!
      </p>
      
      {/* Holiday Events */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center neon-text">Upcoming Holiday Events</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border neon-border">
            <h3 className="text-xl font-bold mb-2 text-primary">Ugly Christmas Sweater Party</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Date:</strong> Saturday, December 20th
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Time:</strong> 8:00 PM - 11:00 PM
            </p>
            <p className="text-muted-foreground">
              <strong>Details:</strong> DJ, Paid Cash
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border neon-border">
            <h3 className="text-xl font-bold mb-2 text-primary">New Year's Eve Party</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Date:</strong> Wednesday, December 31st
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Time:</strong> 7:00 PM - 1:00 AM (Arcade open noon-1am)
            </p>
            <p className="text-muted-foreground">
              <strong>Details:</strong> NYE party with DJ, Paid Cash
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  )
}

