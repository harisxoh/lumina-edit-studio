import { motion } from "framer-motion";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioProduct from "@/assets/portfolio-product.jpg";
import portfolioHeadshot from "@/assets/portfolio-headshot.jpg";
import portfolioLandscape from "@/assets/portfolio-landscape.jpg";
import portfolioFood from "@/assets/portfolio-food.jpg";

const images = [
  { src: portfolioWedding, category: "Wedding", span: "md:col-span-7 md:row-span-2" },
  { src: portfolioPortrait, category: "Portrait", span: "md:col-span-5" },
  { src: portfolioProduct, category: "Product", span: "md:col-span-5" },
  { src: portfolioHeadshot, category: "Headshot", span: "md:col-span-7" },
  { src: portfolioLandscape, category: "Landscape", span: "md:col-span-7" },
  { src: portfolioFood, category: "Product", span: "md:col-span-5" },
];

const GallerySection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="label-text text-muted-foreground">Selected Work</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className={`relative group overflow-hidden rounded-lg ${img.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                className="w-full h-full"
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full h-full object-cover image-outline will-change-transform"
                  style={{ minHeight: "280px" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="label-text bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-md">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
