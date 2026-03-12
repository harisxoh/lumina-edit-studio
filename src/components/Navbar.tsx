"use client";

import { motion } from "framer-motion";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => scrollTo("hero")} 
          className="font-black text-2xl tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          STUDIO<span className="text-accent">.</span>
        </button>
        
        <div className="hidden md:flex items-center gap-10">
          {["work", "services", "pricing"].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item)} 
              className="label-text text-muted-foreground hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="h-11 px-6 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Start a Project
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;