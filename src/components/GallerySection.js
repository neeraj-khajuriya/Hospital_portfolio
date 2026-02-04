import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?w=800&q=80',
      alt: 'Hospital Exterior',
      span: 'md:col-span-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?w=600&q=80',
      alt: 'Reception Area',
      span: 'md:col-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
      alt: 'ICU Ward',
      span: 'md:col-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1766299892683-d50398e31823?w=800&q=80',
      alt: 'Medical Equipment',
      span: 'md:col-span-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=600&q=80',
      alt: 'Laboratory',
      span: 'md:col-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
      alt: 'Pharmacy',
      span: 'md:col-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white" ref={ref}>
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
            data-testid="gallery-badge"
          >
            Virtual Tour
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="gallery-heading"
          >
            Explore Our Facilities
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="gallery-description"
          >
            Take a visual tour of our modern hospital facilities and see why patients choose
            MediCare Plus for their healthcare needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.span} h-64`}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span
                  className="text-white font-semibold text-lg"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;