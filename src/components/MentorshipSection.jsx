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
        className="relative z-10 container mx-auto max-w-3xl"
      >
        <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-10 leading-snug shadow-sm">
          I pride myself on changing lives for my mentees. Let’s scale your business and turn you into the operator you’re
          meant to be
        </h2>
        <Button href="#" variant="white">
          Learn From David
        </Button>
      </motion.div>
    </section>
  );
};

export default MentorshipSection;
