"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => scrollTo("hero")} 
          className="font-black text-2xl tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          STUDIO<span className="text-accent">.</span>
        </button>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:flex items-center gap-6 md:gap-10 mr-4">
            <button 
              onClick={() => scrollTo("work")} 
              className="label-text text-muted-foreground hover:text-white transition-colors whitespace-nowrap"
            >
              View Work
            </button>
            <button 
              onClick={() => scrollTo("pricing")} 
              className="label-text text-muted-foreground hover:text-white transition-colors whitespace-nowrap"
            >
              Pricing
            </button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="h-11 px-6 rounded-full bg-accent text-white text-sm font-bold shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)] transition-all duration-300 whitespace-nowrap"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;