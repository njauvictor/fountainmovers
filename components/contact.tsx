"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Send, Check } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "house-moving",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", serviceType: "house-moving", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Call us anytime",
      link: "tel:0720479096",
      text: "0720479096",
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Send us a message",
      link: "mailto:jkamuz004@gmail.com",
      text: "jkamuz004@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Visit our office",
      link: "#",
      text: "Makarios Building, Nairobi",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-5 py-2 bg-primary/10 border border-primary/30 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm">READY TO MOVE?</p>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us for a free quote and expert advice on your moving needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border border-secondary/50 bg-white hover:shadow-2xl hover:border-primary/50 transition-all group h-full">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{card.title}</CardTitle>
                      <CardDescription>{card.subtitle}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href={card.link} className="text-primary hover:text-primary/80 font-semibold transition">
                      {card.text}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 border border-border p-8 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border border-secondary/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a Message</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <motion.input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <motion.input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="0720000000"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                      Service Type
                    </label>
                    <motion.select
                      id="service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-white"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="house-moving">House Moving</option>
                      <option value="office-moving">Office Moving</option>
                      <option value="storage">Storage Solutions</option>
                      <option value="other">Other</option>
                    </motion.select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your moving needs..."
                      rows={4}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 font-semibold flex items-center justify-center gap-2 shadow-lg">
                      {submitted ? (
                        <>
                          <Check className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Facebook Card */}
            <Card className="border border-secondary/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.a
                  href="https://www.facebook.com/Fountainmovers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-lg hover:from-blue-500/20 hover:to-blue-500/10 transition group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-semibold">Follow us on Facebook</span>
                </motion.a>
              </CardContent>
            </Card>

            {/* Special Offer Card */}
            {/* <Card className="border-0 bg-gradient-to-br from-primary to-primary/85 text-primary-foreground shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-white text-2xl">🎉 Limited Time Offer!</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="mb-6 text-primary-foreground/95 font-medium">
                  Get 15% off your first move when you mention this website!
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-white text-primary hover:bg-gray-100 font-bold shadow-lg">
                    Claim Offer Now
                  </Button>
                </motion.div>
              </CardContent>
            </Card> */}

            {/* Hours Card */}
            <Card className="border border-secondary/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-foreground font-bold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-foreground font-bold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-foreground font-bold">By Appointment</span>
                </div>
                <div className="pt-3 border-t border-border mt-3">
                  <p className="text-primary font-semibold">🚨 24/7 Emergency Support Available</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
