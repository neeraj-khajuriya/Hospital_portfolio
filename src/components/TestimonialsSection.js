import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'The care I received at MediCare Plus was exceptional. The doctors took time to explain everything and the staff was incredibly compassionate. I felt truly cared for.',
    },
    {
      name: 'Robert Thompson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'After my surgery, the post-operative care was outstanding. The entire medical team was professional and attentive. I would highly recommend this hospital to anyone.',
    },
    {
      name: 'Maria Garcia',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'From the moment I walked in, I was impressed by the cleanliness and modern facilities. The doctors are highly skilled and the nurses are angels. Thank you for taking care of my family.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50" ref={ref}>
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
            data-testid="testimonials-badge"
          >
            Patient Stories
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="testimonials-heading"
          >
            What Our Patients Say
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="testimonials-description"
          >
            Don't just take our word for it. Here's what our patients have to say about their
            experience with MediCare Plus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="relative bg-slate-50 p-10 rounded-3xl border border-slate-100"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-12 h-12 text-teal-200" />
              </div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p
                  className="text-slate-700 leading-relaxed mb-6 relative z-10"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-teal-100"
                  />
                  <div>
                    <h4
                      className="font-bold text-slate-900"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-sm text-slate-600"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;