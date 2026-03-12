import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "Portrait Retouching & Headshots",
    description: "Flawless skin work, dodge & burn, and subtle enhancements that preserve your subject's natural look while delivering magazine-quality results.",
    items: ["Skin smoothing & blemish removal", "Dodge & burn contouring", "Eye & teeth enhancement", "Hair cleanup"],
  },
  {
    title: "Wedding & Event Photo Editing",
    description: "Consistent, cinematic color grading across your entire wedding gallery. Every image matched, every moment perfected.",
    items: ["Full gallery color grading", "Exposure & white balance correction", "Batch processing for 500+ images", "Cinematic film-style looks"],
  },
  {
    title: "Product Photography",
    description: "Clean, precise edits that make your products shine. Perfect for e-commerce catalogs and marketing materials.",
    items: ["Background removal & replacement", "Color accuracy for e-commerce", "Shadow & reflection work", "Catalog-ready output"],
  },
  {
    title: "Color Correction & Lighting",
    description: "Precise color grading and lighting adjustments that bring out the best in any photograph, from landscapes to studio shots.",
    items: ["Advanced color grading", "Exposure & tonal adjustments", "White balance correction", "HDR blending"],
  },
  {
    title: "Object & Person Removal",
    description: "Seamless cleanup of unwanted elements. Background distractions, photobombers, or clutter—gone without a trace.",
    items: ["Object removal & cleanup", "Person removal", "Background replacement", "Compositing & blending"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24">
              <span className="label-text text-muted-foreground block mb-4">Services</span>
              <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                Everything your images need.
              </h2>
              <p className="text-muted-foreground max-w-[40ch]">
                Professional editing services tailored to photographers, brands, and individuals who demand precision.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded flex items-center justify-center bg-accent shrink-0">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
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
