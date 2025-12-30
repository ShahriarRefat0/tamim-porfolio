import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const MentorshipSection = () => {
  return (
    <section className="relative city-bg-overlay py-24 text-center px-4 overflow-hidden">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto max-w-5xl text-left"
      >
        <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-10 leading-snug shadow-sm">
          I help businesses with product or service marketing, generate qualified leads, set appointments, provide customer support, and close sales through professional telemarketing and communications.
          I deliver results through clear communication and a customer-first approach. Let's grow your business together!
        </h2>
        <Button href="#" variant="white">
          Learn From Shakib
        </Button>
      </motion.div>
    </section>
  );
};

export default MentorshipSection;
