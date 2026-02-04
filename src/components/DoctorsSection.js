import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Calendar, Award } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DoctorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = [
        {
            "id": 1,
            "name": "Dr. Sarah Mitchell",
            "specialty": "Cardiology",
            "qualification": "MD, FACC",
            "experience": "15+ years",
            "image": "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHN0ZXRob3Njb3BlJTIwZnJpZW5kbHl8ZW58MHx8fHwxNzcwMjI1Mzg2fDA&ixlib=rb-4.1.0&q=85",
            "available_days": "Mon, Wed, Fri"
        },
        {
            "id": 2,
            "name": "Dr. Michael Chen",
            "specialty": "Neurology",
            "qualification": "MD, PhD",
            "experience": "12+ years",
            "image": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
            "available_days": "Tue, Thu, Sat"
        },
        {
            "id": 3,
            "name": "Dr. Emily Rodriguez",
            "specialty": "Pediatrics",
            "qualification": "MD, FAAP",
            "experience": "10+ years",
            "image": "https://images.unsplash.com/photo-1614579093335-b6ab37ddaace?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHN0ZXRob3Njb3BlJTIwZnJpZW5kbHl8ZW58MHx8fHwxNzcwMjI1Mzg2fDA&ixlib=rb-4.1.0&q=85",
            "available_days": "Mon, Tue, Thu"
        },
        {
            "id": 4,
            "name": "Dr. James Wilson",
            "specialty": "Orthopedics",
            "qualification": "MD, FAAOS",
            "experience": "18+ years",
            "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
            "available_days": "Wed, Fri, Sat"
        },
        {
            "id": 5,
            "name": "Dr. Priya Sharma",
            "specialty": "Oncology",
            "qualification": "MD, DM",
            "experience": "14+ years",
            "image": "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
            "available_days": "Mon, Wed, Thu"
        },
        {
            "id": 6,
            "name": "Dr. Robert Taylor",
            "specialty": "Emergency Medicine",
            "qualification": "MD, FACEP",
            "experience": "20+ years",
            "image": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
            "available_days": "24/7 Emergency"
        }
    ]
        setDoctors(response);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-white" ref={ref}>
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
            data-testid="doctors-badge"
          >
            Meet Our Team
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="doctors-heading"
          >
            Expert Medical Professionals
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="doctors-description"
          >
            Our team of highly qualified doctors brings decades of combined experience and
            specialized expertise to provide you with the best possible care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:-translate-y-1"
              data-testid={`doctor-card-${doctor.id}`}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {doctor.name}
                </h3>
                <p
                  className="text-teal-700 font-semibold mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {doctor.specialty}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{doctor.qualification}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>Available: {doctor.available_days}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {doctor.experience} of experience
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById('appointment');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-teal-700 text-white py-3 rounded-full hover:bg-teal-800 transition-colors duration-200 font-semibold"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`book-doctor-${doctor.id}-btn`}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;