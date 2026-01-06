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
    movingFrom: "",
    movingTo: "",
    bedrooms: "",
    movingFromFloor: "",
    movingToFloor: "",
    otherServices: "",
    message: "",
  })

  const WHATSAPP_NUMBER = "254720479096" // no +

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = encodeURIComponent(
      `New Moving Inquiry:

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.serviceType}

Moving Details:
Moving From: ${formData.movingFrom}
Moving To: ${formData.movingTo}
Number of Bedrooms: ${formData.bedrooms}
Moving From Floor: ${formData.movingFromFloor}
Moving To Floor: ${formData.movingToFloor}
Other Services Required: ${formData.otherServices}

Additional Message:
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
        movingFrom: "",
        movingTo: "",
        bedrooms: "",
        movingFromFloor: "",
        movingToFloor: "",
        otherServices: "",
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Moving From *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.movingFrom}
                      onChange={(e) =>
                        setFormData({ ...formData, movingFrom: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="Current address/location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Moving To *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.movingTo}
                      onChange={(e) =>
                        setFormData({ ...formData, movingTo: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="New address/location"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      No. of Bedrooms
                    </label>
                    <select
                      value={formData.bedrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, bedrooms: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="Studio/1 Bed">Studio/1 Bed</option>
                      <option value="2 Bedrooms">2 Bedrooms</option>
                      <option value="3 Bedrooms">3 Bedrooms</option>
                      <option value="4 Bedrooms">4 Bedrooms</option>
                      <option value="5+ Bedrooms">5+ Bedrooms</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Moving From Floor
                    </label>
                    <select
                      value={formData.movingFromFloor}
                      onChange={(e) =>
                        setFormData({ ...formData, movingFromFloor: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="Ground Floor">Ground Floor</option>
                      <option value="1st Floor">1st Floor</option>
                      <option value="2nd Floor">2nd Floor</option>
                      <option value="3rd Floor">3rd Floor</option>
                      <option value="4th Floor">4th Floor</option>
                      <option value="5th Floor">5th Floor</option>
                      <option value="6th Floor">6th Floor</option>
                      <option value="7th Floor">7th Floor</option>
                      <option value="8th Floor">8th Floor</option>
                      <option value="9th Floor">9th Floor</option>
                      <option value="10th+ Floor">10th+ Floor</option>

                      <option value="Basement">Basement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Moving To Floor
                    </label>
                    <select
                      value={formData.movingToFloor}
                      onChange={(e) =>
                        setFormData({ ...formData, movingToFloor: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="Ground Floor">Ground Floor</option>
                      <option value="1st Floor">1st Floor</option>
                      <option value="2nd Floor">2nd Floor</option>
                      <option value="3rd Floor">3rd Floor</option>
                      <option value="4th Floor">4th Floor</option>
                      <option value="5th Floor">5th Floor</option>
                      <option value="6th Floor">6th Floor</option>
                      <option value="7th Floor">7th Floor</option>
                      <option value="8th Floor">8th Floor</option>
                      <option value="9th Floor">9th Floor</option>
                      <option value="10th+ Floor">10th+ Floor</option>
                      <option value="Basement">Basement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Other Services Required (Optional)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Packing",
                      "Unpacking",
                      "Cleaning",
                      "Furniture Assembly",
                      "Storage",
                      "Vehicle Transport"
                    ].map((service) => (
                      <label key={service} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={service}
                          checked={formData.otherServices.includes(service)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                otherServices: formData.otherServices
                                  ? `${formData.otherServices}, ${service}`
                                  : service
                              })
                            } else {
                              setFormData({
                                ...formData,
                                otherServices: formData.otherServices
                                  .split(", ")
                                  .filter(s => s !== service)
                                  .join(", ")
                              })
                            }
                          }}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary"
                    placeholder="Any special requirements or additional details..."
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