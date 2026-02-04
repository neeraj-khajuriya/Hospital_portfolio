import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Stethoscope, FlaskConical, Pill, Bed, Syringe } from 'lucide-react';

const FacilitiesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = [
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art hospital building with spacious patient rooms and advanced ventilation systems.',
      image: 'https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?w=600&q=80',
    },
    {
      icon: Stethoscope,
      title: 'Advanced Diagnostics',
      description: '24/7 diagnostic services including CT, MRI, X-Ray, Ultrasound, and comprehensive lab testing.',
      image: 'https://images.unsplash.com/photo-1766299892683-d50398e31823?w=600&q=80',
    },
    {
      icon: FlaskConical,
      title: 'Accredited Laboratory',
      description: 'NABL certified laboratory with automated analyzers for accurate and quick test results.',
      image: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=600&q=80',
    },
    {
      icon: Pill,
      title: '24/7 Pharmacy',
      description: 'Round-the-clock pharmacy services with all essential medicines and healthcare products.',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
    },
    {
      icon: Bed,
      title: 'ICU & Critical Care',
      description: 'Advanced intensive care units with continuous monitoring and ventilator support.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    },
    {
      icon: Syringe,
      title: 'Operation Theaters',
      description: 'Modular OTs with laminar flow and advanced surgical equipment for complex procedures.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    },
  ];

  return (
    <section id="facilities" className="py-24 lg:py-32 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium uppercase tracking-widest mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="facilities-badge"
          >
            World-Class Infrastructure
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="facilities-heading"
          >
            State-of-the-Art Facilities
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="facilities-description"
          >
            Our hospital is equipped with the latest medical technology and infrastructure to provide
            comprehensive healthcare services under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
              data-testid={`facility-card-${facility.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-teal-700" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {facility.title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;