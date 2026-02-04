import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Heart, Brain, Bone, Baby, Activity, Ambulance } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DepartmentsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = [
        {
            "id": 1,
            "name": "Cardiology",
            "description": "Comprehensive heart care with advanced diagnostic and treatment facilities",
            "icon": "Heart"
        },
        {
            "id": 2,
            "name": "Neurology",
            "description": "Expert care for brain and nervous system disorders",
            "icon": "Brain"
        },
        {
            "id": 3,
            "name": "Orthopedics",
            "description": "Advanced bone and joint care with surgical excellence",
            "icon": "Bone"
        },
        {
            "id": 4,
            "name": "Pediatrics",
            "description": "Specialized healthcare for infants, children, and adolescents",
            "icon": "Baby"
        },
        {
            "id": 5,
            "name": "Oncology",
            "description": "Comprehensive cancer care with latest treatment protocols",
            "icon": "Radiation"
        },
        {
            "id": 6,
            "name": "Emergency",
            "description": "24/7 emergency services with immediate critical care",
            "icon": "Ambulance"
        }
    ]

        setDepartments(response);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  const iconMap = {
    Heart: Heart,
    Brain: Brain,
    Bone: Bone,
    Baby: Baby,
    Radiation: Activity,
    Ambulance: Ambulance,
  };

  return (
    <section id="departments" className="py-24 lg:py-32 bg-slate-50" ref={ref}>
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
            data-testid="departments-badge"
          >
            Our Specialties
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="departments-heading"
          >
            Comprehensive Care Departments
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="departments-description"
          >
            Our multi-specialty hospital offers a wide range of medical services with dedicated
            departments staffed by experienced specialists and equipped with advanced technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => {
            const IconComponent = iconMap[dept.icon] || Heart;
            const isLarge = index === 0 || index === 1;
            
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  isLarge ? 'md:col-span-2' : 'md:col-span-1'
                } bg-white hover:shadow-xl transition-all duration-300 border border-slate-100`}
                data-testid={`department-card-${dept.name.toLowerCase().replace(' ', '-')}`}
              >
                <div className={`p-8 ${isLarge ? 'min-h-[280px]' : 'min-h-[240px]'} flex flex-col justify-between`}>
                  <div>
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-slate-900 mb-3"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {dept.name}
                    </h3>
                    <p
                      className="text-slate-600 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {dept.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const element = document.getElementById('appointment');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-6 text-teal-700 font-semibold hover:text-teal-800 flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-200"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`book-${dept.name.toLowerCase().replace(' ', '-')}-btn`}
                  >
                    <span>Book Consultation</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;