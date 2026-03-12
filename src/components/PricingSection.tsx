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
    <section id="pricing" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="label-text block mb-6">Pricing</span>
          <h2 className="text-4xl md:text-5xl text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-[60ch] mx-auto">
            Choose the plan that fits your needs. No hidden fees, just professional results.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {displayPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl border transition-all duration-500 ${
                  plan.highlight 
                    ? "border-accent bg-accent/5 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] scale-105 z-10" 
                    : "border-white/5 bg-white/[0.03] hover:border-white/10"
                } flex flex-col h-full`}
              >
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    {plan.name !== "Wedding Package" && <span className="text-muted-foreground font-medium">/image</span>}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-accent/10 shrink-0">
                        <Check className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-white/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.highlight
                      ? "bg-accent text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-white/10 text-white hover:bg-white/20"
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