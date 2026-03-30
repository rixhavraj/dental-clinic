import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star, CalendarHeart, ShieldCheck, Clock } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Dental Clinic" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6">
                Premium Dental Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Your Smile is Our <span className="text-primary-600">Masterpiece</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Experience world-class dental care in a relaxing environment. We bring beautiful, healthy smiles to families and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment" className="btn-primary text-center">
                  Book an Appointment
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Explore Services
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-500">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-gray-600 font-medium whitespace-nowrap">Trusted by 2,000+ patients</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-primary-50 rounded-3xl transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Dentist treating patient" 
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 glassmorphism p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Certified</p>
                  <p className="font-bold text-gray-900">Expert Doctors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <CalendarHeart className="w-8 h-8 text-primary-500" />, title: 'Easy Booking', desc: 'Schedule your visit online anytime' },
              { icon: <ShieldCheck className="w-8 h-8 text-primary-500" />, title: 'Top Specialists', desc: 'Highly qualified dental professionals' },
              { icon: <Clock className="w-8 h-8 text-primary-500" />, title: 'Emergency Care', desc: '24/7 emergency dental services' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-4 card-hover"
              >
                <div className="bg-primary-50 p-3 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Comprehensive Dental Care</h2>
            <p className="section-subtitle">We offer a wide range of services to keep your smile healthy and beautiful using state-of-the-art technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1598256989800-fea5a19553b9?auto=format&fit=crop&w=600&q=80", title: "General Dentistry", desc: "Routine checkups, cleanings, and preventive care for the whole family." },
              { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80", title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile makeovers to boost your confidence." },
              { img: "https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?auto=format&fit=crop&w=600&q=80", title: "Orthodontics", desc: "Traditional braces and clear aligners for perfectly straight teeth." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to="/services" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span>&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real stories from people who transformed their smiles with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Software Engineer", review: "The staff is incredibly friendly and professional. I had a painless root canal and felt so relaxed throughout the process." },
              { name: "Michael Chang", role: "Business Owner", review: "I avoided the dentist for years due to anxiety, but SmileCare changed that. Their modern approach and gentle care are unmatched." },
              { name: "Emily Roberts", role: "Teacher", review: "Got my teeth whitened here before my wedding. The results were astounding! Highly recommend their cosmetic services." }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 relative"
              >
                <div className="absolute -top-4 right-8 text-6xl text-primary-200 opacity-50 font-serif">"</div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 mb-6 italic z-10 relative">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards perfect dental health. New patients get a complimentary whitening kit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-gray-50 transition transform hover:-translate-y-1">
              Book Appointment Now
            </Link>
            <Link to="/contact" className="border-2 border-primary-400 text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-500 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
