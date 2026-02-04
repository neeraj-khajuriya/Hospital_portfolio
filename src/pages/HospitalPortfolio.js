import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DepartmentsSection from '@/components/DepartmentsSection';
import DoctorsSection from '@/components/DoctorsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import AppointmentSection from '@/components/AppointmentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const HospitalPortfolio = () => {
  return (
    <div className="relative bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <DoctorsSection />
      <FacilitiesSection />
      <AppointmentSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default HospitalPortfolio;