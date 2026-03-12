"use client";

import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { usePricingPlans } from "@/hooks/use-pricing";

const fallbackPlans = [
  {
    name: "Basic Retouch",
    price: "$15",
    description: "Perfect for individual portraits and social media.",
    features: ["Skin smoothing", "Blemish removal", "Color correction", "24-hour delivery"],
    button_text: "Get Started",
    highlight: false
  },
  {
    name: "Professional",
    price: "$45",
    description: "Ideal for headshots and commercial work.",
    features: ["Advanced skin work", "Dodge & burn", "Background cleanup", "High-end color grading", "Priority support"],
    button_text: "Most Popular",
    highlight: true
  },
  {
    name: "Wedding Package",
    price: "$299",
    description: "Full gallery editing for your special day.",
    features: ["Up to 300 images", "Consistent color grading", "Exposure correction", "Online gallery delivery", "7-day turnaround"],
    button_text: "Contact for Custom",
    highlight: false
  }
];

const PricingSection = () => {
  const { data: plans, isLoading } = usePricingPlans();
  
  const displayPlans = plans || fallbackPlans;

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="label-text text-accent block mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-[60ch] mx-auto">
            Choose the plan that fits your needs. No hidden fees, just professional results.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border ${
                  plan.highlight 
                    ? "border-accent bg-background shadow-xl scale-105 z-10" 
                    : "border-border bg-card"
                } flex flex-col`}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.name !== "Wedding Package" && <span className="text-muted-foreground">/image</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground btn-shadow hover:btn-shadow-hover"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.button_text}
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;