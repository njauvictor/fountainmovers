"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Package, Trash2, Lock, Wrench, Tv } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Corporate/Office Moving",
    description: "Professional moving of desks, equipment, and records for your business with minimal downtime.",
  },
  {
    icon: Home,
    title: "House Moving Services",
    description: "Complete residential moving with loading, offloading, unpacking, and arranging services.",
  },
  {
    icon: Package,
    title: "Logistics & Planning",
    description: "Expert assistance with move planning, timelines, and comprehensive management throughout.",
  },
  {
    icon: Trash2,
    title: "Clean-up Services",
    description: "Post-move cleanup at your old home or pre-move cleaning of your new space.",
  },
  {
    icon: Lock,
    title: "Storage Facilities",
    description: "Secure storage solutions for your belongings when you cannot move directly to your new place.",
  },
  {
    icon: Wrench,
    title: "Disassembly & Reassembly",
    description: "Professional disassembly and reassembly of beds, wardrobes, tables, and other furniture.",
  },
  {
    icon: Tv,
    title: "TV Mounting",
    description: "Expert installation and secure mounting of your television in your new home.",
  },
]

export function Services() {
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

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our <span className="text-primary">Moving</span> and <span className="text-primary">Transport</span> Services</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive moving and transport solutions from one of the leading moving companies in Nairobi, Kenya.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
         <motion.div key={idx} variants={itemVariants} className="h-full">
  <Card className="group h-full border border-secondary transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
    <CardHeader className="space-y-4">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Title */}
      <CardTitle className="text-xl font-semibold text-primary">
        {service.title}
      </CardTitle>
    </CardHeader>

    <CardContent>
      <CardDescription className="text-base leading-relaxed text-muted-foreground">
        {service.description}
      </CardDescription>
    </CardContent>
  </Card>
</motion.div>

            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
