import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide accessible, high-quality healthcare that improves the well-being of our community.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted healthcare provider, setting new standards in patient care and medical excellence.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Compassion, integrity, excellence, and innovation guide every decision we make.',
    },
    {
      icon: Award,
      title: 'Accreditation',
      description: 'NABH and JCI accredited with international quality standards and protocols.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white" ref={ref}>
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
            data-testid="about-badge"
          >
            About MediCare Plus
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="about-heading"
          >
            Patient-First Healthcare
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="about-description"
          >
            For over 25 years, MediCare Plus has been at the forefront of medical innovation,
            combining cutting-edge technology with compassionate care. Our commitment to excellence
            has made us a trusted name in healthcare across the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300"
              data-testid={`about-card-${value.title.toLowerCase()}`}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3
                className="text-xl font-bold text-slate-900 mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {value.title}
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-lg" data-testid="about-facility-image">
            <img
              src="https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGludGVyaW9yJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHx8fHwxNzcwMjI1MzkxfDA&ixlib=rb-4.1.0&q=85"
              alt="Hospital Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3
              className="text-3xl font-bold text-slate-900"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="about-commitment-heading"
            >
              Our Commitment to Excellence
            </h3>
            <p
              className="text-slate-600 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We believe that every patient deserves personalized attention and world-class treatment.
              Our multidisciplinary team of healthcare professionals works together to ensure the best
              possible outcomes for every individual who walks through our doors.
            </p>
            <ul className="space-y-3">
              {[
                'State-of-the-art medical equipment',
                'Experienced and caring medical staff',
                'Patient-centered approach to care',
                'Continuous quality improvement programs',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3"
                  data-testid={`commitment-item-${index}`}
                >
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                  </div>
                  <span className="text-slate-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;