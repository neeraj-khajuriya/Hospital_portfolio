import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Calendar, User, Mail, Phone, Stethoscope, Clock } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AppointmentSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    patient_name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    preferred_date: '',
    preferred_time: '',
    reason: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Emergency'];
  const doctors = [
    'Dr. Sarah Mitchell',
    'Dr. Michael Chen',
    'Dr. Emily Rodriguez',
    'Dr. James Wilson',
    'Dr. Priya Sharma',
    'Dr. Robert Taylor',
  ];
  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/appointments`, formData);
      if (response.data) {
        toast.success('Appointment booked successfully! We will contact you soon.');
        setFormData({
          patient_name: '',
          email: '',
          phone: '',
          department: '',
          doctor: '',
          preferred_date: '',
          preferred_time: '',
          reason: '',
        });
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-24 lg:py-32 bg-white" ref={ref}>
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
            data-testid="appointment-badge"
          >
            Book Your Visit
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="appointment-heading"
          >
            Schedule an Appointment
          </h2>
          <p
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="appointment-description"
          >
            Take the first step towards better health. Book your appointment with our specialists today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="appointment-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="patient_name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="patient_name"
                      name="patient_name"
                      value={formData.patient_name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="Enter your full name"
                      data-testid="input-patient-name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="+1 (555) 000-0000"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Department *
                  </label>
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200 appearance-none cursor-pointer"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid="select-department"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="doctor"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Preferred Doctor *
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200 appearance-none cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="select-doctor"
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferred_date"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="date"
                      id="preferred_date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid="input-date"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="preferred_time"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      id="preferred_time"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200 appearance-none cursor-pointer"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid="select-time"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Reason for Visit (Optional)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-xl transition-all duration-200 resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Please describe your symptoms or reason for visit..."
                  data-testid="textarea-reason"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-700 text-white hover:bg-teal-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="submit-appointment-btn"
              >
                {isSubmitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentSection;