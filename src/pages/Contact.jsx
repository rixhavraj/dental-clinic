import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us via phone, email, or by filling out the form below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full"><MapPin className="text-primary-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clinic Location</h4>
                    <p className="text-gray-600">123 Medical Drive, Health Park<br/>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full"><Phone className="text-primary-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-red-500 font-medium">Emergency: +1 (555) 911-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full"><Mail className="text-primary-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@smilecare.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full"><Clock className="text-primary-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1693512345678!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and our staff will reply within 24 hours.</p>
            
            {status && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 font-medium">
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm outline-none resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
