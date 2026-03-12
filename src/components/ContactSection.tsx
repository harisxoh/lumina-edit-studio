import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="text-center mb-12"
        >
          <span className="label-text text-accent block mb-4">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">Start a Project</h2>
          <p className="text-muted-foreground">
            Tell me about your project and I'll get back to you within 24 hours with a quote.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 rounded-lg px-4 bg-background text-foreground placeholder:text-muted-foreground input-shadow focus:input-focus-shadow focus:outline-none transition-shadow duration-300 w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 rounded-lg px-4 bg-background text-foreground placeholder:text-muted-foreground input-shadow focus:input-focus-shadow focus:outline-none transition-shadow duration-300 w-full"
            />
          </div>
          <select
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            required
            className="h-12 rounded-lg px-4 bg-background text-foreground input-shadow focus:input-focus-shadow focus:outline-none transition-shadow duration-300 w-full appearance-none"
          >
            <option value="" disabled>Project type</option>
            <option>Portrait Retouching</option>
            <option>Wedding Photo Editing</option>
            <option>Product Photography</option>
            <option>Color Correction</option>
            <option>Background Removal</option>
            <option>Object/Person Removal</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Tell me about your project..."
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="rounded-lg px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground input-shadow focus:input-focus-shadow focus:outline-none transition-shadow duration-300 w-full resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="h-12 px-8 rounded-lg bg-accent text-accent-foreground font-medium btn-shadow hover:btn-shadow-hover transition-shadow duration-300 w-full"
          >
            Send Request
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
