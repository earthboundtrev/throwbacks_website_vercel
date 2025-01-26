"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground neon-border pixel-corners">
          <CardHeader>
            <CardTitle className="text-2xl mb-2 text-primary">Get in Touch</CardTitle>
            <CardDescription className="text-muted-foreground">We'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted text-foreground"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted text-foreground"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted text-foreground"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/80 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground neon-border pixel-corners">
          <CardHeader>
            <CardTitle className="text-2xl mb-2 text-primary">Visit Us</CardTitle>
            <CardDescription className="text-muted-foreground">
              Come experience the nostalgia in person!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                <p className="text-muted-foreground">201 S. East St, Culpeper, VA, 22701</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                <p className="text-muted-foreground">+17038634171</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                <p className="text-muted-foreground">info@throwbacksarcade.com</p>
              </div>
            </div>
            <div className="mt-4 h-[300px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.8876671466387!2d-77.99729892367893!3d38.47216127945371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b427964fc89f83%3A0x7d8c5900b6797a83!2sThrowbacks!5e0!3m2!1sen!2sus!4v1706115436044!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Opening Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Monday - Tuesday: Closed</li>
                <li>Wednesday - Thursday: 5:00 PM - 9:00 PM</li>
                <li>Friday: 5:00 PM - 11:00 PM</li>
                <li>Saturday: 12:00 PM - 11:00 PM</li>
                <li>Sunday: 12:00 PM - 6:00 PM</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

