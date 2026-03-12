"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Wedding Photographer",
    content: "The color consistency across my last 500-photo wedding gallery was incredible. Saved me weeks of work.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Fashion Designer",
    content: "The high-end retouching on our latest lookbook was flawless. They really understood the brand aesthetic.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Portrait Artist",
    content: "Fast turnaround and perfect skin work. My clients are always thrilled with the final results.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="label-text text-muted-foreground block mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl text-foreground">What Photographers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-secondary/20 border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;