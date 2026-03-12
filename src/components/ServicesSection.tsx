"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "Portrait Retouching",
    description: "Flawless skin work and subtle enhancements that preserve natural texture while delivering magazine-quality results.",
    items: ["Skin smoothing", "Dodge & burn", "Eye enhancement", "Hair cleanup"],
  },
  {
    title: "Wedding Editing",
    description: "Consistent, cinematic color grading across your entire gallery. Every image matched, every moment perfected.",
    items: ["Full gallery grading", "Exposure correction", "Batch processing", "Film-style looks"],
  },
  {
    title: "Product Photography",
    description: "Clean, precise edits that make your products shine. Perfect for e-commerce and marketing materials.",
    items: ["Background removal", "Color accuracy", "Shadow work", "Catalog-ready"],
  },
  {
    title: "Color Correction",
    description: "Precise color grading and lighting adjustments that bring out the best in any photograph.",
    items: ["Advanced grading", "Tonal adjustments", "White balance", "HDR blending"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="label-text block mb-6">Services</span>
              <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                Everything your images need<span className="text-accent">.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Professional editing services tailored to photographers who demand precision and consistency.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-accent/10 shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;