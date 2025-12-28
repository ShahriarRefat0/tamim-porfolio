import React from 'react';
import { motion } from 'framer-motion';
import SoftwareCard from './SoftwareCard';
import Button from './Button';

const BioSection = () => {
  return (
    <section className="relative py-20 faded-city-bg">
      <div className="relative z-10 container mx-auto px-4 max-w-4xl flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary overflow-hidden shadow-xl mb-10 -mt-32 md:-mt-40 bg-white relative"
        >
          <img
            alt="David Choi Portrait"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEIFzWb0kUAR83x3_UbPkPOWPApgPA2uwCNd3TLd9ab54K5fnXmwazDVkFVAdd47OE8skIC48ixglQvxsnzudYrU9KJwD6PSrvWhEXYyKNVWdLw7FRVViJmv20UfNC39GXVXz69eJg_zJ62u-u2Cz960CFo17uR7pWi62JR_dNRAk1zMfpfCpYRzo0tXmebDBOb8IHmMBP3vDtHIwKhRgZM6KdUoadt3hTT7PvVDBmZkS601zDzvLsj_xJRvNeSIGop23lq2-ctR7i"
          />
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 leading-snug"
        >
          Hi, I’m David Choi. I’m a real estate investor with over <br className="hidden md:block" /> $60,000,000 in AUM, and
          I’m here to help you scale <br className="hidden md:block" /> your business to 8 Figures.
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-3xl space-y-6 mb-16 text-sm md:text-base leading-relaxed"
        >
          <p>
            David Choi is a real estate investor, entrepreneur, and private equity fund manager. Over the last decade,
            David has been a key member in acquiring, financing, and managing over $4 Billion AUM. As the CEO and Founder
            of Leverage Companies and various subsidiaries, David currently owns over $60MM in assets and is on pace to
            deploy over $800MM in both debt and equity into the SFR and small to mid-cap multifamily space in 2025.
          </p>
          <p>
            In his spare time David has founded Leverage Cares, a philanthropic company focused on bringing financial
            literacy to the city of Newark. He also teaches Real Estate Finance as an adjunct professor at Rutgers
            Business School.
          </p>
          <p>
            David graduated Cum Laude from Rutgers Business School with a degree in Finance with a concentration in Real
            Estate.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SoftwareCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button href="#">
            See What Tools I Use
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default BioSection;
