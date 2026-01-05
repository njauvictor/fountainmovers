"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-white"
      }`}
    >
      {/* Top bar with contact info */}
      <motion.div
        className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm py-3 overflow-hidden"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl text-sm mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap gap-6 justify-center md:justify-between">
          <div className="flex gap-2">
            <motion.a
            href="tel:0720479096"
            className="flex items-center gap-2 hover:opacity-80 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">0720479096</span>
          </motion.a>
          <motion.a
            href="mailto:jkamuz004@gmail.com"
            className="flex items-center gap-2 hover:opacity-80 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">jkamuz004@gmail.com</span>
          </motion.a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Makarios Building-Manyaja road(Dohnholm) 1st flr, office no. 12</span>
          </div>
        </div>
      </motion.div>

      {/* Main navigation bar */}
      <nav className="max-w-7xl mx-auto px-4 py-4 md:px-8 lg:px-16 border-b border-border">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl  font-bold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Fountain Movers & Transport
            <hr className="mt-1 border-primary/30" />
            <span className="text-xs font-semibold">Professional Moving Services in Nairobi, Kenya</span>
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition relative group font-medium"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                Get Free Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3 ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="block text-foreground hover:text-primary transition font-medium"
              whileHover={{ x: 5 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get Free Quote
            </Button>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  )
}
