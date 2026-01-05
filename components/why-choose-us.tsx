"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Clock, Users } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Professional & Experienced",
    description: "Over 15 years of moving experience with trained, certified professionals.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your belongings are fully insured and handled with utmost care at every step.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your schedule and guarantee punctual, reliable service every time.",
  },
  {
    icon: Users,
    title: "Customer-Focused",
    description: "24/7 customer support and personalized moving solutions for your specific needs.",
  },
]

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-br from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Fountain Movers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your move seamless and stress-free
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border border-secondary/50 bg-white shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all group h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary text-foreground">{reason.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
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
