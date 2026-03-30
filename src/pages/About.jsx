import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 border-l-4 border-primary-500 pl-4">Our Story</h1>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010 by Dr. Emily Chen, SmileCare began with a simple vision: to create a dental practice where patients feel completely at ease. We believe that a trip to the dentist shouldn't be stressful, which is why we've designed our clinic to feel more like a spa than a medical office.
            </p>
            <p className="text-lg text-gray-600">
              Over the past decade, we've grown into a multi-specialty team of dental professionals dedicated to providing comprehensive, state-of-the-art care. From routine cleanings to complex restorative work, we treat every patient with the same level of compassion and expertise.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Clinic interior" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Doctor Profile */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Specialists</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our team consists of highly skilled professionals who are passionate about their craft and your comfort.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Emily Chen", spec: "Lead Dentist & Founder", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80", edu: "DDS, Harvard Univ." },
              { name: "Dr. James Wilson", spec: "Orthodontist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80", edu: "MS, UCLA" },
              { name: "Dr. Sarah Patel", spec: "Cosmetic Specialist", img: "https://images.unsplash.com/photo-1594824436951-7f12bc41484b?auto=format&fit=crop&w=500&q=80", edu: "DDS, NYU" }
            ].map((doc, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden text-center group"
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-20 transition duration-300 z-10"></div>
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{doc.spec}</p>
                  <p className="text-sm text-gray-500">{doc.edu}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-primary-50 py-16 px-6 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Accreditations & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-500">
            {/* Placeholder logo circles */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md text-primary-600 font-bold text-xl">ADA</div>
              <span className="text-sm mt-3 font-medium">American Dental Association</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md text-primary-600 font-bold text-xl">ISO</div>
              <span className="text-sm mt-3 font-medium">ISO 9001 Certified Health</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md text-primary-600 font-bold text-xl">AAO</div>
              <span className="text-sm mt-3 font-medium">Assoc. of Orthodontists</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
