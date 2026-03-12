import React from "react";  
import Navbar from "@/components/Navbar";  
import HeroSection from "@/components/HeroSection";  
import GallerySection from "@/components/GallerySection";  
import ServicesSection from "@/components/ServicesSection";  
import PricingSection from "@/components/PricingSection";  
import SupportSection from "@/components/SupportSection";  
import TestimonialsSection from "@/components/TestimonialsSection";  
import ContactSection from "@/components/ContactSection";  
import Footer from "@/components/Footer";  
import ParticlesComponent from "@/components/Particles";  

const Index = () => {  
  return (  
    <div className="min-h-screen bg-background">  
      <ParticlesComponent /> {/* Add particles as background */}  
      <Navbar />  
      <HeroSection />  
      <GallerySection />  
      <ServicesSection />  
      <PricingSection />  
      <SupportSection />  
      <TestimonialsSection />  
      <ContactSection />  
      <Footer />  
    </div>  
  );  
};  

export default Index;