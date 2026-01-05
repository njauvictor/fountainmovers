"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }


  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-background via-secondary/15 to-background overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* Left content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
            >
              ✨ Professional Moving Solutions
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Moving Partner
              </span>{" "}
              in Nairobi
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              From corporate offices to residential homes, we deliver stress-free
              moving with expert planning, secure storage, and professional care.
            </motion.p>

          
            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4"
            >
            <a href="#contact">
                <Button className="w-full sm:w-auto text-base  py-6 px-8 shadow-lg cursor-pointer">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <Button
  asChild
  variant="outline"
  className="w-full sm:w-auto text-base py-6 px-8 border-2 border-primary/30"
>
  <a href="mailto:jkamuz004@gmail.com">
    Email Us <CheckCircle className="ml-2 h-5 w-5" />
  </a>
</Button>

            </motion.div>

       
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-first md:order-last"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 to-primary/5 blur-2xl" />

            <img
              src="/movers1.jpg"
              alt="Professional moving truck in Nairobi"
              className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
            />

            <motion.div
              className="absolute -bottom-4 -left-4 rounded-lg bg-white p-4 shadow-xl z-50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-semibold">⭐ 4.9/5 Rating</p>
              <p className="text-xs text-muted-foreground">
                From 200+ verified reviews
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
