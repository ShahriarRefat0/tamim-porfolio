import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaTiktok, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { TbBrandFiverr } from 'react-icons/tb';

const SOCIAL_LINKS = [
  { Icon: FaYoutube, href: "https://www.youtube.com/@shahrieranjumshakib8418" },
  { Icon: FaWhatsapp, href: "https://wa.me/+8801962165254" },
  { Icon: FaFacebookF, href: "https://www.facebook.com/Shakibcrit" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/shahrier-anjum-shakib/" },
  { Icon: TbBrandFiverr, href: "https://www.fiverr.com/shahrieranjum/set-qualified-appointments-and-close-sales-for-your-business" }
];

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

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          className="font-display font-bold text-lg tracking-wider uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Shakib
        </motion.div>

        {/* Desktop Menu Button */}
        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-display text-sm font-semibold tracking-wide border-b-2 border-transparent hover:border-white transition-colors uppercase focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            {SOCIAL_LINKS.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
            href="https://drive.google.com/file/d/1dQ-Oubf9XohI7wJO7OTK9XCQ3Yy-A_WD/view?ts=6953753f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hidden lg:inline-block text-xs font-bold uppercase tracking-wider bg-black/20 hover:bg-black/30 px-4 py-2 rounded transition"
          >
            <span className="flex items-center gap-2">Resume <MdDownload className="text-sm" /></span>
          </motion.a>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-primary-dark/95 backdrop-blur-md shadow-xl border-t border-white/10 p-8 flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div className="flex flex-col space-y-6 mb-8 md:mb-0">
            <button onClick={() => scrollToSection('about')} className="text-left font-display text-2xl font-bold tracking-wide hover:text-gray-300 transition">About Me</button>
            <button onClick={() => scrollToSection('projects')} className="text-left font-display text-2xl font-bold tracking-wide hover:text-gray-300 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-left font-display text-2xl font-bold tracking-wide hover:text-gray-300 transition">Contact</button>
          </div>

          <div className="flex flex-col space-y-4 md:items-end">
            <div className="flex space-x-6 text-xl">
              {SOCIAL_LINKS.map(({ Icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4 uppercase tracking-widest">Follow Me</p>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
