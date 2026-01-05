"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Phone, Mail, MapPin, Send, Check } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "House Moving",
    message: "",
  })

  const WHATSAPP_NUMBER = "254720479096" // no +

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = encodeURIComponent(
      `New Moving Inquiry:

Name ${formData.name}
Phone: ${formData.phone}
Service: ${formData.serviceType}

Message:
${formData.message}`
    )

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

    window.open(whatsappUrl, "_blank")

    setSubmitted(true)

    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        serviceType: "House Moving",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Send us your moving details directly on WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                text: "0720 479 096",
                link: "tel:0720479096",
              },
              {
                icon: Mail,
                title: "Email",
                text: "WhatsApp preferred",
                link: "#",
              },
              {
                icon: MapPin,
                title: "Location",
                text: "Makarios Building, Nairobi",
                link: "#",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="border border-secondary/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.text}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          {/* WhatsApp Form */}
          <Card className="border border-secondary/50 shadow-xl">
            <CardHeader>
              <CardTitle>Send WhatsApp Message</CardTitle>
              <CardDescription>
                We respond fast on WhatsApp 🚀
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="0720 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary"
                  >
                    <option>House Moving</option>
                    <option>Office Moving</option>
                    <option>Storage</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your move..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg py-6 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5" /> Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
