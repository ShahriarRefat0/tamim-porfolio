import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import servicesData from '../data/services.json';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col group"
            >
              {/* Card Content Layout */}
              <div className="flex p-6 gap-5 items-start">
                {/* Image/Thumbnail */}
                <div className="w-28 h-20 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Rating (Always 5 stars) */}
                  <div className="flex items-center text-sm mb-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white mr-1">5.0</span>
                    <span className="text-gray-500">({service.reviews > 0 ? service.reviews : Math.floor(Math.random() * 10) + 1})</span>
                  </div>
                </div>
              </div>

             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
