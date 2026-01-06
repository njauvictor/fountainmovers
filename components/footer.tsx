"use client"

import { motion } from "framer-motion"
import { Facebook, Phone, Mail, MapPin, ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = [
    { label: "Corporate Moving", href: "#services" },
    { label: "House Moving", href: "#services" },
    { label: "Storage Solutions", href: "#services" },
    { label: "Furniture Assembly", href: "#services" },
  ]

  const quickLinks = [
    { label: "About Us", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ]

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-primary text-white py-8 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
           <motion.a
  href="#"
  whileHover={{ scale: 1.05 }}
  className="inline-flex flex-col items-start gap-1"
>
  <span className="text-xl font-bold  bg-clip-text text-white">
    Fountain Movers & Transport
  </span>

  <span className="h-[1px] w-full bg-white/30" />
  <span className="text-xs font-semibold text-white">
    Professional Moving Services in Nairobi, Kenya
  </span>
</motion.a>

            <p className="text-sm opacity-90 leading-relaxed mt-4">
              Your trusted moving partner in Nairobi. Professional, reliable, and affordable moving services for homes
              and offices.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="text-sm space-y-2 opacity-90">
              {footerLinks.map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }} className="transition">
                  <a href={link.href} className="hover:opacity-100 hover:text-white transition">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-90">
              {quickLinks.map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }} className="transition">
                  <a href={link.href} className="hover:opacity-100 hover:text-white transition">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <div className="text-sm space-y-3 opacity-90">
              <motion.div className="flex items-start gap-2 group" whileHover={{ x: 5 }}>
                <Phone className="w-4 h-4 mt-0.5 group-hover:text-white transition" />
                <a href="tel:0720479096" className="hover:opacity-100 hover:text-white transition">
                  0720479096
                </a>
              </motion.div>
              <motion.div className="flex items-start gap-2 group" whileHover={{ x: 5 }}>
                <Mail className="w-4 h-4 mt-0.5 group-hover:text-white transition" />
                <a href="mailto:info@fountainmovers.co.ke" className="hover:opacity-100 hover:text-white transition">
                  info@fountainmovers.co.ke
                </a>
              </motion.div>
              <motion.div className="flex items-start gap-2 group" whileHover={{ x: 5 }}>
                <MapPin className="w-4 h-4 mt-0.5 group-hover:text-white transition" />
                <span className="hover:opacity-100 hover:text-white transition">Makarios Building-Manyaja road(Dohnholm) 1st flr, office no. 12, Nairobi</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-primary-foreground/20 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p className="text-sm opacity-90" variants={itemVariants}>
              &copy; {currentYear} Fountain Movers & Transport. All rights reserved. | Professional Moving Services in
              Nairobi, Kenya
            </motion.p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.facebook.com/Fountainmovers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition"
                aria-label="Back to top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
