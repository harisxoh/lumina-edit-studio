"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8, bounce: 0 } },
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={item} className="mb-8">
          <span className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
            ✦ Open for Paid Requests
          </span>
        </motion.div>
        
        <motion.h1
          variants={item}
          className="text-white mb-8 text-gradient"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900 }}
        >
          Flawless Post-Production.
        </motion.h1>
        
        <motion.p
          variants={item}
          className="text-muted-foreground text-lg md:text-2xl max-w-[35ch] mx-auto mb-12 leading-relaxed"
        >
          Elevating professional photography through precise retouching and cinematic color grading.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="h-14 px-10 rounded-full bg-accent text-white font-bold text-lg shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            Start a Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("work")}
            className="h-14 px-10 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;