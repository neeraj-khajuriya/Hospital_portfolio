import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-slate-50 overflow-hidden pt-20"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span
                className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium uppercase tracking-widest mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="hero-badge"
              >
                Award-Winning Healthcare
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-heading"
              >
                Advanced Care,{' '}
                <span className="text-teal-700">Human Touch</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="hero-description"
            >
              World-class medical expertise meets compassionate care in the heart of the city.
              Experience healthcare that puts you first with state-of-the-art facilities and
              dedicated specialists.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToAppointment}
                className="group bg-teal-700 text-white hover:bg-teal-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2 active:scale-95"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-book-appointment-btn"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={scrollToContact}
                className="bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200 transition-all duration-300 rounded-full px-8 py-4 text-lg font-medium active:scale-95"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-learn-more-btn"
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              <div className="flex items-center space-x-3" data-testid="stat-emergency">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    24/7
                  </p>
                  <p className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Emergency Care
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3" data-testid="stat-specialists">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    50+
                  </p>
                  <p className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Specialists
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3" data-testid="stat-accreditation">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    NABH
                  </p>
                  <p className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Accredited
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-testid="hero-main-image"
              >
                <img
                  src="https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3IlMjBnbGFzcyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzAyMjUzODN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Modern Hospital Exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center"
                data-testid="hero-badge-24-7"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  24/7 Care
                </h3>
                <p className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Always Here
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="col-span-1 bg-teal-700 p-6 rounded-2xl shadow-sm flex flex-col justify-center"
                data-testid="hero-badge-rating"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Top Rated
                </h3>
                <p className="text-sm text-teal-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                  4.9/5 Rating
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;