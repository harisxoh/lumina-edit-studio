import { motion } from "framer-motion";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-bold text-lg tracking-tight text-foreground">
          Studio
        </button>
        <div className="flex items-center gap-8">
          <button onClick={() => scrollTo("work")} className="label-text text-muted-foreground hover:text-foreground transition-colors">
            Work
          </button>
          <button onClick={() => scrollTo("services")} className="label-text text-muted-foreground hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollTo("pricing")} className="label-text text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium btn-shadow hover:btn-shadow-hover transition-all duration-300"
          >
            Start a Project
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;