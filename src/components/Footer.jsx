import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <HeartPulse className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white tracking-tight">SmileCare</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing premium dental care for families and professionals. Your confident smile is our top priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/appointment" className="hover:text-primary-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 shrink-0" />
                <span>123 Medical Drive, Health Park<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span>hello@smilecare.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Business Hours</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-primary-500 font-medium">Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} SmileCare Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
