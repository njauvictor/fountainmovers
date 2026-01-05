"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "+254720479096"
  const whatsappMessage = "Hello! I'm interested in your moving services. Can you help me with more information?"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg z-50"
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      aria-label="Chat with us on WhatsApp"
    >
      <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
        <MessageCircle className="w-6 h-6" />
      </motion.div>
    </motion.a>
  )
}
