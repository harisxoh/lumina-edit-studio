import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.4, bounce: 0 } },
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-svh flex items-center justify-center py-[25vh]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[80ch] mx-auto px-6 text-center"
      >
        <motion.div variants={item}>
          <span className="label-text text-accent inline-block mb-6">
            ✦ Open for Paid Requests
          </span>
        </motion.div>
        <motion.h1
          variants={item}
          className="text-foreground mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)" }}
        >
          Flawless Post-Production for Professional Photographers.
        </motion.h1>
        <motion.p
          variants={item}
          className="text-muted-foreground text-lg md:text-xl max-w-[55ch] mx-auto mb-10"
        >
          From precise portrait retouching to perfect color grading, I provide the essential final step to elevate your images.
        </motion.p>
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("contact")}
            className="h-12 px-6 rounded-lg bg-primary text-primary-foreground font-medium btn-shadow hover:btn-shadow-hover transition-shadow duration-300"
          >
            Start a Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("work")}
            className="h-12 px-6 rounded-lg bg-secondary text-secondary-foreground font-medium btn-shadow hover:btn-shadow-hover transition-shadow duration-300"
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
