import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:5000/api/appointments';

const Appointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultService = queryParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    date: '',
    time: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await axios.post(API_URL, formData);
      if (res.data.success) {
        setStatus({ type: 'success', message: 'Appointment booked successfully! Our team will contact you shortly.' });
        setFormData({
          name: '', email: '', phone: '', service: '', date: '', time: '', message: ''
        });
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { value: 'cleaning', label: 'Routine Checkup & Cleaning' },
    { value: 'whitening', label: 'Teeth Whitening' },
    { value: 'braces', label: 'Orthodontics & Braces' },
    { value: 'implants', label: 'Dental Implants' },
    { value: 'emergency', label: 'Emergency Care' },
    { value: 'other', label: 'Other' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-primary-600 px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">Book an Appointment</h1>
            <p className="text-primary-100 max-w-2xl mx-auto relative z-10 text-lg">
              Take the first step towards a healthier, brighter smile. Fill out the form below to secure your spot.
            </p>
          </div>

          <div className="p-8 md:p-12">
            
            {status.type === 'success' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-5 bg-green-50 rounded-2xl flex items-start gap-4 border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-green-800 font-bold mb-1">Booking Confirmed!</h3>
                  <p className="text-green-700">{status.message}</p>
                </div>
              </motion.div>
            )}

            {status.type === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-5 bg-red-50 rounded-2xl flex items-start gap-4 border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-800 font-bold mb-1">Booking Failed</h3>
                  <p className="text-red-700">{status.message}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Visit</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="date" 
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none bg-white"
                    >
                      <option value="" disabled>Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
                  <textarea 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none resize-none"
                    placeholder="Any specific symptoms or requests?"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full btn-primary text-xl py-4 flex justify-center items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  ) : "Confirm Appointment"}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                  By booking, you agree to our cancellation policy.
                </p>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Appointment;
