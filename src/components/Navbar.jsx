import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${isScrolled ? 'bg-primary shadow-md' : 'bg-transparent shadow-none'}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display font-bold text-lg tracking-wider uppercase"
        >
          David Choi
        </motion.div>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="font-display text-sm font-semibold tracking-wide border-b-2 border-transparent hover:border-white transition-colors uppercase">
            Menu
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            {[FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-gray-200 transition"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            href="#"
            className="hidden lg:inline-block text-xs font-bold uppercase tracking-wider bg-black/20 hover:bg-black/30 px-4 py-2 rounded transition"
          >
            Be Mentored by David
          </motion.a>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-primary-dark p-4 overflow-hidden"
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="block font-display text-sm font-semibold tracking-wide hover:text-gray-200">Menu</a>
            <a href="#" className="block font-display text-sm font-semibold tracking-wide hover:text-gray-200">About</a>
            <div className="flex space-x-4 pt-4 border-t border-white/10">
              <a href="#" className="hover:text-gray-200 transition"><FaYoutube /></a>
              <a href="#" className="hover:text-gray-200 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-200 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-200 transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-gray-200 transition"><FaTiktok /></a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
