"use client";

import { motion } from "framer-motion";
import { Coffee, DollarSign } from "lucide-react";

const SupportSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-12 rounded-3xl bg-white/[0.02] border border-white/5 text-center"
        >
          <span className="label-text text-muted-foreground mb-4">Support my work</span>
          <h3 className="text-2xl font-bold text-white mb-8">Enjoying the results?</h3>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://buymeacoffee.com/harisauxi14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFDD00] text-black font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Coffee size={20} />
              Buy me a coffee
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.paypal.com/paypalme/harisxoh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#0070BA] text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <DollarSign size={20} />
              PayPal
            </motion.a>
          </div>
          <p className="mt-8 text-muted-foreground text-sm max-w-[40ch]">
            Your support helps me keep creating high-quality content and tools for the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;