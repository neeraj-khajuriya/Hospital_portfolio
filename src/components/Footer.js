import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H+</span>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                MediCare Plus
              </span>
            </div>
            <p
              className="text-slate-400 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Providing world-class healthcare services with compassion and excellence since 1998.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Departments', 'Doctors', 'Facilities', 'Gallery', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Emergency Care',
                'Outpatient Services',
                'Diagnostic Imaging',
                'Laboratory Services',
                'Surgery',
                'Health Checkup',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span
                  className="text-slate-400"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  123 Healthcare Boulevard, Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:info@medicareplus.com"
                  className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  info@medicareplus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p
              className="text-slate-400 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © 2026 MediCare Plus Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;