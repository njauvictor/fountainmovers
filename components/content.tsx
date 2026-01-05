"use client"

import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Your belongings are protected with comprehensive insurance coverage during transit and storage",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We value your time with strict scheduling and punctual service delivery",
  },
  {
    icon: TrendingUp,
    title: "15+ Years Excellence",
    description: "Proven track record of successful moves and satisfied customers across Nairobi",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    description: "No hidden fees - competitive rates with detailed quotes before you commit",
  },
]

export function Content() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="content" className="py-20 md:py-32 bg-gradient-to-br from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 ">
        {/* Why Trust Us Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Why Trust Fountain Movers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            We've been helping Nairobi residents and businesses relocate with confidence for over a decade. Our
            commitment to excellence, safety, and customer satisfaction sets us apart.
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 rounded-xl border border-secondary hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 py-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready for Your Next Move?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. Our experts will assess your moving needs and provide a customized
            solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-8">
              Get Free Quote
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 bg-transparent">
              Call Now: 0720479096
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
