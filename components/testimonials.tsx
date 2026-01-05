"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Kipchoge",
    company: "Tech Startup CEO",
    rating: 5,
    text: "Fountain Movers made our office relocation seamless. Professional team, no damage to equipment, and they finished ahead of schedule. Highly recommended!",
    avatar: "/avatar-1.jpg",
  },
  {
    id: 2,
    name: "James Mwangi",
    company: "Business Owner",
    rating: 5,
    text: "Best moving experience ever. They handled our entire household with care. The whole process was smooth and well-organized from start to finish.",
    avatar: "/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Grace Omondi",
    company: "Family Relocating",
    rating: 5,
    text: "Affordable, professional, and trustworthy. They even helped us with furniture arrangement in our new home. Five stars without a doubt!",
    avatar: "/avatar-3.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Fountain Movers for their relocation needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-secondary hover:border-primary/50 hover:shadow-lg transition-all p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
