"use client"

import { useState } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import {
  submitContactPayload,
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/contact-form-client.js"

declare global {
  interface Window {
    grecaptcha?: {
      getResponse: () => string
      reset: () => void
    }
  }
}

type ContactSource = "contact" | "party"

type ContactSectionProps = {
  source?: ContactSource
}

export default function ContactSection({ source }: ContactSectionProps) {
  const pathname = usePathname()
  const resolvedSource: ContactSource =
    source ?? (pathname === "/party" ? "party" : "contact")

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    phone: false,
    recaptcha: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const sanitizedValue = value.replace(/[^\d() -]/g, "")
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    setErrors((prev) => ({ ...prev, [name]: false }))
    setFormStatus(null)
  }

  const getRecaptchaToken = () => {
    if (typeof window === "undefined" || !window.grecaptcha) return ""
    return window.grecaptcha.getResponse()
  }

  const resetRecaptcha = () => {
    if (typeof window !== "undefined" && window.grecaptcha) {
      window.grecaptcha.reset()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus(null)

    const recaptchaToken = recaptchaSiteKey ? getRecaptchaToken() : ""

    const newErrors = {
      name: !validateName(formData.name),
      email: !validateEmail(formData.email),
      message: !formData.message.trim(),
      phone: !validatePhone(formData.phone),
      recaptcha: Boolean(recaptchaSiteKey && !recaptchaToken),
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(Boolean)) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await submitContactPayload({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        recaptchaToken,
        source: resolvedSource,
      })
      setFormData({ name: "", email: "", message: "", phone: "" })
      setFormStatus({
        type: "success",
        message: "Message sent successfully!",
      })
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Failed to send message. Please try again."
      setFormStatus({ type: "error", message })
    } finally {
      resetRecaptcha()
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-16">
      {recaptchaSiteKey ? (
        <Script src="https://www.google.com/recaptcha/api.js" async defer />
      ) : null}
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground neon-border pixel-corners">
          <CardHeader>
            <CardTitle className="text-2xl mb-2 text-primary">Get in Touch</CardTitle>
            <CardDescription className="text-muted-foreground">We&apos;d love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-muted text-foreground ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-muted text-foreground ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  required
                  className={`w-full bg-muted text-foreground ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter a valid phone number
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full bg-muted text-foreground ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  rows={4}
                />
              </div>
              {recaptchaSiteKey ? (
                <div className="mb-4">
                  <div
                    className="g-recaptcha flex justify-center"
                    data-sitekey={recaptchaSiteKey}
                  />
                  {errors.recaptcha && (
                    <p className="mt-2 text-sm text-red-500 text-center">
                      Please complete the reCAPTCHA verification
                    </p>
                  )}
                </div>
              ) : null}
              {formStatus ? (
                <p
                  className={`mb-4 text-sm text-center ${
                    formStatus.type === "success" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {formStatus.message}
                </p>
              ) : null}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/80 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary shrink-0" />
                <div className="text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">
                    Moving soon to: 201 Waters Place, Units 108, 109, and 110, Culpeper, VA 22701
                  </p>
                  <p className="text-sm">
                    We are not at this address yet — it is just a few blocks from our previous
                    location in Culpeper.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                <p className="text-muted-foreground">+17038634171</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                <p className="text-muted-foreground">ThrowbacksCulpeper@gmail.com</p>
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
            <p className="mt-2 text-xs text-muted-foreground text-center">
              Map shows our previous address (201 S. East St, Culpeper, VA 22701).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
