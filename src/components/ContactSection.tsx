"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  project: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("contact_requests")
        .insert([
          { 
            name: data.name, 
            email: data.email, 
            project_type: data.project, 
            message: data.message 
          }
        ]);

      if (error) throw error;

      toast.success("Message sent! I'll get back to you within 24 hours.");
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-background/80 border-white/10 focus:border-accent focus:ring-accent/20 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email address" {...field} className="bg-background/80 border-white/10 focus:border-accent focus:ring-accent/20 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/80 border-white/10 focus:border-accent focus:ring-accent/20 h-12">
                          <SelectValue placeholder="Project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Portrait Retouching">Portrait Retouching</SelectItem>
                        <SelectItem value="Wedding Photo Editing">Wedding Photo Editing</SelectItem>
                        <SelectItem value="Product Photography">Product Photography</SelectItem>
                        <SelectItem value="Color Correction">Color Correction</SelectItem>
                        <SelectItem value="Background Removal">Background Removal</SelectItem>
                        <SelectItem value="Object/Person Removal">Object/Person Removal</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="bg-background/80 border-white/10 focus:border-accent focus:ring-accent/20 min-h-[150px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 px-8 rounded-lg bg-accent text-accent-foreground font-medium btn-shadow hover:btn-shadow-hover transition-shadow duration-300 w-full flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmitting ? "Sending..." : "Send Request"}
            </motion.button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;