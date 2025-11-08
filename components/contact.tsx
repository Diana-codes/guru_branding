"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-secondary-foreground/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <a href="tel:0798816285" className="hover:opacity-80 transition">
              +250 798 816 285
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-secondary-foreground/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a href="mailto:gurubrandingandmarketinghouse@gmail.com" className="hover:opacity-80 transition">
              gurubrandingandmarketinghouse@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-secondary-foreground/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        <div className="bg-secondary-foreground/10 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-background text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-background text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
