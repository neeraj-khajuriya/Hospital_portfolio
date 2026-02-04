import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Healthcare Boulevard, Medical District, New York, NY 10001',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@medicareplus.com',
      link: 'mailto:info@medicareplus.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Emergency: 24/7 | OPD: Mon-Sat 9AM-6PM',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white" ref={ref}>
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
            data-testid="contact-badge"
          >
            Get In Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="contact-heading"
          >
            Contact Us
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="contact-description"
          >
            Have questions or need assistance? Our team is here to help. Reach out to us and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3
              className="text-2xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                  data-testid={`contact-info-${info.title.toLowerCase()}`}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-slate-900 mb-1"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-600 hover:text-teal-700 transition-colors duration-200"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl h-80 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215470874341!2d-73.98931368459395!3d40.75889797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1649876543210!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
                data-testid="google-map"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Your full name"
                    data-testid="input-contact-name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="your@email.com"
                      data-testid="input-contact-email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="+1 (555) 000-0000"
                      data-testid="input-contact-phone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="How can we help?"
                    data-testid="input-contact-subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200 resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Tell us more about your inquiry..."
                    data-testid="textarea-contact-message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-700 text-white hover:bg-teal-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="submit-contact-btn"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;