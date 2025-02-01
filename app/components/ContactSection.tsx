"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    phone: false
  })

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS Public Key is missing!');
      return;
    }
    
    try {
      emailjs.init(publicKey);
      console.log('EmailJS Initialized with public key');
    } catch (error) {
      console.error('EmailJS Init Error:', error);
    }
  }, []);

  const isValidPhone = (phone: string) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^\d() -]/g, '');
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    setErrors(prev => ({ ...prev, [name]: false }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: !formData.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim(),
      phone: !isValidPhone(formData.phone)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey
      });
      alert('Email configuration error. Please contact the administrator.');
      return;
    }

    const templateParams = {
      to_email: 'ThrowbacksCulpeper@gmail.com',
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      phone: formData.phone
    };
    
    console.log('Sending email with params:', templateParams);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log('EmailJS Response:', response);
      setFormData({ name: '', email: '', message: '', phone: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      alert('Failed to send message. Please try again.');
    }
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
                    errors.name ? 'border-red-500' : ''
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
                    errors.email ? 'border-red-500' : ''
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
                    errors.phone ? 'border-red-500' : ''
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
                    errors.message ? 'border-red-500' : ''
                  }`}
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