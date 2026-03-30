import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Smile, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "cleaning",
      title: "Routine Checkup & Cleaning",
      desc: "Preventive care is the foundation of a healthy smile. Professional scaling, polishing, and comprehensive exam.",
      icon: <Stethoscope className="w-10 h-10 text-primary-500" />,
      features: ["Plaque removal", "Digital X-Rays", "Fluoride treatment"]
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      desc: "Professional whitening treatments that remove deep stains and dramatically brighten your smile in one visit.",
      icon: <Sparkles className="w-10 h-10 text-primary-500" />,
      features: ["Laser whitening", "Take-home kits", "Desensitizing care"]
    },
    {
      id: "braces",
      title: "Orthodontics & Braces",
      desc: "Correct crooked teeth and misaligned bites with our advanced orthodontic solutions for all ages.",
      icon: <Smile className="w-10 h-10 text-primary-500" />,
      features: ["Clear aligners", "Traditional metal braces", "Retainers"]
    },
    {
      id: "implants",
      title: "Dental Implants",
      desc: "Permanent, natural-looking tooth replacements that restore both function and aesthetics seamlessly.",
      icon: <ShieldAlert className="w-10 h-10 text-primary-500" />,
      features: ["Single implants", "All-on-4 dentures", "Bone grafting"]
    },
    {
      id: "emergency",
      title: "Emergency Care",
      desc: "Immediate relief for severe pain, knocked-out teeth, or sudden injuries. Available 24/7.",
      icon: <ShieldAlert className="w-10 h-10 text-red-500" />,
      features: ["Pain management", "Emergency extractions", "Crown repair"]
    }
  ];

  return (
    <div className="pt-16 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Our Dental Services
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From routine checkups to complex restorational procedures, we provide comprehensive care under one roof.</p>
        </div>

        <div className="space-y-24">
          {services.map((svc, index) => (
            <motion.div 
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-[400px] flex items-center justify-center">
                  {/* Decorative background circle */}
                  <div className={`absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full opacity-20 ${svc.id === 'emergency' ? 'bg-red-300' : 'bg-primary-300'}`}></div>
                  
                  {/* Image placeholder for actual clinical photos */}
                  {index === 0 && <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80" alt="Cleaning" className="absolute inset-0 w-full h-full object-cover" />}
                  {index === 1 && <img src="https://images.unsplash.com/photo-1590634610419-8664fd6045d6?auto=format&fit=crop&w=800&q=80" alt="Whitening" className="absolute inset-0 w-full h-full object-cover" />}
                  {index === 2 && <img src="https://images.unsplash.com/photo-1560965000-848e029f6d6c?auto=format&fit=crop&w=800&q=80" alt="Braces" className="absolute inset-0 w-full h-full object-cover" />}
                  {index === 3 && <img src="https://images.unsplash.com/photo-1491438590914-b4a11c8dcaeb?auto=format&fit=crop&w=800&q=80" alt="Implants" className="absolute inset-0 w-full h-full object-cover" />}
                  {index === 4 && <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80" alt="Emergency" className="absolute inset-0 w-full h-full object-cover" />}
                </div>
              </div>

              <div className="flex-1 w-full space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-2xl ${svc.id === 'emergency' ? 'bg-red-50' : 'bg-primary-50'} shadow-sm`}>
                    {svc.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{svc.title}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{svc.desc}</p>
                <ul className="space-y-3 pt-4">
                  {svc.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 font-medium">
                      <span className={`w-2 h-2 rounded-full mr-3 ${svc.id === 'emergency' ? 'bg-red-500' : 'bg-primary-500'}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Link 
                    to={`/appointment?service=${svc.id}`} 
                    className={`inline-block font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ${
                      svc.id === 'emergency' 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    Book {svc.id === 'emergency' ? 'Immediately' : 'This Service'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
